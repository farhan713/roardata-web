'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
    LayoutDashboard,
    Briefcase,
    MapPin,
    Building2,
    FileText,
    Trophy,
    MessageCircleQuestion,
    LogOut,
    Menu,
    X
} from 'lucide-react';
import { logoutAdmin } from './actions';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // The login page operates outside of this dashboard shell
    if (pathname === '/admin/login') {
        return <>{children}</>;
    }

    const handleLogout = async () => {
        await logoutAdmin();
        router.push('/admin/login');
        router.refresh();
    };

    const navItems = [
        { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
        { name: 'Chatbot Leads', href: '/admin/chatbot-leads', icon: MessageCircleQuestion },
        { name: 'Services', href: '/admin/services', icon: Briefcase },
        { name: 'Cities', href: '/admin/cities', icon: MapPin },
        { name: 'Industries', href: '/admin/industries', icon: Building2 },
        { name: 'Case Studies', href: '/admin/case-studies', icon: Trophy },
        { name: 'Insights', href: '/admin/insights', icon: FileText },
        { name: 'FAQs', href: '/admin/faqs', icon: MessageCircleQuestion },
    ];

    return (
        <div className="min-h-screen bg-white text-black font-sans flex text-sm relative z-0">

            {/* Sidebar */}
            <aside className="w-64 bg-secondary border-r border-border flex flex-col hidden md:flex sticky top-0 h-screen">
                <div className="p-6">
                    <Link href="/admin" className="flex items-center gap-3">
                        <Image
                            src="/roarlogo.png"
                            alt="ROAR DATA Logo"
                            width={300}
                            height={80}
                            className="object-contain h-16 w-auto"
                            priority
                        />
                        <span className="font-bold text-lg text-black tracking-tight border-l pl-3 border-border">Admin</span>
                    </Link>
                </div>

                <nav className="flex-1 px-4 space-y-1">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/admin');
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${isActive
                                    ? 'bg-primary/10 text-primary font-bold'
                                    : 'text-black/70 hover:bg-black/5 hover:text-black'
                                    }`}
                            >
                                <item.icon className={`w-5 h-5 ${isActive ? 'text-primary' : 'text-black/50'}`} />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 mt-auto border-t border-border">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-3 py-2.5 w-full rounded-lg text-destructive hover:bg-destructive/10 transition-all text-left font-medium"
                    >
                        <LogOut className="w-5 h-5" />
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Mobile Overlay Sidebar */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 z-50 flex">
                    <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)}></div>
                    <aside className="relative w-64 max-w-[80%] bg-secondary flex flex-col h-full shadow-xl animate-in slide-in-from-left">
                        <div className="p-4 border-b border-border flex justify-between items-center bg-white">
                            <Image
                                src="/roarlogo.png"
                                alt="ROAR DATA Logo"
                                width={240}
                                height={64}
                                className="object-contain h-12 w-auto"
                            />
                            <button onClick={() => setIsMobileMenuOpen(false)} className="text-black/70 hover:text-black">
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/admin');
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${isActive
                                            ? 'bg-primary/10 text-primary font-bold'
                                            : 'text-black/70 hover:bg-black/5 hover:text-black'
                                            }`}
                                    >
                                        <item.icon className={`w-5 h-5 ${isActive ? 'text-primary' : 'text-black/50'}`} />
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </nav>
                        <div className="p-4 mt-auto border-t border-border">
                            <button
                                onClick={handleLogout}
                                className="flex items-center gap-3 px-3 py-2.5 w-full rounded-lg text-destructive hover:bg-destructive/10 transition-all text-left font-medium"
                            >
                                <LogOut className="w-5 h-5" />
                                Sign Out
                            </button>
                        </div>
                    </aside>
                </div>
            )}

            {/* Main Content Area */}
            <main className="flex-1 overflow-auto bg-white flex flex-col min-h-screen">
                {/* Mobile Header (simplified) */}
                <header className="md:hidden flex items-center justify-between p-4 border-b border-border bg-secondary sticky top-0 z-40">
                    <div className="flex items-center gap-3">
                        <button onClick={() => setIsMobileMenuOpen(true)} className="p-1 -ml-1 text-black/70 hover:text-black">
                            <Menu className="w-6 h-6" />
                        </button>
                        <Image
                            src="/roarlogo.png"
                            alt="ROAR DATA Logo"
                            width={240}
                            height={64}
                            className="object-contain h-12 w-auto"
                        />
                    </div>
                    <button onClick={handleLogout} className="text-sm text-destructive font-semibold">Logout</button>
                </header>

                <div className="p-6 md:p-10 max-w-6xl w-full mx-auto">
                    {children}
                </div>
            </main>

        </div>
    );
}
