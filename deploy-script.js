const { NodeSSH } = require('node-ssh');
const ssh = new NodeSSH();

async function deploy() {
    try {
        console.log('Connecting to VPS...');
        await ssh.connect({
            host: '147.93.105.187',
            username: 'root',
            password: 'gr00tVPS@123'
        });
        console.log('Connected!');

        console.log('Uploading roardata-web-deploy-new.tar.gz...');
        await ssh.putFile('./roardata-web-deploy-new.tar.gz', '/var/www/roardata/roardata-web-deploy-new.tar.gz');
        console.log('Upload complete!');

        console.log('Extracting files and restarting PM2...');
        const result = await ssh.execCommand('cd /var/www/roardata && tar -xzf roardata-web-deploy-new.tar.gz && npm install --production && pm2 restart all');
        console.log('STDOUT:', result.stdout);
        console.log('STDERR:', result.stderr);

        console.log('Deployment completely finished!');
        process.exit(0);
    } catch (error) {
        console.error('Deployment failed:', error);
        process.exit(1);
    }
}

deploy();
