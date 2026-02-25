'use client';

import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ComposedChart } from 'recharts';
import { Truck, Box, ShieldCheck, Activity, LineChart as LineChartIcon, TrainTrack, Database, Server, Component, Settings, Search, LayoutDashboard, Share2, Bell, MoreVertical, Menu } from 'lucide-react';


const chartData = [
  { name: "Mar", metricA: 78, metricB: 45, metricC: 22 },
  { name: "Apr", metricA: 82, metricB: 50, metricC: 25 },
  { name: "May", metricA: 76, metricB: 48, metricC: 20 },
  { name: "Jun", metricA: 85, metricB: 55, metricC: 28 },
  { name: "Jul", metricA: 88, metricB: 52, metricC: 30 },
  { name: "Aug", metricA: 84, metricB: 49, metricC: 27 },
  { name: "Sept", metricA: 90, metricB: 60, metricC: 35 }
];

export default function RetailDashboard() {
const [activeTab, setActiveTab] = React.useState('Overview');
  const tabs = ['Overview', 'Supply chain', 'Compliance', 'R&D', 'Security'];

  return (
    // Outer wrap to force the exact mock dashboard container styling (dark theme isolated)
    <div className="w-full h-full min-h-[700px] flex rounded-xl overflow-hidden bg-[#0b101e] font-sans text-slate-300 isolate border border-white/5 shadow-2xl shadow-indigo-500/10">
      
      {/* Main Dashboard Area */}
      <div className="flex-grow flex flex-col animate-in fade-in duration-700 w-full overflow-hidden">
        
        {/* Top macOS style Header */}
        <div className="h-14 border-b border-white/10 flex items-center justify-between px-6 bg-[#0f111a]/50 backdrop-blur-md hidden md:flex">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            </div>
            <div className="text-white font-bold text-lg tracking-tight flex items-center gap-2">
              <span className="text-emerald-400">Roar</span>Data
            </div>
            <div className="h-4 w-px bg-white/10 ml-4 hidden md:block"></div>
            <div className="hidden md:flex text-xs font-medium text-slate-400 ml-4 gap-6 whitespace-nowrap">
              {tabs.map(tab => (
                <span 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`cursor-pointer transition-colors ${activeTab === tab ? 'text-white px-2 py-1 bg-white/5 rounded-md' : 'hover:text-white'}`}
                >
                  {tab}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <Search size={16} className="hover:text-white cursor-pointer" />
            <Share2 size={16} className="hover:text-white cursor-pointer" />
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 text-white flex items-center justify-center text-xs font-bold shadow-md shadow-indigo-500/20 cursor-pointer">
              RD
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex-grow p-4 md:p-6 flex flex-col gap-6 overflow-y-auto overflow-x-hidden custom-scrollbar">
          
          <div className="md:hidden flex items-center justify-between mb-2">
            <div className="text-white font-bold text-lg tracking-tight flex items-center gap-2">
              <span className="text-emerald-400">Roar</span>Data
            </div>
            <Menu className="text-slate-400 cursor-pointer" size={20} />
          </div>
          {/* Content for Overview Tab */}
          {activeTab === 'Overview' && (
<div className="flex flex-col gap-6 w-full animate-in fade-in duration-500">


          {/* Top 4 KPI Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            
            <div className="bg-[#131b2f] p-4 md:p-5 rounded-2xl border border-white/5 flex flex-col shadow-xl">
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] md:text-[11px] font-bold text-slate-400 uppercase tracking-wider">Metrics OTIF</span>
                <div className="w-8 h-8 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                  <Truck size={16} />
                </div>
              </div>
              <div className="flex items-end gap-3 mt-auto">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-tight">79.0%</h3>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded whitespace-nowrap">↑ 1.4%</span>
                <span className="text-[9px] md:text-[10px] text-slate-500 font-medium truncate">vs last month</span>
              </div>
            </div>

            <div className="bg-[#131b2f] p-4 md:p-5 rounded-2xl border border-amber-500/20 flex flex-col shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-2xl rounded-full" />
              <div className="flex justify-between items-start mb-4 relative z-10">
                <span className="text-[10px] md:text-[11px] font-bold text-amber-500 uppercase tracking-wider">Lead Time</span>
                <div className="w-8 h-8 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                  <LayoutDashboard size={16} />
                </div>
              </div>
              <div className="flex items-end gap-3 mt-auto relative z-10">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-amber-500 tracking-tight">78d</h3>
              </div>
              <div className="flex items-center gap-2 mt-3 relative z-10">
                <span className="text-[10px] font-bold text-rose-400 bg-rose-400/10 px-1.5 py-0.5 rounded whitespace-nowrap">↓ 2.1%</span>
                <span className="text-[9px] md:text-[10px] text-slate-500 font-medium truncate">vs last month</span>
              </div>
            </div>

            <div className="bg-[#131b2f] p-4 md:p-5 rounded-2xl border border-white/5 flex flex-col shadow-xl hidden md:flex">
              <div className="flex justify-between items-start mb-4">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Compliance</span>
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <ShieldCheck size={16} />
                </div>
              </div>
              <div className="flex items-end gap-3 mt-auto">
                <h3 className="text-3xl lg:text-4xl font-black text-white tracking-tight">97.0%</h3>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded whitespace-nowrap">↑ 0.6%</span>
                <span className="text-[10px] text-slate-500 font-medium truncate">vs industry audit</span>
              </div>
            </div>

            <div className="bg-[#131b2f] p-4 md:p-5 rounded-2xl border border-white/5 flex flex-col shadow-xl hidden md:flex">
              <div className="flex justify-between items-start mb-4">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">System Uptime</span>
                <div className="w-8 h-8 rounded-full bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0">
                  <Activity size={16} />
                </div>
              </div>
              <div className="flex items-end gap-3 mt-auto">
                <h3 className="text-3xl lg:text-4xl font-black text-white tracking-tight">96.0%</h3>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded whitespace-nowrap">↑ 0.8%</span>
                <span className="text-[10px] text-slate-500 font-medium truncate">vs last month</span>
              </div>
            </div>

          </div>

          {/* Dynamic Charts Area */}
          
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 flex-grow">
        {/* Full Width Composed Chart */}
        <div className="bg-[#131b2f] p-6 rounded-2xl border border-white/5 shadow-2xl flex flex-col relative overflow-hidden group">
          <div className="absolute top-0 left-1/2 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/2" />
          <h4 className="text-white font-bold text-lg mb-1 tracking-tight z-10">Cross-Platform Telemetry</h4>
          <p className="text-xs text-slate-400 mb-6 z-10">Synthesized data across entire ecosystem</p>
          <div className="flex-grow min-h-[350px] w-full z-10 ml-[-20px]">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorAreaFull" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#818cf8" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#818cf8" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff0a" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b' }} />
                <Tooltip 
                  cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                  contentStyle={{ backgroundColor: '#0f111a', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }} 
                />
                <Area type="monotone" dataKey="metricB" stroke="none" fill="url(#colorAreaFull)" />
                <Bar dataKey="metricA" barSize={12} fill="#6366f1" radius={[4, 4, 0, 0]} />
                <Line type="monotone" dataKey="metricC" stroke="#2dd4bf" strokeWidth={3} dot={false} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
  

        
</div>
          )}

          {/* Content for Supply chain Tab */}
          {activeTab === 'Supply chain' && (
             <div className="flex flex-col gap-6 w-full animate-in fade-in duration-500">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-[#131b2f] p-5 rounded-xl border border-white/5 flex flex-col shadow-xl">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-4">Supply chain Score</span>
                        <h3 className="text-3xl font-black text-white tracking-tight">84/100</h3>
                        <span className="text-[10px] text-slate-500 mt-2">Latest evaluation</span>
                    </div>
                </div>
                <div className="bg-[#131b2f] p-6 rounded-2xl border border-white/5 shadow-2xl min-h-[300px] flex flex-col items-center justify-center">
                    <div className="text-center text-slate-500">
                        <p className="font-medium text-lg">Supply chain detailed reporting module</p>
                        <p className="text-sm mt-2">Extended visualizations available in full version</p>
                    </div>
                </div>
             </div>
          )}
    
          {/* Content for Compliance Tab */}
          {activeTab === 'Compliance' && (
             <div className="flex flex-col gap-6 w-full animate-in fade-in duration-500">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-[#131b2f] p-5 rounded-xl border border-white/5 flex flex-col shadow-xl">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-4">Compliance Score</span>
                        <h3 className="text-3xl font-black text-white tracking-tight">88/100</h3>
                        <span className="text-[10px] text-slate-500 mt-2">Latest evaluation</span>
                    </div>
                </div>
                <div className="bg-[#131b2f] p-6 rounded-2xl border border-white/5 shadow-2xl min-h-[300px] flex flex-col items-center justify-center">
                    <div className="text-center text-slate-500">
                        <p className="font-medium text-lg">Compliance detailed reporting module</p>
                        <p className="text-sm mt-2">Extended visualizations available in full version</p>
                    </div>
                </div>
             </div>
          )}
    
          {/* Content for R&D Tab */}
          {activeTab === 'R&D' && (
             <div className="flex flex-col gap-6 w-full animate-in fade-in duration-500">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-[#131b2f] p-5 rounded-xl border border-white/5 flex flex-col shadow-xl">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-4">R&D Score</span>
                        <h3 className="text-3xl font-black text-white tracking-tight">92/100</h3>
                        <span className="text-[10px] text-slate-500 mt-2">Latest evaluation</span>
                    </div>
                </div>
                <div className="bg-[#131b2f] p-6 rounded-2xl border border-white/5 shadow-2xl min-h-[300px] flex flex-col items-center justify-center">
                    <div className="text-center text-slate-500">
                        <p className="font-medium text-lg">R&D detailed reporting module</p>
                        <p className="text-sm mt-2">Extended visualizations available in full version</p>
                    </div>
                </div>
             </div>
          )}
    
          {/* Content for Security Tab */}
          {activeTab === 'Security' && (
             <div className="flex flex-col gap-6 w-full animate-in fade-in duration-500">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-[#131b2f] p-5 rounded-xl border border-white/5 flex flex-col shadow-xl">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-4">Security Score</span>
                        <h3 className="text-3xl font-black text-white tracking-tight">96/100</h3>
                        <span className="text-[10px] text-slate-500 mt-2">Latest evaluation</span>
                    </div>
                </div>
                <div className="bg-[#131b2f] p-6 rounded-2xl border border-white/5 shadow-2xl min-h-[300px] flex flex-col items-center justify-center">
                    <div className="text-center text-slate-500">
                        <p className="font-medium text-lg">Security detailed reporting module</p>
                        <p className="text-sm mt-2">Extended visualizations available in full version</p>
                    </div>
                </div>
             </div>
          )}
    </div>
      </div>
      
      {/* Right Sidebar (Mobile Mockup equivalent on desktop) */}
      <div className="w-80 border-l border-white/5 bg-[#0f111a] hidden xl:flex flex-col relative shrink-0">
        {/* Fake Phone Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-full z-20"></div>
        
        <div className="px-6 pt-12 pb-6 flex items-center justify-between border-b border-white/5">
          <div className="font-bold text-white text-lg">Retail</div>
          <Menu className="text-slate-400 cursor-pointer" size={20} />
        </div>
        
        <div className="flex-grow overflow-y-auto p-6 flex flex-col gap-6 custom-scrollbar">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-[10px] font-bold w-fit border border-emerald-500/20">Live Sync</span>
              <span className="px-3 py-1 bg-white/5 text-slate-300 rounded-full text-[10px] font-bold w-fit border border-white/5">Mock Data</span>
            </div>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              This panel demonstrates responsive layouts. Elements stack gracefully on smaller viewports.
            </p>
          </div>

          <div className="bg-[#131b2f] p-4 rounded-xl border border-white/5 flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Total Yield</span>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden w-full mb-2">
              <div className="h-full bg-emerald-400 w-[78%] rounded-full shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
            </div>
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>0M</span>
              <span className="text-white font-medium">7.8M / 10M</span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 p-5 rounded-xl border border-indigo-500/20 flex flex-col relative overflow-hidden group mt-auto">
            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/20 blur-2xl rounded-full" />
            <h4 className="text-white font-bold text-sm mb-1 relative z-10">AI Insights</h4>
            <p className="text-xs text-indigo-200 mt-1 mb-4 relative z-10 leading-relaxed">System detected a 14% anomaly in recent supply chain latency. Recommended action: Route optimization.</p>
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white text-xs font-bold py-2 px-4 rounded-lg transition-colors w-fit relative z-10">
              View Details
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
}
