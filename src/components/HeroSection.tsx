"use client"

import React from 'react'
import { motion } from 'framer-motion'
import PageContainer from './PageContainer'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface HeroSectionProps {
    headline: string
    subheadline: string
    primaryCtaText?: string
    primaryCtaLink?: string
    secondaryCtaText?: string
    secondaryCtaLink?: string
}

export default function HeroSection({
    headline,
    subheadline,
    primaryCtaText = 'Book a Consultation',
    primaryCtaLink = '/#contact',
    secondaryCtaText = 'View Case Studies',
    secondaryCtaLink = '/case-studies',
}: HeroSectionProps) {
    return (
        <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-40">
            {/* Premium Gradient Background */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-100 via-background to-background dark:from-brand-950/40 dark:via-background dark:to-background"></div>

            {/* Animated subtle shapes */}
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 blur-3xl opacity-30 dark:opacity-20 pointer-events-none -z-10">
                <div className="aspect-square h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-brand-300 to-brand-500 animate-[spin_20s_linear_infinite]" />
            </div>

            <PageContainer>
                <div className="mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
                            {headline.split(' ').map((word, i) => (
                                <span key={i} className={i >= headline.split(' ').length - 2 ? "text-gradient" : ""}>
                                    {word}{' '}
                                </span>
                            ))}
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto"
                    >
                        {subheadline}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link
                            href={primaryCtaLink}
                            className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 hover:shadow-primary/25 hover:shadow-xl transition-all duration-300 w-full sm:w-auto overflow-hidden group relative"
                        >
                            <span className="relative z-10 flex items-center">
                                {primaryCtaText}
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 h-full w-full bg-white/20 scale-0 group-hover:scale-100 rounded-lg transition-transform duration-300 ease-out z-0"></div>
                        </Link>

                        <Link
                            href={secondaryCtaLink}
                            className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-8 py-4 text-sm font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300 w-full sm:w-auto"
                        >
                            {secondaryCtaText}
                        </Link>
                    </motion.div>
                </div>
            </PageContainer>
        </section>
    )
}
