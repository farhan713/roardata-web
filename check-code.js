const { NodeSSH } = require('node-ssh');

const ssh = new NodeSSH();

async function checkVPSCode() {
    try {
        await ssh.connect({
            host: '147.93.105.187',
            username: 'root',
            password: 'gr00tVPS@123'
        });
        
        console.log('--- COMPARING VPS DEPLOYMENT ---\n');
        
        // Let's check the date of the app build
        const stat = await ssh.execCommand('stat /var/www/roardata/.next/BUILD_ID');
        console.log('VPS Build Date:');
        console.log(stat.stdout || 'Build ID not found');

        // Check package.json to see the exact code that was deployed
        const pkg = await ssh.execCommand('cat /var/www/roardata/package.json');
        if (pkg.stdout) {
            try {
                const p = JSON.parse(pkg.stdout);
                console.log(`\nVPS package.json version: ${p.version}`);
            } catch (e) {
                console.log('Could not parse package.json');
            }
        }
        
        // Since there is no git repo (.git), let's check one of the files we just changed if any,
        // or check the layout file where SEO changes were typically made
        const layout = await ssh.execCommand('grep -i "canonical" /var/www/roardata/src/app/layout.tsx');
        console.log('\nVPS Canonical implementation in layout.tsx:');
        console.log(layout.stdout || layout.stderr);

        process.exit(0);
    } catch (error) {
        console.error('Failed:', error);
        process.exit(1);
    }
}
checkVPSCode();
