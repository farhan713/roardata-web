import { prisma } from '@/lib/prisma';
import InsightForm from './InsightForm';
import { notFound } from 'next/navigation';

export default async function InsightEditPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const isNew = id === 'new';

    let insight = null;

    if (!isNew) {
        insight = await prisma.insightArticle.findUnique({
            where: { id: id }
        });

        if (!insight) {
            notFound();
        }
    }

    return (
        <div className="max-w-4xl">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-white tracking-tight">
                    {isNew ? 'Create New Insight' : `Edit: ${insight?.title}`}
                </h1>
                <p className="text-slate-400 mt-1">
                    {isNew ? 'Publish a new article or thought leadership piece.' : 'Update the article details below.'}
                </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl">
                <InsightForm initialData={insight} isEditing={!isNew} />
            </div>
        </div>
    );
}
