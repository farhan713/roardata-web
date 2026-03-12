'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

const PAGE_KEYS = ['home', 'case-studies', 'industries', 'insights'] as const;

export async function getPageSeoData() {
    const records = await prisma.pageSeo.findMany();

    const result: Record<string, any> = {};
    for (const key of PAGE_KEYS) {
        result[key] = records.find((r: any) => r.pageKey === key) || null;
    }
    return result;
}

export async function updatePageSeo(pageKey: string, data: FormData) {
    if (!PAGE_KEYS.includes(pageKey as any)) {
        return { success: false, error: 'Invalid page key' };
    }

    try {
        await prisma.pageSeo.upsert({
            where: { pageKey },
            create: {
                pageKey,
                metaTitle: (data.get('metaTitle') as string) || null,
                metaDescription: (data.get('metaDescription') as string) || null,
                canonicalUrl: (data.get('canonicalUrl') as string) || null,
                robotsMeta: (data.get('robotsMeta') as string) || 'index, follow',
                ogTitle: (data.get('ogTitle') as string) || null,
                ogDescription: (data.get('ogDescription') as string) || null,
                ogImage: (data.get('ogImage') as string) || null,
                twitterTitle: (data.get('twitterTitle') as string) || null,
                twitterDescription: (data.get('twitterDescription') as string) || null,
                twitterImage: (data.get('twitterImage') as string) || null,
            },
            update: {
                metaTitle: (data.get('metaTitle') as string) || null,
                metaDescription: (data.get('metaDescription') as string) || null,
                canonicalUrl: (data.get('canonicalUrl') as string) || null,
                robotsMeta: (data.get('robotsMeta') as string) || 'index, follow',
                ogTitle: (data.get('ogTitle') as string) || null,
                ogDescription: (data.get('ogDescription') as string) || null,
                ogImage: (data.get('ogImage') as string) || null,
                twitterTitle: (data.get('twitterTitle') as string) || null,
                twitterDescription: (data.get('twitterDescription') as string) || null,
                twitterImage: (data.get('twitterImage') as string) || null,
            },
        });

        revalidatePath('/admin/site-settings');
        revalidatePath('/', 'layout');
        return { success: true };
    } catch (error) {
        return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
    }
}
