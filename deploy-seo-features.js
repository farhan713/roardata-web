const { NodeSSH } = require('node-ssh');
const path = require('path');
const ssh = new NodeSSH();

async function run() {
    try {
        await ssh.connect({ host: '147.93.105.187', username: 'root', password: 'gr00tVPS@123' });
        console.log('Connected to VPS.');

        const filesToUpload = [
            { local: 'prisma/schema.prisma', remote: '/var/www/roardata/prisma/schema.prisma' },
            { local: 'src/lib/seo-helper.ts', remote: '/var/www/roardata/src/lib/seo-helper.ts' },
            { local: 'src/components/admin/SeoMetadataFields.tsx', remote: '/var/www/roardata/src/components/admin/SeoMetadataFields.tsx' },
            { local: 'src/app/admin/services/actions.ts', remote: '/var/www/roardata/src/app/admin/services/actions.ts' },
            { local: 'src/app/admin/services/[id]/ServiceForm.tsx', remote: '/var/www/roardata/src/app/admin/services/[id]/ServiceForm.tsx' },
            { local: 'src/app/admin/case-studies/actions.ts', remote: '/var/www/roardata/src/app/admin/case-studies/actions.ts' },
            { local: 'src/app/admin/case-studies/[id]/CaseStudyFormClient.tsx', remote: '/var/www/roardata/src/app/admin/case-studies/[id]/CaseStudyFormClient.tsx' },
            { local: 'src/app/admin/cities/actions.ts', remote: '/var/www/roardata/src/app/admin/cities/actions.ts' },
            { local: 'src/app/admin/cities/[id]/CityForm.tsx', remote: '/var/www/roardata/src/app/admin/cities/[id]/CityForm.tsx' },
            { local: 'src/app/admin/industries/actions.ts', remote: '/var/www/roardata/src/app/admin/industries/actions.ts' },
            { local: 'src/app/admin/industries/[id]/IndustryFormClient.tsx', remote: '/var/www/roardata/src/app/admin/industries/[id]/IndustryFormClient.tsx' },
            { local: 'src/app/admin/insights/actions.ts', remote: '/var/www/roardata/src/app/admin/insights/actions.ts' },
            { local: 'src/app/admin/insights/[id]/InsightFormClient.tsx', remote: '/var/www/roardata/src/app/admin/insights/[id]/InsightFormClient.tsx' },
            { local: 'src/app/[slug]/page.tsx', remote: '/var/www/roardata/src/app/[slug]/page.tsx' },
            { local: 'src/app/case-studies/[slug]/page.tsx', remote: '/var/www/roardata/src/app/case-studies/[slug]/page.tsx' },
            { local: 'src/app/industries/[slug]/page.tsx', remote: '/var/www/roardata/src/app/industries/[slug]/page.tsx' },
            { local: 'src/app/insights/[slug]/page.tsx', remote: '/var/www/roardata/src/app/insights/[slug]/page.tsx' }
        ];

        console.log('0.5 Ensure directories exist...');
        await ssh.execCommand('mkdir -p /var/www/roardata/src/components/admin');

        console.log('1. Uploading modified frontend and backend pages...');
        for (const file of filesToUpload) {
            const localPath = path.join(__dirname, file.local);
            console.log(`Uploading ${file.local}...`);
            await ssh.putFile(localPath, file.remote);
        }
        console.log('Upload complete.');

        console.log('1.5. Updating Prisma schema on VPS...');
        const dbCmd = `
          . ~/.nvm/nvm.sh &&
          cd /var/www/roardata &&
          npx prisma db push --accept-data-loss
        `;
        const dbRes = await ssh.execCommand(dbCmd);
        console.log('DB CODE:', dbRes.code);
        if (dbRes.code !== 0) {
            console.log('DB STDOUT:', dbRes.stdout.slice(-1500));
            console.error('DB STDERR:', dbRes.stderr.slice(-1500));
            process.exit(1);
        }

        console.log('2. Rebuilding Next.js internally...');
        const buildCmd = `
          . ~/.nvm/nvm.sh && 
          cd /var/www/roardata && 
          rm -rf .next && 
          npx next build
        `;
        const buildRes = await ssh.execCommand(buildCmd);
        console.log('BUILD CODE:', buildRes.code);
        if (buildRes.code !== 0) {
            console.log('BUILD STDOUT:', buildRes.stdout.slice(-1500));
            console.error('BUILD STDERR:', buildRes.stderr.slice(-1500));
            process.exit(1);
        }

        console.log('3. Restarting PM2 roardata...');
        const pm2Res = await ssh.execCommand('. ~/.nvm/nvm.sh && pm2 restart roardata');
        console.log('PM2 CODE:', pm2Res.code);

        process.exit(0);
    } catch (e) {
        console.error('DEPLOYMENT ERROR:', e);
        process.exit(1);
    }
}
run();
