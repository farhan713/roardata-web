const { NodeSSH } = require('node-ssh');
const path = require('path');
const ssh = new NodeSSH();

async function run() {
    try {
        await ssh.connect({ host: '147.93.105.187', username: 'root', password: 'gr00tVPS@123' });

        console.log('1. Uploading components...');
        const localPage = path.join(__dirname, 'src', 'app', 'page.tsx');
        const remotePage = '/var/www/roardata/src/app/page.tsx';
        await ssh.putFile(localPage, remotePage);

        const localComponent = path.join(__dirname, 'src', 'components', 'HomeCaseStudies.tsx');
        const remoteComponent = '/var/www/roardata/src/components/HomeCaseStudies.tsx';
        await ssh.putFile(localComponent, remoteComponent);
        console.log('Upload complete.');

        console.log('2. Rebuilding Next.js natively...');
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

        console.log('3. Restarting PM2 roardata safely...');
        const pm2Res = await ssh.execCommand('. ~/.nvm/nvm.sh && pm2 restart roardata');
        console.log('PM2 CODE:', pm2Res.code);

        process.exit(0);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}
run();
