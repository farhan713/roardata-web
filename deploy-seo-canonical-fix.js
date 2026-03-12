const { NodeSSH } = require('node-ssh');
const path = require('path');
const ssh = new NodeSSH();

async function run() {
    try {
        await ssh.connect({ host: '147.93.105.187', username: 'root', password: 'gr00tVPS@123' });
        console.log('Connected to VPS.');

        const filesToUpload = [
            { local: 'src/app/layout.tsx', remote: '/var/www/roardata/src/app/layout.tsx' },
            { local: 'src/app/page.tsx', remote: '/var/www/roardata/src/app/page.tsx' },
            { local: 'src/app/case-studies/page.tsx', remote: '/var/www/roardata/src/app/case-studies/page.tsx' },
            { local: 'src/app/industries/page.tsx', remote: '/var/www/roardata/src/app/industries/page.tsx' },
            { local: 'src/app/insights/page.tsx', remote: '/var/www/roardata/src/app/insights/page.tsx' },
        ];

        console.log('1. Uploading modified files...');
        for (const file of filesToUpload) {
            const localPath = path.join(__dirname, file.local);
            console.log(`  Uploading ${file.local}...`);
            await ssh.putFile(localPath, file.remote);
        }
        console.log('Upload complete.');

        console.log('2. Rebuilding Next.js on VPS...');
        const buildCmd = `
          . ~/.nvm/nvm.sh && 
          cd /var/www/roardata && 
          rm -rf .next && 
          npx next build
        `;
        const buildRes = await ssh.execCommand(buildCmd);
        console.log('BUILD CODE:', buildRes.code);
        if (buildRes.code !== 0) {
            console.log('BUILD STDOUT:', buildRes.stdout.slice(-2000));
            console.error('BUILD STDERR:', buildRes.stderr.slice(-2000));
            process.exit(1);
        }
        console.log('Build successful.');

        console.log('3. Restarting PM2 roardata...');
        const pm2Res = await ssh.execCommand('. ~/.nvm/nvm.sh && pm2 restart roardata');
        console.log('PM2 CODE:', pm2Res.code);
        console.log('PM2 OUT:', pm2Res.stdout);

        console.log('Deployment complete!');
        process.exit(0);
    } catch (e) {
        console.error('DEPLOYMENT ERROR:', e);
        process.exit(1);
    }
}
run();
