import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { PlusCircle, Pencil, Trash2 } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function AdminFAQsPage() {
    const faqs = await prisma.fAQ.findMany({
        orderBy: { createdAt: 'desc' },
        include: { services: true, cities: true }
    });

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">FAQs</h1>
                    <p className="text-slate-400 mt-1">Manage Frequently Asked Questions across dynamic pages.</p>
                </div>
                <Link
                    href="/admin/faqs/new"
                    className="flex items-center gap-2 px-4 py-2 bg-brand-500 hover:bg-brand-400 text-slate-950 font-semibold rounded-lg transition-colors"
                >
                    <PlusCircle className="w-5 h-5" />
                    Add FAQ
                </Link>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-slate-400">
                        <thead className="text-xs uppercase bg-slate-950/50 text-slate-500 border-b border-slate-800">
                            <tr>
                                <th scope="col" className="px-6 py-4 font-semibold tracking-wider w-1/2">Question</th>
                                <th scope="col" className="px-6 py-4 font-semibold tracking-wider hidden lg:table-cell">Linked Service</th>
                                <th scope="col" className="px-6 py-4 font-semibold tracking-wider hidden lg:table-cell">Linked City</th>
                                <th scope="col" className="px-6 py-4 font-semibold tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/50">
                            {faqs.map((faq: any) => (
                                <tr key={faq.id} className="hover:bg-slate-800/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-slate-200">
                                        {faq.question}
                                    </td>
                                    <td className="px-6 py-4 hidden lg:table-cell">
                                        {faq.services && faq.services.length > 0 ? (
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                                {faq.services[0].name}
                                            </span>
                                        ) : '-'}
                                    </td>
                                    <td className="px-6 py-4 hidden lg:table-cell">
                                        {faq.cities && faq.cities.length > 0 ? (
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-500/10 text-brand-400 border border-brand-500/20">
                                                {faq.cities[0].cityName}
                                            </span>
                                        ) : '-'}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-3">
                                            <Link
                                                href={`/admin/faqs/${faq.id}`}
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
                            {faqs.length === 0 && (
                                <tr>
                                    <td colSpan={4} className="px-6 py-8 text-center text-slate-500">
                                        No FAQs found. Click &apos;Add FAQ&apos; to create one.
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
