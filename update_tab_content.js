const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const dir = 'c:/Users/pooja/Desktop/roardata/roardata-web/src/app/mock-dashboards/[industry]';
let changedFiles = 0;

const buildDummyJSX = (tabName, index) => {
    return `
          {/* Content for ${tabName} Tab */}
          {activeTab === '${tabName}' && (
             <div className="flex flex-col gap-6 w-full animate-in fade-in duration-500">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-[#131b2f] p-5 rounded-xl border border-white/5 flex flex-col shadow-xl">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-4">${tabName} Score</span>
                        <h3 className="text-3xl font-black text-white tracking-tight">${80 + (index * 4)}/100</h3>
                        <span className="text-[10px] text-slate-500 mt-2">Latest evaluation</span>
                    </div>
                </div>
                <div className="bg-[#131b2f] p-6 rounded-2xl border border-white/5 shadow-2xl min-h-[300px] flex flex-col items-center justify-center">
                    <div className="text-center text-slate-500">
                        <p className="font-medium text-lg">${tabName} detailed reporting module</p>
                        <p className="text-sm mt-2">Extended visualizations available in full version</p>
                    </div>
                </div>
             </div>
          )}
    `;
};

try {
    const files = fs.readdirSync(dir).filter(f => f.endsWith('Dashboard.tsx'));

    for (const file of files) {
        const filePath = path.join(dir, file);

        // reset
        try { execSync(`git checkout HEAD -- "${filePath}"`, { stdio: 'ignore' }); } catch (e) { }

        let content = fs.readFileSync(filePath, 'utf-8');

        // Add state hooks to the beginning of the component
        const functionMatch = content.match(/export default function \w+\(\) \{/);
        if (!functionMatch) continue;

        const functionStart = functionMatch.index;
        const bodyStart = content.indexOf('{', functionStart) + 1;

        // Inject state
        const stateVars = `
  const [activeTab, setActiveTab] = React.useState('Overview');
  const tabs = ['Overview', 'Supply chain', 'Compliance', 'R&D', 'Security'];
`;
        content = content.slice(0, bodyStart) + stateVars + content.slice(bodyStart);

        // Replace tabs HTML
        const oldTabs = /<div className="hidden md:flex text-xs font-medium text-slate-400 ml-4 gap-6">[\s\S]*?<\/div>/;
        const newTabs = `<div className="hidden md:flex text-xs font-medium text-slate-400 ml-4 gap-6 whitespace-nowrap">
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
        content = content.replace(oldTabs, newTabs);

        // Wrap the Overview.
        // The entire Overview content starts right after `<Menu className="text-slate-400 cursor-pointer" size={20} />\n          </div>`
        // OR `</Menu>` if self closed. Usually it's `</div>` closing the mobile header block
        const mobileHeaderRegex = /<Menu className="text-slate-400 cursor-pointer" size=\{20\} \/>\s*<\/div>/;
        const mobileHeaderMatch = content.match(mobileHeaderRegex);
        if (!mobileHeaderMatch) continue;

        const startOfOverview = mobileHeaderMatch.index + mobileHeaderMatch[0].length;

        // End of overview is right before `</div>\n      </div>\n      \n      {/* Right Sidebar (Mobile Mockup equivalent on desktop) */}`
        const rightSidebarText = "{/* Right Sidebar";
        const sidebarIndex = content.indexOf(rightSidebarText, startOfOverview);
        if (sidebarIndex === -1) continue;

        let endOfOverview = content.lastIndexOf('</div>', sidebarIndex);
        endOfOverview = content.lastIndexOf('</div>', endOfOverview - 1);

        if (endOfOverview > startOfOverview) {
            const headerPart = content.substring(0, startOfOverview);
            const overviewPart = content.substring(startOfOverview, endOfOverview);
            const footerPart = content.substring(endOfOverview);

            const newContent = headerPart +
                `\n          {/* Content for Overview Tab */}\n          {activeTab === 'Overview' && (\n<div className="flex flex-col gap-6 w-full animate-in fade-in duration-500">\n` +
                overviewPart +
                `\n</div>\n          )}\n` +
                buildDummyJSX('Supply chain', 1) +
                buildDummyJSX('Compliance', 2) +
                buildDummyJSX('R&D', 3) +
                buildDummyJSX('Security', 4) +
                footerPart;

            fs.writeFileSync(filePath, newContent, 'utf-8');
            changedFiles++;
        }
    }

    console.log(`Successfully patched ${changedFiles} files with simplified logical block wrapping.`);
} catch (e) {
    console.error(e);
}
