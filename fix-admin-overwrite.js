const { NodeSSH } = require('node-ssh');
const path = require('path');
const ssh = new NodeSSH();

async function run() {
    try {
        await ssh.connect({ host: '147.93.105.187', username: 'root', password: 'gr00tVPS@123' });

        const scriptContent = `
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

function unescapeHtml(text) {
    if (!text) return text;
    return text
        .replace(/&quot;/g, '"')
        .replace(/&nbsp;/g, ' ')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&');
}

async function run() {
    console.log("Fixing engineering-project...");
    const cs = await prisma.caseStudy.findUnique({ where: { slug: 'engineering-project' } });
    if (!cs) return;
    
    let raw = cs.bodySections || '';
    
    // Aggressive cleanup for this specific string
    let cleanStr = raw.trim();
    if (cleanStr.includes('[') && cleanStr.includes(']')) {
        // Find the boundary of the json array
        const start = cleanStr.indexOf('[');
        const end = cleanStr.lastIndexOf(']');
        let jsonStr = cleanStr.substring(start, end + 1);
        
        // Remove all HTML tags inside the JSON string 
        jsonStr = jsonStr.replace(/<[^>]*>?/gm, '');
        jsonStr = unescapeHtml(jsonStr);
        
        try {
            const arr = JSON.parse(jsonStr);
            if (Array.isArray(arr)) {
                const newHtml = arr.map(block => \`<p>\${block.content || ''}</p>\`).join('');
                await prisma.caseStudy.update({
                    where: { id: cs.id },
                    data: { bodySections: newHtml }
                });
                console.log("Successfully fixed and updated to pure HTML.");
            }
        } catch(e) {
            console.error("Parse failed on robust string:", e.message);
        }
    } else {
        console.log("No JSON brackets found, already clean.");
    }
}
run().catch(console.error).finally(() => prisma.$disconnect());
    `;

        await ssh.execCommand(`echo "${scriptContent.replace(/"/g, '\\"').replace(/\$/g, '\\$')}" > /var/www/roardata/repair-record.js`);
        const res = await ssh.execCommand(`. ~/.nvm/nvm.sh && cd /var/www/roardata && node repair-record.js`);

        console.log('STDOUT:', res.stdout);
        if (res.stderr) console.error('STDERR:', res.stderr);

        process.exit(0);
    } catch (e) {
        console.error('ERROR:', e);
        process.exit(1);
    }
}
run();
