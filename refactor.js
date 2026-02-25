const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/pooja/Desktop/roardata/roardata-web/src/app/mock-dashboards/[industry]';
const pagePath = path.join(dir, 'page.tsx');

// The keys we have in mockDashboardsData are exactly the [IndustryName]
const dataPath = 'c:/Users/pooja/Desktop/roardata/roardata-web/src/lib/mockDashboardsData.ts';
const dataFile = fs.readFileSync(dataPath, 'utf8');
const keys = Array.from(dataFile.matchAll(/  "([^"]+)": \{/g)).map(m => m[1]).filter(Boolean);
if (keys.length === 0) {
    // maybe keys don't have quotes
    ['Agriculture', 'AerospaceAndDefence', 'Automotive', 'Banking', 'Construction', 'Education', 'EnergyAndUtilities', 'EventManagement', 'Finance', 'FinancialServices', 'Healthcare', 'Hospitality', 'Insurance', 'LegalServices', 'Manufacturing', 'RealEstate', 'Retail', 'Technology', 'Telecommunications', 'Transportation'].forEach(k => keys.push(k));
}

// In Next.js the slug is lowercase and dashed (e.g. aerospace-and-defence). 
// The actual slugs in their original file were exactly what I parse here. 
const oldContent = fs.readFileSync(pagePath, 'utf8');
const switchMatches = [...oldContent.matchAll(/case \'([^\']+)\':\s*return <(\w+)Dashboard \/>/g)];

let mappingStr = 'const slugToKey: Record<string, string> = {\n';
switchMatches.forEach(m => {
    mappingStr += '  \'' + m[1] + '\': \'' + m[2] + '\',\n';
});
mappingStr += '};\n';

const newPageContent = `import DashboardEmbed from '@/components/DashboardEmbed';

${mappingStr}

type PageProps = {
    params: Promise<{ industry: string }> | { industry: string }
};

export default async function MockDashboardPage({ params }: PageProps) {
    const resolvedParams = await Promise.resolve(params);
    const { industry } = resolvedParams as { industry: string };
    const slug = industry.toLowerCase();
    
    const key = slugToKey[slug];
    
    if (key) {
        return <DashboardEmbed industryKey={key} />;
    } else {
        return (
            <div className="w-full h-full min-h-[500px] flex flex-col items-center justify-center bg-white dark:bg-slate-900 border border-border rounded-xl shadow-sm text-center p-8">
                <div className="w-16 h-16 mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Analytics Pending</h2>
                <p className="text-slate-500 max-w-md">Our data engineering team is currently aggregating the metric sandbox for the {industry} sector. Check back shortly for the interactive dashboard.</p>
            </div>
        );
    }
}
`;

fs.writeFileSync(pagePath, newPageContent);
console.log('page.tsx rewritten');

const files = fs.readdirSync(dir).filter(f => f.endsWith('Dashboard.tsx'));
files.forEach(f => {
    fs.unlinkSync(path.join(dir, f));
});
console.log('Deleted ' + files.length + ' obsolete dashboard files.');
