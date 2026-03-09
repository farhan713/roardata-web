const { NodeSSH } = require('node-ssh');
const ssh = new NodeSSH();

async function checkCrashBackground() {
    await ssh.connect({ host: '147.93.105.187', username: 'root', password: 'gr00tVPS@123' });
    console.log('Stopping PM2...');
    await ssh.execCommand('. ~/.nvm/nvm.sh && pm2 stop all');

    console.log('Running npm run start in background...');
    await ssh.execCommand('. ~/.nvm/nvm.sh && cd /var/www/roardata && npx cross-env PORT=3000 nohup npm run start > startup.log 2>&1 &');

    console.log('Waiting 5 seconds for crash to happen...');
    await new Promise(resolve => setTimeout(resolve, 5000));

    const res = await ssh.execCommand('cat /var/www/roardata/startup.log');
    console.log('STARTUP LOG:');
    console.log(res.stdout);
    process.exit(0);
}
checkCrashBackground();
