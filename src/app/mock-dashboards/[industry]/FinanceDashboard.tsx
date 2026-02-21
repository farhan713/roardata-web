'use client';

import React from 'react';
import {
    ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
    PieChart, Pie, Cell
} from 'recharts';

const revenueData = [
    { month: 'Jan', revenue: 4000, target: 4500, expenses: 2400 },
    { month: 'Feb', revenue: 3000, target: 4500, expenses: 1398 },
    { month: 'Mar', revenue: 2000, target: 4500, expenses: 9800 },
    { month: 'Apr', revenue: 2780, target: 5000, expenses: 3908 },
    { month: 'May', revenue: 1890, target: 5000, expenses: 4800 },
    { month: 'Jun', revenue: 2390, target: 5500, expenses: 3800 },
    { month: 'Jul', revenue: 3490, target: 5500, expenses: 4300 },
];

const allocationData = [
    { name: 'R&D', value: 400 },
    { name: 'Marketing', value: 300 },
    { name: 'Operations', value: 300 },
    { name: 'Sales', value: 200 },
];

const COLORS = ['#0f172a', '#3b82f6', '#f59e0b', '#10b981'];

export default function FinanceDashboard() {
    return (
        <div className="w-full h-full min-h-[600px] flex flex-col space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Corporate Finance & Growth</h2>
                <span className="text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-400 px-3 py-1 rounded-full">Fiscal Q3 Analytics</span>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Annual Recurring Revenue</p>
                    <div className="flex items-end justify-between">
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white">$4.2M</h3>
                        <span className="text-sm text-emerald-600 font-semibold mb-1">+18.2%</span>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Monthly Burn Rate</p>
                    <div className="flex items-end justify-between">
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white">$240K</h3>
                        <span className="text-sm text-orange-600 font-semibold mb-1">+4.1%</span>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Active Customers</p>
                    <div className="flex items-end justify-between">
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white">842</h3>
                        <span className="text-sm text-emerald-600 font-semibold mb-1">+32</span>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Gross Margin</p>
                    <div className="flex items-end justify-between">
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white">72.4%</h3>
                        <span className="text-sm text-emerald-600 font-semibold mb-1">+1.1%</span>
                    </div>
                </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-grow">

                {/* Revenue Performance */}
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col lg:col-span-2">
                    <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-6">Revenue vs Target & Expenses</h4>
                    <div className="flex-grow min-h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <ComposedChart data={revenueData} margin={{ top: 20, right: 20, bottom: 20, left: -20 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                <XAxis dataKey="month" scale="band" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} tickFormatter={(value) => `$${value / 1000}k`} />
                                <Tooltip
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                    itemStyle={{ fontSize: '13px', fontWeight: 600 }}
                                />
                                <Legend wrapperStyle={{ paddingTop: '20px' }} />
                                <Area type="monotone" dataKey="expenses" fill="#f1f5f9" stroke="#cbd5e1" />
                                <Bar dataKey="revenue" barSize={30} fill="#0f172a" radius={[4, 4, 0, 0]} />
                                <Line type="monotone" dataKey="target" stroke="#3b82f6" strokeWidth={3} strokeDasharray="5 5" dot={false} />
                            </ComposedChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Capital Allocation */}
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col">
                    <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-6">OPEX Allocation</h4>
                    <div className="flex-grow min-h-[300px] w-full relative flex items-center justify-center">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={allocationData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={90}
                                    paddingAngle={5}
                                    dataKey="value"
                                    stroke="none"
                                >
                                    {allocationData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                    itemStyle={{ fontSize: '13px', fontWeight: 600, color: '#0f172a' }}
                                />
                                <Legend layout="horizontal" verticalAlign="bottom" align="center" wrapperStyle={{ paddingTop: '20px', fontSize: '12px' }} />
                            </PieChart>
                        </ResponsiveContainer>
                        {/* Inner text for donut */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none mb-4">
                            <span className="text-2xl font-black text-slate-900 dark:text-white border-b-2 border-transparent hover:border-blue-500 transition-colors">$1.2M</span>
                            <span className="text-xs text-slate-500 font-medium tracking-wide">TOTAL</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
