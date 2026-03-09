const { NodeSSH } = require('node-ssh');
const path = require('path');
const ssh = new NodeSSH();

async function run() {
    try {
        await ssh.connect({ host: '147.93.105.187', username: 'root', password: 'gr00tVPS@123' });

        console.log('Uploading repair-record.js...');
        await ssh.putFile(path.join(__dirname, 'repair-record.js'), '/var/www/roardata/repair-record.js');
        console.log('Upload complete.');

        console.log('Running checking script...');
        const res = await ssh.execCommand(`. ~/.nvm/nvm.sh && cd /var/www/roardata && node repair-record.js`);

        console.log('STDOUT:', res.stdout);
        if (res.stderr) console.error('STDERR:', res.stderr);

        process.exit(0);
    } catch (e) {
        console.error('ERROR:', e);
        process.exit(1);
    }
}
run();
