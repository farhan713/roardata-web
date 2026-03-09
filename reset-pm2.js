const { NodeSSH } = require('node-ssh');
const ssh = new NodeSSH();

async function resetPM2() {
    await ssh.connect({ host: '147.93.105.187', username: 'root', password: 'gr00tVPS@123' });
    console.log('Resetting PM2...');
    const res = await ssh.execCommand('. ~/.nvm/nvm.sh && pm2 stop all && pm2 delete all && cd /var/www/roardata && pm2 start npm --name "roardata" -- run start && pm2 save');
    console.log('STDOUT:', res.stdout);
    console.log('STDERR:', res.stderr);
    process.exit(0);
}
resetPM2();
