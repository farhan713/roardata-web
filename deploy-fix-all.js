const { NodeSSH } = require('node-ssh');
const path = require('path');
const ssh = new NodeSSH();

async function run() {
    try {
        await ssh.connect({ host: '147.93.105.187', username: 'root', password: 'gr00tVPS@123' });

        console.log('1. Uploading local page.tsx ...');
        const localPath = path.join(__dirname, 'src', 'app', 'page.tsx');
        const remotePath = '/var/www/roardata/src/app/page.tsx';
        await ssh.putFile(localPath, remotePath);

        console.log('2. Running DB fix script ...');
        const dbScript = `
      const { PrismaClient } = require('@prisma/client');
      const prisma = new PrismaClient();
      async function main() {
        const target = await prisma.service.findFirst({ where: { slug: 'power-bi-consulting' } });
        if (target) {
          await prisma.service.update({
            where: { id: target.id },
            data: { slug: 'power-bi-consulting-australia' }
          });
          console.log('Updated service slug successfully.');
        } else {
          console.log('Service power-bi-consulting not found. Maybe already updated?');
        }
      }
      main().catch(console.error).finally(() => prisma.$disconnect());
    `;
        await ssh.execCommand(`cat << 'EOF' > /var/www/roardata/fix-db.js\n${dbScript}\nEOF`);
        const dbRes = await ssh.execCommand('. ~/.nvm/nvm.sh && cd /var/www/roardata && node fix-db.js');
        console.log('DB FIX:', dbRes.stdout);

        console.log('3. Running Next.js build natively ...');
        const cmd = `
      . ~/.nvm/nvm.sh && 
      cd /var/www/roardata && 
      rm -rf .next && 
      npx next build
    `;
        const buildRes = await ssh.execCommand(cmd);
        console.log('BUILD CODE:', buildRes.code);
        if (buildRes.code !== 0) {
            console.log('BUILD STDOUT:', buildRes.stdout.slice(-1500));
            console.error('BUILD STDERR:', buildRes.stderr.slice(-1500));
            process.exit(1);
        }

        console.log('4. Restarting PM2 ...');
        const pm2Res = await ssh.execCommand('. ~/.nvm/nvm.sh && pm2 restart roardata');
        console.log('PM2 CODE:', pm2Res.code);

        process.exit(0);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}
run();
