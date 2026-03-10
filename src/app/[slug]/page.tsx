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
import SchemaOrg from '@/components/SchemaOrg'
import { CheckCircle2 } from 'lucide-react'

interface PageProps {
    params: { slug: string }
}

export async function generateStaticParams() {
    const services = await prisma.service.findMany({ select: { slug: true } })
    const cities = await prisma.city.findMany({ select: { slug: true } })

    return [
        ...services.map((s) => ({ slug: s.slug })),
        ...cities.map((c) => ({ slug: c.slug }))
    ]
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params
    let item: any = null

    if (slug.startsWith('power-bi-consultant-')) {
        item = await prisma.city.findUnique({ where: { slug } })
    } else {
        item = await prisma.service.findUnique({ where: { slug } })
    }

    if (!item) return {}

    return {
        title: item.metaTitle ? { absolute: item.metaTitle } : item.heroHeadline,
        description: item.metaDescription || item.heroSubheadline,
        alternates: {
            canonical: item.canonicalUrl || `https://roardata.com.au/${item.slug}`,
        },
        robots: item.robotsMeta || 'index, follow',
        openGraph: {
            title: item.ogTitle || item.metaTitle || item.heroHeadline,
            description: item.ogDescription || item.metaDescription || item.heroSubheadline,
            images: item.ogImage ? [
                {
                    url: item.ogImage,
                    alt: item.socialImageAlt || item.mainImageAlt || item.heroHeadline,
                }
            ] : undefined,
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: item.twitterTitle || item.ogTitle || item.metaTitle || item.heroHeadline,
            description: item.twitterDescription || item.ogDescription || item.metaDescription || item.heroSubheadline,
            images: item.twitterImage || item.ogImage ? [item.twitterImage || item.ogImage!] : undefined,
        }
    }
}

