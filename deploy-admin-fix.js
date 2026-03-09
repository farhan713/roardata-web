const { NodeSSH } = require('node-ssh');
const path = require('path');
const ssh = new NodeSSH();

async function run() {
    try {
        await ssh.connect({ host: '147.93.105.187', username: 'root', password: 'gr00tVPS@123' });
        console.log('Connected to VPS.');

        const filesToUpload = [
            { local: 'src/app/admin/services/[id]/ServiceForm.tsx', remote: '/var/www/roardata/src/app/admin/services/[id]/ServiceForm.tsx' },
            { local: 'src/app/admin/case-studies/[id]/CaseStudyFormClient.tsx', remote: '/var/www/roardata/src/app/admin/case-studies/[id]/CaseStudyFormClient.tsx' }
        ];

        console.log('1. Uploading modified admin forms...');
        for (const file of filesToUpload) {
            const localPath = path.join(__dirname, file.local);
            console.log(`Uploading ${file.local}...`);
            await ssh.putFile(localPath, file.remote);
        }
        console.log('Upload complete.');

        console.log('2. Rebuilding Next.js internally...');
        const buildCmd = `
      . ~/.nvm/nvm.sh && 
      cd /var/www/roardata && 
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
