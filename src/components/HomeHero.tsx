import React from 'react'
import PageContainer from './PageContainer'
import Link from 'next/link'
import Image from 'next/image'

export default function HomeHero() {
    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#F4F7FC] to-[#E9F0F9] lg:min-h-[85vh] xl:min-h-[800px] flex items-center pt-20 pb-16 lg:py-0">

            {/* The decorative geometric or blurred layers behind everything */}
            <div className="absolute top-[5%] right-[-5%] md:right-[5%] w-[500px] h-[500px] rounded-full border border-white/80 bg-white/40 opacity-70 blur-3xl -z-10" />
            <div className="absolute top-[15%] right-[10%] w-[400px] h-[400px] rounded-full border-[1px] border-white/80 opacity-60 -z-10" />

            {/* The Dashboard acts as an absolute 'background' spanning mostly right side but fully under the left card on desktop */}
            <div className="absolute inset-y-0 right-0 w-full lg:w-[85%] lg:py-12 lg:pr-12 pointer-events-none z-0">
                <div
                    className="relative w-full h-full lg:rounded-[2rem] overflow-hidden shadow-2xl animate-fade-in-scale will-change-transform"
                >
                    <Image
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                        alt="Dashboard Preview"
                        fill
                        priority
                        className="object-cover object-left"
                        sizes="(max-width: 1024px) 100vw, 85vw"
                    />

                    {/* A subtle gradient fading from the left edge over the image helps blend it into the background */}
                    <div className="absolute inset-y-0 left-0 w-[40%] bg-gradient-to-r from-[#F4F7FC] to-transparent opacity-90 hidden lg:block" />
                </div>
            </div>

            {/* The Container for the floating Left Card */}
            <PageContainer className="relative z-10 w-full">

                <div
                    className="w-full lg:max-w-[440px] xl:max-w-[480px] mt-32 lg:mt-0 animate-fade-in-right will-change-transform"
                >
                    {/* Glassmorphism Card */}
                    <div className="bg-white/70 backdrop-blur-3xl rounded-[2rem] p-6 sm:p-8 lg:p-10 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.15)] border border-white/90 relative overflow-hidden">

                        {/* A tiny white blur inside the card pointing top right to mimic the appspace card shine */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/50 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />

                        <div className="relative z-10">
                            {/* Small blue uppercase header */}
                            <div className="text-[#0055ff] font-bold text-[11px] tracking-widest uppercase mb-4">
                                POWER BI CONSULTING SPECIALISTS
                            </div>

                            {/* Main large headline exactly like appspace style */}
                            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-[#111827] leading-[1.12] mb-5">
                                Power BI Consulting Specialists in Australia
                            </h1>

                            <p className="text-sm sm:text-base text-slate-600 mb-8 leading-relaxed font-normal">
                                We transform your messy data into beautiful, lightning-fast dashboards that drive real business decisions.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <Link
                                    href="/#contact"
                                    className="inline-flex items-center justify-center rounded-full bg-[#1b62f8] px-8 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-[#144ecc] hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
                                >
                                    Book Consultacy
                                </Link>

                                <Link
                                    href="/case-studies"
                                    className="inline-flex items-center justify-center rounded-full border-2 border-[#1b62f8] bg-transparent px-8 py-3.5 text-sm font-semibold text-[#1b62f8] hover:bg-blue-50 transition-all duration-300 w-full sm:w-auto"
                                >
                                    Case Study
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </PageContainer>
        </section>
    )
}