export default async function DynamicSlugPage({ params }: PageProps) {
    const { slug } = await params

    // Prevent the dynamic route from catching the /admin path
    if (slug === 'admin' || slug.startsWith('admin/')) {
        notFound()
    }

    // 1. Determine if it's a City Page or a Service/Pillar Page
    const isCityPage = slug.startsWith('power-bi-consultant-')

    let pageData: any

    if (isCityPage) {
        pageData = await prisma.city.findUnique({
            where: { slug },
            include: {
                services: true,
                industries: true,
                caseStudies: true,
                faqs: true
            }
        })
    } else {
        pageData = await prisma.service.findUnique({
            where: { slug },
            include: {
                industries: true,
                cities: true,
                faqs: true,
                CaseStudy: true,
                InsightArticle: true
            }
        })
    }

    if (!pageData) {
        notFound()
    }

    // Generate TOC Items based on requirements spec
    const buildTocItems = () => {
        if (isCityPage) {
            return [
                { id: 'overview', title: 'Local Overview', level: 2 },
                { id: 'services', title: 'Our Services', level: 2 },
                { id: 'industries-we-help', title: 'Industries We Help', level: 2 },
                { id: 'case-studies', title: 'Success Stories', level: 2 },
                { id: 'faqs', title: 'Frequently Asked Questions', level: 2 },
            ]
        }

        if (slug === 'power-bi-consulting-australia') {
            return [
                { id: 'what-is-power-bi-consulting', title: 'What is Power BI Consulting?', level: 2 },
                { id: 'services', title: 'Our Expertise', level: 2 },
                { id: 'industries', title: 'Industries We Serve', level: 2 },
                { id: 'cities', title: 'Locations', level: 2 },
                { id: 'process', title: 'Implementation Process', level: 2 },
                { id: 'case-studies', title: 'Case Studies', level: 2 },
                { id: 'faqs', title: 'FAQs', level: 2 },
            ]
        }

        return [
            { id: 'overview', title: 'Service Overview', level: 2 },
            { id: 'deliverables', title: 'What to Expect', level: 2 },
            { id: 'faqs', title: 'FAQs', level: 2 },
        ]
    }

    const tocItems = buildTocItems()

    // The bodySections are now fully HTML across the database
    const bodySectionsHtml = pageData.bodySections || '';

    return (
        <>
            {pageData.structuredData ? (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: pageData.structuredData }}
                />
            ) : (
                <>
                    {pageData.className !== undefined && slug === 'power-bi-consulting-australia' && (
                        <SchemaOrg schema={{
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "serviceType": "Power BI Consulting",
                            "provider": {
                                "@type": "Organization",
                                "name": "Roar Data"
                            },
                            "areaServed": {
                                "@type": "Country",
                                "name": "Australia"
                            }
                        }} />
                    )}

                    {isCityPage && pageData.cityName === 'Brisbane' && (
                        <SchemaOrg schema={{
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            "name": "Roar Data Brisbane",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Brisbane",
                                "addressRegion": "QLD",
                                "addressCountry": "AU"
                            },
                            "url": "https://roardata.com.au/power-bi-consultant-brisbane"
                        }} />
                    )}
                </>
            )}

            <HeroSection
                headline={pageData.heroHeadline}
                subheadline={pageData.heroSubheadline}
            />

            <PageContainer className="py-12">
                <Breadcrumbs items={[{ label: pageData.heroHeadline }]} />

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative">

                    <div className="lg:col-span-1 hidden lg:block">
                        <TableOfContents items={tocItems} />
                    </div>

                    <div className="lg:col-span-3 min-w-0 prose prose-slate dark:prose-invert max-w-none prose-headings:scroll-mt-32 break-words overflow-hidden">

                        {/* The Main Content based on Type */}
                        {isCityPage ? (
                            <>
                                <h2 id="overview">Power BI Consulting in {pageData.cityName}</h2>
                                <p className="text-xl leading-relaxed">{pageData.uniqueLocalCopy}</p>

                                <h2 id="services">Our Services</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mb-8">
                                    {pageData.services?.map((s: any) => (
                                        <div key={s.id} className="p-5 border border-border rounded-lg bg-muted/20">
                                            <h3 className="font-bold text-foreground mb-2 flex items-center">
                                                <CheckCircle2 className="w-5 h-5 text-primary mr-2" />
                                                {s.name}
                                            </h3>
                                            <p className="text-sm text-muted-foreground">{s.heroSubheadline}</p>
                                        </div>
                                    ))}
                                </div>

                                <h2 id="industries-we-help">Industries We Help</h2>
                                <p>We work tightly with enterprise operations and mid-market firms across targeted industries in the {pageData.cityName} area.</p>

                                <h2 id="faqs">Frequently Asked Questions</h2>
                                <div className="not-prose mt-8">
                                    <FaqAccordion faqs={pageData.faqs || []} />
                                </div>
                            </>
                        ) : (
                            <>
                                {slug === 'power-bi-consulting-australia' ? (
                                    <>
                                        <h2 id="what-is-power-bi-consulting">What is Power BI Consulting?</h2>
                                        <p className="text-xl">
                                            We embed deeply into your operations, connecting raw SQL pipelines directly into robust DAX semantic models.
                                        </p>

                                        <div dangerouslySetInnerHTML={{ __html: bodySectionsHtml }} className="pt-4" />

                                        <h2 id="services">Our Expertise</h2>
                                        <p>From complex data modelling to visually stunning dashboards, we are the industry benchmark.</p>

                                        <h2 id="industries">Industries We Serve</h2>
                                        <p>We build tailored blueprints for healthcare, financial services, construction, and government operations.</p>

                                        <h2 id="cities">Locations</h2>
                                        <p>Operating a remote-first enterprise strategy with physical consultants across major Australian capitals.</p>

                                        <h2 id="process">Implementation Process</h2>
                                        <ol className="space-y-4 ml-6 list-decimal">
                                            <li><strong className="text-foreground">Discovery & Audit:</strong> Understand the business objective.</li>
                                            <li><strong className="text-foreground">Architecture & Foundation:</strong> Build the data warehouse logic.</li>
                                            <li><strong className="text-foreground">DAX & Semantic Layer:</strong> Model metrics for self-service analytics.</li>
                                            <li><strong className="text-foreground">Visualisation:</strong> Develop the intuitive UI dashboards.</li>
                                            <li><strong className="text-foreground">Training & Handover:</strong> Enable internal stakeholders.</li>
                                        </ol>
                                    </>
                                ) : (
                                    <>
                                        <h2 id="overview">Overview</h2>
                                        <div dangerouslySetInnerHTML={{ __html: bodySectionsHtml }} className="pt-4" />

                                        <h2 id="deliverables">What to Expect</h2>
                                        <p>Comprehensive, robust reporting structures tailored to specific analytical requirements.</p>
                                    </>
                                )}

                                <h2 id="faqs">FAQs</h2>
                                <div className="not-prose mt-8 mb-12">
                                    <FaqAccordion faqs={pageData.faqs || []} />
                                </div>
                            </>
                        )}

                        <div id="contact" className="mt-20 not-prose">
                            <CtaModule
                                headline="Let's build something extraordinary"
                                subheadline="Get in touch to uncover the full potential of your business data."
                            />
                        </div>
                    </div>
                </div>

                {/* Dynamic Related Modules Based on the Current Entity */}
                <div className="mt-8">
                    {!isCityPage && pageData.industries && pageData.industries.length > 0 && (
                        <div id="industries" className="scroll-mt-32">
                            <RelatedModules
                                title="Related Industries"
                                items={pageData.industries.map((ind: any) => ({
                                    title: ind.name, href: `/industries/${ind.slug}`, description: ind.overview
                                }))} />
                        </div>
                    )}

                    {!isCityPage && pageData.cities && pageData.cities.length > 0 && (
                        <div id="cities" className="scroll-mt-32">
                            <RelatedModules
                                title="Locations"
                                items={pageData.cities.map((city: any) => ({
                                    title: city.cityName, href: `/${city.slug}`, description: city.heroSubheadline
                                }))} />
                        </div>
                    )}

                    {isCityPage && pageData.industries && pageData.industries.length > 0 && (
                        <div id="industries-we-help" className="scroll-mt-32">
                            <RelatedModules
                                title="Industries We Help in this Region"
                                items={pageData.industries.map((ind: any) => ({
                                    title: ind.name, href: `/industries/${ind.slug}`, description: ind.overview
                                }))} />
                        </div>
                    )}
                </div>
            </PageContainer>
        </>
    )
}
