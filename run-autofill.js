const { NodeSSH } = require('node-ssh');
const path = require('path');
const ssh = new NodeSSH();

async function run() {
    try {
        await ssh.connect({ host: '147.93.105.187', username: 'root', password: 'gr00tVPS@123' });
        console.log('Connected to VPS.');

        const scriptPath = path.join(__dirname, 'autofill-seo.js');
        const remoteScriptPath = '/var/www/roardata/autofill-seo.js';

        console.log('Uploading autofill-seo.js to VPS...');
        await ssh.putFile(scriptPath, remoteScriptPath);

        console.log('Running autofill-seo.js on VPS...');
        const command = `
          . ~/.nvm/nvm.sh &&
          cd /var/www/roardata &&
          node autofill-seo.js
        `;

        const result = await ssh.execCommand(command);
        console.log('OUT:', result.stdout);
        if (result.stderr) {
            console.error('SERVER ERR:', result.stderr);
        }

        process.exit(0);
    } catch (error) {
        console.error('Error during remote execution:', error);
        process.exit(1);
    }
}

run();
