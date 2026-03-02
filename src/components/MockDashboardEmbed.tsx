'use client';

import React, { useState } from 'react';
import { mockDashboardsData } from '@/lib/mockDashboardsData';
import {
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
    LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis,
    CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import {
    Truck, Box, ShieldCheck, Activity, Database, Leaf, Droplet,
    Tractor, Wrench, Search, Share2, Menu, LayoutDashboard,
    LucideIcon
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
    Truck, Box, ShieldCheck, Activity, Database, Leaf, Droplet,
    Tractor, Wrench, LayoutDashboard
};

const colorMap: Record<string, string> = {
    emerald: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    rose: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
    amber: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
    indigo: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
    cyan: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20'
};

const badgeColorMap: Record<string, string> = {
    emerald: 'text-emerald-400 bg-emerald-400/10',
    rose: 'text-rose-400 bg-rose-400/10',
    amber: 'text-amber-500 bg-amber-500/10',
    indigo: 'text-indigo-400 bg-indigo-400/10',
    cyan: 'text-cyan-400 bg-cyan-400/10',
    fuchsia: 'text-fuchsia-400 bg-fuchsia-400/10',
};

const bgMap: Record<string, string> = {
    emerald: 'from-emerald-950/40 via-[#0a0f1a] to-[#0a0f1a]',
    amber: 'from-amber-950/40 via-[#0a0f1a] to-[#0a0f1a]',
    rose: 'from-rose-950/40 via-[#0a0f1a] to-[#0a0f1a]',
    indigo: 'from-indigo-950/40 via-[#0a0f1a] to-[#0a0f1a]',
    cyan: 'from-cyan-950/40 via-[#0a0f1a] to-[#0a0f1a]',
    fuchsia: 'from-fuchsia-950/40 via-[#0a0f1a] to-[#0a0f1a]',
};

export default function MockDashboardEmbed({ industryKey }: { industryKey: string }) {
    const data = mockDashboardsData[industryKey] || mockDashboardsData['Agriculture'];
    const [activeTab, setActiveTab] = useState(data.tabs[0].name);

    const activeTabData = data.tabs.find((t: any) => t.name === activeTab) || data.tabs[0];
    const theme = data.theme || 'indigo';
    const bgGradient = bgMap[theme] || bgMap['indigo'];

    return (
        <div className={`w-full h-full min-h-[700px] flex overflow-hidden bg-[#0a0f1a] bg-gradient-to-br ${bgGradient} font-sans text-slate-300 isolate`}>

            {/* Main Dashboard Area */}
            <div className="flex-grow flex flex-col w-full overflow-hidden">

                {/* Top Header */}
                <div className="min-h-[4rem] flex flex-col md:flex-row md:items-center justify-between px-4 md:px-6 bg-[#101423] border-b border-white/5 pb-0">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-6 w-full h-full pt-3 md:pt-0">
                        <h2 className="text-white font-bold text-xl tracking-tight hidden md:block">
                            {data.title}
                        </h2>
                        <div className="md:hidden text-white font-bold tracking-tight px-1">
                            {data.title.split(' ')[0]} Ops
                        </div>

                        {/* Tabs */}
                        <div className="flex gap-2 items-end h-full pt-2 md:pt-4 overflow-x-auto w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                            {data.tabs.map((tab: any) => (
                                <button
                                    key={tab.name}
                                    onClick={() => setActiveTab(tab.name)}
                                    className={`px-4 py-2.5 rounded-t-lg whitespace-nowrap transition-all border-b-2 font-semibold text-[13px] ${activeTab === tab.name
                                        ? 'border-indigo-500 text-white bg-white/[0.03]'
                                        : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-white/[0.02]'
                                        }`}
                                >
                                    {tab.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-3">
                        <button className="flex items-center gap-2 bg-[#161b2e] hover:bg-white/10 text-slate-300 px-4 py-2 rounded-xl text-xs font-semibold border border-white/5 transition-colors">
                            <Search size={14} /> Filters
                        </button>
                        <button className="flex items-center gap-2 bg-[#161b2e] hover:bg-white/10 text-slate-300 px-4 py-2 rounded-xl text-xs font-semibold border border-white/5 transition-colors">
                            <Activity size={14} /> Refresh
                        </button>
                        <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-lg shadow-indigo-600/30 transition-all">
                            <Share2 size={14} /> Export
                        </button>
                    </div>
                </div>

                {/* Subtitle Mobile Hook */}
                <div className="px-6 pt-5 pb-2">
                    <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-2 md:hidden">{data.title}</h1>
                    <p className="text-sm md:text-[13px] text-slate-400 font-medium">{data.subtitle}</p>
                </div>

                {/* Content Area */}
                <div className="flex-grow p-4 md:p-6 flex flex-col gap-6 overflow-y-auto overflow-x-hidden custom-scrollbar border-t border-transparent">

                    {/* KPI Cards (Responsive grid) */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 w-full pb-2">
                        {data.kpis.map((kpi: any, idx: number) => {
                            const IconComp = iconMap[kpi.icon] || LayoutDashboard;
                            const colorClass = colorMap[kpi.color] || colorMap['emerald'];
                            const badgeClass = badgeColorMap[kpi.color] || badgeColorMap['emerald'];

                            return (
                                <div key={idx} className="bg-[#121827]/80 backdrop-blur-sm p-4 md:p-5 rounded-2xl border border-white/5 flex flex-col relative overflow-hidden group shadow-lg">
                                    {/* Subtle Glow inside the card */}
                                    <div className={`absolute top-0 right-0 w-32 h-32 blur-3xl rounded-full opacity-15 -mr-10 -mt-10 ${kpi.color === 'amber' ? 'bg-amber-500' :
                                        kpi.color === 'rose' ? 'bg-rose-500' :
                                            kpi.color === 'cyan' ? 'bg-cyan-500' :
                                                kpi.color === 'fuchsia' ? 'bg-fuchsia-500' :
                                                    kpi.color === 'indigo' ? 'bg-indigo-500' :
                                                        'bg-emerald-500'
                                        }`} />

                                    <div className="flex justify-between items-start mb-4 relative z-10">
                                        <span className="text-[10px] md:text-[11px] font-bold text-slate-400 uppercase tracking-wider">{kpi.title}</span>
                                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${colorClass}`}>
                                            <IconComp size={16} />
                                        </div>
                                    </div>
                                    <div className="flex items-end gap-3 mt-auto relative z-10">
                                        <h3 className="text-2xl md:text-3xl lg:text-[2rem] font-black text-white tracking-tighter leading-none">{kpi.value}</h3>
                                    </div>
                                    <div className="flex items-center gap-2 mt-4 relative z-10">
                                        <span className={`text-[10px] md:text-xs font-bold px-1.5 py-0.5 rounded whitespace-nowrap ${badgeClass}`}>
                                            {kpi.change}
                                        </span>
                                        <span className="text-[10px] md:text-xs text-slate-500 font-medium truncate">{kpi.subtext}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Dynamic Charts Area */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-grow animate-in fade-in zoom-in-95 duration-300">
                        {activeTabData?.charts?.length > 0 ? (
                            activeTabData.charts.map((chart: any, cIdx: number) => (
                                <div key={cIdx} className="bg-[#121827]/80 backdrop-blur-sm p-6 rounded-2xl border border-white/5 shadow-xl flex flex-col relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />

                                    <div className="flex justify-between items-start mb-6 z-10">
                                        <div>
                                            <h4 className="text-white font-bold text-[17px] mb-1 tracking-tight">{chart.title}</h4>
                                            <p className="text-xs text-slate-400">{chart.subtext}</p>
                                        </div>
                                        {chart.badge && (
                                            <span className="bg-[#1e293b] text-slate-300 text-[10px] font-bold px-3 py-1 rounded-full border border-white/5">
                                                {chart.badge}
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex-grow min-h-[260px] w-full z-10 ml-[-20px]">
                                        <ResponsiveContainer width="100%" height="100%">
                                            {chart.type === 'LineChart' ? (
                                                <LineChart data={chart.data} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
                                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff0a" />
                                                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b' }} dy={10} />
                                                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b' }} />
                                                    <Tooltip
                                                        contentStyle={{ backgroundColor: '#0f111a', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.5)' }}
                                                        itemStyle={{ color: '#e2e8f0', fontSize: '12px', fontWeight: 'bold' }}
                                                        labelStyle={{ color: '#94a3b8', fontSize: '11px', marginBottom: '8px' }}
                                                    />
                                                    {chart.dataKey.map((k: string, i: number) => (
                                                        <Line key={k} type="monotone" dataKey={k} stroke={chart.colors?.[i] || '#2dd4bf'} strokeWidth={3} dot={false} activeDot={{ r: 6, strokeWidth: 0, fill: chart.colors?.[i] || '#2dd4bf' }} />
                                                    ))}
                                                </LineChart>
                                            ) : chart.type === 'BarChart' ? (
                                                <BarChart data={chart.data} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
                                                    <defs>
                                                        <linearGradient id="colorAmber" x1="0" y1="0" x2="0" y2="1">
                                                            <stop offset="5%" stopColor="#fbbf24" stopOpacity={1} />
                                                            <stop offset="95%" stopColor="#d97706" stopOpacity={0.8} />
                                                        </linearGradient>
                                                        <linearGradient id="colorEmerald" x1="0" y1="0" x2="0" y2="1">
                                                            <stop offset="5%" stopColor="#34d399" stopOpacity={1} />
                                                            <stop offset="95%" stopColor="#059669" stopOpacity={0.8} />
                                                        </linearGradient>
                                                    </defs>
                                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff0a" />
                                                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b' }} dy={10} />
                                                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b' }} />
                                                    <Tooltip
                                                        cursor={{ fill: 'rgba(255,255,255,0.03)' }}
                                                        contentStyle={{ backgroundColor: '#0f111a', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.5)' }}
                                                        itemStyle={{ color: '#e2e8f0', fontSize: '12px', fontWeight: 'bold' }}
                                                    />
                                                    {chart.dataKey.map((k: string, i: number) => (
                                                        <Bar key={k} dataKey={k} fill={chart.colors?.[i] || 'url(#colorEmerald)'} radius={[4, 4, 0, 0]} barSize={28} />
                                                    ))}
                                                </BarChart>
                                            ) : (
                                                <AreaChart data={chart.data} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
                                                    <defs>
                                                        <linearGradient id="colorArea" x1="0" y1="0" x2="0" y2="1">
                                                            <stop offset="5%" stopColor="#818cf8" stopOpacity={0.3} />
                                                            <stop offset="95%" stopColor="#818cf8" stopOpacity={0} />
                                                        </linearGradient>
                                                    </defs>
                                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff0a" />
                                                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b' }} dy={10} />
                                                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b' }} />
                                                    <Tooltip
                                                        contentStyle={{ backgroundColor: '#0f111a', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}
                                                    />
                                                    {chart.dataKey.map((k: string) => (
                                                        <Area key={k} type="monotone" dataKey={k} stroke="#818cf8" strokeWidth={3} fillOpacity={1} fill="url(#colorArea)" />
                                                    ))}
                                                </AreaChart>
                                            )}
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-1 lg:col-span-2 bg-[#121827]/80 backdrop-blur-sm p-12 rounded-2xl border border-white/5 shadow-xl flex flex-col items-center justify-center text-center mt-4">
                                <div className="w-16 h-16 rounded-full bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4">
                                    <Database size={24} />
                                </div>
                                <h4 className="text-white font-bold text-xl mb-2">Module Default: {activeTab}</h4>
                                <p className="text-slate-400 text-sm max-w-sm">Extended visualizations and deep dive analytics are available in the full reporting suite for this module.</p>
                            </div>
                        )}
                    </div>

                </div>
            </div>

        </div>
    );
}
