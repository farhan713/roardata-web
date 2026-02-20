import { prisma } from '@/lib/prisma';
import ServiceForm from './ServiceForm';
import { notFound } from 'next/navigation';

export default async function ServiceEditPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const isNew = id === 'new';

    let service = null;

    if (!isNew) {
        service = await prisma.service.findUnique({
            where: { id: id }
        });

        if (!service) {
            notFound();
        }
    }

    return (
        <div className="max-w-4xl">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-white tracking-tight">
                    {isNew ? 'Create New Service' : `Edit: ${service?.name}`}
                </h1>
                <p className="text-slate-400 mt-1">
                    {isNew ? 'Add a new service offering to the platform.' : 'Update the service details below.'}
                </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl">
                <ServiceForm initialData={service} isEditing={!isNew} />
            </div>
        </div>
    );
}
