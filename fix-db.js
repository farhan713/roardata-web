const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const re = await prisma.industry.findUnique({ where: { slug: 'real-estate' } });
    console.log('--- KPI DATA ---');
    console.log(re.kpis);
    console.log('--- TYPE ---');
    console.log(typeof re.kpis);
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
