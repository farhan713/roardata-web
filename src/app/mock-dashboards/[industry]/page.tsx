import { notFound } from 'next/navigation'
import HealthcareDashboard from './HealthcareDashboard'
import FinanceDashboard from './FinanceDashboard'
import AerospaceAndDefenceDashboard from './AerospaceAndDefenceDashboard'
import AgricultureDashboard from './AgricultureDashboard'
import AutomotiveDashboard from './AutomotiveDashboard'
import BankingDashboard from './BankingDashboard'
import ConstructionDashboard from './ConstructionDashboard'
import EducationDashboard from './EducationDashboard'
import EnergyAndUtilitiesDashboard from './EnergyAndUtilitiesDashboard'
import EnvironmentalServicesAndWasteManagementDashboard from './EnvironmentalServicesAndWasteManagementDashboard'
import EventManagementDashboard from './EventManagementDashboard'
import FinancialServicesDashboard from './FinancialServicesDashboard'
import FmcgFastMovingConsumerGoodsDashboard from './FmcgFastMovingConsumerGoodsDashboard'
import GovernmentAndPublicSectorDashboard from './GovernmentAndPublicSectorDashboard'
import HospitalityDashboard from './HospitalityDashboard'
import InsuranceDashboard from './InsuranceDashboard'
import LegalServicesDashboard from './LegalServicesDashboard'
import LogisticsAndSupplyChainDashboard from './LogisticsAndSupplyChainDashboard'
import ManufacturingDashboard from './ManufacturingDashboard'
import MediaAndEntertainmentDashboard from './MediaAndEntertainmentDashboard'
import MiningAndNaturalResourcesDashboard from './MiningAndNaturalResourcesDashboard'
import NonprofitAndNgosDashboard from './NonprofitAndNgosDashboard'
import PharmaceuticalsDashboard from './PharmaceuticalsDashboard'
import ProfessionalServicesDashboard from './ProfessionalServicesDashboard'
import RealEstateDashboard from './RealEstateDashboard'
import RetailDashboard from './RetailDashboard'
import SportsAndRecreationDashboard from './SportsAndRecreationDashboard'
import TechnologyDashboard from './TechnologyDashboard'
import TelecommunicationsDashboard from './TelecommunicationsDashboard'
import TransportationDashboard from './TransportationDashboard'
import TravelAndTourismDashboard from './TravelAndTourismDashboard'
interface PageProps {
    params: { industry: string }
}

export default async function MockDashboardPage({ params }: PageProps) {
    const { industry } = await params
    const slug = industry.toLowerCase()

    switch (slug) {
        case 'healthcare':
            return <HealthcareDashboard />
        case 'finance':
            return <FinanceDashboard />
        case 'aerospace-and-defence':
            return <AerospaceAndDefenceDashboard />
        case 'agriculture':
            return <AgricultureDashboard />
        case 'automotive':
            return <AutomotiveDashboard />
        case 'banking':
            return <BankingDashboard />
        case 'construction':
            return <ConstructionDashboard />
        case 'education':
            return <EducationDashboard />
        case 'energy-and-utilities':
            return <EnergyAndUtilitiesDashboard />
        case 'environmental-services-and-waste-management':
            return <EnvironmentalServicesAndWasteManagementDashboard />
        case 'event-management':
            return <EventManagementDashboard />
        case 'financial-services':
            return <FinancialServicesDashboard />
        case 'fmcg-fast-moving-consumer-goods':
            return <FmcgFastMovingConsumerGoodsDashboard />
        case 'government-and-public-sector':
            return <GovernmentAndPublicSectorDashboard />
        case 'hospitality':
            return <HospitalityDashboard />
        case 'insurance':
            return <InsuranceDashboard />
        case 'legal-services':
            return <LegalServicesDashboard />
        case 'logistics-and-supply-chain':
            return <LogisticsAndSupplyChainDashboard />
        case 'manufacturing':
            return <ManufacturingDashboard />
        case 'media-and-entertainment':
            return <MediaAndEntertainmentDashboard />
        case 'mining-and-natural-resources':
            return <MiningAndNaturalResourcesDashboard />
        case 'nonprofit-and-ngos':
            return <NonprofitAndNgosDashboard />
        case 'pharmaceuticals':
            return <PharmaceuticalsDashboard />
        case 'professional-services':
            return <ProfessionalServicesDashboard />
        case 'real-estate':
            return <RealEstateDashboard />
        case 'retail':
            return <RetailDashboard />
        case 'sports-and-recreation':
            return <SportsAndRecreationDashboard />
        case 'technology':
            return <TechnologyDashboard />
        case 'telecommunications':
            return <TelecommunicationsDashboard />
        case 'transportation':
            return <TransportationDashboard />
        case 'travel-and-tourism':
            return <TravelAndTourismDashboard />
        default:
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
            )
    }
}
