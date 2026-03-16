const { NodeSSH } = require('node-ssh');
const fs = require('fs');

const ssh = new NodeSSH();

async function fetchEnv() {
    try {
        await ssh.connect({
            host: '147.93.105.187',
            username: 'root',
            password: 'gr00tVPS@123'
        });
        
        // Let's try to find the .env file
        const result = await ssh.execCommand('cat /var/www/roardata/.env');
        if (result.stdout && !result.stdout.includes('No such file or directory')) {
            fs.writeFileSync('.env', result.stdout);
            console.log('Successfully fetched .env from /var/www/roardata');
        } else {
            const result2 = await ssh.execCommand('cat /var/www/roardata/roardata-web/.env');
            if (result2.stdout && !result2.stdout.includes('No such file or directory')) {
                fs.writeFileSync('.env', result2.stdout);
                console.log('Successfully fetched .env from /var/www/roardata/roardata-web');
            } else {
                const search = await ssh.execCommand('find /var/www -name ".env" | head -n 1');
                if (search.stdout) {
                    const res = await ssh.execCommand(`cat ${search.stdout.trim()}`);
                    if (res.stdout) {
                        fs.writeFileSync('.env', res.stdout);
                        console.log(`Successfully fetched .env from ${search.stdout.trim()}`);
                    }
                } else {
                    console.log('Could not find .env file anywhere in /var/www');
                }
            }
        }
        process.exit(0);
    } catch (error) {
        console.error('Failed:', error);
        process.exit(1);
    }
}
fetchEnv();
