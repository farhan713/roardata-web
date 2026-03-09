const { NodeSSH } = require('node-ssh');
const path = require('path');
const ssh = new NodeSSH();

async function run() {
    try {
        await ssh.connect({ host: '147.93.105.187', username: 'root', password: 'gr00tVPS@123' });
        console.log('Connected to VPS.');

        const localPath = path.join(__dirname, 'migrate-db.js');
        const remotePath = '/var/www/roardata/migrate-db.js';

        console.log('Uploading migrate-db.js...');
        await ssh.putFile(localPath, remotePath);
        console.log('Upload complete.');

        console.log('Running migration on VPS...');
        const cmd = `. ~/.nvm/nvm.sh && cd /var/www/roardata && node migrate-db.js`;
        const res = await ssh.execCommand(cmd);

        console.log('STDOUT:', res.stdout);
        if (res.stderr) {
            console.error('STDERR:', res.stderr);
        }

        process.exit(0);
    } catch (e) {
        console.error('ERROR:', e);
        process.exit(1);
    }
}
run();
