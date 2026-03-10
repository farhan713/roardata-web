const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

function truncate(str, max) {
    if (!str) return '';
    const cleanStr = str.replace(/<[^>]*>?/gm, ''); // remove html tags just in case
    return cleanStr.length > max ? cleanStr.substring(0, max - 3) + '...' : cleanStr;
}

function generateSeoData(titleStr, descStr, baseUrlPath, slug) {
    const metaTitle = truncate(titleStr, 60);
    const metaDescription = truncate(descStr, 155);
    const canonicalUrl = `https://roardata.com.au/${baseUrlPath}${slug}`;
    const robotsMeta = 'index, follow';

    return {
        metaTitle,
        metaDescription,
        canonicalUrl,
        robotsMeta,
        ogTitle: metaTitle,
        ogDescription: metaDescription,
        twitterTitle: metaTitle,
        twitterDescription: metaDescription
    };
}

async function main() {
    console.log("Starting SEO autofill script...");

    // 1. Services
    const services = await prisma.service.findMany();
    let serviceCount = 0;
    for (const s of services) {
        if (!s.metaTitle || !s.canonicalUrl) {
            const seo = generateSeoData(
                s.heroHeadline || s.name || s.slug,
                s.heroSubheadline || '',
                '',
                s.slug
            );
            await prisma.service.update({
                where: { id: s.id },
                data: {
                    metaTitle: s.metaTitle || seo.metaTitle,
                    metaDescription: s.metaDescription || seo.metaDescription,
                    canonicalUrl: s.canonicalUrl || seo.canonicalUrl,
                    robotsMeta: s.robotsMeta || seo.robotsMeta,
                    ogTitle: s.ogTitle || seo.ogTitle,
                    ogDescription: s.ogDescription || seo.ogDescription,
                    twitterTitle: s.twitterTitle || seo.twitterTitle,
                    twitterDescription: s.twitterDescription || seo.twitterDescription
                }
            });
            serviceCount++;
        }
    }
    console.log(`Updated ${serviceCount} Services.`);

    // 2. Cities
    const cities = await prisma.city.findMany();
    let cityCount = 0;
    for (const c of cities) {
        if (!c.metaTitle || !c.canonicalUrl) {
            const seo = generateSeoData(
                c.heroHeadline || c.cityName || c.slug,
                c.heroSubheadline || c.uniqueLocalCopy || '',
                '',
                c.slug
            );
            await prisma.city.update({
                where: { id: c.id },
                data: {
                    metaTitle: c.metaTitle || seo.metaTitle,
                    metaDescription: c.metaDescription || seo.metaDescription,
                    canonicalUrl: c.canonicalUrl || seo.canonicalUrl,
                    robotsMeta: c.robotsMeta || seo.robotsMeta,
                    ogTitle: c.ogTitle || seo.ogTitle,
                    ogDescription: c.ogDescription || seo.ogDescription,
                    twitterTitle: c.twitterTitle || seo.twitterTitle,
                    twitterDescription: c.twitterDescription || seo.twitterDescription
                }
            });
            cityCount++;
        }
    }
    console.log(`Updated ${cityCount} Cities.`);

    // 3. Industries
    const industries = await prisma.industry.findMany();
    let industryCount = 0;
    for (const ind of industries) {
        if (!ind.metaTitle || !ind.canonicalUrl) {
            const seo = generateSeoData(
                `Power BI for ${ind.name} | Roar Data`,
                ind.overview || '',
                'industries/',
                ind.slug
            );
            await prisma.industry.update({
                where: { id: ind.id },
                data: {
                    metaTitle: ind.metaTitle || seo.metaTitle,
                    metaDescription: ind.metaDescription || seo.metaDescription,
                    canonicalUrl: ind.canonicalUrl || seo.canonicalUrl,
                    robotsMeta: ind.robotsMeta || seo.robotsMeta,
                    ogTitle: ind.ogTitle || seo.ogTitle,
                    ogDescription: ind.ogDescription || seo.ogDescription,
                    twitterTitle: ind.twitterTitle || seo.twitterTitle,
                    twitterDescription: ind.twitterDescription || seo.twitterDescription
                }
            });
            industryCount++;
        }
    }
    console.log(`Updated ${industryCount} Industries.`);

    // 4. Case Studies
    const caseStudies = await prisma.caseStudy.findMany();
    let caseStudyCount = 0;
    for (const cs of caseStudies) {
        if (!cs.metaTitle || !cs.canonicalUrl) {
            const tempDesc = cs.metaDescription || cs.title ? `Read our ${cs.title} case study to see how we deliver results.` : '';
            const seo = generateSeoData(
                `${cs.title} | Case Study`,
                tempDesc,
                'case-studies/',
                cs.slug
            );
            await prisma.caseStudy.update({
                where: { id: cs.id },
                data: {
                    metaTitle: cs.metaTitle || seo.metaTitle,
                    metaDescription: cs.metaDescription || seo.metaDescription,
                    canonicalUrl: cs.canonicalUrl || seo.canonicalUrl,
                    robotsMeta: cs.robotsMeta || seo.robotsMeta,
                    ogTitle: cs.ogTitle || seo.ogTitle,
                    ogDescription: cs.ogDescription || seo.ogDescription,
                    twitterTitle: cs.twitterTitle || seo.twitterTitle,
                    twitterDescription: cs.twitterDescription || seo.twitterDescription
                }
            });
            caseStudyCount++;
        }
    }
    console.log(`Updated ${caseStudyCount} Case Studies.`);

    // 5. Insights
    const insights = await prisma.insightArticle.findMany();
    let insightCount = 0;
    for (const ins of insights) {
        if (!ins.metaTitle || !ins.canonicalUrl) {
            const seo = generateSeoData(
                `${ins.title} | Insights`,
                ins.summary || '',
                'insights/',
                ins.slug
            );
            await prisma.insightArticle.update({
                where: { id: ins.id },
                data: {
                    metaTitle: ins.metaTitle || seo.metaTitle,
                    metaDescription: ins.metaDescription || seo.metaDescription,
                    canonicalUrl: ins.canonicalUrl || seo.canonicalUrl,
                    robotsMeta: ins.robotsMeta || seo.robotsMeta,
                    ogTitle: ins.ogTitle || seo.ogTitle,
                    ogDescription: ins.ogDescription || seo.ogDescription,
                    twitterTitle: ins.twitterTitle || seo.twitterTitle,
                    twitterDescription: ins.twitterDescription || seo.twitterDescription
                }
            });
            insightCount++;
        }
    }
    console.log(`Updated ${insightCount} Insights.`);

    console.log("SEO autofill complete.");
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
