const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

function unescapeHtml(text) {
    if (!text) return text;
    return text
        .replace(/&quot;/g, '"')
        .replace(/&nbsp;/g, ' ')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&');
}

async function run() {
    console.log("Fixing engineering-project...");
    const cs = await prisma.caseStudy.findUnique({ where: { slug: 'engineering-project' } });
    if (!cs) return;

    let raw = cs.bodySections || '';
    console.log("OLD DB:", raw.slice(0, 100));

    // Aggressive cleanup for this specific string
    let cleanStr = raw.trim();
    if (cleanStr.includes('[') && cleanStr.includes(']')) {
        // Find the boundary of the json array
        const start = cleanStr.indexOf('[');
        const end = cleanStr.lastIndexOf(']');
        let jsonStr = cleanStr.substring(start, end + 1);

        // Remove all HTML tags inside the JSON string 
        jsonStr = jsonStr.replace(/<[^>]*>?/gm, '');
        jsonStr = unescapeHtml(jsonStr);

        try {
            const arr = JSON.parse(jsonStr);
            if (Array.isArray(arr)) {
                const newHtml = arr.map(block => `<p>${block.content || ''}</p>`).join('');
                await prisma.caseStudy.update({
                    where: { id: cs.id },
                    data: { bodySections: newHtml }
                });
                console.log("Successfully fixed and updated to pure HTML:", newHtml.slice(0, 100));
            }
        } catch (e) {
            console.error("Parse failed on robust string:", e.message);
        }
    } else {
        console.log("No JSON brackets found, already clean.");
    }
}

run().catch(console.error).finally(() => prisma.$disconnect());
