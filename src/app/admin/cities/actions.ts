'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function createCity(data: FormData) {
  try {
    await prisma.city.create({
      data: {
        cityName: data.get('cityName') as string,
        slug: data.get('slug') as string,
        heroHeadline: data.get('heroHeadline') as string,
        heroSubheadline: data.get('heroSubheadline') as string,
        uniqueLocalCopy: data.get('uniqueLocalCopy') as string,
      }
    });
    revalidatePath('/admin/cities');
    revalidatePath('/', 'layout');
    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function updateCity(id: string, data: FormData) {
  try {
    await prisma.city.update({
      where: { id },
      data: {
        cityName: data.get('cityName') as string,
        slug: data.get('slug') as string,
        heroHeadline: data.get('heroHeadline') as string,
        heroSubheadline: data.get('heroSubheadline') as string,
        uniqueLocalCopy: data.get('uniqueLocalCopy') as string,
      }
    });
    revalidatePath('/admin/cities');
    revalidatePath('/', 'layout');
    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function deleteCity(id: string) {
  try {
    await prisma.city.delete({ where: { id } });
    revalidatePath('/admin/cities');
    revalidatePath('/', 'layout');
    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}
