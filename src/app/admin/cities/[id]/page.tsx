import { prisma } from '@/lib/prisma';
import CityForm from './CityForm';
import { notFound } from 'next/navigation';

export default async function CityEditPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const isNew = id === 'new';

    let city = null;

    if (!isNew) {
        city = await prisma.city.findUnique({
            where: { id: id }
        });

        if (!city) {
            notFound();
        }
    }

    return (
        <div className="max-w-4xl">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-black tracking-tight">
                    {isNew ? 'Create New City' : `Edit: ${city?.cityName}`}
                </h1>
                <p className="text-black/70 mt-1">
                    {isNew ? 'Add a new service location to the platform.' : 'Update the city details below.'}
                </p>
            </div>

            <div className="bg-white border border-border rounded-2xl p-6 md:p-8 shadow-sm">
                <CityForm initialData={city} isEditing={!isNew} />
            </div>
        </div>
    );
}
