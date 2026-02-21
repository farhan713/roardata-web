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
                headline={`Power BI for ${industry.name}`}
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

                        {industry.dashboardEmbedCode && (
                            <div className="mb-16 not-prose">
                                <h2 className="text-2xl font-bold tracking-tight mb-6">{industry.name} Dashboard Mockup</h2>
                                <div
                                    className="w-full aspect-[16/9] min-h-[600px] border border-border shadow-2xl rounded-xl overflow-hidden bg-muted flex items-center justify-center relative z-10"
                                    dangerouslySetInnerHTML={{ __html: industry.dashboardEmbedCode }}
                                />
                            </div>
                        )}

                        <h2 id="overview">Overview</h2>
                        <p className="text-xl leading-relaxed">{industry.overview}</p>

                        <h2 id="common-problems">Common Data Bottlenecks</h2>
                        <ul className="mb-8">
                            {commonProblems.map((problem: string, i: number) => (
                                <li key={i}>{problem}</li>
                            ))}
                        </ul>

                        <h2 id="power-bi-use-cases">Top Use Cases</h2>
                        <ul className="mb-8">
                            {useCases.map((useCase: string, i: number) => (
                                <li key={i}>{useCase}</li>
                            ))}
                        </ul>

                        <h2 id="kpis">Essential KPIs & Metrics</h2>
                        {kpis.map((kpiGroup: any, i: number) => (
                            <div key={i} className="mb-6">
                                <h3 className="text-lg font-semibold mt-4 mb-2">{kpiGroup.group}</h3>
                                <div className="flex flex-wrap gap-2 not-prose">
                                    {kpiGroup.metrics?.map((metric: string, j: number) => (
                                        <span key={j} className="px-3 py-1 bg-brand-100 dark:bg-brand-900 border border-brand-200 dark:border-brand-800 rounded-md text-sm font-medium">
                                            {metric}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}

                        <h2 id="data-sources">Common Systems Integration</h2>
                        <div className="flex flex-wrap gap-2 not-prose mb-12">
                            {dataSources.map((source: string, i: number) => (
                                <span key={i} className="px-4 py-2 bg-muted rounded-full text-sm font-medium">
                                    {source}
                                </span>
                            ))}
                        </div>

                        <h2 id="faqs">FAQs</h2>
                        <div className="not-prose mt-8 mb-12">
                            <FaqAccordion faqs={industry.faqs || []} />
                        </div>

                        <div id="contact" className="mt-20 not-prose">
                            <CtaModule
                                headline={`Transform ${industry.name} Operations`}
                                subheadline="Get a tailored strategy blueprint for your organization."
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
