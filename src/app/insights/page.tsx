import { prisma } from '@/lib/prisma'

export const revalidate = 3600;
import HeroSection from '@/components/HeroSection'
import PageContainer from '@/components/PageContainer'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata = {
    title: "Power BI Insights & Articles | ROAR DATA",
    description: "Expert tips, DAX strategies, and Power BI thought leadership.",
}

export default async function InsightsIndex() {
    const insights = await prisma.insightArticle.findMany({
        orderBy: { publishedAt: 'desc' },
        include: { author: true }
    })

    return (
        <>
            <HeroSection
                headline="Analytics Insights"
                subheadline="Expert strategies, deep dives into DAX, and proven data governance methodologies."
            />

            <PageContainer className="py-12 mb-20">
                <Breadcrumbs items={[{ label: 'Insights' }]} />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {insights.map((article) => (
                        <article key={article.id} className="glass-panel p-6 rounded-2xl hover:border-primary/50 transition-colors flex flex-col h-full relative group">
                            <Link href={`/insights/${article.slug}`} className="absolute inset-0 z-10">
                                <span className="sr-only">Read {article.title}</span>
                            </Link>

                            <div className="flex items-center text-sm text-muted-foreground mb-4">
                                {new Date(article.publishedAt).toLocaleDateString('en-AU', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </div>

                            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-3">
                                {article.title}
                            </h3>

                            <p className="text-muted-foreground mb-6 line-clamp-3 flex-grow">
                                {article.summary}
                            </p>

                            {article.author && (
                                <div className="flex items-center mt-auto border-t border-border pt-4">
                                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-bold mr-3 border border-border">
                                        {article.author.name.charAt(0)}
                                    </div>
                                    <div className="text-sm font-medium text-foreground">
                                        {article.author.name}
                                    </div>
                                </div>
                            )}
                        </article>
                    ))}
                </div>
            </PageContainer>
        </>
    )
}
