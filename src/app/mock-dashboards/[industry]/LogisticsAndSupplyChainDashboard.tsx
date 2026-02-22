'use client';

import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = [
  {
    "name": "Day 1",
    "metricA": 84,
    "metricB": 21,
    "metricC": 77
  },
  {
    "name": "Day 2",
    "metricA": 67,
    "metricB": 40,
    "metricC": 33
  },
  {
    "name": "Day 3",
    "metricA": 50,
    "metricB": 35,
    "metricC": 20
  },
  {
    "name": "Day 4",
    "metricA": 51,
    "metricB": 38,
    "metricC": 56
  },
  {
    "name": "Day 5",
    "metricA": 70,
    "metricB": 26,
    "metricC": 77
  },
  {
    "name": "Day 6",
    "metricA": 74,
    "metricB": 59,
    "metricC": 33
  },
  {
    "name": "Day 7",
    "metricA": 58,
    "metricB": 35,
    "metricC": 10
  }
];

export default function LogisticsAndSupplyChainDashboard() {
  return (
    <div className="w-full h-full min-h-[600px] flex flex-col space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
        <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Logistics & Supply Chain Live Analytics</h2>
        <span className="text-sm font-medium bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300 px-3 py-1 rounded-full">System Active</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <p className="text-sm font-medium text-slate-500 mb-1">Primary KPI Index</p>
          <div className="flex items-end justify-between">
            <h3 className="text-3xl font-black text-slate-900 dark:text-white">9,048</h3>
            <span className="text-sm text-emerald-600 font-semibold mb-1">+3.5%</span>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <p className="text-sm font-medium text-slate-500 mb-1">Operational Efficiency</p>
          <div className="flex items-end justify-between">
            <h3 className="text-3xl font-black text-slate-900 dark:text-white">86.1%</h3>
            <span className="text-sm text-emerald-600 font-semibold mb-1">+0.4%</span>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <p className="text-sm font-medium text-slate-500 mb-1">Active Endpoints</p>
          <div className="flex items-end justify-between">
            <h3 className="text-3xl font-black text-slate-900 dark:text-white">365</h3>
            <span className="text-sm text-emerald-600 font-semibold mb-1">Active</span>
          </div>
        </div>
      </div>

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
}
