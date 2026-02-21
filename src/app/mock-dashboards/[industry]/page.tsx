import { notFound } from 'next/navigation'
import HealthcareDashboard from './HealthcareDashboard'
import FinanceDashboard from './FinanceDashboard'

interface PageProps {
    params: { industry: string }
}

export default async function MockDashboardPage({ params }: PageProps) {
    const { industry } = await params

    // Normalize the slug for component matching
    const slug = industry.toLowerCase()

    switch (slug) {
        case 'healthcare':
            return <HealthcareDashboard />
        case 'finance':
            return <FinanceDashboard />
        default:
            // If they create a new industry but we haven't built a custom React dashboard for it yet, gracefully fallback
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
