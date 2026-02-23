import React from 'react'
import PageContainer from './PageContainer'
import {
    SiSap, SiOracle, SiSalesforce,
    SiHubspot, SiZoho, SiZendesk, SiXero, SiShopify, SiWoo, SiSquare,
    SiStripe, SiPaypal, SiAutodesk, SiSnowflake,
    SiAmazonwebservices, SiDatabricks, SiGoogleanalytics,
    SiMailchimp, SiJira, SiGithub, SiSlack,
} from 'react-icons/si'
// Using lucide instances for enterprise apps that don't have exact simple-icons available currently
import { Database, Cloud, FileSpreadsheet, MonitorSmartphone, LayoutDashboard, Component, Briefcase, Calculator, Store, Server, Bot, MessageSquare, Network } from 'lucide-react'

// Helper component for the individual logo tiles
interface LogoTileProps {
    name: string
    icon: React.ReactNode
    color?: string
}

function LogoTile({ name, icon, color = "text-slate-700" }: LogoTileProps) {
    return (
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] border border-slate-100 min-w-[150px] h-[150px] transition-transform hover:-translate-y-1 duration-300 mx-auto">
            <div className={`text-5xl mb-3 ${color}`}>
                {icon}
            </div>
            <span className="text-[13px] font-semibold text-slate-800 text-center leading-tight">
                {name}
            </span>
        </div>
    )
}

