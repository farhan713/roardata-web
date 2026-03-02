import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { name, email, phone, description } = body

        if (!name || !email || !phone || !description) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
        }

        // Store description as a JSON string array of Q&A, mimicking the chatbot requirement format
        const requirementsJson = JSON.stringify([
            { question: "Project Description", answer: description }
        ])

        const lead = await prisma.chatbotLead.create({
            data: {
                name,
                email,
                phone,
                requirements: requirementsJson,
                status: 'NEW'
            }
        })

        return NextResponse.json({ success: true, id: lead.id })
    } catch (error) {
        console.error('Error creating lead:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
