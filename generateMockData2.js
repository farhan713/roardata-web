const fs = require('fs');
const path = require('path');

const industries = [
    'AerospaceAndDefence', 'Agriculture', 'Automotive', 'Banking', 'Construction',
    'Education', 'EnergyAndUtilities', 'EventManagement', 'Finance', 'FinancialServices',
    'Healthcare', 'Hospitality', 'Insurance', 'LegalServices', 'Manufacturing',
    'RealEstate', 'Retail', 'Technology', 'Telecommunications', 'Transportation',
    'FmcgFastMovingConsumerGoods', 'LogisticsAndSupplyChain', 'MiningAndNaturalResources',
    'NonprofitAndNgos', 'Pharmaceuticals', 'ProfessionalServices', 'SportsAndRecreation',
    'TravelAndTourism', 'MediaAndEntertainment', 'EnvironmentalServicesAndWasteManagement'
];

const themes = ['emerald', 'amber', 'rose', 'indigo', 'cyan', 'fuchsia'];

const data = {};

industries.forEach((ind, index) => {
    let title = ind.replace(/([A-Z])/g, ' $1').trim() + ' Operations';
    let subtitle = 'Interactive analytics and key metrics overview.';
    let theme = themes[index % themes.length];

    // Base KPIs
    // Use seeded randomness based on the industry name length/characters so it's consistent across runs
    let hash = 0;
    for (let i = 0; i < ind.length; i++) hash = ind.charCodeAt(i) + ((hash << 5) - hash);
    const seed = Math.abs(hash);

    const randomVal = (min, max) => Math.floor(min + (seed % (max - min)));

    const icons = ['Activity', 'Box', 'ShieldCheck', 'Database', 'Truck', 'Wrench'];
    const dynamicKPIs = [
        { t: 'EFFICIENCY', getV: () => randomVal(75, 95) + '%', getI: () => icons[seed % 6], col: theme },
        { t: 'PROCESSING', getV: () => randomVal(10, 50) + 'k/hr', getI: () => icons[(seed + 1) % 6], col: 'emerald' },
        { t: 'RISK SCORE', getV: () => randomVal(1, 15) + '/100', getI: () => icons[(seed + 2) % 6], col: 'amber' },
        { t: 'SYSTEM LOAD', getV: () => randomVal(40, 90) + '%', getI: () => icons[(seed + 3) % 6], col: 'rose' },
        { t: 'THROUGHPUT', getV: () => randomVal(100, 999) + ' MB/s', getI: () => icons[(seed + 4) % 6], col: theme },
        { t: 'UPTIME', getV: () => (99 + (seed % 100) / 100).toFixed(2) + '%', getI: () => icons[(seed + 5) % 6], col: 'cyan' },
    ];

    let kpis = [
        { title: dynamicKPIs[seed % 6].t, value: dynamicKPIs[seed % 6].getV(), change: '+' + (Math.random() * 3).toFixed(1) + '%', subtext: 'vs last mo', icon: dynamicKPIs[seed % 6].getI(), color: dynamicKPIs[seed % 6].col },
        { title: dynamicKPIs[(seed + 1) % 6].t, value: dynamicKPIs[(seed + 1) % 6].getV(), change: '-' + (Math.random() * 3).toFixed(1) + '%', subtext: 'vs last wk', icon: dynamicKPIs[(seed + 1) % 6].getI(), color: dynamicKPIs[(seed + 1) % 6].col },
        { title: dynamicKPIs[(seed + 2) % 6].t, value: dynamicKPIs[(seed + 2) % 6].getV(), change: '+' + (Math.random() * 2).toFixed(1) + '%', subtext: 'vs target', icon: dynamicKPIs[(seed + 2) % 6].getI(), color: dynamicKPIs[(seed + 2) % 6].col },
        { title: dynamicKPIs[(seed + 3) % 6].t, value: dynamicKPIs[(seed + 3) % 6].getV(), change: '+' + (Math.random() * 1).toFixed(1) + '%', subtext: 'yoy', icon: dynamicKPIs[(seed + 3) % 6].getI(), color: dynamicKPIs[(seed + 3) % 6].col }
    ];

    // Helper to generate a chart
    const generateChart = (type, title, subtext, metrics, colors) => {
        const dataPoints = Array.from({ length: 7 }, (_, i) => {
            const point = { name: 'M' + (i + 1) };
            metrics.forEach((m, mIdx) => point[m] = Math.floor(Math.random() * (50 + seed % 50)) + 20 + (mIdx * 10));
            return point;
        });
        return {
            type, title, subtext, badge: 'Live view', dataKey: metrics, colors, data: dataPoints
        };
    };

    const tabNames = ['Overview', 'Analytics', 'Operations', 'Insights', 'Reports'];

    let tabs = [
        {
            name: tabNames[seed % 5],
            charts: [
                generateChart('LineChart', ind + ' Performance', 'Core metrics tracking', ['primary', 'secondary'], ['#2dd4bf', '#fbbf24']),
                generateChart('BarChart', 'Regional Distribution', 'Click a bar to focus (Top 7)', ['volume'], ['url(#colorEmerald)'])
            ]
        },
        {
            name: tabNames[(seed + 1) % 5],
            charts: [
                generateChart('AreaChart', 'Resource Utilization', 'Daily volume processed', ['active'], ['#818cf8']),
                generateChart('BarChart', 'Bottlenecks', 'SLA breaches and delays', ['delays'], ['url(#colorAmber)'])
            ]
        },
        {
            name: tabNames[(seed + 2) % 5],
            charts: [
                generateChart('LineChart', 'Quality Scores', 'Rolling compliance rate', ['score'], ['#34d399']),
                generateChart('AreaChart', 'Incident Reports', 'Monthly reported anomalies', ['incidents'], ['#f43f5e'])
            ]
        }
    ];

    // Overrides for precise screenshots
    if (ind === 'Agriculture') {
        title = 'Agriculture Operations';
        subtitle = 'Real-time crop monitoring, resource management, and machinery telemetry.';
        theme = 'emerald';
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
                    generateChart('LineChart', 'Yield vs Water Usage', 'Correlating crop yield with irrigation efficiency', ['yield', 'water'], ['#34d399', '#60a5fa']),
                    generateChart('BarChart', 'Field Health Status', 'Soil moisture and overall crop health', ['health'], ['url(#colorEmerald)'])
                ]
            },
            { name: 'Fields & Crops', charts: [generateChart('AreaChart', 'Crop Growth Rate', 'Daily biomass estimation', ['growth'], ['#a3e635'])] },
            { name: 'Machinery', charts: [generateChart('LineChart', 'Fuel Consumption', 'Fleet wide metric', ['fuel'], ['#f87171'])] }
        ];
    } else if (ind === 'AerospaceAndDefence') {
        title = 'Aerospace & Defence Operations';
        subtitle = 'Supply chain, compliance, R&D, security, assets and workforce - with interactive filters and drill-down.';
        theme = 'cyan';
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
                    generateChart('LineChart', 'Supply chain trends', 'OTIF, lead time and inventory health', ['otif', 'leadTime', 'inventory'], ['#2dd4bf', '#fbbf24', '#818cf8']),
                    generateChart('BarChart', 'Top supplier risks', 'Click a bar to focus', ['risk'], ['url(#colorAmber)'])
                ]
            },
            { name: 'Supply chain', charts: [generateChart('AreaChart', 'Logistics Flow', 'Global shipping volume', ['volume'], ['#38bdf8'])] },
            { name: 'Compliance', charts: [generateChart('LineChart', 'Regulatory Checks', 'Daily audit pass rates', ['passRate'], ['#34d399'])] },
            { name: 'R&D', charts: [generateChart('BarChart', 'Development Velocity', 'Story points per sprint', ['velocity'], ['url(#colorEmerald)'])] }
        ];
    } else if (ind === 'FmcgFastMovingConsumerGoods') {
        title = 'FMCG Command Center';
        subtitle = 'High-velocity sales tracking, demand forecasting, and stock management.';
        theme = 'amber';
        kpis = [
            { title: 'WEEKLY REVENUE', value: '$104K', change: '↗ 4.2%', subtext: 'vs wk', icon: 'Activity', color: 'amber' },
            { title: 'UNITS SOLD', value: '12,450', change: '↗ 2.8%', subtext: 'vs wk', icon: 'Box', color: 'rose' },
            { title: 'INV. TURNOVER', value: '12.5x', change: '↘ 1.1%', subtext: 'vs Qtr', icon: 'Activity', color: 'amber' },
            { title: 'ORDER FILL RATE', value: '94.2%', change: '↗ 0.5%', subtext: 'vs wk', icon: 'Box', color: 'indigo' }
        ];
        tabs = [
            {
                name: 'Overview',
                charts: [
                    generateChart('BarChart', 'Sales Performance', 'Weekly Revenue vs Target', ['revenue'], ['url(#colorAmber)']),
                    generateChart('LineChart', 'Inventory Alerts', 'Real-time Stock Levels', ['stock'], ['#f59e0b', '#ef4444'])
                ]
            },
            { name: 'Sales Data', charts: [generateChart('AreaChart', 'Sales Velocity', 'Units cleared per day', ['sales'], ['#fbbf24'])] },
            { name: 'Inventory', charts: [generateChart('BarChart', 'Stockouts', 'SKUs out of stock', ['stockout'], ['url(#colorRose)'])] }
        ];
    }

    data[ind] = { title, subtitle, theme, kpis, tabs };
});

const output = 'export const mockDashboardsData: Record<string, any> = ' + JSON.stringify(data, null, 2) + ';';
fs.writeFileSync('c:/Users/pooja/Desktop/roardata/roardata-web/src/lib/mockDashboardsData.ts', output);
console.log('Successfully generated mockDashboardsData.ts for ' + industries.length + ' industries.');
