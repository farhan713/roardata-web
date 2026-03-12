import { prisma } from '@/lib/prisma';
import SiteSettingsClient from './SiteSettingsClient';

export default async function SiteSettingsPage() {
    const records = await prisma.pageSeo.findMany();

    const pageKeys = ['home', 'case-studies', 'industries', 'insights'];
    const data: Record<string, any> = {};

    for (const key of pageKeys) {
        data[key] = records.find((r: any) => r.pageKey === key) || null;
    }

    return (
        <div>
            <h1 className="text-2xl font-bold mb-2 text-black">Site Settings</h1>
            <p className="text-black/60 mb-8">
                Manage SEO metadata for the homepage and listing pages.
            </p>
            <SiteSettingsClient initialData={data} />
        </div>
    );
}
