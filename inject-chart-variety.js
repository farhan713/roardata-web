const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'src', 'app', 'mock-dashboards');
const files = [];

function findDashboards(dir) {
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      findDashboards(filePath);
    } else if (file.endsWith('Dashboard.tsx') && file !== 'HealthcareDashboard.tsx' && file !== 'FinanceDashboard.tsx') {
      files.push(filePath);
    }
  });
}

const theme1Imports = "import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';";
const theme1UI = `
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-grow">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col">
          <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-6">Omnidirectional Performance</h4>
          <div className="flex-grow min-h-[250px] w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height={250}>
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="name" tick={{ fill: '#64748b', fontSize: 10 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: '#64748b', fontSize: 10 }} />
                <Radar name="Target A" dataKey="metricA" stroke="#3b82f6" fill="#60a5fa" fillOpacity={0.5} />
                <Radar name="Target B" dataKey="metricB" stroke="#8b5cf6" fill="#a78bfa" fillOpacity={0.5} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col">
          <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-6">Continuous Value Mapping</h4>
          <div className="flex-grow min-h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Line type="monotone" dataKey="metricA" stroke="#f43f5e" strokeWidth={3} dot={{ strokeWidth: 2, r: 4 }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="metricC" stroke="#eab308" strokeWidth={3} dot={{ strokeWidth: 2, r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}`;

const theme2Imports = "import { PieChart, Pie, Cell, BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';";
const theme2UI = `
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-grow">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col">
          <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-6">Distribution Variance</h4>
          <div className="flex-grow min-h-[250px] w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={chartData.slice(0, 4)} cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#8884d8" paddingAngle={5} dataKey="metricA">
                  <Cell fill="#0ea5e9" />
                  <Cell fill="#8b5cf6" />
                  <Cell fill="#ec4899" />
                  <Cell fill="#f59e0b" />
                </Pie>
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col">
          <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-6">Volume Aggregation</h4>
          <div className="flex-grow min-h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Legend iconType="circle" />
                <Bar dataKey="metricB" stackId="a" fill="#3b82f6" />
                <Bar dataKey="metricC" stackId="a" fill="#10b981" />
                <Bar dataKey="metricA" stackId="a" fill="#f43f5e" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}`;

const theme3Imports = "import { ComposedChart, LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';";
const theme3UI = `
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 flex-grow">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col">
          <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-6">Unified Synthesized Telemetry</h4>
          <div className="flex-grow min-h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: -20 }}>
                <CartesianGrid stroke="#f5f5f5" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Legend iconType="circle" />
                <Area type="monotone" dataKey="metricA" fill="#cbd5e1" stroke="#94a3b8" />
                <Bar dataKey="metricB" barSize={20} fill="#indigo" radius={[4, 4, 0, 0]} />
                <Line type="monotone" dataKey="metricC" stroke="#f59e0b" strokeWidth={3} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}`;


function processFiles() {
  findDashboards(targetDir);

  files.forEach((file, index) => {
    let content = fs.readFileSync(file, 'utf8');
    const modulo = index % 3;

    let targetImport = modulo === 0 ? theme1Imports : (modulo === 1 ? theme2Imports : theme3Imports);
    let targetUI = modulo === 0 ? theme1UI : (modulo === 1 ? theme2UI : theme3UI);

    // Safe import replacement
    let regexImports = /import\s+\{[^}]+\}\s+from\s+'recharts';/;
    content = content.replace(regexImports, targetImport);

    // Extremely safe exact tail replacement:
    // We locate the universal chart layout opener and slice off the bottom half of the file, completely bypassing any randomized color hex codes.
    const splitToken = '<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-grow">';
    const splitIndex = content.indexOf(splitToken);

    if (splitIndex !== -1) {
      content = content.substring(0, splitIndex) + targetUI.trim() + '\n';
    } else {
      console.warn(`[WARN] Could not locate chart split token in ${file}`);
    }

    if (index % 2 === 0) content = content.replace(/#indigo/g, '#6366f1');
    else content = content.replace(/#indigo/g, '#0f766e');

    fs.writeFileSync(file, content);
  });
  console.log("Varieties successfully injected!");
}

processFiles();
