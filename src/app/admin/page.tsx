import { LayoutDashboard } from 'lucide-react';

export default function AdminDashboardPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">Dashboard</h1>
                    <p className="text-slate-400 mt-1">Welcome to the ROAR DATA content management system.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {/* Placeholder Stat Cards */}
                <div className="p-6 rounded-2xl bg-slate-900 ring-1 ring-white/5 shadow-xl relative overflow-hidden group">
                    <div className="w-12 h-12 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center mb-4 group-hover:bg-brand-500 group-hover:text-slate-950 transition-colors">
                        <LayoutDashboard className="w-6 h-6" />
                    </div>
                    <h3 className="text-slate-400 text-sm font-medium">Headless Architecture</h3>
                    <p className="text-2xl font-semibold text-white mt-1">Active</p>
                </div>
            </div>

            <div className="mt-12 p-8 rounded-2xl bg-slate-900 ring-1 ring-white/5">
                <h2 className="text-xl font-semibold text-white mb-4">Getting Started</h2>
                <p className="text-slate-400 mb-4 max-w-2xl leading-relaxed">
                    Use the sidebar navigation to manage your website's content. Any changes made here are instantly saved to the secure cloud database and reflected live on the front-end Next.js application without requiring a rebuild.
                </p>
                <div className="flex gap-4 text-sm mt-6">
                    <div className="flex items-center gap-2 text-emerald-400 bg-emerald-400/10 px-3 py-1.5 rounded-full font-medium">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Cloud Database Connected
                    </div>
                </div>
            </div>
        </div>
    );
}
