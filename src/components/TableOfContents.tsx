"use client"

import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface TocItem {
    id: string
    title: string
    level: number
}

interface TableOfContentsProps {
    items: TocItem[]
    className?: string
}

export default function TableOfContents({ items, className }: TableOfContentsProps) {
    const [activeId, setActiveId] = useState<string>('')

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id)
                    }
                })
            },
            { rootMargin: '-20% 0% -35% 0%' }
        )

        items.forEach((item) => {
            const element = document.getElementById(item.id)
            if (element) {
                observer.observe(element)
            }
        })

        return () => observer.disconnect()
    }, [items])

    if (!items || items.length === 0) return null

    return (
        <div className={cn("sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto glass-panel p-6 rounded-xl", className)}>
            <h3 className="font-semibold text-lg mb-4 text-foreground">On this page</h3>
            <ul className="space-y-3 relative before:absolute before:inset-y-0 before:left-2 before:w-px before:bg-border">
                {items.map((item) => (
                    <li
                        key={item.id}
                        className={cn(
                            "relative pl-6 transition-colors duration-200",
                            item.level === 3 ? "ml-4" : ""
                        )}
                    >
                        <div
                            className={cn(
                                "absolute left-[0.4rem] top-2 h-1.5 w-1.5 rounded-full transition-colors duration-300",
                                activeId === item.id ? "bg-primary" : "bg-transparent border border-muted-foreground"
                            )}
                        />
                        <a
                            href={`#${item.id}`}
                            className={cn(
                                "block text-sm hover:text-primary transition-colors",
                                activeId === item.id
                                    ? "text-foreground font-medium"
                                    : "text-muted-foreground"
                            )}
                            onClick={(e) => {
                                e.preventDefault()
                                const element = document.getElementById(item.id)
                                if (element) {
                                    const y = element.getBoundingClientRect().top + window.scrollY - 100
                                    window.scrollTo({ top: y, behavior: 'smooth' })
                                }
                            }}
                        >
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
