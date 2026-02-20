import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { PlusCircle, Pencil, Trash2 } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function AdminCaseStudiesPage() {
    const caseStudies = await prisma.caseStudy.findMany({
        orderBy: { createdAt: 'desc' },
        include: { industry: true }
    });

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">Case Studies</h1>
                    <p className="text-slate-400 mt-1">Manage success stories and client outcomes.</p>
                </div>
                <Link
                    href="/admin/case-studies/new"
                    className="flex items-center gap-2 px-4 py-2 bg-brand-500 hover:bg-brand-400 text-slate-950 font-semibold rounded-lg transition-colors"
                >
                    <PlusCircle className="w-5 h-5" />
                    Add Case Study
                </Link>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-slate-400">
                        <thead className="text-xs uppercase bg-slate-950/50 text-slate-500 border-b border-slate-800">
                            <tr>
                                <th scope="col" className="px-6 py-4 font-semibold tracking-wider">Title</th>
                                <th scope="col" className="px-6 py-4 font-semibold tracking-wider">Client</th>
                                <th scope="col" className="px-6 py-4 font-semibold tracking-wider hidden md:table-cell">Industry</th>
                                <th scope="col" className="px-6 py-4 font-semibold tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/50">
                            {caseStudies.map((cs: any) => (
                                <tr key={cs.id} className="hover:bg-slate-800/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-slate-200">
                                        {cs.title}
                                    </td>
                                    <td className="px-6 py-4 text-slate-300">
                                        {cs.clientName}
                                    </td>
                                    <td className="px-6 py-4 hidden md:table-cell">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                                            {cs.industry?.name || 'None'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-3">
                                            <Link
                                                href={`/admin/case-studies/${cs.id}`}
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
                            {caseStudies.length === 0 && (
                                <tr>
                                    <td colSpan={4} className="px-6 py-8 text-center text-slate-500">
                                        No case studies found. Click &apos;Add Case Study&apos; to create one.
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
