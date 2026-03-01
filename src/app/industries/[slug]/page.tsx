import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { prisma } from '@/lib/prisma'

export const revalidate = 3600;
import HeroSection from '@/components/HeroSection'
import PageContainer from '@/components/PageContainer'
import Breadcrumbs from '@/components/Breadcrumbs'
import FaqAccordion from '@/components/FaqAccordion'
import CtaModule from '@/components/CtaModule'
import RelatedModules from '@/components/RelatedModules'
import TableOfContents from '@/components/TableOfContents'
import DashboardEmbed from '@/components/DashboardEmbed'

interface PageProps {
    params: { slug: string }
}

export async function generateStaticParams() {
    const industries = await prisma.industry.findMany({ select: { slug: true } })
    return industries.map((i) => ({ slug: i.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params
    const industry = await prisma.industry.findUnique({ where: { slug } })

    if (!industry) return {}

    return {
        title: industry.metaTitle || `Power BI for ${industry.name} | ROAR DATA`,
        description: industry.metaDescription || industry.overview,
    }
}

export default async function IndustryPage({ params }: PageProps) {
    const { slug } = await params

    const industry = await prisma.industry.findUnique({
        where: { slug },
        include: {
            services: true,
            cities: true,
            caseStudies: true,
            insights: true,
            faqs: true
        }
    })

    if (!industry) {
        notFound()
    }

    const tocItems = [
        { id: 'overview', title: 'Industry Overview', level: 2 },
        { id: 'common-problems', title: 'Common Data Bottlenecks', level: 2 },
        { id: 'power-bi-use-cases', title: 'Top Use Cases', level: 2 },
        { id: 'kpis', title: 'Essential KPIs & Metrics', level: 2 },
        { id: 'data-sources', title: 'Common Systems Integration', level: 2 },
        { id: 'faqs', title: 'FAQs', level: 2 },
    ]

    let commonProblems = []
    let useCases = []
    let kpis = []
    let dataSources = []

    try {
        commonProblems = JSON.parse(industry.commonProblems || '[]')
        useCases = JSON.parse(industry.useCases || '[]')
        kpis = JSON.parse(industry.kpis || '[]')
        dataSources = JSON.parse(industry.dataSources || '[]')
    } catch (e) { }

    return (
        <>
            <HeroSection
                headline={`${industry.name} Analytics and KPI Dashboards in Australia & New Zealand`}
                subheadline={industry.overview}
            />

            <PageContainer className="py-12">
                <Breadcrumbs items={[
                    { label: 'Industries', href: '/industries' },
                    { label: industry.name }
                ]} />

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative">

                    <div className="lg:col-span-1 hidden lg:block">
                        <TableOfContents items={tocItems} />
                    </div>

                    <div className="lg:col-span-3 prose prose-slate dark:prose-invert max-w-none prose-headings:scroll-mt-32">

                        {/* Removed the extra Overview H2 as it's repetitive with HeroSection */}

                        <h2 id="common-problems">Common {industry.name} Reporting Challenges</h2>
                        {commonProblems.length > 0 && (
                            <div className="mb-8">
                                {commonProblems.map((problem: string, i: number) => (
                                    <h3 key={i} className="text-lg font-semibold mt-4 mb-2">{problem}</h3>
                                ))}
                            </div>
                        )}

                        <h2 id="power-bi-use-cases">{industry.name} Analytics Use Cases</h2>
                        {useCases.length > 0 && (
                            <div className="mb-8">
                                {useCases.map((useCase: string, i: number) => (
                                    <h3 key={i} className="text-lg font-semibold mt-4 mb-2">{useCase}</h3>
                                ))}
                            </div>
                        )}

                        <h2 id="kpis">Key {industry.name} KPIs</h2>
                        {kpis.map((kpiGroup: any, i: number) => (
                            <div key={i} className="mb-6">
                                <h3 className="text-lg font-bold mt-4 mb-2">{kpiGroup.group}</h3>
                                <ul className="list-disc pl-5 mt-2">
                                    {kpiGroup.metrics?.map((metric: string, j: number) => (
                                        <li key={j} className="mb-1 text-slate-700 dark:text-slate-300">
                                            {metric}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        <h2 id="data-sources">{industry.name} Data Integration</h2>
                        <p className="mb-4 text-slate-700 dark:text-slate-300">Seamlessly connect and analyze data from your core {industry.name} systems.</p>
                        <ul className="list-disc pl-5 mb-12">
                            {dataSources.map((source: string, i: number) => (
                                <li key={i} className="mb-1 text-slate-700 dark:text-slate-300">
                                    {source}
                                </li>
                            ))}
                        </ul>

                        <h2 id="dashboard">{industry.name} KPI Dashboard Example</h2>
                        <p className="mb-6 text-slate-700 dark:text-slate-300">Explore interactive visualizations tailored for {industry.name} operations.</p>
                        {industry.dashboardEmbedCode && (
                            <DashboardEmbed embedCode={industry.dashboardEmbedCode} industryName={industry.name} />
                        )}

                        <h2 id="faqs">FAQs</h2>
                        <div className="not-prose mt-8 mb-12">
                            <FaqAccordion faqs={industry.faqs || []} />
                        </div>

                        <div id="contact" className="mt-20 not-prose">
                            <CtaModule
                                headline={`Speak With a ${industry.name} Reporting Specialist`}
                                subheadline="Discover how custom dashboards can drive growth for your organization."
                            />
                        </div>
                    </div>
                </div>

                {/* Dynamic Related Modules */}
                <div className="mt-8 space-y-16">
                    {industry.caseStudies && industry.caseStudies.length > 0 && (
                        <div id="related-case-studies" className="scroll-mt-32">
                            <RelatedModules
                                title="Success Stories"
                                items={industry.caseStudies.map((cs: any) => ({
                                    title: cs.title, href: `/case-studies/${cs.slug}`
                                }))} />
                        </div>
                    )}

                    {industry.insights && industry.insights.length > 0 && (
                        <div id="related-insights" className="scroll-mt-32">
                            <RelatedModules
                                title="Industry Insights"
                                items={industry.insights.map((ins: any) => ({
                                    title: ins.title, href: `/insights/${ins.slug}`, description: ins.summary
                                }))} />
                        </div>
                    )}
                </div>
            </PageContainer>
        </>
    )
}
