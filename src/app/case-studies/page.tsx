import { PrismaClient } from '@prisma/client'
import HeroSection from '@/components/HeroSection'
import PageContainer from '@/components/PageContainer'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

const prisma = new PrismaClient()

export const metadata = {
    title: "Case Studies & Proven Results | ROAR DATA",
    description: "Read our case studies to see real-world Power BI transformations.",
}

export default async function CaseStudiesIndex() {
    const caseStudies = await prisma.caseStudy.findMany({
        orderBy: { createdAt: 'desc' },
        include: { industry: true }
    })

    return (
        <>
            <HeroSection
                headline="Proven Results"
                subheadline="Real-world transformations, delivered."
            />

            <PageContainer className="py-12 mb-20">
                <Breadcrumbs items={[{ label: 'Case Studies' }]} />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {caseStudies.map((cs) => {
                        const metrics = JSON.parse(cs.outcomeMetrics || '[]')
                        return (
                            <div key={cs.id} className="glass-panel rounded-2xl overflow-hidden group flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
                                <div className="p-8 flex-grow">
                                    <div className="text-xs font-bold text-primary mb-4 uppercase tracking-wider">
                                        {cs.industry?.name || 'Case Study'}
                                    </div>
                                    <h3 className="text-xl font-bold mb-6 group-hover:text-primary transition-colors line-clamp-2">
                                        <Link href={`/case-studies/${cs.slug}`} className="before:absolute before:inset-0">
                                            {cs.title}
                                        </Link>
                                    </h3>
                                    <div className="grid grid-cols-2 gap-4 mt-auto">
                                        {metrics.slice(0, 2).map((m: any, i: number) => (
                                            <div key={i}>
                                                <div className="text-xl font-bold text-foreground mb-1">{m.value}</div>
                                                <div className="text-xs text-muted-foreground">{m.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </PageContainer>
        </>
    )
}
