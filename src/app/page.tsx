import React from 'react'
import { prisma } from '@/lib/prisma'

export const revalidate = 3600; // Cache for 1 hour on Vercel CDN
import HomeHero from '@/components/HomeHero'
import ClientLogos from '@/components/ClientLogos'
import HomeIntegrations from '@/components/HomeIntegrations'
import PageContainer from '@/components/PageContainer'
import RelatedModules from '@/components/RelatedModules'
import CtaModule from '@/components/CtaModule'
import Link from 'next/link'
import { CheckCircle2, BarChart, Database, Zap } from 'lucide-react'

export default async function Home() {
  const [services, industries, cities, caseStudies] = await Promise.all([
    prisma.service.findMany({ take: 3 }),
    prisma.industry.findMany({ take: 6, orderBy: { name: 'asc' } }),
    prisma.city.findMany({ orderBy: { cityName: 'asc' } }),
    prisma.caseStudy.findMany({
      take: 2,
      include: { industry: true }
    })
  ])

  return (
    <div className="flex flex-col min-h-screen">
      <HomeHero />
      <ClientLogos />
      <HomeIntegrations />

      <PageContainer className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 tracking-tight">Why Choose ROAR DATA?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We don't just build dashboards. We build robust, scalable analytics engines that become the central nervous system of your business.
            </p>
            <ul className="space-y-4">
              {['Australian based team of certified experts', 'No vendor lock-in, just clean architecture', 'Focus on adoption and business outcomes'].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-primary mr-3 shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                <BarChart className="w-6 h-6" />
              </div>
              <h3 className="font-bold mb-2">Visualisation</h3>
              <p className="text-sm text-muted-foreground">Stunning, intuitive reports</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center translate-y-8">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="font-bold mb-2">Data Modelling</h3>
              <p className="text-sm text-muted-foreground">Robust star schemas</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-bold mb-2">Performance</h3>
              <p className="text-sm text-muted-foreground">Lightning-fast DAX</p>
            </div>
          </div>
        </div>
      </PageContainer>

      <PageContainer>
        <RelatedModules
          title="Our Premium Services"
          items={services.map(s => ({
            title: s.name,
            href: `/${s.slug}`,
            description: s.heroSubheadline
          }))}
        />

        <RelatedModules
          title="Industries We Transform"
          items={industries.map(i => ({
            title: i.name,
            href: `/industries/${i.slug}`,
            description: i.overview
          }))}
        />

        <div className="flex justify-end mt-4 px-4 md:px-0">
          <Link href="/industries" className="text-primary font-semibold hover:underline">
            View all industries &rarr;
          </Link>
        </div>

        <section className="py-20 border-t border-border mt-16">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Proven Results</h2>
              <p className="text-muted-foreground max-w-2xl">See how we've helped Australian businesses achieve operational excellence through data.</p>
            </div>
            <Link href="/case-studies" className="text-primary font-semibold hover:underline mt-4 md:mt-0">
              View all case studies &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((cs) => {
              const metrics = JSON.parse(cs.outcomeMetrics || '[]')
              return (
                <div key={cs.id} className="glass-panel rounded-2xl overflow-hidden group">
                  <div className="p-8">
                    <div className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
                      {cs.industry?.name}
                    </div>
                    <h3 className="text-2xl font-bold mb-6 group-hover:text-primary transition-colors">
                      <Link href={`/case-studies/${cs.slug}`}>
                        {cs.title}
                      </Link>
                    </h3>
                    <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
                      {metrics.slice(0, 2).map((m: any, i: number) => (
                        <div key={i}>
                          <div className="text-2xl font-bold text-foreground mb-1">{m.value}</div>
                          <div className="text-sm text-muted-foreground">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="py-16 text-center">
          <h2 className="text-2xl font-bold mb-8">Serving Businesses Across Australia</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {cities.map(city => (
              <Link
                key={city.id}
                href={`/${city.slug}`}
                className="px-6 py-3 rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-colors font-medium text-muted-foreground hover:text-foreground"
              >
                {city.cityName}
              </Link>
            ))}
          </div>
        </section>
      </PageContainer>

      <CtaModule
        headline="Ready to Dominate Your Data?"
        subheadline="Schedule a free strategy session with a senior Power BI architect to discuss your business objectives."
      />
    </div>
  )
}
