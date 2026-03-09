'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { extractSeoFields } from '@/lib/seo-helper';

export async function createCaseStudy(data: FormData) {
  try {
    await prisma.caseStudy.create({
      data: {
        title: data.get('title') as string,
        slug: data.get('slug') as string,
        outcomeMetrics: data.get('outcomeMetrics') as string || '[]',
        bodySections: data.get('bodySections') as string || '[]',
        industryId: (data.get('industryId') as string) || null,
        cities: data.get('cityId') ? { connect: { id: data.get('cityId') as string } } : undefined,
        ...extractSeoFields(data),
      }
    });
    revalidatePath('/admin/case-studies');
    revalidatePath('/', 'layout');
    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function updateCaseStudy(id: string, data: FormData) {
  try {
    await prisma.caseStudy.update({
      where: { id },
      data: {
        title: data.get('title') as string,
        slug: data.get('slug') as string,
        outcomeMetrics: data.get('outcomeMetrics') as string || '[]',
        bodySections: data.get('bodySections') as string || '[]',
        industryId: (data.get('industryId') as string) || null,
        cities: data.get('cityId') ? { set: [{ id: data.get('cityId') as string }] } : { set: [] },
        ...extractSeoFields(data),
      }
    });
    revalidatePath('/admin/case-studies');
    revalidatePath('/', 'layout');
    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function deleteCaseStudy(id: string) {
  try {
    await prisma.caseStudy.delete({ where: { id } });
    revalidatePath('/admin/case-studies');
    revalidatePath('/', 'layout');
    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}
