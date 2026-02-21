import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Dashboard Preview',
    description: 'Interactive analytics dashboard preview',
}

export default function MockDashboardsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-4 sm:p-6 lg:p-8 font-sans">
            {/* We explicitly omit the Header and Footer here so it looks perfect inside an iframe */}
            {children}
        </div>
    )
}
