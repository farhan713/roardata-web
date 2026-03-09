const { NodeSSH } = require('node-ssh');
const ssh = new NodeSSH();

async function check() {
    await ssh.connect({ host: '147.93.105.187', username: 'root', password: 'gr00tVPS@123' });
    const res = await ssh.execCommand('. ~/.nvm/nvm.sh && pm2 restart all');
    console.log('STDOUT:', res.stdout);
    console.log('STDERR:', res.stderr);
    process.exit(0);
}
check();
