import MockDashboardEmbed from '@/components/MockDashboardEmbed';

const slugToKey: Record<string, string> = {
    'healthcare': 'Healthcare',
    'finance': 'Finance',
    'aerospace-and-defence': 'AerospaceAndDefence',
    'agriculture': 'Agriculture',
    'automotive': 'Automotive',
    'banking': 'Banking',
    'construction': 'Construction',
    'education': 'Education',
    'energy-and-utilities': 'EnergyAndUtilities',
    'environmental-services-and-waste-management': 'EnvironmentalServicesAndWasteManagement',
    'event-management': 'EventManagement',
    'financial-services': 'FinancialServices',
    'fmcg-fast-moving-consumer-goods': 'FmcgFastMovingConsumerGoods',
    'government-and-public-sector': 'GovernmentAndPublicSector',
    'hospitality': 'Hospitality',
    'insurance': 'Insurance',
    'legal-services': 'LegalServices',
    'logistics-and-supply-chain': 'LogisticsAndSupplyChain',
    'manufacturing': 'Manufacturing',
    'media-and-entertainment': 'MediaAndEntertainment',
    'mining-and-natural-resources': 'MiningAndNaturalResources',
    'nonprofit-and-ngos': 'NonprofitAndNgos',
    'pharmaceuticals': 'Pharmaceuticals',
    'professional-services': 'ProfessionalServices',
    'real-estate': 'RealEstate',
    'retail': 'Retail',
    'sports-and-recreation': 'SportsAndRecreation',
    'technology': 'Technology',
    'telecommunications': 'Telecommunications',
    'transportation': 'Transportation',
    'travel-and-tourism': 'TravelAndTourism',
};


type PageProps = {
    params: Promise<{ industry: string }> | { industry: string }
};

export default async function MockDashboardPage({ params }: PageProps) {
    const resolvedParams = await Promise.resolve(params);
    const { industry } = resolvedParams as { industry: string };
    const slug = industry.toLowerCase();

    const key = slugToKey[slug];

    if (key) {
        return <MockDashboardEmbed industryKey={key} />;
    } else {
        return (
            <div className="w-full h-full min-h-[500px] flex flex-col items-center justify-center bg-white dark:bg-slate-900 border border-border rounded-xl shadow-sm text-center p-8">
                <div className="w-16 h-16 mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Analytics Pending</h2>
                <p className="text-slate-500 max-w-md">Our data engineering team is currently aggregating the metric sandbox for the {industry} sector. Check back shortly for the interactive dashboard.</p>
            </div>
        );
    }
}
