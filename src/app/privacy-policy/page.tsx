import { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import PageContainer from '@/components/PageContainer'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
    title: 'Privacy Policy | ROAR DATA',
    description: 'ROAR DATA Privacy Policy. Read how we collect, use, and protect your data.',
}

export default function PrivacyPolicyPage() {
    return (
        <>
            <HeroSection
                headline="Privacy Policy"
                subheadline="How we manage and protect your digital information."
                primaryCtaText="Contact Privacy Officer"
                primaryCtaLink="/#contact"
            />

            <PageContainer className="py-12 mb-20">
                <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

                <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert">
                    <p className="lead">
                        At ROAR DATA, we are committed to protecting your privacy and ensuring the security of your personal and business information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you visit our website or engage our consulting services.
                    </p>

                    <h2>1. Information We Collect</h2>
                    <p>We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our services. The personal information that we collect depends on the context of your interactions with us, and may include:</p>
                    <ul>
                        <li>Names and Job Titles</li>
                        <li>Contact Information (email addresses, phone numbers)</li>
                        <li>Business Information needed for consulting purposes</li>
                    </ul>

                    <h2>2. How We Use Your Information</h2>
                    <p>We use personal information collected via our website for a variety of business purposes, including:</p>
                    <ul>
                        <li>To facilitate account creation and logon process.</li>
                        <li>To send administrative information to you.</li>
                        <li>To fulfill and manage your service requests.</li>
                        <li>To post testimonials with your consent.</li>
                        <li>To protect our Services (e.g., fraud monitoring).</li>
                    </ul>

                    <h2>3. Data Security</h2>
                    <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.</p>

                    <h2>4. Cookies and Tracking Technologies</h2>
                    <p>We may use cookies and similar tracking technologies (like Google Analytics 4) to access or store information. You can refuse all cookies or indicate when a cookie is being sent, but some portions of our Service may not function properly.</p>

                    <h2>5. Contact Us</h2>
                    <p>If you have questions or comments about this notice, you may email us at contact@roardata.com.au or by post to our registered head office.</p>

                    <p className="text-sm text-muted-foreground mt-12">
                        Last Updated: {new Date().toLocaleDateString('en-AU')}
                    </p>
                </div>
            </PageContainer>
        </>
    )
}
