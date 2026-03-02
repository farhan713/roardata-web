"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, Mail } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

interface CtaModuleProps {
    headline: string
    subheadline: string
    primaryText?: string
    primaryLink?: string
    secondaryText?: string
    secondaryLink?: string
}

export default function CtaModule({
    headline,
    subheadline,
    primaryText = "Book a Free Consultation",
    primaryLink = "#book-consultation",
    secondaryText = "Call +61 433 345 000",
    secondaryLink = "tel:+61433345000"
}: CtaModuleProps) {
    return (
        <section className="py-24 relative overflow-hidden mt-16 rounded-3xl mx-4 sm:mx-8 lg:mx-auto max-w-7xl">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-brand-500 z-0" />

            {/* Animated Light Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/10 blur-[120px] rounded-full z-0 pointer-events-none" />

            <div className="relative z-10 px-6 sm:px-12 text-center max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
                >
                    {headline}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-lg sm:text-xl text-brand-100/90 mb-10 max-w-2xl mx-auto"
                >
                    {subheadline}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href={primaryLink}
                        onClick={(e) => {
                            if (primaryLink === '#book-consultation' || primaryLink === '#chatbot') {
                                e.preventDefault();
                                window.dispatchEvent(new Event('openBookModal'));
                                // Also update the hash stealthily
                                history.pushState(null, '', window.location.pathname + primaryLink);
                            }
                        }}
                        className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 font-bold text-destructive-foreground bg-destructive hover:bg-destructive/90 rounded-lg shadow-xl shadow-destructive/20 transition-all overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center">
                            {primaryText}
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 h-full w-full bg-white/20 scale-0 group-hover:scale-100 rounded-lg transition-transform duration-300 ease-out z-0" />
                    </Link>

                    <div className="flex items-center justify-center gap-4 w-full sm:w-auto">
                        <Link
                            href={secondaryLink}
                            className="inline-flex items-center justify-center w-14 h-14 text-white border border-white/30 hover:bg-white/10 rounded-lg transition-colors group"
                            title={secondaryText}
                            aria-label="Call Us"
                        >
                            <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        </Link>

                        <Link
                            href="https://api.whatsapp.com/send/?phone=61433345000&text&type=phone_number&app_absent=0"
                            className="inline-flex items-center justify-center w-14 h-14 text-white border border-white/30 hover:bg-[#25D366] hover:border-[#25D366] rounded-lg transition-colors group"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="WhatsApp"
                            aria-label="WhatsApp"
                        >
                            <FaWhatsapp className="w-7 h-7 group-hover:scale-110 transition-transform" />
                        </Link>

                        <Link
                            href="mailto:contact@roardata.com.au"
                            className="inline-flex items-center justify-center w-14 h-14 text-white border border-white/30 hover:bg-white/10 rounded-lg transition-colors group"
                            title="Email Us"
                            aria-label="Email Us"
                        >
                            <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
