import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Starting DB seed...')

  // 1. Team Members
  const teamMember = await prisma.teamMember.create({
    data: {
      name: 'John Doe',
      role: 'Lead Power BI Consultant',
      bio: 'Expert in DAX, data modeling, and performance optimization.',
    },
  })

  // 2. Services
  const consulting = await prisma.service.create({
    data: {
      name: 'Power BI Consulting',
      slug: 'power-bi-consulting-australia',
      heroHeadline: 'Power BI Consulting Specialists in Australia',
      heroSubheadline: 'National organic power BI domination starting with world-class dashboards.',
      bodySections: JSON.stringify([
        { type: 'text', content: 'We help businesses make data-driven decisions.' }
      ]),
      metaTitle: 'Power BI Consulting in Australia',
      metaDescription: 'Expert Power BI consultants across Australia.',
    },
  })

  const training = await prisma.service.create({
    data: {
      name: 'Power BI Training',
      slug: 'power-bi-training-australia',
      heroHeadline: 'Power BI Training for Your Team',
      heroSubheadline: 'Empower your staff with hands-on Power BI training.',
      bodySections: JSON.stringify([
        { type: 'text', content: 'Comprehensive customized training.' }
      ]),
      metaTitle: 'Power BI Training in Australia',
      metaDescription: 'Professional Power BI training across Australia.',
    },
  })

  const dashboardDev = await prisma.service.create({
    data: {
      name: 'Power BI Dashboard Development',
      slug: 'power-bi-dashboard-development',
      heroHeadline: 'Custom Power BI Dashboard Development',
      heroSubheadline: 'Transform your data into actionable insights.',
      bodySections: JSON.stringify([{ type: 'text', content: 'We build fast, scalable, and intuitive dashboards.' }]),
      metaTitle: 'Power BI Dashboard Development',
      metaDescription: 'Expert dashboard development services.',
    },
  })

  // 3. Cities
  const brisbane = await prisma.city.create({
    data: {
      cityName: 'Brisbane',
      slug: 'power-bi-consultant-brisbane',
      heroHeadline: 'Power BI Consultants Brisbane',
      heroSubheadline: 'Local experts serving South East Queensland.',
      uniqueLocalCopy: 'Our Brisbane-based team provides on-site and remote Power BI consulting.',
      metaTitle: 'Power BI Consulting Brisbane',
      metaDescription: 'Power BI consultants in Brisbane.',
    },
  })

  const sydney = await prisma.city.create({
    data: {
      cityName: 'Sydney',
      slug: 'power-bi-consultant-sydney',
      heroHeadline: 'Power BI Consultants Sydney',
      heroSubheadline: 'Enterprise analytics for NSW businesses.',
      uniqueLocalCopy: 'Serving Sydney businesses with enterprise-grade data solutions.',
      metaTitle: 'Power BI Consulting Sydney',
      metaDescription: 'Power BI consultants in Sydney.',
    },
  })

  // 4. Industries
  const healthcare = await prisma.industry.create({
    data: {
      name: 'Healthcare',
      slug: 'healthcare',
      overview: 'Power BI for hospitals and clinics.',
      commonProblems: JSON.stringify(['Data silos', 'Compliance reporting']),
      useCases: JSON.stringify(['Patient wait time analysis', 'Staff capacity planning']),
      kpis: JSON.stringify([{ group: 'Operational', metrics: ['Admissions', 'Discharges'] }]),
      dataSources: JSON.stringify(['HL7', 'EMR Systems']),
      metaTitle: 'Power BI for Healthcare',
      metaDescription: 'Healthcare analytics and dashboards using Power BI.',
    },
  })

  const finance = await prisma.industry.create({
    data: {
      name: 'Finance',
      slug: 'finance',
      overview: 'Power BI for financial services.',
      commonProblems: JSON.stringify(['Manual reporting', 'Reconciliation errors']),
      useCases: JSON.stringify(['Profit and loss reporting', 'Cash flow analysis']),
      kpis: JSON.stringify([{ group: 'Financial', metrics: ['EBITDA', 'Gross Margin'] }]),
      dataSources: JSON.stringify(['Xero', 'SAP', 'Oracle']),
      metaTitle: 'Power BI for Finance',
      metaDescription: 'Financial analytics and dashboards using Power BI.',
    },
  })

  // 5. Case Studies
  const caseStudy1 = await prisma.caseStudy.create({
    data: {
      title: 'Healthcare Analytics Transformation',
      slug: 'healthcare-analytics-transformation',
      outcomeMetrics: JSON.stringify([
        { label: 'Time Saved', value: '20 hrs/week' },
        { label: 'Data Sources Integrated', value: '5' }
      ]),
      bodySections: JSON.stringify([
        { type: 'text', content: 'We consolidated 5 legacy systems into a single Power BI model.' }
      ]),
      industryId: healthcare.id,
      servicesUsed: { connect: [{ id: consulting.id }, { id: dashboardDev.id }] },
      cities: { connect: [{ id: brisbane.id }] },
    },
  })

  // 6. Insight Articles
  const insight1 = await prisma.insightArticle.create({
    data: {
      title: 'Top 5 DAX Performance Tuning Tips',
      slug: 'dax-performance-tuning-tips',
      summary: 'Learn how to optimize your DAX measures for blazing fast Power BI reports.',
      body: JSON.stringify([{ type: 'text', content: 'Avoid using FILTER over entire tables when possible...' }]),
      authorId: teamMember.id,
      industries: { connect: [{ id: healthcare.id }] },
      services: { connect: [{ id: consulting.id }] },
      cities: { connect: [{ id: sydney.id }] },
    },
  })

  // 7. FAQs
  const faq1 = await prisma.fAQ.create({
    data: {
      question: 'What is Power BI consulting?',
      answer: 'It is a service where experts help you design, build, and deploy data analytics solutions using Microsoft Power BI.',
      services: { connect: [{ id: consulting.id }] },
      cities: { connect: [{ id: brisbane.id }, { id: sydney.id }] },
    },
  })

  console.log('Seed completed successfully.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
