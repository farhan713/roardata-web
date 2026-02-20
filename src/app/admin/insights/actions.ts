'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function createInsight(data: FormData) {
  try {
    await prisma.insightArticle.create({
      data: {
        title: data.get('title') as string,
        slug: data.get('slug') as string,
        summary: data.get('summary') as string,
        body: data.get('body') as string,
        metaTitle: data.get('metaTitle') as string,
        metaDescription: data.get('metaDescription') as string,
      }
    });
    revalidatePath('/admin/insights');
    revalidatePath('/', 'layout');
    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function updateInsight(id: string, data: FormData) {
  try {
    await prisma.insightArticle.update({
      where: { id },
      data: {
        title: data.get('title') as string,
        slug: data.get('slug') as string,
        summary: data.get('summary') as string,
        body: data.get('body') as string,
        metaTitle: data.get('metaTitle') as string,
        metaDescription: data.get('metaDescription') as string,
      }
    });
    revalidatePath('/admin/insights');
    revalidatePath('/', 'layout');
    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function deleteInsight(id: string) {
  try {
    await prisma.insightArticle.delete({ where: { id } });
    revalidatePath('/admin/insights');
    revalidatePath('/', 'layout');
    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}
