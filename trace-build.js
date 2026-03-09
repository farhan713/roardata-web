const { NodeSSH } = require('node-ssh');
const ssh = new NodeSSH();

async function traceBuild() {
    await ssh.connect({ host: '147.93.105.187', username: 'root', password: 'gr00tVPS@123' });
    console.log('Running npx next build again to catch the actual error...');
    const res = await ssh.execCommand('. ~/.nvm/nvm.sh && cd /var/www/roardata && npx next build > build_trace.log 2>&1');

    const trace = await ssh.execCommand('tail -n 60 /var/www/roardata/build_trace.log');
    console.log('BUILD TRACE LOG:');
    console.log(trace.stdout);
    process.exit(0);
}
traceBuild();
