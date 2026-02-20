import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { PlusCircle, Pencil, Trash2 } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function AdminIndustriesPage() {
    const industries = await prisma.industry.findMany({
        orderBy: { name: 'asc' },
    });

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">Industries</h1>
                    <p className="text-slate-400 mt-1">Manage the business sectors ROAR DATA specializes in.</p>
                </div>
                <Link
                    href="/admin/industries/new"
                    className="flex items-center gap-2 px-4 py-2 bg-brand-500 hover:bg-brand-400 text-slate-950 font-semibold rounded-lg transition-colors"
                >
                    <PlusCircle className="w-5 h-5" />
                    Add Industry
                </Link>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-slate-400">
                        <thead className="text-xs uppercase bg-slate-950/50 text-slate-500 border-b border-slate-800">
                            <tr>
                                <th scope="col" className="px-6 py-4 font-semibold tracking-wider">Industry Name</th>
                                <th scope="col" className="px-6 py-4 font-semibold tracking-wider">Slug</th>
                                <th scope="col" className="px-6 py-4 font-semibold tracking-wider hidden md:table-cell">Overview</th>
                                <th scope="col" className="px-6 py-4 font-semibold tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/50">
                            {industries.map((ind: { id: string; name: string; slug: string; overview: string }) => (
                                <tr key={ind.id} className="hover:bg-slate-800/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-slate-200">
                                        {ind.name}
                                    </td>
                                    <td className="px-6 py-4 font-mono text-xs text-brand-400">
                                        /{ind.slug}
                                    </td>
                                    <td className="px-6 py-4 hidden md:table-cell truncate max-w-xs">
                                        {ind.overview}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-3">
                                            <Link
                                                href={`/admin/industries/${ind.id}`}
                                                className="p-2 text-slate-400 hover:text-brand-400 hover:bg-brand-500/10 rounded-md transition-colors"
                                            >
                                                <Pencil className="w-4 h-4" />
                                            </Link>
                                            <button
                                                className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-md transition-colors"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {industries.length === 0 && (
                                <tr>
                                    <td colSpan={4} className="px-6 py-8 text-center text-slate-500">
                                        No industries found. Click &apos;Add Industry&apos; to create one.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
