const { NodeSSH } = require('node-ssh');
const ssh = new NodeSSH();

async function getLog() {
    await ssh.connect({ host: '147.93.105.187', username: 'root', password: 'gr00tVPS@123' });
    await ssh.getFile('./build_trace.log', '/var/www/roardata/build_trace.log');
    process.exit(0);
}
getLog();
