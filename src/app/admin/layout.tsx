'use client';

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
    LayoutDashboard,
    Briefcase,
    MapPin,
    Building2,
    FileText,
    Trophy,
    MessageCircleQuestion,
    LogOut
} from 'lucide-react';
import { logoutAdmin } from './actions';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();

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
        { name: 'Services', href: '/admin/services', icon: Briefcase },
        { name: 'Cities', href: '/admin/cities', icon: MapPin },
        { name: 'Industries', href: '/admin/industries', icon: Building2 },
        { name: 'Case Studies', href: '/admin/case-studies', icon: Trophy },
        { name: 'Insights', href: '/admin/insights', icon: FileText },
        { name: 'FAQs', href: '/admin/faqs', icon: MessageCircleQuestion },
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans flex text-sm">

            {/* Sidebar */}
            <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col hidden md:flex sticky top-0 h-screen">
                <div className="p-6">
                    <Link href="/admin" className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center shadow-lg shadow-brand-500/20">
                            <span className="font-bold text-slate-950 tracking-tighter">RD</span>
                        </div>
                        <span className="font-bold text-lg text-white tracking-tight">Admin</span>
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
                                    ? 'bg-brand-500/10 text-brand-400 font-medium'
                                    : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                                    }`}
                            >
                                <item.icon className={`w-5 h-5 ${isActive ? 'text-brand-400' : 'text-slate-500'}`} />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 mt-auto border-t border-slate-800">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-3 py-2.5 w-full rounded-lg text-slate-400 hover:bg-red-950/30 hover:text-red-400 transition-all text-left"
                    >
                        <LogOut className="w-5 h-5" />
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 overflow-auto bg-slate-950 flex flex-col min-h-screen">
                {/* Mobile Header (simplified) */}
                <header className="md:hidden flex items-center justify-between p-4 border-b border-slate-800 bg-slate-900">
                    <span className="font-bold text-white">RD Admin</span>
                    <button onClick={handleLogout} className="text-sm text-slate-400">Logout</button>
                </header>

                <div className="p-6 md:p-10 max-w-6xl w-full mx-auto">
                    {children}
                </div>
            </main>

        </div>
    );
}
