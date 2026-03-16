const { NodeSSH } = require('node-ssh');
const ssh = new NodeSSH();
async function run() {
    try {
        await ssh.connect({ host: '147.93.105.187', username: 'root', password: 'gr00tVPS@123' });
        console.log("Connected.");
        const r1 = await ssh.execCommand('ls -la /var/www/roardata');
        console.log("Directory:", r1.stdout);
        const r2 = await ssh.execCommand('ps aux | grep pm2');
        console.log("Processes:", r2.stdout);
        const r3 = await ssh.execCommand('find / -name pm2 2>/dev/null');
        console.log("pm2 path:", r3.stdout);
        const r4 = await ssh.execCommand('find / -name npm 2>/dev/null | grep bin');
        console.log("npm path:", r4.stdout);
    } catch(e) {
        console.error(e);
    } finally {
        ssh.dispose();
    }
}
run();
