"use client"

import React from 'react'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface BreadcrumbItem {
    label: string
    href?: string
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[]
    className?: string
}

export default function Breadcrumbs({ items, className }: BreadcrumbsProps) {
    if (!items || items.length === 0) return null

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://roardata.com.au/"
            },
            ...items.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 2,
                "name": item.label,
                "item": item.href ? `https://roardata.com.au${item.href}` : undefined
            }))
        ]
    }

    return (
        <nav className={cn("flex text-sm text-muted-foreground mb-6", className)} aria-label="Breadcrumb">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                    <Link
                        href="/"
                        className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <Home className="w-4 h-4 mr-2" />
                        Home
                    </Link>
                </li>
                {items.map((item, index) => {
                    const isLast = index === items.length - 1
                    return (
                        <li key={index}>
                            <div className="flex items-center">
                                <ChevronRight className="w-4 h-4 text-muted-foreground mx-1" />
                                {isLast || !item.href ? (
                                    <span className="text-foreground font-medium ml-1 md:ml-2">
                                        {item.label}
                                    </span>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="ml-1 md:ml-2 hover:text-foreground transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        </li>
                    )
                })}
            </ol>
        </nav>
    )
}
