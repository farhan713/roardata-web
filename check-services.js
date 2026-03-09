const { NodeSSH } = require('node-ssh');
const ssh = new NodeSSH();

async function run() {
    await ssh.connect({ host: '147.93.105.187', username: 'root', password: 'gr00tVPS@123' });

    const scriptContent = `
    const { PrismaClient } = require('@prisma/client');
    const prisma = new PrismaClient();
    async function run() {
      const svcs = await prisma.service.findMany({ select: { slug: true } });
      console.log('SERVICES:', JSON.stringify(svcs));
      process.exit(0);
    }
    run();
  `;

    await ssh.execCommand(`cat << 'EOF' > /var/www/roardata/check-services.js\n${scriptContent}\nEOF`);
    const res = await ssh.execCommand('. ~/.nvm/nvm.sh && cd /var/www/roardata && node check-services.js');
    console.log(res.stdout);
    console.error(res.stderr);
    process.exit(0);
}
run();
