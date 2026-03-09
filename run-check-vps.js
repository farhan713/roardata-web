const { NodeSSH } = require('node-ssh');
const path = require('path');
const ssh = new NodeSSH();

async function run() {
    try {
        await ssh.connect({ host: '147.93.105.187', username: 'root', password: 'gr00tVPS@123' });

        console.log('Uploading check-vps-direct.js...');
        await ssh.putFile(path.join(__dirname, 'check-vps-direct.js'), '/var/www/roardata/check-vps-direct.js');
        console.log('Upload complete.');

        console.log('Running checking script...');
        const res = await ssh.execCommand(`. ~/.nvm/nvm.sh && cd /var/www/roardata && node check-vps-direct.js`);

        console.log('STDOUT:', res.stdout);
        if (res.stderr) console.error('STDERR:', res.stderr);

        process.exit(0);
    } catch (e) {
        console.error('ERROR:', e);
        process.exit(1);
    }
}
run();
