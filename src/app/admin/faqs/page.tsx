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
                    <h1 className="text-3xl font-bold text-black tracking-tight">FAQs</h1>
                    <p className="text-black/70 mt-1">Manage Frequently Asked Questions across dynamic pages.</p>
                </div>
                <Link
                    href="/admin/faqs/new"
                    className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors"
                >
                    <PlusCircle className="w-5 h-5" />
                    Add FAQ
                </Link>
            </div>

            <div className="bg-white border border-border rounded-xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-black/70">
                        <thead className="text-xs uppercase bg-secondary text-black/60 border-b border-border">
                            <tr>
                                <th scope="col" className="px-6 py-4 font-semibold tracking-wider w-1/2">Question</th>
                                <th scope="col" className="px-6 py-4 font-semibold tracking-wider hidden lg:table-cell">Linked Service</th>
                                <th scope="col" className="px-6 py-4 font-semibold tracking-wider hidden lg:table-cell">Linked City</th>
                                <th scope="col" className="px-6 py-4 font-semibold tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {faqs.map((faq: any) => (
                                <tr key={faq.id} className="hover:bg-secondary/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-black">
                                        {faq.question}
                                    </td>
                                    <td className="px-6 py-4 hidden lg:table-cell">
                                        {faq.services && faq.services.length > 0 ? (
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                                                {faq.services[0].name}
                                            </span>
                                        ) : '-'}
                                    </td>
                                    <td className="px-6 py-4 hidden lg:table-cell">
                                        {faq.cities && faq.cities.length > 0 ? (
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                                                {faq.cities[0].cityName}
                                            </span>
                                        ) : '-'}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-3">
                                            <Link
                                                href={`/admin/faqs/${faq.id}`}
                                                className="p-2 text-black/50 hover:text-primary hover:bg-primary/10 rounded-md transition-colors"
                                            >
                                                <Pencil className="w-4 h-4" />
                                            </Link>
                                            <button
                                                className="p-2 text-black/50 hover:text-destructive hover:bg-destructive/10 rounded-md transition-colors"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {faqs.length === 0 && (
                                <tr>
                                    <td colSpan={4} className="px-6 py-8 text-center text-black/50">
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
