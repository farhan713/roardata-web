'use client';

import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const chartData = [
  {
    "name": "Day 1",
    "metricA": 81,
    "metricB": 42,
    "metricC": 84
  },
  {
    "name": "Day 2",
    "metricA": 91,
    "metricB": 43,
    "metricC": 17
  },
  {
    "name": "Day 3",
    "metricA": 59,
    "metricB": 34,
    "metricC": 11
  },
  {
    "name": "Day 4",
    "metricA": 92,
    "metricB": 46,
    "metricC": 53
  },
  {
    "name": "Day 5",
    "metricA": 55,
    "metricB": 32,
    "metricC": 82
  },
  {
    "name": "Day 6",
    "metricA": 54,
    "metricB": 40,
    "metricC": 55
  },
  {
    "name": "Day 7",
    "metricA": 77,
    "metricB": 27,
    "metricC": 87
  }
];

export default function FmcgFastMovingConsumerGoodsDashboard() {
  return (
    <div className="w-full h-full min-h-[600px] flex flex-col space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
        <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">FMCG (Fast-Moving Consumer Goods) Live Analytics</h2>
        <span className="text-sm font-medium bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300 px-3 py-1 rounded-full">System Active</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <p className="text-sm font-medium text-slate-500 mb-1">Primary KPI Index</p>
          <div className="flex items-end justify-between">
            <h3 className="text-3xl font-black text-slate-900 dark:text-white">4,991</h3>
            <span className="text-sm text-emerald-600 font-semibold mb-1">+11.0%</span>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <p className="text-sm font-medium text-slate-500 mb-1">Operational Efficiency</p>
          <div className="flex items-end justify-between">
            <h3 className="text-3xl font-black text-slate-900 dark:text-white">86.4%</h3>
            <span className="text-sm text-emerald-600 font-semibold mb-1">+1.4%</span>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <p className="text-sm font-medium text-slate-500 mb-1">Active Endpoints</p>
          <div className="flex items-end justify-between">
            <h3 className="text-3xl font-black text-slate-900 dark:text-white">140</h3>
            <span className="text-sm text-emerald-600 font-semibold mb-1">Active</span>
          </div>
        </div>
      </div>

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
}
