const { NodeSSH } = require('node-ssh');
const path = require('path');
const ssh = new NodeSSH();

async function run() {
    try {
        await ssh.connect({ host: '147.93.105.187', username: 'root', password: 'gr00tVPS@123' });

        const scriptContent = `
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function run() {
    const cs = await prisma.caseStudy.findUnique({ where: { slug: 'engineering-project' } });
    if (!cs) return;
    
    console.log("=== FULL RECORD START ===");
    console.log(cs.bodySections);
    console.log("=== FULL RECORD END ===");
    console.log("Index of [: ", cs.bodySections.indexOf('['));
    console.log("Index of ]: ", cs.bodySections.lastIndexOf(']'));
}
run().catch(console.error).finally(() => prisma.$disconnect());
    `;

        await ssh.execCommand(`echo "${scriptContent.replace(/"/g, '\\"').replace(/\$/g, '\\$')}" > /var/www/roardata/check-full-record.js`);
        const res = await ssh.execCommand(`. ~/.nvm/nvm.sh && cd /var/www/roardata && node check-full-record.js`);

        console.log(res.stdout);
        process.exit(0);
    } catch (e) {
        process.exit(1);
    }
}
run();
