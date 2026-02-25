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
    let kpis = [
        { title: 'OTIF / YIELD', value: Math.floor(Math.random() * 20 + 80) + '%', change: '+' + (Math.random() * 3).toFixed(1) + '%', subtext: 'vs last mo', icon: 'Activity', color: theme },
        { title: 'LEAD TIME', value: Math.floor(Math.random() * 40 + 20) + 'd', change: '-' + (Math.random() * 3).toFixed(1) + '%', subtext: 'vs last mo', icon: 'Box', color: theme },
        { title: 'COMPLIANCE', value: Math.floor(Math.random() * 15 + 85) + '%', change: '+' + (Math.random() * 2).toFixed(1) + '%', subtext: 'vs audit', icon: 'ShieldCheck', color: theme },
        { title: 'UPTIME', value: Math.floor(Math.random() * 10 + 90) + '%', change: '+' + (Math.random() * 1).toFixed(1) + '%', subtext: 'vs last mo', icon: 'Database', color: theme }
    ];

    // Helper to generate a chart
    const generateChart = (type, title, subtext, metrics, colors) => {
        const dataPoints = Array.from({ length: 7 }, (_, i) => {
            const point = { name: 'M' + (i + 1) };
            metrics.forEach(m => point[m] = Math.floor(Math.random() * 60) + 20);
            return point;
        });
        return {
            type, title, subtext, badge: 'Live view', dataKey: metrics, colors, data: dataPoints
        };
    };

    let tabs = [
        {
            name: 'Overview',
            charts: [
                generateChart('LineChart', 'Performance Trends', 'Core metrics over the last 6 months', ['metricA', 'metricB'], ['#2dd4bf', '#fbbf24']),
                generateChart('BarChart', 'Top Risks/Anomalies', 'Click a bar to focus (Top 7)', ['metricA'], ['url(#colorEmerald)'])
            ]
        },
        {
            name: 'Supply chain',
            charts: [
                generateChart('AreaChart', 'Logistics Throughput', 'Daily volume processed', ['volume'], ['#818cf8']),
                generateChart('BarChart', 'Vendor Delays', 'SLA breaches by vendor', ['delays'], ['url(#colorAmber)'])
            ]
        },
        {
            name: 'Compliance',
            charts: [
                generateChart('LineChart', 'Audit Scores', 'Rolling compliance rate', ['score'], ['#34d399']),
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
