'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function createFAQ(data: FormData) {
  try {
    await prisma.fAQ.create({
      data: {
        question: data.get('question') as string,
        answer: data.get('answer') as string,
        serviceId: (data.get('serviceId') as string) || null,
        cityId: (data.get('cityId') as string) || null,
      }
    });
    revalidatePath('/admin/faqs');
    revalidatePath('/', 'layout');
    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function updateFAQ(id: string, data: FormData) {
  try {
    await prisma.fAQ.update({
      where: { id },
      data: {
        question: data.get('question') as string,
        answer: data.get('answer') as string,
        serviceId: (data.get('serviceId') as string) || null,
        cityId: (data.get('cityId') as string) || null,
      }
    });
    revalidatePath('/admin/faqs');
    revalidatePath('/', 'layout');
    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function deleteFAQ(id: string) {
  try {
    await prisma.fAQ.delete({ where: { id } });
    revalidatePath('/admin/faqs');
    revalidatePath('/', 'layout');
    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}
