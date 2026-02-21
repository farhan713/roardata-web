import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { PlusCircle, Pencil, Trash2 } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function AdminCitiesPage() {
    const cities = await prisma.city.findMany({
        orderBy: { cityName: 'asc' },
    });

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-black tracking-tight">Cities</h1>
                    <p className="text-black/70 mt-1">Manage the geographic locations served by ROAR DATA.</p>
                </div>
                <Link
                    href="/admin/cities/new"
                    className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors"
                >
                    <PlusCircle className="w-5 h-5" />
                    Add City
                </Link>
            </div>

            <div className="bg-white border border-border rounded-xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-black/70">
                        <thead className="text-xs uppercase bg-secondary text-black/60 border-b border-border">
                            <tr>
                                <th scope="col" className="px-6 py-4 font-semibold tracking-wider">City Name</th>
                                <th scope="col" className="px-6 py-4 font-semibold tracking-wider">Slug</th>
                                <th scope="col" className="px-6 py-4 font-semibold tracking-wider hidden md:table-cell">Headline</th>
                                <th scope="col" className="px-6 py-4 font-semibold tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {cities.map((city: { id: string; cityName: string; slug: string; heroHeadline: string }) => (
                                <tr key={city.id} className="hover:bg-secondary/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-black">
                                        {city.cityName}
                                    </td>
                                    <td className="px-6 py-4 font-mono text-xs text-primary">
                                        /{city.slug}
                                    </td>
                                    <td className="px-6 py-4 hidden md:table-cell truncate max-w-xs">
                                        {city.heroHeadline}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-3">
                                            <Link
                                                href={`/admin/cities/${city.id}`}
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
                            {cities.length === 0 && (
                                <tr>
                                    <td colSpan={4} className="px-6 py-8 text-center text-black/50">
                                        No cities found. Click &apos;Add City&apos; to create one.
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
