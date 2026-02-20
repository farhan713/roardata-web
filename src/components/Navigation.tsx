"use client"

import * as React from 'react'
import Link from 'next/link'
import { Menu, X, BarChart2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import PageContainer from './PageContainer'

const navLinks = [
    { href: '/power-bi-consulting-australia', label: 'Consulting' },
    { href: '/industries', label: 'Industries' },
    { href: '/insights', label: 'Insights' },
    { href: '/case-studies', label: 'Case Studies' },
]

export default function Navigation() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [hasScrolled, setHasScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={cn(
                'fixed top-0 w-full z-50 transition-all duration-300',
                hasScrolled ? 'glass-panel py-3' : 'bg-transparent py-5'
            )}
        >
            <PageContainer>
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="bg-primary p-2 rounded-lg group-hover:bg-primary/90 transition-colors">
                            <BarChart2 className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <span className="text-xl font-bold tracking-tight">ROAR DATA</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/#contact"
                            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
                        >
                            Book Consultation
                        </Link>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-foreground"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Nav */}
                {isOpen && (
                    <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-4 animate-in slide-in-from-top-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/#contact"
                            className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground h-11 px-8"
                            onClick={() => setIsOpen(false)}
                        >
                            Book Consultation
                        </Link>
                    </nav>
                )}
            </PageContainer>
        </header>
    )
}
