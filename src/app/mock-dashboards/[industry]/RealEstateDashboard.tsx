'use client';

import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const chartData = [
  {
    "name": "Day 1",
    "metricA": 83,
    "metricB": 48,
    "metricC": 64
  },
  {
    "name": "Day 2",
    "metricA": 68,
    "metricB": 59,
    "metricC": 17
  },
  {
    "name": "Day 3",
    "metricA": 79,
    "metricB": 23,
    "metricC": 31
  },
  {
    "name": "Day 4",
    "metricA": 87,
    "metricB": 23,
    "metricC": 35
  },
  {
    "name": "Day 5",
    "metricA": 71,
    "metricB": 46,
    "metricC": 87
  },
  {
    "name": "Day 6",
    "metricA": 51,
    "metricB": 38,
    "metricC": 66
  },
  {
    "name": "Day 7",
    "metricA": 92,
    "metricB": 22,
    "metricC": 46
  }
];

export default function RealEstateDashboard() {
  return (
    <div className="w-full h-full min-h-[600px] flex flex-col space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
        <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Real Estate Live Analytics</h2>
        <span className="text-sm font-medium bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300 px-3 py-1 rounded-full">System Active</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <p className="text-sm font-medium text-slate-500 mb-1">Primary KPI Index</p>
          <div className="flex items-end justify-between">
            <h3 className="text-3xl font-black text-slate-900 dark:text-white">3,581</h3>
            <span className="text-sm text-emerald-600 font-semibold mb-1">+10.8%</span>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <p className="text-sm font-medium text-slate-500 mb-1">Operational Efficiency</p>
          <div className="flex items-end justify-between">
            <h3 className="text-3xl font-black text-slate-900 dark:text-white">81.2%</h3>
            <span className="text-sm text-emerald-600 font-semibold mb-1">+0.3%</span>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <p className="text-sm font-medium text-slate-500 mb-1">Active Endpoints</p>
          <div className="flex items-end justify-between">
            <h3 className="text-3xl font-black text-slate-900 dark:text-white">329</h3>
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
