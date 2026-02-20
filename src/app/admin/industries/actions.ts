'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function createIndustry(data: FormData) {
  try {
    await prisma.industry.create({
      data: {
        name: data.get('name') as string,
        slug: data.get('slug') as string,
        heroHeadline: data.get('heroHeadline') as string,
        heroSubheadline: data.get('heroSubheadline') as string,
        overview: data.get('overview') as string,
        features: data.get('features') as string,
      }
    });
    revalidatePath('/admin/industries');
    revalidatePath('/', 'layout');
    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function updateIndustry(id: string, data: FormData) {
  try {
    await prisma.industry.update({
      where: { id },
      data: {
        name: data.get('name') as string,
        slug: data.get('slug') as string,
        heroHeadline: data.get('heroHeadline') as string,
        heroSubheadline: data.get('heroSubheadline') as string,
        overview: data.get('overview') as string,
        features: data.get('features') as string,
      }
    });
    revalidatePath('/admin/industries');
    revalidatePath('/', 'layout');
    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function deleteIndustry(id: string) {
  try {
    await prisma.industry.delete({ where: { id } });
    revalidatePath('/admin/industries');
    revalidatePath('/', 'layout');
    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}
