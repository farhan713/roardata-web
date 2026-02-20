import { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import PageContainer from '@/components/PageContainer'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
    title: 'Terms of Service | ROAR DATA',
    description: 'ROAR DATA Terms of Service. Read the rules and guidelines for using our website and services.',
}

export default function TermsPage() {
    return (
        <>
            <HeroSection
                headline="Terms of Service"
                subheadline="Rules and guidelines for interacting with ROAR DATA."
                primaryCtaText="Contact Support"
                primaryCtaLink="/#contact"
            />

            <PageContainer className="py-12 mb-20">
                <Breadcrumbs items={[{ label: 'Terms of Service' }]} />

                <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert">
                    <p className="lead">
                        These Terms of Service ("Terms") govern your access to and use of the ROAR DATA website, services, and applications (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms.
                    </p>

                    <h2>1. Use of Services</h2>
                    <p>You may use our Services only as permitted by law and according to these Terms. We may suspend or stop providing our Services to you if you do not comply with our terms or policies or if we are investigating suspected misconduct.</p>

                    <h2>2. Intellectual Property</h2>
                    <p>The Service and its original content, features, and functionality are and will remain the exclusive property of ROAR DATA. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of ROAR DATA.</p>

                    <h2>3. Limitation of Liability</h2>
                    <p>In no event shall ROAR DATA, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>

                    <h2>4. Governing Law</h2>
                    <p>These Terms shall be governed and construed in accordance with the laws of Australia, without regard to its conflict of law provisions.</p>

                    <h2>5. Changes to Terms</h2>
                    <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>

                    <p className="text-sm text-muted-foreground mt-12">
                        Last Updated: {new Date().toLocaleDateString('en-AU')}
                    </p>
                </div>
            </PageContainer>
        </>
    )
}
