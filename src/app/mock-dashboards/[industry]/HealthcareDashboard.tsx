'use client';

import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
    BarChart, Bar, AreaChart, Area,
} from 'recharts';

const waitTimeData = [
    { time: '08:00', ER: 45, Outpatient: 15 },
    { time: '10:00', ER: 52, Outpatient: 22 },
    { time: '12:00', ER: 68, Outpatient: 35 },
    { time: '14:00', ER: 74, Outpatient: 42 },
    { time: '16:00', ER: 55, Outpatient: 28 },
    { time: '18:00', ER: 41, Outpatient: 18 },
    { time: '20:00', ER: 33, Outpatient: 10 },
];

const patientVolumeData = [
    { day: 'Mon', admitted: 120, discharged: 98 },
    { day: 'Tue', admitted: 132, discharged: 110 },
    { day: 'Wed', admitted: 101, discharged: 105 },
    { day: 'Thu', admitted: 134, discharged: 121 },
    { day: 'Fri', admitted: 190, discharged: 165 },
    { day: 'Sat', admitted: 145, discharged: 140 },
    { day: 'Sun', admitted: 112, discharged: 115 },
];

export default function HealthcareDashboard() {
    return (
        <div className="w-full h-full min-h-[600px] flex flex-col space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Healthcare Clinical Excellence</h2>
                <span className="text-sm font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-400 px-3 py-1 rounded-full">Live Analytics</span>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
                    <p className="text-sm font-medium text-slate-500 mb-1">Total Daily Encounters</p>
                    <div className="flex items-end justify-between">
                        <h3 className="text-3xl font-black text-slate-900 dark:text-white">1,482</h3>
                        <span className="text-sm text-emerald-600 font-semibold mb-1">+12%</span>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
                    <p className="text-sm font-medium text-slate-500 mb-1">Avg. ER Wait Time</p>
                    <div className="flex items-end justify-between">
                        <h3 className="text-3xl font-black text-slate-900 dark:text-white">42 <span className="text-lg text-slate-400 font-medium">mins</span></h3>
                        <span className="text-sm text-emerald-600 font-semibold mb-1">-8%</span>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
                    <p className="text-sm font-medium text-slate-500 mb-1">Bed Occupancy Rate</p>
                    <div className="flex items-end justify-between">
                        <h3 className="text-3xl font-black text-slate-900 dark:text-white">88.4%</h3>
                        <span className="text-sm text-orange-600 font-semibold mb-1">+2%</span>
                    </div>
                </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-grow">

                {/* Wait Time Trend */}
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col">
                    <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-6">Patient Wait Times (Today)</h4>
                    <div className="flex-grow min-h-[250px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={waitTimeData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                                <Tooltip
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                    itemStyle={{ fontSize: '13px', fontWeight: 600 }}
                                    labelStyle={{ color: '#64748b', fontSize: '12px', marginBottom: '4px' }}
                                />
                                <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '20px' }} />
                                <Line type="monotone" dataKey="ER" stroke="#ef4444" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
                                <Line type="monotone" dataKey="Outpatient" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Volume Flow */}
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col">
                    <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-6">Weekly Bed Flow Volume</h4>
                    <div className="flex-grow min-h-[250px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={patientVolumeData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                                <Tooltip
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                    itemStyle={{ fontSize: '13px', fontWeight: 600 }}
                                />
                                <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '20px' }} />
                                <Area type="monotone" dataKey="admitted" stackId="1" stroke="#0ea5e9" fill="#38bdf8" fillOpacity={0.6} />
                                <Area type="monotone" dataKey="discharged" stackId="2" stroke="#10b981" fill="#34d399" fillOpacity={0.6} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

            </div>
        </div>
    );
}
