"use client"

import React, { useState } from 'react'
import { MessageSquare, X, Send, ChevronRight } from 'lucide-react'
import { submitChatbotLead } from '@/actions/chatbot'

type Step = 'INITIAL' | 'GOAL' | 'CONTACT' | 'SUCCESS'

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false)
    const [step, setStep] = useState<Step>('INITIAL')

    const [requirements, setRequirements] = useState<Record<string, string>>({})

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleNextStep = (key: string, value: string, nextStep: Step) => {
        setRequirements(prev => ({ ...prev, [key]: value }))
        setStep(nextStep)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const result = await submitChatbotLead({
                ...formData,
                requirements: JSON.stringify(requirements)
            })

            if (result.success) {
                setStep('SUCCESS')
            } else {
                alert("Failed to save your response, please try again.")
            }
        } catch (err) {
            console.error(err)
            alert("An error occurred. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    // Listen for hash changes so other components can open the chatbot
    React.useEffect(() => {
        const handleHashChange = () => {
            if (window.location.hash === '#chatbot') {
                setIsOpen(true)
                // Clear the hash without scrolling so it can be triggered again
                window.history.replaceState(null, '', window.location.pathname + window.location.search)
            }
        }

        // Check on initial load
        handleHashChange()

        window.addEventListener('hashchange', handleHashChange)
        return () => window.removeEventListener('hashchange', handleHashChange)
    }, [])

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {isOpen && (
                <div className="mb-4 w-[340px] max-w-[calc(100vw-48px)] bg-white/10 dark:bg-[#0b101e] backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in slide-in-from-bottom-5">
                    {/* Header */}
                    <div className="bg-[#003366] text-white p-4 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                <MessageSquare size={16} />
                            </div>
                            <div>
                                <h3 className="font-bold text-sm">ROAR DATA</h3>
                                <p className="text-[10px] text-white/70">Power BI Assistant</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white/70 hover:text-white transition-colors p-1"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    {/* Body */}
                    <div className="p-5 flex flex-col gap-4 max-h-[400px] overflow-y-auto">

                        {step === 'INITIAL' && (
                            <div className="flex flex-col gap-3 animate-in fade-in zoom-in-95 duration-300">
                                <div className="bg-[#f0f4f8] dark:bg-slate-800 text-slate-800 dark:text-slate-200 p-3 rounded-2xl rounded-tl-sm text-sm border border-slate-200 dark:border-slate-700">
                                    Hi there! 👋 Are you looking for expert Power BI consulting or automated dashboard solutions?
                                </div>
                                <div className="flex flex-col gap-2 mt-2">
                                    <button
                                        onClick={() => handleNextStep('Looking for Consulting', 'Yes', 'GOAL')}
                                        className="bg-[#003366] text-white text-sm py-2 px-4 rounded-xl font-medium hover:bg-[#002244] transition-colors flex justify-between items-center"
                                    >
                                        Yes, I need help <ChevronRight size={16} />
                                    </button>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="bg-transparent text-slate-500 text-xs py-2 px-4 rounded-xl font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                                    >
                                        No, just browsing
                                    </button>
                                </div>
                            </div>
                        )}

                        {step === 'GOAL' && (
                            <div className="flex flex-col gap-3 animate-in fade-in zoom-in-95 duration-300">
                                <div className="bg-[#f0f4f8] dark:bg-slate-800 text-slate-800 dark:text-slate-200 p-3 rounded-2xl rounded-tl-sm text-sm border border-slate-200 dark:border-slate-700">
                                    Got it! What specific Power BI service are you interested in?
                                </div>
                                <div className="flex flex-col gap-2 mt-2">
                                    {[
                                        'Custom Dashboard Development',
                                        'Data Modeling & DAX Optimization',
                                        'Power BI Training & Adoption',
                                        'Migration to Power BI',
                                        'Other / General Inquiry'
                                    ].map(goal => (
                                        <button
                                            key={goal}
                                            onClick={() => handleNextStep('Primary Goal', goal, 'CONTACT')}
                                            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm py-2.5 px-4 rounded-xl font-medium hover:border-[#003366] transition-colors text-left"
                                        >
                                            {goal}
                                        </button>
                                    ))}
                                    <button
                                        onClick={() => setStep('INITIAL')}
                                        className="mt-2 text-slate-500 text-xs py-2 px-4 rounded-xl font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-center w-full"
                                    >
                                        &larr; Back to beginning
                                    </button>
                                </div>
                            </div>
                        )}

                        {step === 'CONTACT' && (
                            <div className="flex flex-col gap-3 animate-in fade-in zoom-in-95 duration-300">
                                <div className="bg-[#f0f4f8] dark:bg-slate-800 text-slate-800 dark:text-slate-200 p-3 rounded-2xl rounded-tl-sm text-sm border border-slate-200 dark:border-slate-700">
                                    Great! Our senior Power BI architects would love to help. Could we get your details to reach out?
                                </div>
                                <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-2">
                                    <input
                                        required
                                        type="text"
                                        placeholder="Your Name *"
                                        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm rounded-xl px-3 py-2.5 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#003366]"
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    />
                                    <input
                                        required
                                        type="email"
                                        placeholder="Work Email *"
                                        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm rounded-xl px-3 py-2.5 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#003366]"
                                        value={formData.email}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Phone Number (Optional)"
                                        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm rounded-xl px-3 py-2.5 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#003366]"
                                        value={formData.phone}
                                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                    <button
                                        disabled={isSubmitting}
                                        type="submit"
                                        className="mt-2 bg-[#003366] text-white text-sm py-2.5 px-4 rounded-xl font-bold hover:bg-[#002244] transition-colors flex justify-center items-center gap-2 disabled:opacity-70"
                                    >
                                        {isSubmitting ? 'Sending...' : 'Submit Request'} <Send size={14} />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setStep('GOAL')}
                                        className="text-slate-500 text-xs py-2 px-4 rounded-xl font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-center w-full"
                                    >
                                        &larr; Back to services
                                    </button>
                                </form>
                            </div>
                        )}

                        {step === 'SUCCESS' && (
                            <div className="flex flex-col gap-3 animate-in fade-in zoom-in-95 duration-300 text-center py-6">
                                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-2">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h4 className="font-bold text-slate-900 dark:text-white text-lg">Thank You!</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                    Your request has been received. We will be in touch shortly to discuss your data needs.
                                </p>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="mt-4 text-[#003366] text-sm font-semibold hover:underline"
                                >
                                    Close Chat
                                </button>
                            </div>
                        )}

                    </div>
                </div>
            )}

            {/* Floating Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    aria-label="Open Chatbot"
                    className="w-14 h-14 bg-[#003366] hover:bg-[#002244] text-white rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-105"
                >
                    <MessageSquare size={24} />
                </button>
            )}
        </div>
    )
}
