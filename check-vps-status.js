const { NodeSSH } = require('node-ssh');

const ssh = new NodeSSH();

async function checkVPS() {
    try {
        await ssh.connect({
            host: '147.93.105.187',
            username: 'root',
            password: 'gr00tVPS@123'
        });
        
        console.log('--- Checking VPS Deployment Status ---\n');

        // Check git status in /var/www/roardata (or wherever it's deployed)
        const dirsToCheck = ['/var/www/roardata', '/var/www/roardata/roardata-web'];
        
        for (const dir of dirsToCheck) {
            console.log(`Checking directory: ${dir}`);
            const isGit = await ssh.execCommand(`cd ${dir} && git status`);
            if (!isGit.stderr.includes('not a git repository')) {
                const log = await ssh.execCommand(`cd ${dir} && git log -n 1`);
                console.log('Latest Commit:\n', log.stdout || log.stderr);
            } else {
                console.log('Not a git repository or directory does not exist.');
            }
            console.log('---');
        }

        // Check PM2 status to see what's running
        console.log('\nPM2 Status:');
        const pm2Status = await ssh.execCommand('pm2 status');
        console.log(pm2Status.stdout);

        process.exit(0);
    } catch (error) {
        console.error('Failed:', error);
        process.exit(1);
    }
}
checkVPS();
