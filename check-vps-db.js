const { NodeSSH } = require('node-ssh');
const path = require('path');
const ssh = new NodeSSH();

async function run() {
    try {
        await ssh.connect({ host: '147.93.105.187', username: 'root', password: 'gr00tVPS@123' });

        // Create a temporary script to run on VPS
        const scriptContent = `
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function run() {
    const cs = await prisma.caseStudy.findUnique({ where: { slug: 'engineering-project' } });
    console.log(cs.bodySections);
}
run().catch(console.error).finally(() => prisma.$disconnect());
    `;

        await ssh.execCommand(`echo "${scriptContent.replace(/"/g, '\\"')}" > /var/www/roardata/check-db-live.js`);
        const res = await ssh.execCommand(`. ~/.nvm/nvm.sh && cd /var/www/roardata && node check-db-live.js`);

        console.log('VPS DB VALUE:');
        console.log(res.stdout);
        process.exit(0);
    } catch (e) {
        console.error('ERROR:', e);
        process.exit(1);
    }
}
run();
