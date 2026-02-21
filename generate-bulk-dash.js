const fs = require("fs");
const path = require("path");

const industries = [
  { name: "Aerospace & Defence", slug: "aerospace-and-defence" },
  { name: "Agriculture", slug: "agriculture" },
  { name: "Automotive", slug: "automotive" },
  { name: "Banking", slug: "banking" },
  { name: "Construction", slug: "construction" },
  { name: "Education", slug: "education" },
  { name: "Energy & Utilities", slug: "energy-and-utilities" },
  {
    name: "Environmental Services & Waste Management",
    slug: "environmental-services-and-waste-management",
  },
  { name: "Event Management", slug: "event-management" },
  { name: "Financial Services", slug: "financial-services" },
  {
    name: "FMCG (Fast-Moving Consumer Goods)",
    slug: "fmcg-fast-moving-consumer-goods",
  },
  { name: "Government & Public Sector", slug: "government-and-public-sector" },
  { name: "Healthcare", slug: "healthcare" },
  { name: "Hospitality", slug: "hospitality" },
  { name: "Insurance", slug: "insurance" },
  { name: "Legal Services", slug: "legal-services" },
  { name: "Logistics & Supply Chain", slug: "logistics-and-supply-chain" },
  { name: "Manufacturing", slug: "manufacturing" },
  { name: "Media & Entertainment", slug: "media-and-entertainment" },
  { name: "Mining & Natural Resources", slug: "mining-and-natural-resources" },
  { name: "Nonprofit & NGO'S", slug: "nonprofit-and-ngos" },
  { name: "Pharmaceuticals", slug: "pharmaceuticals" },
  { name: "Professional Services", slug: "professional-services" },
  { name: "Real Estate", slug: "real-estate" },
  { name: "Retail", slug: "retail" },
  { name: "Sports & Recreation", slug: "sports-and-recreation" },
  { name: "Technology", slug: "technology" },
  { name: "Telecommunications", slug: "telecommunications" },
  { name: "Transportation", slug: "transportation" },
  { name: "Travel & Tourism", slug: "travel-and-tourism" },
];

const targetDir = path.join(
  __dirname,
  "src",
  "app",
  "mock-dashboards",
  "[industry]",
);

