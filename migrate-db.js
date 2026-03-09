const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

function unescapeHtml(text) {
    return text
        .replace(/&quot;/g, '"')
        .replace(/&nbsp;/g, ' ')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&');
}

function extractAndParse(bodyStr) {
    if (!bodyStr) return null;
    let cleanStr = bodyStr.trim();

    // If it was already ruined by Quill saving it as text: <p>[&nbsp;{...}</p>
    if (cleanStr.startsWith('<p>[') || cleanStr.startsWith('<p> [')) {
        // Strip the outer HTML tags to get pure text
        cleanStr = cleanStr.replace(/<[^>]*>?/gm, '');
        cleanStr = unescapeHtml(cleanStr);
    }

    if (cleanStr.startsWith('[')) {
        try {
            const arr = JSON.parse(cleanStr);
            if (Array.isArray(arr)) {
                // Return clean HTML
                return arr.map(block => `<p>${block.content || ''}</p>`).join('');
            }
        } catch (e) {
            console.log("Failed to parse:", cleanStr.slice(0, 50));
        }
    }

    // If it's pure HTML already (no brackets), leave it untouched
    return bodyStr;
}

async function run() {
    console.log("Starting DB migration to pure HTML...");

    const services = await prisma.service.findMany();
    for (const service of services) {
        if (service.bodySections) {
            const newHtml = extractAndParse(service.bodySections);
            if (newHtml !== service.bodySections) {
                console.log(`Updating Service: ${service.slug}`);
                await prisma.service.update({
                    where: { id: service.id },
                    data: { bodySections: newHtml }
                });
            }
        }
    }

    const caseStudies = await prisma.caseStudy.findMany();
    for (const cs of caseStudies) {
        if (cs.bodySections) {
            const newHtml = extractAndParse(cs.bodySections);
            if (newHtml !== cs.bodySections) {
                console.log(`Updating CaseStudy: ${cs.slug}`);
                await prisma.caseStudy.update({
                    where: { id: cs.id },
                    data: { bodySections: newHtml }
                });
            }
        }
    }

    console.log("Migration complete.");
}

run()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
