const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const prisma = new PrismaClient();

async function main() {
    const industries = await prisma.industry.findMany({ select: { id: true, name: true, slug: true } });
    fs.writeFileSync('industries-list.json', JSON.stringify(industries, null, 2), 'utf8');
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());
