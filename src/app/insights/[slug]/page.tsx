import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { prisma } from '@/lib/prisma'

export const revalidate = 3600;
import HeroSection from '@/components/HeroSection'
import PageContainer from '@/components/PageContainer'
import Breadcrumbs from '@/components/Breadcrumbs'
import CtaModule from '@/components/CtaModule'
import RelatedModules from '@/components/RelatedModules'
import TableOfContents from '@/components/TableOfContents'

interface PageProps {
    params: { slug: string }
}

export async function generateStaticParams() {
    const insights = await prisma.insightArticle.findMany({ select: { slug: true } })
    return insights.map((i) => ({ slug: i.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params
    const insight = await prisma.insightArticle.findUnique({ where: { slug } })

    if (!insight) return {}

    return {
        title: insight.metaTitle || `${insight.title} | Insights`,
        description: insight.metaDescription || insight.summary,
    }
}

export default async function InsightPage({ params }: PageProps) {
    const { slug } = await params

    const insight = await prisma.insightArticle.findUnique({
        where: { slug },
        include: {
            author: true,
            services: true,
            industries: true,
            cities: true
        }
    })

    if (!insight) {
        notFound()
    }

    const tocItems = [
        { id: 'article-content', title: 'Article', level: 2 },
    ]

    let bodySections = []
    try {
        bodySections = JSON.parse(insight.body || '[]')
    } catch (e) { }

    // Article JSON-LD
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": insight.title,
        "description": insight.summary,
        "author": insight.author ? {
            "@type": "Person",
            "name": insight.author.name
        } : {
            "@type": "Organization",
            "name": "ROAR DATA"
        },
        "datePublished": insight.publishedAt.toISOString(),
        "dateModified": insight.updatedAt.toISOString(),
    }

    return (
        <>
            <HeroSection
                headline={insight.title}
                subheadline={insight.summary}
                primaryCtaText="Discuss This Strategy"
            />

            <PageContainer className="py-12">
                <Breadcrumbs items={[
                    { label: 'Insights', href: '/insights' },
                    { label: insight.title }
                ]} />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
                />

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative max-w-6xl mx-auto">

                    <div className="lg:col-span-1 hidden lg:block">
                        <div className="sticky top-24 space-y-8">
                            <TableOfContents items={tocItems} />

                            {insight.author && (
                                <div className="glass-panel p-6 rounded-xl text-center">
                                    <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-4 border-2 border-primary/20 flex items-center justify-center text-xl font-bold text-muted-foreground">
                                        {insight.author.name.charAt(0)}
                                    </div>
                                    <h4 className="font-bold text-foreground">{insight.author.name}</h4>
                                    <p className="text-sm text-primary font-medium mb-3">{insight.author.role}</p>
                                    <p className="text-xs text-muted-foreground leading-relaxed">
                                        {insight.author.bio}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="lg:col-span-3 prose prose-slate dark:prose-invert max-w-none text-lg">
                        <div id="article-content">
                            {bodySections.map((block: any, i: number) => (
                                <p key={i}>{block.content}</p>
                            ))}
                        </div>

                        <div className="mt-20 not-prose">
                            <CtaModule
                                headline="Looking to implement this?"
                                subheadline="Our team can help you build and execute this strategy in your organization."
                            />
                        </div>
                    </div>
                </div>

                {/* Dynamic Related Modules Based on Article Metadata */}
                <div className="mt-16 space-y-16">
                    {insight.services && insight.services.length > 0 && (
                        <RelatedModules
                            title="Related Services"
                            items={insight.services.map((s: any) => ({
                                title: s.name, href: `/${s.slug}`, description: s.heroSubheadline
                            }))} />
                    )}

                    {insight.industries && insight.industries.length > 0 && (
                        <RelatedModules
                            title="Related Industries"
                            items={insight.industries.map((ind: any) => ({
                                title: ind.name, href: `/industries/${ind.slug}`, description: ind.overview
                            }))} />
                    )}
                </div>
            </PageContainer>
        </>
    )
}