export default function HomeIntegrations() {

    // Row 1: Ecosystem & ERP
    const row1 = [
        { name: "Ecosystem", icon: <LayoutDashboard size={48} strokeWidth={1.5} />, color: "text-[#00a4ef]" },
        { name: "Excel", icon: <FileSpreadsheet size={48} strokeWidth={1.5} />, color: "text-[#217346]" },
        { name: "SharePoint", icon: <MonitorSmartphone size={48} strokeWidth={1.5} />, color: "text-[#0078d4]" },
        { name: "Teams", icon: <MessageSquare size={48} strokeWidth={1.5} />, color: "text-[#6264a7]" },
        { name: "Dynamics 365", icon: <Component size={48} strokeWidth={1.5} />, color: "text-[#002050]" },
        { name: "SQL Server", icon: <Database size={48} strokeWidth={1.5} />, color: "text-[#cc292b]" },
        { name: "Azure", icon: <Cloud size={48} strokeWidth={1.5} />, color: "text-[#0089d6]" },
        { name: "SAP", icon: <SiSap />, color: "text-[#0ba7e3]" },
        { name: "Oracle", icon: <SiOracle />, color: "text-[#f80000]" },
        { name: "NetSuite", icon: <Briefcase size={48} strokeWidth={1.5} />, color: "text-[#0a2046]" },
    ]

    // Row 2: CRM, Accounting, POS
    const row2 = [
        { name: "Salesforce", icon: <SiSalesforce />, color: "text-[#00a1e0]" },
        { name: "HubSpot", icon: <SiHubspot />, color: "text-[#ff7a59]" },
        { name: "Zoho", icon: <SiZoho />, color: "text-[#106bc5]" },
        { name: "Zendesk", icon: <SiZendesk />, color: "text-[#03363d]" },
        { name: "Xero", icon: <SiXero />, color: "text-[#13b5ea]" },
        { name: "Shopify", icon: <SiShopify />, color: "text-[#95bf47]" },
        { name: "WooCommerce", icon: <SiWoo />, color: "text-[#96588a]" },
        { name: "Square", icon: <SiSquare />, color: "text-[#3e4348]" },
        { name: "Stripe", icon: <SiStripe />, color: "text-[#008cdd]" },
        { name: "PayPal", icon: <SiPaypal />, color: "text-[#00457c]" },
    ]

    // Row 3: Data, Ops, Collab
    const row3 = [
        { name: "Autodesk", icon: <SiAutodesk />, color: "text-[#0696d7]" },
        { name: "ServiceNow", icon: <Bot size={48} strokeWidth={1.5} />, color: "text-[#81b5a1]" },
        { name: "Workday", icon: <Network size={48} strokeWidth={1.5} />, color: "text-[#005cb9]" },
        { name: "Snowflake", icon: <SiSnowflake />, color: "text-[#29b5e8]" },
        { name: "BigQuery", icon: <Database size={48} strokeWidth={1.5} />, color: "text-[#669df6]" },
        { name: "AWS", icon: <SiAmazonwebservices />, color: "text-[#232f3e]" },
        { name: "Databricks", icon: <SiDatabricks />, color: "text-[#ff3621]" },
        { name: "Analytics", icon: <SiGoogleanalytics />, color: "text-[#e37400]" },
        { name: "Mailchimp", icon: <SiMailchimp />, color: "text-[#ffe01b]" },
        { name: "Power Apps", icon: <Store size={48} strokeWidth={1.5} />, color: "text-[#6e3797]" },
        { name: "Slack", icon: <SiSlack />, color: "text-[#4a154b]" },
        { name: "Jira", icon: <SiJira />, color: "text-[#0052cc]" },
        { name: "GitHub", icon: <SiGithub />, color: "text-[#181717]" },
    ]

    return (
        <section className="py-24 overflow-hidden bg-white">
            <PageContainer>
                <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-8">

                    {/* Left Side: The Grid of Logos */}
                    <div className="w-full lg:w-[60%] relative h-[600px] rounded-[3rem] bg-gradient-to-br from-[#f8fafc] to-[#eef2f6] overflow-hidden -mx-4 lg:mx-0">
                        {/* Static Fades to smooth infinite scroll boundaries */}
                        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#f8fafc] to-transparent z-10 pointer-events-none" />
                        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#eef2f6] to-transparent z-10 pointer-events-none" />

                        <div className="absolute inset-0 grid grid-cols-3 gap-6 px-1 lg:px-6 pt-10 pb-6 mask-image: linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)">

                            {/* Column 1 - Animates UP */}
                            <div
                                className="flex flex-col gap-6 animate-marquee-up will-change-transform"
                                style={{ "--duration": "35s" } as React.CSSProperties}
                            >
                                {[...row1, ...row1, ...row1].map((item, i) => (
                                    <LogoTile key={`col1-${i}`} {...item} />
                                ))}
                            </div>

                            {/* Column 2 - Animates DOWN */}
                            <div
                                className="flex flex-col gap-6 animate-marquee-down will-change-transform"
                                style={{ "--duration": "40s" } as React.CSSProperties}
                            >
                                {[...row2, ...row2, ...row2].map((item, i) => (
                                    <LogoTile key={`col2-${i}`} {...item} />
                                ))}
                            </div>

                            {/* Column 3 - Animates UP faster */}
                            <div
                                className="flex flex-col gap-6 animate-marquee-up will-change-transform"
                                style={{ "--duration": "30s" } as React.CSSProperties}
                            >
                                {[...row3, ...row3, ...row3].map((item, i) => (
                                    <LogoTile key={`col3-${i}`} {...item} />
                                ))}
                            </div>

                        </div>
                    </div>

                    {/* Right Side: Text Content */}
                    <div className="w-full lg:w-[40%] lg:pl-16">
                        <div className="text-[#0055ff] font-bold text-xs tracking-wider uppercase mb-5">
                            INTEGRATIONS
                        </div>

                        <h2 className="text-4xl lg:text-[48px] font-normal text-slate-900 leading-[1.12] mb-6 tracking-tight">
                            Get more from your technology investments
                        </h2>

                        <p className="text-lg lg:text-xl text-slate-600 leading-relaxed font-normal">
                            Roar Data plugs directly into your favorite apps, databases, accounting software, and ERPs for an experience that means less manual data pulling and more value from your tech stack.
                        </p>
                    </div>

                </div>
            </PageContainer>
        </section>
    )
}
