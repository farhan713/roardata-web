const { NodeSSH } = require('node-ssh');
const path = require('path');
const ssh = new NodeSSH();

async function deployFix() {
    try {
        await ssh.connect({ host: '147.93.105.187', username: 'root', password: 'gr00tVPS@123' });

        console.log('Uploading updated page.tsx...');
        const localPath = path.join(__dirname, 'src', 'app', 'industries', '[slug]', 'page.tsx');
        const remotePath = '/var/www/roardata/src/app/industries/[slug]/page.tsx';
        await ssh.putFile(localPath, remotePath);
        console.log('Upload complete.');

        console.log('Running Next.js Build natively...');
        const build = await ssh.execCommand('. ~/.nvm/nvm.sh && cd /var/www/roardata && npx next build');
        console.log('BUILD CODE:', build.code);
        if (build.code !== 0) {
            console.log('BUILD FAILED STDOUT:', build.stdout.slice(-1000));
            console.error('BUILD STDERR:', build.stderr.slice(-1000));
            process.exit(1);
        }
        console.log('Build succeeded!');

        console.log('Restarting PM2 process...');
        const pm2Start = await ssh.execCommand('. ~/.nvm/nvm.sh && pm2 restart roardata');
        console.log('PM2 CODE:', pm2Start.code);

        process.exit(0);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}
deployFix();
