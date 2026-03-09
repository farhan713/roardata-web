const { NodeSSH } = require('node-ssh');
const ssh = new NodeSSH();

async function rebind() {
    await ssh.connect({ host: '147.93.105.187', username: 'root', password: 'gr00tVPS@123' });
    console.log('Rebinding PM2 port and host...');
    const res = await ssh.execCommand('. ~/.nvm/nvm.sh && cd /var/www/roardata && pm2 delete roardata && npx cross-env PORT=3000 HOSTNAME=127.0.0.1 pm2 start npm --name "roardata" -- run start');
    console.log(res.stdout);

    // Wait 5 seconds for Next.js to boot
    await new Promise(r => setTimeout(r, 5000));

    const ss = await ssh.execCommand('ss -tulpn | grep 3000');
    console.log('PORT 3000 STATUS:');
    console.log(ss.stdout);
    process.exit(0);
}
rebind();
