'use server'

import { prisma } from '@/lib/prisma'

export async function submitChatbotLead(data: {
  name: string
  email: string
  phone?: string
  requirements: string
}) {
  try {
    const lead = await prisma.chatbotLead.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        requirements: data.requirements,
      }
    })

    return { success: true, leadId: lead.id }
  } catch (error) {
    console.error("Failed to submit chatbot lead", error)
    return { success: false, error: "Failed to submit request." }
  }
}