function generateComponent(industry) {
  if (industry.slug === "healthcare" || industry.slug === "finance") return;

  const componentName =
    industry.slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join("") + "Dashboard";
  const seed = industry.name.length;
  const colors = [
    ["#0ea5e9", "#38bdf8"],
    ["#10b981", "#34d399"],
    ["#f59e0b", "#fbbf24"],
    ["#8b5cf6", "#a78bfa"],
    ["#ec4899", "#f472b6"],
    ["#f43f5e", "#fb7185"],
    ["#14b8a6", "#2dd4bf"],
    ["#f97316", "#fb923c"],
  ];

  const theme = colors[seed % colors.length];

  const generateData = () => {
    return Array.from({ length: 7 }).map((_, i) => ({
      name: "Day " + (i + 1),
      metricA: Math.floor(Math.random() * 50) + 50,
      metricB: Math.floor(Math.random() * 40) + 20,
      metricC: Math.floor(Math.random() * 80) + 10,
    }));
  };

  const dataString = JSON.stringify(generateData(), null, 2);

  // Completely isolating the react string to prevent ANY interpolation bugs
  const templateLineA = `        <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">`;
  const templateLineB = industry.name;
  const templateLineC = ` Live Analytics</h2>`;

  const template =
    `'use client';

import React from 'react';
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const chartData = ` +
    dataString +
    `;

export default function ` +
    componentName +
    `() {
  return (
    <div className="w-full h-full min-h-[600px] flex flex-col space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
` +
    templateLineA +
    templateLineB +
    templateLineC +
    `
        <span className="text-sm font-medium bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300 px-3 py-1 rounded-full">System Active</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <p className="text-sm font-medium text-slate-500 mb-1">Primary KPI Index</p>
          <div className="flex items-end justify-between">
            <h3 className="text-3xl font-black text-slate-900 dark:text-white">` +
    Math.floor(Math.random() * 8000 + 2000).toLocaleString() +
    `</h3>
            <span className="text-sm text-emerald-600 font-semibold mb-1">+` +
    (Math.random() * 10 + 2).toFixed(1) +
    `%</span>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <p className="text-sm font-medium text-slate-500 mb-1">Operational Efficiency</p>
          <div className="flex items-end justify-between">
            <h3 className="text-3xl font-black text-slate-900 dark:text-white">` +
    (Math.random() * 15 + 80).toFixed(1) +
    `%</h3>
            <span className="text-sm text-emerald-600 font-semibold mb-1">+` +
    (Math.random() * 3).toFixed(1) +
    `%</span>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <p className="text-sm font-medium text-slate-500 mb-1">Active Endpoints</p>
          <div className="flex items-end justify-between">
            <h3 className="text-3xl font-black text-slate-900 dark:text-white">` +
    Math.floor(Math.random() * 400 + 50) +
    `</h3>
            <span className="text-sm text-emerald-600 font-semibold mb-1">Active</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-grow">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col">
          <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-6">Volume Trend Matrix</h4>
          <div className="flex-grow min-h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Area type="monotone" dataKey="metricA" stroke="` +
    theme[0] +
    `" fill="` +
    theme[1] +
    `" fillOpacity={0.6} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col">
          <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-6">Comparative Distribution</h4>
          <div className="flex-grow min-h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Bar dataKey="metricB" fill="` +
    theme[0] +
    `" radius={[4, 4, 0, 0]} />
                <Bar dataKey="metricC" fill="#cbd5e1" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
`;

  fs.writeFileSync(path.join(targetDir, componentName + ".tsx"), template);
  console.log("Generated " + componentName);
}

function updatePageRouter() {
  let imports =
    "import { notFound } from 'next/navigation'\\nimport HealthcareDashboard from './HealthcareDashboard'\\nimport FinanceDashboard from './FinanceDashboard'\\n";
  let cases =
    "        case 'healthcare':\\n            return <HealthcareDashboard />\\n        case 'finance':\\n            return <FinanceDashboard />\\n";

  industries.forEach((ind) => {
    if (ind.slug === "healthcare" || ind.slug === "finance") return;
    const compName =
      ind.slug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join("") + "Dashboard";

    imports += "import " + compName + " from './" + compName + "'\\n";
    cases +=
      "        case '" +
      ind.slug +
      "':\\n            return <" +
      compName +
      " />\\n";
  });

  const pageContent =
    imports +
    `
interface PageProps {
    params: { industry: string }
}

export default async function MockDashboardPage({ params }: PageProps) {
    const { industry } = await params
    const slug = industry.toLowerCase()

    switch (slug) {
` +
    cases +
    `        default:
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
            )
    }
}
`;

  fs.writeFileSync(path.join(targetDir, "page.tsx"), pageContent);
  console.log("Updated [industry]/page.tsx dynamic router map!");
}

async function run() {
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  industries.forEach((ind) => generateComponent(ind));
  updatePageRouter();

  let markdownList = "";
  industries.forEach((ind) => {
    markdownList +=
      "- **" +
      ind.name +
      "**: `<iframe title='" +
      ind.name +
      " Mockup' width='100%' height='100%' src='/mock-dashboards/" +
      ind.slug +
      "' frameborder='0'></iframe>`\\n";
  });

  const markdownContent =
    "# Industry Mock Dashboard Links\\n\\nHere are the exact iframe strings to paste into your Admin UI for every industry:\\n\\n" +
    markdownList;
  fs.writeFileSync(
    path.join(__dirname, "mock_iframe_links.md"),
    markdownContent,
  );
  console.log("Generated mock_iframe_links.md list for the client");
}

run();
