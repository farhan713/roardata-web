import { prisma } from '@/lib/prisma'
import { Metadata } from 'next'
import { getIndustryIcon } from '@/lib/icons'

export const revalidate = 3600;
import HeroSection from '@/components/HeroSection'
import PageContainer from '@/components/PageContainer'
import Breadcrumbs from '@/components/Breadcrumbs'
import RelatedModules from '@/components/RelatedModules'

export async function generateMetadata(): Promise<Metadata> {
    const seo = await prisma.pageSeo.findUnique({ where: { pageKey: 'industries' } });
    return {
        title: seo?.metaTitle || "Industry Specific Power BI Solutions | Roar Data",
        description: seo?.metaDescription || "Explore how we transform data operations across various industries.",
        alternates: { canonical: seo?.canonicalUrl || '/industries' },
        openGraph: {
            title: seo?.ogTitle || seo?.metaTitle || "Industry Specific Power BI Solutions | Roar Data",
            description: seo?.ogDescription || seo?.metaDescription || "Explore how we transform data operations across various industries.",
            images: seo?.ogImage ? [{ url: seo.ogImage }] : undefined,
        },
        twitter: {
            card: 'summary_large_image',
            title: seo?.twitterTitle || seo?.ogTitle || seo?.metaTitle || "Industry Specific Power BI Solutions | Roar Data",
            description: seo?.twitterDescription || seo?.ogDescription || seo?.metaDescription || "Explore how we transform data operations across various industries.",
            images: seo?.twitterImage || seo?.ogImage ? [seo?.twitterImage || seo?.ogImage!] : undefined,
        },
    };
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
                        description: i.overview,
                        icon: getIndustryIcon(i.slug)
                    }))}
                />
            </PageContainer>
        </>
    )
}
