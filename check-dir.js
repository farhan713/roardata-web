const { NodeSSH } = require('node-ssh');

const ssh = new NodeSSH();

async function checkDeployFolder() {
    try {
        await ssh.connect({
            host: '147.93.105.187',
            username: 'root',
            password: 'gr00tVPS@123'
        });
        
        console.log('--- CHECKING /var/www/roardata ---\n');
        
        // Find recent files
        const ls = await ssh.execCommand('ls -la /var/www/roardata');
        console.log('Files in /var/www/roardata:');
        console.log(ls.stdout);
        
        console.log('\n--- Checking deployment log or app files ---');
        const nextFolder = await ssh.execCommand('ls -la /var/www/roardata/.next 2>/dev/null || echo "No .next folder"');
        console.log('.next folder info:');
        console.log(nextFolder.stdout);

        process.exit(0);
    } catch (error) {
        console.error('Failed:', error);
        process.exit(1);
    }
}
checkDeployFolder();
