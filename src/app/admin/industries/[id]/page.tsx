import { prisma } from '@/lib/prisma';
import IndustryForm from './IndustryFormClient';
import { notFound } from 'next/navigation';

export default async function IndustryEditPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const isNew = id === 'new';

    let industry = null;

    if (!isNew) {
        industry = await prisma.industry.findUnique({
            where: { id: id }
        });

        if (!industry) {
            notFound();
        }
    }

    return (
        <div className="max-w-4xl">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-black tracking-tight">
                    {isNew ? 'Create New Industry' : `Edit: ${industry?.name}`}
                </h1>
                <p className="text-black/70 mt-1">
                    {isNew ? 'Define a new targeted industry sector.' : 'Update the industry details below.'}
                </p>
            </div>

            <div className="bg-white border border-border rounded-2xl p-6 md:p-8 shadow-sm">
                <IndustryForm initialData={industry} isEditing={!isNew} />
            </div>
        </div>
    );
}
