const { NodeSSH } = require('node-ssh');
const ssh = new NodeSSH();

async function run() {
    try {
        await ssh.connect({ host: '147.93.105.187', username: 'root', password: 'gr00tVPS@123' });

        console.log('Restoring from dump.pm2.bak...');
        const res = await ssh.execCommand('. ~/.nvm/nvm.sh && cp ~/.pm2/dump.pm2.bak ~/.pm2/dump.pm2 && pm2 resurrect');
        console.log(res.stdout);

        // Ensure roardata is still running/restarted
        console.log('\nRestarting roardata to ensure it is included...');
        await ssh.execCommand('. ~/.nvm/nvm.sh && pm2 start npm --name "roardata" -- start -- -H 127.0.0.1 -p 3000 || pm2 restart roardata');

        console.log('\nFinal PM2 List:');
        const listRes = await ssh.execCommand('. ~/.nvm/nvm.sh && pm2 list');
        console.log(listRes.stdout);

        // Save the combined state!
        await ssh.execCommand('. ~/.nvm/nvm.sh && pm2 save');
        console.log('Saved PM2 state.');

        process.exit(0);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}
run();
