import { prisma } from '@/lib/prisma';
import FAQForm from './FAQForm';
import { notFound } from 'next/navigation';

export default async function FAQEditPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const isNew = id === 'new';

    let faq = null;
    let services = [];
    let cities = [];

    if (!isNew) {
        faq = await prisma.fAQ.findUnique({
            where: { id: id }
        });

        if (!faq) {
            notFound();
        }
    }

    // Fetch relations for dropdowns
    services = await prisma.service.findMany({ select: { id: true, name: true } });
    cities = await prisma.city.findMany({ select: { id: true, cityName: true } });

    return (
        <div className="max-w-4xl">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-white tracking-tight">
                    {isNew ? 'Create New FAQ' : 'Edit FAQ'}
                </h1>
                <p className="text-slate-400 mt-1">
                    {isNew ? 'Add a new Frequently Asked Question.' : 'Update the question and answer below.'}
                </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl">
                <FAQForm initialData={faq} services={services} cities={cities} isEditing={!isNew} />
            </div>
        </div>
    );
}
