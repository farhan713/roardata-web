import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { prisma } from '@/lib/prisma'

export const revalidate = 3600;
import HeroSection from '@/components/HeroSection'
import PageContainer from '@/components/PageContainer'
import Breadcrumbs from '@/components/Breadcrumbs'
import CtaModule from '@/components/CtaModule'
import RelatedModules from '@/components/RelatedModules'

interface PageProps {
    params: { slug: string }
}

export async function generateStaticParams() {
    const caseStudies = await prisma.caseStudy.findMany({ select: { slug: true } })
    return caseStudies.map((cs) => ({ slug: cs.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params
    const caseStudy = await prisma.caseStudy.findUnique({ where: { slug } })

    if (!caseStudy) return {}

    return {
        title: caseStudy.metaTitle || `${caseStudy.title} | Case Study`,
        description: caseStudy.metaDescription,
    }
}

export default async function CaseStudyPage({ params }: PageProps) {
    const { slug } = await params

    const caseStudy = await prisma.caseStudy.findUnique({
        where: { slug },
        include: {
            servicesUsed: true,
            cities: true,
            industry: true
        }
    })

    if (!caseStudy) {
        notFound()
    }

    let outcomeMetrics = []
    let bodySections = []

    try {
        outcomeMetrics = JSON.parse(caseStudy.outcomeMetrics || '[]')
        bodySections = JSON.parse(caseStudy.bodySections || '[]')
    } catch (e) { }

    return (
        <>
            <HeroSection
                headline={caseStudy.title}
                subheadline="Real outcomes, driven by clean architecture and robust Power BI implementations."
                primaryCtaText="Get Similar Results"
            />

            <PageContainer className="py-12">
                <Breadcrumbs items={[
                    { label: 'Case Studies', href: '/case-studies' },
                    { label: caseStudy.title }
                ]} />

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative max-w-6xl mx-auto">

                    <div className="lg:col-span-1">
                        <div className="sticky top-24 glass-panel p-6 rounded-xl space-y-6">
                            {caseStudy.industry && (
                                <div>
                                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Industry</h4>
                                    <p className="font-medium text-foreground">{caseStudy.industry.name}</p>
                                </div>
                            )}

                            {caseStudy.servicesUsed && caseStudy.servicesUsed.length > 0 && (
                                <div>
                                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Services Used</h4>
                                    <ul className="space-y-1">
                                        {caseStudy.servicesUsed.map((s: any) => (
                                            <li key={s.id} className="font-medium text-sm text-foreground">{s.name}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Outcome Metrics Block */}
                            {outcomeMetrics.length > 0 && (
                                <div className="pt-6 border-t border-border">
                                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Key Outcomes</h4>
                                    <div className="space-y-5">
                                        {outcomeMetrics.map((m: any, i: number) => (
                                            <div key={i}>
                                                <div className="text-2xl font-bold tracking-tight text-primary mb-1">{m.value}</div>
                                                <div className="text-sm text-foreground font-medium">{m.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="lg:col-span-3 prose prose-slate dark:prose-invert max-w-none text-lg">
                        {bodySections.map((block: any, i: number) => (
                            <p key={i}>{block.content}</p>
                        ))}

                        <div className="mt-20 not-prose">
                            <CtaModule
                                headline="Achieve Operational Excellence"
                                subheadline="Book a rigorous architecture review and discover what's possible."
                            />
                        </div>
                    </div>
                </div>
            </PageContainer>
        </>
    )
}
