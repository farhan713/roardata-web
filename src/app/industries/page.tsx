import { PrismaClient } from '@prisma/client'
import HeroSection from '@/components/HeroSection'
import PageContainer from '@/components/PageContainer'
import Breadcrumbs from '@/components/Breadcrumbs'
import RelatedModules from '@/components/RelatedModules'

const prisma = new PrismaClient()

export const metadata = {
    title: "Industry Specific Power BI Solutions | ROAR DATA",
    description: "Explore how we transform data operations across various industries.",
}

export default async function IndustriesIndex() {
    const industries = await prisma.industry.findMany({
        orderBy: { name: 'asc' }
    })

    return (
        <>
            <HeroSection
                headline="Industry Context Matters"
                subheadline="We speak the language of your internal operations. Choose your industry to see our tailored Power BI solutions."
                primaryCtaText="View All Success Stories"
                primaryCtaLink="/case-studies"
            />
            <PageContainer className="py-12 mb-20">
                <Breadcrumbs items={[{ label: 'Industries' }]} />
                <RelatedModules
                    title="Explore Industries We Support"
                    items={industries.map(i => ({
                        title: i.name,
                        href: `/industries/${i.slug}`,
                        description: i.overview
                    }))}
                />
            </PageContainer>
        </>
    )
}
