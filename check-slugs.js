const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

async function check() {
    const batches = [];
    for (let i = 1; i <= 5; i++) {
        const batchPath = path.join(__dirname, 'batch-' + i + '.json');
        const data = fs.readFileSync(batchPath, 'utf8');
        batches.push(...JSON.parse(data));
    }
    const existingIndustries = await prisma.industry.findMany({ select: { slug: true } });
    const existingSlugs = existingIndustries.map(e => e.slug);
    
    const missing = batches.filter(b => !existingSlugs.includes(b.slug));
    console.log('Missing slugs from our generated JSON:', missing.map(m => m.slug));
    
    const batchSlugs = batches.map(b => b.slug);
    const notMatchedInDb = existingSlugs.filter(s => !batchSlugs.includes(s));
    console.log('Slugs in DB that we didnt generate JSON for:', notMatchedInDb);
}
check().finally(() => prisma.$disconnect());
