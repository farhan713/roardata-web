const { NodeSSH } = require('node-ssh');
const path = require('path');
const ssh = new NodeSSH();

async function run() {
    try {
        await ssh.connect({ host: '147.93.105.187', username: 'root', password: 'gr00tVPS@123' });
        console.log('Connected to VPS.');

        const filesToUpload = [
            { local: 'prisma/schema.prisma', remote: '/var/www/roardata/prisma/schema.prisma' },
            { local: 'src/app/admin/faqs/actions.ts', remote: '/var/www/roardata/src/app/admin/faqs/actions.ts' },
            { local: 'src/app/admin/faqs/page.tsx', remote: '/var/www/roardata/src/app/admin/faqs/page.tsx' },
            { local: 'src/app/admin/faqs/[id]/page.tsx', remote: '/var/www/roardata/src/app/admin/faqs/[id]/page.tsx' },
            { local: 'src/app/admin/faqs/[id]/FAQFormClient.tsx', remote: '/var/www/roardata/src/app/admin/faqs/[id]/FAQFormClient.tsx' },
            { local: 'src/app/industries/[slug]/page.tsx', remote: '/var/www/roardata/src/app/industries/[slug]/page.tsx' },
        ];

        console.log('1. Uploading modified frontend and backend pages...');
        for (const file of filesToUpload) {
            const localPath = path.join(__dirname, file.local);
            console.log(`Uploading ${file.local}...`);
            await ssh.putFile(localPath, file.remote);
        }
        console.log('Upload complete.');

        console.log('1.5. Updating Prisma schema on VPS...');
        const dbCmd = `
          . ~/.nvm/nvm.sh &&
          cd /var/www/roardata &&
          npx prisma db push --accept-data-loss && npx prisma generate
        `;
        const dbRes = await ssh.execCommand(dbCmd);
        console.log('DB CODE:', dbRes.code);
        if (dbRes.code !== 0) {
            console.log('DB STDOUT:', dbRes.stdout.slice(-1500));
            console.error('DB STDERR:', dbRes.stderr.slice(-1500));
            process.exit(1);
        }

        console.log('2. Rebuilding Next.js internally...');
        const buildCmd = `
          . ~/.nvm/nvm.sh && 
          cd /var/www/roardata && 
          npx prisma generate &&
          rm -rf .next && 
          npx next build
        `;
        const buildRes = await ssh.execCommand(buildCmd);
        console.log('BUILD CODE:', buildRes.code);
        if (buildRes.code !== 0) {
            console.log('BUILD STDOUT:', buildRes.stdout.slice(-1500));
            console.error('BUILD STDERR:', buildRes.stderr.slice(-1500));
            process.exit(1);
        }

        console.log('3. Restarting PM2 roardata...');
        const pm2Res = await ssh.execCommand('. ~/.nvm/nvm.sh && pm2 restart roardata');
        console.log('PM2 CODE:', pm2Res.code);

        process.exit(0);
    } catch (e) {
        console.error('DEPLOYMENT ERROR:', e);
        process.exit(1);
    }
}
run();
