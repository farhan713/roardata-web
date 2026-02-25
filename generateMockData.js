const fs = require('fs');
const path = require('path');

const dir = path.join('c:/Users/pooja/Desktop/roardata/roardata-web/src/app/mock-dashboards/[industry]');
const files = fs.readdirSync(dir).filter(f => f.endsWith('Dashboard.tsx'));
const industries = files.map(f => f.replace('Dashboard.tsx', ''));

const data = {};

industries.forEach(ind => {
    let title = ind.replace(/([A-Z])/g, ' $1').trim() + ' Operations';
    let subtitle = 'Interactive analytics and key metrics overview.';
    let kpis = [
        { title: 'OTIF / YIELD', value: Math.floor(Math.random() * 20 + 80) + '%', change: '+' + (Math.random() * 3).toFixed(1) + '%', subtext: 'vs last mo', icon: 'Activity', color: 'emerald' },
        { title: 'LEAD TIME', value: Math.floor(Math.random() * 40 + 20) + 'd', change: '-' + (Math.random() * 3).toFixed(1) + '%', subtext: 'vs last mo', icon: 'Box', color: 'amber' },
        { title: 'COMPLIANCE', value: Math.floor(Math.random() * 15 + 85) + '%', change: '+' + (Math.random() * 2).toFixed(1) + '%', subtext: 'vs audit', icon: 'ShieldCheck', color: 'emerald' },
        { title: 'UPTIME', value: Math.floor(Math.random() * 10 + 90) + '%', change: '+' + (Math.random() * 1).toFixed(1) + '%', subtext: 'vs last mo', icon: 'Database', color: 'emerald' }
    ];
    let tabs = [
        {
            name: 'Overview',
            charts: [
                {
                    type: 'LineChart',
                    title: 'Performance Trends',
                    subtext: 'Core metrics over the last 6 months',
                    badge: 'Live view',
                    dataKey: ['metricA', 'metricB'],
                    colors: ['#2dd4bf', '#fbbf24'],
                    data: Array.from({ length: 6 }, (_, i) => ({ name: 'M' + (i + 1), metricA: Math.floor(Math.random() * 50) + 50, metricB: Math.floor(Math.random() * 50) + 30 }))
                },
                {
                    type: 'BarChart',
                    title: 'Top Risks/Anomalies',
                    subtext: 'Click a bar to focus (Top 10)',
                    badge: '10 items',
                    dataKey: ['metricA'],
                    colors: ['url(#colorAmber)'],
                    data: Array.from({ length: 10 }, (_, i) => ({ name: 'R' + (i + 1), metricA: Math.floor(Math.random() * 100) })).sort((a, b) => b.metricA - a.metricA)
                }
            ]
        },
        { name: 'Supply chain', charts: [] },
        { name: 'Compliance', charts: [] }
    ];

    if (ind === 'Agriculture') {
        title = 'Precision Agriculture Operations';
        subtitle = 'Real-time crop monitoring, resource management, and machinery telemetry.';
        kpis = [
            { title: 'AVG YIELD', value: '89%', change: '↗ 2.5%', subtext: 'vs season', icon: 'Leaf', color: 'emerald' },
            { title: 'WATER USED', value: '4.3ML', change: '↘ 1.2%', subtext: 'vs mo', icon: 'Droplet', color: 'rose' },
            { title: 'ACTIVE FLEET', value: '1', change: '↗ 0.0%', subtext: 'vs shift', icon: 'Tractor', color: 'emerald' },
            { title: 'HEALTHY FIELDS', value: '1/8', change: '↗ 1.0%', subtext: 'vs week', icon: 'Leaf', color: 'emerald' }
        ];
        tabs = [
            {
                name: 'Overview',
                charts: [
                    {
                        type: 'LineChart',
                        title: 'Yield vs Water Usage',
                        subtext: 'Correlating crop yield with irrigation efficiency',
                        badge: 'Live Sensor Data',
                        dataKey: ['yield', 'water'],
                        colors: ['#2dd4bf', '#818cf8'],
                        data: [{ name: 'W1', yield: 60, water: 80 }, { name: 'W2', yield: 75, water: 70 }, { name: 'W3', yield: 82, water: 65 }, { name: 'W4', yield: 89, water: 75 }]
                    },
                    {
                        type: 'BarChart',
                        title: 'Field Health Status',
                        subtext: 'Soil moisture and overall crop health',
                        badge: '8 Fields',
                        dataKey: ['health'],
                        colors: ['url(#colorAmber)'],
                        data: [{ name: 'Field 1', health: 90 }, { name: 'Field 2', health: 85 }, { name: 'Field 3', health: 40 }, { name: 'Field 4', health: 95 }]
                    }
                ]
            },
            { name: 'Fields & Crops', charts: [] },
            { name: 'Machinery', charts: [] },
            { name: 'Resources', charts: [] },
            { name: 'Workforce', charts: [] }
        ];
    } else if (ind === 'AerospaceAndDefence') {
        title = 'Aerospace & Defence Operations';
        subtitle = 'Supply chain, compliance, R&D, security, assets and workforce - with interactive filters and drill-down.';
        kpis = [
            { title: 'OTIF', value: '89.0%', change: '↗ 1.4%', subtext: 'vs mo', icon: 'Truck', color: 'emerald' },
            { title: 'LEAD TIME', value: '56d', change: '↘ 2.1%', subtext: 'vs mo', icon: 'Box', color: 'amber' },
            { title: 'COMPLIANCE', value: '90.0%', change: '↗ 0.6%', subtext: 'vs audit', icon: 'ShieldCheck', color: 'emerald' },
            { title: 'UPTIME', value: '93.7%', change: '↗ 0.8%', subtext: 'vs mo', icon: 'Wrench', color: 'emerald' }
        ];
        tabs = [
            {
                name: 'Overview',
                charts: [
                    {
                        type: 'LineChart',
                        title: 'Supply chain trends',
                        subtext: 'OTIF, lead time and inventory health',
                        badge: 'Live view',
                        dataKey: ['otif', 'leadTime', 'inventory'],
                        colors: ['#2dd4bf', '#fbbf24', '#818cf8'],
                        data: Array.from({ length: 8 }, (_, i) => ({ name: 'M' + i, otif: Math.floor(Math.random() * 20) + 70, leadTime: Math.floor(Math.random() * 20) + 40, inventory: Math.floor(Math.random() * 30) + 50 }))
                    },
                    {
                        type: 'BarChart',
                        title: 'Top supplier risks',
                        subtext: 'Click a bar to focus',
                        badge: '10 suppliers',
                        dataKey: ['risk'],
                        colors: ['url(#colorAmber)'],
                        data: Array.from({ length: 10 }, (_, i) => ({ name: 'S' + i, risk: Math.floor(Math.random() * 60) + 20 })).sort((a, b) => b.risk - a.risk)
                    }
                ]
            },
            { name: 'Supply chain', charts: [] },
            { name: 'Compliance', charts: [] },
            { name: 'R&D', charts: [] },
            { name: 'Security', charts: [] },
            { name: 'Assets', charts: [] },
            { name: 'Workforce', charts: [] }
        ];
    }

    data[ind] = { title, subtitle, kpis, tabs };
});

const output = 'export const mockDashboardsData: Record<string, any> = ' + JSON.stringify(data, null, 2) + ';';
fs.writeFileSync('c:/Users/pooja/Desktop/roardata/roardata-web/src/lib/mockDashboardsData.ts', output);
console.log('Successfully generated mockDashboardsData.ts for ' + industries.length + ' industries.');
