'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

// SERVICES
export async function createService(data: FormData) {
  try {
    await prisma.service.create({
      data: {
        name: data.get('name') as string,
        slug: data.get('slug') as string,
        heroHeadline: data.get('heroHeadline') as string,
        heroSubheadline: data.get('heroSubheadline') as string,
        bodySections: data.get('bodySections') as string,
      }
    });
    revalidatePath('/admin/services');
    revalidatePath('/', 'layout');
    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function updateService(id: string, data: FormData) {
  try {
    await prisma.service.update({
      where: { id },
      data: {
        name: data.get('name') as string,
        slug: data.get('slug') as string,
        heroHeadline: data.get('heroHeadline') as string,
        heroSubheadline: data.get('heroSubheadline') as string,
        bodySections: data.get('bodySections') as string,
      }
    });
    revalidatePath('/admin/services');
    revalidatePath('/', 'layout');
    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function deleteService(id: string) {
  try {
    await prisma.service.delete({ where: { id } });
    revalidatePath('/admin/services');
    revalidatePath('/', 'layout');
    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}
