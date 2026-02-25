'use client';

import React from 'react';
import MockDashboardEmbed from './MockDashboardEmbed';

interface DashboardEmbedProps {
    embedCode: string;
    industryName: string;
}

export default function DashboardEmbed({ embedCode, industryName }: DashboardEmbedProps) {
    // Extract the slug from the iframe src embedCode (e.g., <iframe src="/mock-dashboards/aerospace-and-defence"...>)
    let slug = 'agriculture';
    const match = embedCode.match(/mock-dashboards\/([^"']+)/);
    if (match) {
        slug = match[1];
    }

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
        'travel-and-tourism': 'TravelAndTourism'
    };

    const key = slugToKey[slug] || 'Agriculture';

    return (
        <div className="mb-16 not-prose w-full max-w-[1400px] mx-auto animate-in fade-in duration-700">
            <h2 className="text-2xl font-bold tracking-tight mb-6">{industryName} Dynamic Reporting Environment</h2>

            {/* The Mac OS / Browser Window Frame Mockup */}
            <div className="w-full rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-700/50 bg-[#0B101E] flex flex-col relative z-20">

                {/* Fake Browser Toolbar */}
                <div className="h-11 bg-[#161a2b] flex items-center px-4 justify-between border-b border-white/5 shrink-0 z-30">
                    <div className="flex gap-2.5 items-center w-24">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-[inset_0_1px_rgba(255,255,255,0.2)]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[inset_0_1px_rgba(255,255,255,0.2)]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-[inset_0_1px_rgba(255,255,255,0.2)]"></div>
                    </div>
                    <div className="flex-grow flex justify-center hidden sm:flex">
                        <div className="bg-[#0f111a] rounded-md px-16 py-1.5 text-[11px] text-slate-400 font-medium flex items-center justify-center min-w-[300px] gap-2 border border-white/5">
                            <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                            roardata.com.au
                        </div>
                    </div>
                    <div className="flex gap-4 items-center w-24 justify-end text-slate-500">
                        <svg className="w-3.5 h-3.5 hover:text-white cursor-pointer transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                        <svg className="w-3.5 h-3.5 hover:text-white cursor-pointer transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                    </div>
                </div>

                {/* The actual dashboard injected directly, completely bypassing iframe layout bugs */}
                <div className="w-full flex-grow relative overflow-x-auto Custom-Dashboard-Wrapper m-0 p-0 border-none rounded-none bg-transparent">
                    <MockDashboardEmbed industryKey={key} />
                </div>
            </div>

        </div>
    );
}
