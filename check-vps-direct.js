const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function run() {
    const cs = await prisma.caseStudy.findUnique({ where: { slug: 'engineering-project' } });
    console.log("BODY_SECTIONS:");
    console.log(cs.bodySections);
}

run().catch(console.error).finally(() => prisma.$disconnect());
