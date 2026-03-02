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
        { id: 'common-problems', title: `Common ${industry.name} Reporting Challenges`, level: 2 },
        { id: 'power-bi-use-cases', title: `${industry.name} Analytics Use Cases`, level: 2 },
        { id: 'kpis', title: `Key ${industry.name} KPIs`, level: 2 },
        { id: 'data-sources', title: `${industry.name} Data Integration`, level: 2 },
        { id: 'dashboard', title: `${industry.name} KPI Dashboard Example`, level: 2 },
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

                        <h2 id="common-problems" className="!mb-4" style={{ color: 'var(--fallback-textColor, #0f172a)' }}>Common {industry.name} Reporting Challenges</h2>
                        <div className="h-[2px] bg-slate-400 dark:bg-slate-500 w-3/4 max-w-[350px] mb-8"></div>
                        {commonProblems.length > 0 && (
                            <div className="mb-12 space-y-5">
                                {commonProblems.map((problem: string, i: number) => (
                                    <div key={i} className="flex items-start gap-4 not-prose">
                                        <div className="w-[6px] h-[22px] shrink-0 mt-0.5 dark:bg-white" style={{ backgroundColor: 'var(--fallback-textColor, #0f172a)' }} aria-hidden="true"></div>
                                        <h3 className="text-lg font-semibold m-0 leading-snug" style={{ color: 'var(--fallback-textColor, #0f172a)' }}>{problem}</h3>
                                    </div>
                                ))}
                            </div>
                        )}

                        <h2 id="power-bi-use-cases" className="!mb-4" style={{ color: 'var(--fallback-textColor, #0f172a)' }}>{industry.name} Analytics Use Cases</h2>
                        <div className="h-[2px] bg-slate-400 dark:bg-slate-500 w-3/4 max-w-[350px] mb-8"></div>
                        {useCases.length > 0 && (
                            <div className="mb-12 space-y-5">
                                {useCases.map((useCase: string, i: number) => (
                                    <div key={i} className="flex items-start gap-4 not-prose">
                                        <div className="w-[6px] h-[22px] shrink-0 mt-0.5 dark:bg-white" style={{ backgroundColor: 'var(--fallback-textColor, #0f172a)' }} aria-hidden="true"></div>
                                        <h3 className="text-lg font-semibold m-0 leading-snug" style={{ color: 'var(--fallback-textColor, #0f172a)' }}>{useCase}</h3>
                                    </div>
                                ))}
                            </div>
                        )}

                        <h2 id="kpis">Key {industry.name} KPIs</h2>
                        {kpis.map((kpiGroup: any, i: number) => (
                            <div key={i} className="mb-6">
                                <h3 className="text-lg font-bold mt-4 mb-2">{kpiGroup.group}</h3>
                                <ul className="flex flex-wrap gap-2 not-prose mt-2 p-0 m-0 list-none">
                                    {kpiGroup.metrics?.map((metric: string, j: number) => (
                                        <li key={j} className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-md text-sm font-medium m-0 leading-none flex items-center">
                                            {metric}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        <h2 id="data-sources">{industry.name} Data Integration</h2>
                        <p className="mb-4">Seamlessly connect and analyze data from your core {industry.name} systems.</p>
                        <div className="flex flex-wrap gap-2 not-prose mb-12 mt-4">
                            {dataSources.map((source: string, i: number) => (
                                <span key={i} className="px-4 py-2 bg-muted rounded-full text-sm font-medium">
                                    {source}
                                </span>
                            ))}
                        </div>

                        <h2 id="dashboard">{industry.name} KPI Dashboard Example</h2>
                        <p className="mb-6">Explore interactive visualizations tailored for {industry.name} operations.</p>
                        {industry.dashboardEmbedCode && (
                            <DashboardEmbed embedCode={industry.dashboardEmbedCode} industryName={industry.name} />
                        )}

                        <h2 id="faqs">FAQs</h2>
                        <div className="not-prose mt-8 mb-12">
                            <FaqAccordion faqs={industry.faqs || []} />
                        </div>

                        <div id="contact" className="mt-20 not-prose">
                            <CtaModule
                                headline={`Speak With a${/^[AEIOU]/i.test(industry.name) ? 'n' : ''} ${industry.name} Reporting Specialist`}
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
