import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export interface RelatedItem {
    title: string
    href: string
    description?: string
    image?: string
    icon?: React.ReactNode
}

interface RelatedModulesProps {
    title: string
    items: RelatedItem[]
}

export default function RelatedModules({ title, items }: RelatedModulesProps) {
    if (!items || items.length === 0) return null

    return (
        <section className="py-12 border-t border-border mt-16">
            <h2 className="text-2xl font-bold tracking-tight mb-8 text-foreground">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        className="group block h-full p-6 glass-panel rounded-xl hover:border-primary/50 hover:bg-muted/50 transition-all duration-300 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {item.icon && (
                            <div className="text-primary mb-4 p-2.5 bg-primary/10 rounded-lg w-fit h-fit flex items-center justify-center">
                                {item.icon}
                            </div>
                        )}

                        <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors flex items-center justify-between">
                            <span className="line-clamp-2">{item.title}</span>
                            <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary shrink-0 ml-4" />
                        </h3>

                        {item.description && (
                            <p className="text-sm text-muted-foreground line-clamp-3 mt-2">
                                {item.description}
                            </p>
                        )}
                    </Link>
                ))}
            </div>
        </section>
    )
}
