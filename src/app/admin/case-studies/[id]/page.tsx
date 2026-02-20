import { prisma } from '@/lib/prisma';
import CaseStudyForm from './CaseStudyFormClient';
import { notFound } from 'next/navigation';

export default async function CaseStudyEditPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const isNew = id === 'new';

    let caseStudy = null;
    let industries = [];
    let cities = [];

    if (!isNew) {
        const csData = await prisma.caseStudy.findUnique({
            where: { id: id },
            include: { cities: true }
        });

        if (!csData) {
            notFound();
        }

        caseStudy = {
            ...csData,
            cityId: csData.cities[0]?.id || null
        };
    }

    // Fetch relations for dropdowns
    industries = await prisma.industry.findMany({ select: { id: true, name: true } });
    cities = await prisma.city.findMany({ select: { id: true, cityName: true } });

    return (
        <div className="max-w-4xl">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-white tracking-tight">
                    {isNew ? 'Create New Case Study' : `Edit: ${caseStudy?.title}`}
                </h1>
                <p className="text-slate-400 mt-1">
                    {isNew ? 'Document a new client success story.' : 'Update the case study details below.'}
                </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl">
                <CaseStudyForm initialData={caseStudy} industries={industries} cities={cities} isEditing={!isNew} />
            </div>
        </div>
    );
}
