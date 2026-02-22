'use client';

import React from 'react';
import { ComposedChart, LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const chartData = [
  {
    "name": "Day 1",
    "metricA": 84,
    "metricB": 44,
    "metricC": 20
  },
  {
    "name": "Day 2",
    "metricA": 58,
    "metricB": 43,
    "metricC": 47
  },
  {
    "name": "Day 3",
    "metricA": 82,
    "metricB": 49,
    "metricC": 20
  },
  {
    "name": "Day 4",
    "metricA": 94,
    "metricB": 33,
    "metricC": 57
  },
  {
    "name": "Day 5",
    "metricA": 84,
    "metricB": 43,
    "metricC": 65
  },
  {
    "name": "Day 6",
    "metricA": 57,
    "metricB": 51,
    "metricC": 25
  },
  {
    "name": "Day 7",
    "metricA": 70,
    "metricB": 34,
    "metricC": 49
  }
];

export default function PharmaceuticalsDashboard() {
  return (
    <div className="w-full h-full min-h-[600px] flex flex-col space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
        <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Pharmaceuticals Live Analytics</h2>
        <span className="text-sm font-medium bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300 px-3 py-1 rounded-full">System Active</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <p className="text-sm font-medium text-slate-500 mb-1">Primary KPI Index</p>
          <div className="flex items-end justify-between">
            <h3 className="text-3xl font-black text-slate-900 dark:text-white">3,865</h3>
            <span className="text-sm text-emerald-600 font-semibold mb-1">+11.6%</span>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <p className="text-sm font-medium text-slate-500 mb-1">Operational Efficiency</p>
          <div className="flex items-end justify-between">
            <h3 className="text-3xl font-black text-slate-900 dark:text-white">91.6%</h3>
            <span className="text-sm text-emerald-600 font-semibold mb-1">+2.2%</span>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <p className="text-sm font-medium text-slate-500 mb-1">Active Endpoints</p>
          <div className="flex items-end justify-between">
            <h3 className="text-3xl font-black text-slate-900 dark:text-white">426</h3>
            <span className="text-sm text-emerald-600 font-semibold mb-1">Active</span>
          </div>
        </div>
      </div>

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
                <Bar dataKey="metricB" barSize={20} fill="#6366f1" radius={[4, 4, 0, 0]} />
                <Line type="monotone" dataKey="metricC" stroke="#f59e0b" strokeWidth={3} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
