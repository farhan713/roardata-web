const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

async function updateIndustries() {
  try {
    // Read all batch files
    const batches = [];
    for (let i = 1; i <= 6; i++) {
        const batchPath = path.join(__dirname, `batch-${i}.json`);
        if (fs.existsSync(batchPath)) {
            const data = fs.readFileSync(batchPath, 'utf8');
            batches.push(...JSON.parse(data));
        } else {
             console.warn(`Warning: batch-${i}.json not found.`);
        }
    }

    console.log(`Found ${batches.length} total industry records to update.`);

    // Get all existing industries to match by slug
    const existingIndustries = await prisma.industry.findMany({
        select: { id: true, slug: true, name: true }
    });
    
    let updatedCount = 0;
    let notFoundCount = 0;

    for (const newInd of batches) {
        // Find matching industry in DB
        const match = existingIndustries.find(e => e.slug === newInd.slug);
        
        if (match) {
            console.log(`Updating [${match.slug}]...`);
            await prisma.industry.update({
                where: { id: match.id },
                data: {
                    overview: newInd.overview,
                    whoIsItFor: newInd.whoIsItFor,
                    commonProblems: newInd.commonProblems,
                    useCases: newInd.useCases,
                    kpis: newInd.kpis,
                    dataSources: newInd.dataSources,
                    metaTitle: newInd.metaTitle,
                    metaDescription: newInd.metaDescription,
                    canonicalUrl: newInd.canonicalUrl,
                    robotsMeta: newInd.robotsMeta,
                    ogTitle: newInd.ogTitle,
                    ogDescription: newInd.ogDescription,
                    socialImageAlt: newInd.socialImageAlt,
                    twitterTitle: newInd.twitterTitle,
                    twitterDescription: newInd.twitterDescription,
                    mainImageAlt: newInd.mainImageAlt,
                    structuredData: newInd.structuredData
                }
            });
            updatedCount++;
        } else {
            console.log(`Warning: Could not find industry with slug [${newInd.slug}] in database (Name: ${newInd.name})`);
            notFoundCount++;
        }
    }

    console.log(`\n--- Update Summary ---`);
    console.log(`Total records from batches: ${batches.length}`);
    console.log(`Successfully updated: ${updatedCount}`);
    console.log(`Not found in DB (slug mismatch): ${notFoundCount}`);

  } catch (error) {
    console.error("Error updating industries:", error);
  } finally {
    await prisma.$disconnect();
  }
}

updateIndustries();
