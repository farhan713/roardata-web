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
        console.log('Connected! Navigating to /var/www/roardata and running build...');

        // We run the build and restart pm2
        const result = await ssh.execCommand('export PATH=$PATH:/root/.nvm/versions/node/v22.14.0/bin && npm run build && pm2 restart all', {
            cwd: '/var/www/roardata',
            stream: 'stdout',
            options: { pty: true }
        });

        console.log('STDOUT: ' + result.stdout);
        console.log('STDERR: ' + result.stderr);

        if (result.code === 0) {
            console.log('Successfully rebuilt and restarted the application on the VPS.');
        } else {
            console.error('Failed to deploy. Exit code: ' + result.code);
        }

    } catch (err) {
        console.error('Error connecting or executing commands:', err);
    } finally {
        ssh.dispose();
    }
}

deploy();
