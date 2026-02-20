"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface FAQItem {
    question: string
    answer: string
}

interface FaqAccordionProps {
    faqs: FAQItem[]
    className?: string
}

export default function FaqAccordion({ faqs, className }: FaqAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    if (!faqs || faqs.length === 0) return null

    // Generate JSON-LD Schema for FAQs
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    }

    return (
        <div className={cn("w-full max-w-3xl mx-auto space-y-4", className)}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            {faqs.map((faq, index) => {
                const isOpen = openIndex === index
                return (
                    <div
                        key={index}
                        className="border border-border rounded-lg overflow-hidden bg-card text-card-foreground shadow-sm hover:shadow transition-shadow"
                    >
                        <button
                            onClick={() => toggle(index)}
                            className="w-full flex justify-between items-center p-5 text-left font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            aria-expanded={isOpen}
                        >
                            <span className="text-lg">{faq.question}</span>
                            <ChevronDown
                                className={cn(
                                    "w-5 h-5 text-muted-foreground transition-transform duration-300",
                                    isOpen && "rotate-180"
                                )}
                            />
                        </button>
                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    initial="collapsed"
                                    animate="open"
                                    exit="collapsed"
                                    variants={{
                                        open: { opacity: 1, height: "auto" },
                                        collapsed: { opacity: 0, height: 0 }
                                    }}
                                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                                >
                                    <div className="px-5 pb-5 text-muted-foreground">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )
            })}
        </div>
    )
}
