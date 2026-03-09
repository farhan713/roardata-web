const { NodeSSH } = require('node-ssh');
const ssh = new NodeSSH();

async function fixBuild() {
    try {
        await ssh.connect({ host: '147.93.105.187', username: 'root', password: 'gr00tVPS@123' });

        console.log('Stopping PM2 and cleaning old build...');
        await ssh.execCommand('. ~/.nvm/nvm.sh && pm2 stop all && cd /var/www/roardata && rm -rf node_modules .next');

        console.log('Running npm install (fetching Linux binaries)...');
        const npmInstall = await ssh.execCommand('. ~/.nvm/nvm.sh && cd /var/www/roardata && npm install --production=false');
        console.log('NPM INSTALL STDOUT:', npmInstall.stdout.slice(-500));
        console.log('NPM INSTALL STDERR:', npmInstall.stderr.slice(-500));

        console.log('Generating Prisma Client...');
        const prismaGen = await ssh.execCommand('. ~/.nvm/nvm.sh && cd /var/www/roardata && npx prisma generate');
        console.log('PRISMA STDOUT:', prismaGen.stdout);

        console.log('Building Next.js Application natively...');
        const nextBuild = await ssh.execCommand('. ~/.nvm/nvm.sh && cd /var/www/roardata && npx next build');
        console.log('BUILD STDOUT:', nextBuild.stdout.slice(-1000));
        console.log('BUILD STDERR:', nextBuild.stderr.slice(-1000));

        console.log('Restarting PM2...');
        const pm2Start = await ssh.execCommand('. ~/.nvm/nvm.sh && pm2 restart roardata');
        console.log('PM2 STDOUT:', pm2Start.stdout);

        console.log('All Done!');
        process.exit(0);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}

fixBuild();
