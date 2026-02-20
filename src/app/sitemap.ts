import { MetadataRoute } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const baseUrl = 'https://roardata.com.au'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [services, cities, industries, insights, caseStudies] = await Promise.all([
    prisma.service.findMany({ select: { slug: true, updatedAt: true } }),
    prisma.city.findMany({ select: { slug: true, updatedAt: true } }),
    prisma.industry.findMany({ select: { slug: true, updatedAt: true } }),
    prisma.insightArticle.findMany({ select: { slug: true, updatedAt: true } }),
    prisma.caseStudy.findMany({ select: { slug: true, updatedAt: true } }),
  ])

  const staticPages = [
    '',
    '/power-bi-consulting-australia',
    '/industries',
    '/insights',
    '/case-studies',
    '/privacy-policy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const dynamicRoutes = [
    ...services.map((s: { slug: string, updatedAt: Date }) => ({ url: `${baseUrl}/${s.slug}`, lastModified: s.updatedAt, changeFrequency: 'monthly' as const, priority: 0.8 })),
    ...cities.map((c: { slug: string, updatedAt: Date }) => ({ url: `${baseUrl}/${c.slug}`, lastModified: c.updatedAt, changeFrequency: 'monthly' as const, priority: 0.7 })),
    ...industries.map((i: { slug: string, updatedAt: Date }) => ({ url: `${baseUrl}/industries/${i.slug}`, lastModified: i.updatedAt, changeFrequency: 'monthly' as const, priority: 0.7 })),
    ...insights.map((i: { slug: string, updatedAt: Date }) => ({ url: `${baseUrl}/insights/${i.slug}`, lastModified: i.updatedAt, changeFrequency: 'weekly' as const, priority: 0.6 })),
    ...caseStudies.map((c: { slug: string, updatedAt: Date }) => ({ url: `${baseUrl}/case-studies/${c.slug}`, lastModified: c.updatedAt, changeFrequency: 'monthly' as const, priority: 0.6 })),
  ]

  return [...staticPages, ...dynamicRoutes]
}
