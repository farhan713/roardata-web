const { NodeSSH } = require('node-ssh');
const ssh = new NodeSSH();

async function run() {
    try {
        await ssh.connect({ host: '147.93.105.187', username: 'root', password: 'gr00tVPS@123' });

        console.log('Checking PM2 Status:');
        const pm2Res = await ssh.execCommand('. ~/.nvm/nvm.sh && pm2 list');
        console.log(pm2Res.stdout);

        console.log('\nChecking Memory:');
        const freeRes = await ssh.execCommand('free -m');
        console.log(freeRes.stdout);

        // Also check dmesg for OOM killer
        const oomRes = await ssh.execCommand('dmesg -T | grep -i "out of memory" | tail -n 5');
        console.log('\nOOM Killer logs:');
        console.log(oomRes.stdout);

        process.exit(0);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}
run();
