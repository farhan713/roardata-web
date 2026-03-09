"use client"

import React, { useState } from 'react'
import Link from 'next/link'

interface CaseStudy {
    id: string
    title: string
    slug: string
    outcomeMetrics: string | null
    industry?: {
        name: string
    } | null
}

interface HomeCaseStudiesProps {
    caseStudies: CaseStudy[]
}

export default function HomeCaseStudies({ caseStudies }: HomeCaseStudiesProps) {
    const [showAll, setShowAll] = useState(false)

    const displayedStudies = showAll ? caseStudies : caseStudies.slice(0, 2)

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {displayedStudies.map((cs) => {
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
                                    {metrics.slice(0, 2).map((m: any, i: number) => {
                                        return (
                                            <div key={i}>
                                                <div className="text-2xl font-bold text-foreground mb-1">{m.value}</div>
                                                <div className="text-sm text-muted-foreground">{m.label}</div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {!showAll && caseStudies.length > 2 && (
                <div className="flex justify-center mt-10">
                    <button
                        onClick={() => setShowAll(true)}
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-10 px-8 py-2"
                    >
                        Show More
                    </button>
                </div>
            )}
        </div>
    )
}
