import React from 'react';
import { prisma } from '@/lib/prisma';
import { format } from 'date-fns';

export const dynamic = 'force-dynamic';

export default async function ChatbotLeadsPage() {
    const leads = await prisma.chatbotLead.findMany({
        orderBy: { createdAt: 'desc' }
    });

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Chatbot Leads</h1>
                <p className="text-muted-foreground mt-2">
                    View new leads captured from the Power BI chatbot assistant.
                </p>
            </div>

            <div className="bg-white rounded-xl border border-border overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left align-middle">
                        <thead className="bg-[#f0f4f8] text-black font-semibold border-b border-border">
                            <tr>
                                <th className="px-6 py-4 whitespace-nowrap">Name</th>
                                <th className="px-6 py-4 whitespace-nowrap">Contact</th>
                                <th className="px-6 py-4 whitespace-nowrap">Goal</th>
                                <th className="px-6 py-4 whitespace-nowrap">Status</th>
                                <th className="px-6 py-4 whitespace-nowrap">Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {leads.length > 0 ? (
                                leads.map((lead) => {
                                    // Parse requirements JSON
                                    let reqs: any = {};
                                    let goal = "Unknown";
                                    try {
                                        if (lead.requirements) {
                                            reqs = JSON.parse(lead.requirements);
                                            goal = reqs['Primary Goal'] || "General Inquiry";
                                        }
                                    } catch (e) { }

                                    return (
                                        <tr key={lead.id} className="hover:bg-slate-50 transition-colors">
                                            <td className="px-6 py-4 font-medium text-black">
                                                {lead.name}
                                            </td>
                                            <td className="px-6 py-4 text-black/70">
                                                <div>{lead.email}</div>
                                                <div className="text-xs text-black/50">{lead.phone || '-'}</div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#003366]/10 text-[#003366]">
                                                    {goal}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${lead.status === 'NEW' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-700'}`}>
                                                    {lead.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-black/60 whitespace-nowrap">
                                                {format(new Date(lead.createdAt), 'MMM d, yyyy h:mm a')}
                                            </td>
                                        </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td colSpan={5} className="px-6 py-8 text-center text-muted-foreground">
                                        No chatbot leads captured yet.
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
