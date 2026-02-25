const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/pooja/Desktop/roardata/roardata-web/src/app/mock-dashboards/[industry]';
let changedFiles = 0;

try {
    const files = fs.readdirSync(dir).filter(f => f.endsWith('Dashboard.tsx'));

    for (const file of files) {
        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, 'utf-8');

        if (content.includes('setActiveTab')) {
            continue;
        }

        const componentStartRegex = /(export default function [a-zA-Z0-9_]+\(\)\s*\{)/;
        if (!content.match(componentStartRegex)) {
            console.log(`Could not find component body in ${file}`);
            continue;
        }

        content = content.replace(componentStartRegex, `$1\n  const [activeTab, setActiveTab] = React.useState('Overview');\n  const tabs = ['Overview', 'Supply chain', 'Compliance', 'R&D', 'Security'];\n`);

        const tabsRegex = /<div className="hidden md:flex text-xs font-medium text-slate-400 ml-4 gap-6">[\s\S]*?<\/div>/;

        const newTabsJSX = `<div className="hidden md:flex text-xs font-medium text-slate-400 ml-4 gap-6 whitespace-nowrap">
              {tabs.map(tab => (
                <span 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={\`cursor-pointer transition-colors \${activeTab === tab ? 'text-white px-2 py-1 bg-white/5 rounded-md' : 'hover:text-white'}\`}
                >
                  {tab}
                </span>
              ))}
            </div>`;

        if (content.match(tabsRegex)) {
            content = content.replace(tabsRegex, newTabsJSX);
            fs.writeFileSync(filePath, content, 'utf-8');
            changedFiles++;
        } else {
            console.log(`Could not find tabs JSX in ${file}`);
        }
    }

    console.log(`Updated ${changedFiles} files.`);
} catch (e) {
    console.error(e);
}
