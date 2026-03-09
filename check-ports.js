const { NodeSSH } = require('node-ssh');
const ssh = new NodeSSH();

async function checkPorts() {
    await ssh.connect({ host: '147.93.105.187', username: 'root', password: 'gr00tVPS@123' });
    const res = await ssh.execCommand('. ~/.nvm/nvm.sh && pm2 jlist');
    try {
        const list = JSON.parse(res.stdout);
        list.forEach(app => {
            console.log(`Name: ${app.name}, Status: ${app.pm2_env.status}, PORT var: ${app.pm2_env.PORT}, PM2_PORT var: ${app.pm2_env.pm2_env?.PORT}`);
        });
    } catch (e) {
        console.log("Could not parse JSON. Raw output:");
        console.log(res.stdout);
    }

    const ssRes = await ssh.execCommand('ss -tulpn | grep LISTEN');
    console.log('Listening Ports:');
    console.log(ssRes.stdout);

    process.exit(0);
}
checkPorts();
