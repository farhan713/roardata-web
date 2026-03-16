const { NodeSSH } = require('node-ssh');

const ssh = new NodeSSH();

async function getPM2Details() {
    try {
        await ssh.connect({
            host: '147.93.105.187',
            username: 'root',
            password: 'gr00tVPS@123'
        });
        
        console.log('--- PM2 PROCESS DETAILS ---\n');
        
        const pm2Dump = await ssh.execCommand('pm2 jlist');
        console.log('Raw output start:');
        console.log(pm2Dump.stdout.substring(0, 500));
        console.log('...');
        
        // Find json array start
        const startIndex = pm2Dump.stdout.indexOf('[');
        if (startIndex !== -1) {
            const jsonStr = pm2Dump.stdout.substring(startIndex);
            try {
                const processes = JSON.parse(jsonStr);
                processes.forEach(proc => {
                    console.log(`Name: ${proc.name}`);
                    console.log(`Path: ${proc.pm2_env.pm_cwd}`);
                    console.log('---');
                });
            } catch (e) {
                console.log('Failed to parse slice.');
            }
        }

        process.exit(0);
    } catch (error) {
        console.error('Failed:', error);
        process.exit(1);
    }
}
getPM2Details();
