"use client"

import React, { useState, useEffect } from 'react'
import { X, Loader2, CheckCircle2 } from 'lucide-react'

export default function BookConsultationModal() {
    const [isOpen, setIsOpen] = useState(false)
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        description: ''
    })

    useEffect(() => {
        const handleOpen = () => setIsOpen(true)
        window.addEventListener('openBookModal', handleOpen)

        const handleHashChange = () => {
            if (window.location.hash === '#book-consultation' || window.location.hash === '#chatbot') {
                setIsOpen(true)
                history.replaceState(null, '', window.location.pathname + window.location.search)
            }
        }

        window.addEventListener('hashchange', handleHashChange)
        handleHashChange() // Check on initial load

        return () => {
            window.removeEventListener('openBookModal', handleOpen)
            window.removeEventListener('hashchange', handleHashChange)
        }
    }, [])

    if (!isOpen) return null

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('submitting')

        try {
            const res = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })

            if (!res.ok) throw new Error('Submission failed')

            setStatus('success')
            setTimeout(() => {
                setIsOpen(false)
                setStatus('idle')
                setFormData({ name: '', email: '', phone: '', description: '' })
            }, 3000)
        } catch (error) {
            console.error(error)
            setStatus('error')
        }
    }

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-200">
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="p-8">
                    {status === 'success' ? (
                        <div className="text-center py-12">
                            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Request Received!</h3>
                            <p className="text-slate-600 dark:text-slate-300">
                                Thank you for your interest. A Power BI specialist will contact you shortly to schedule your consultation.
                            </p>
                        </div>
                    ) : (
                        <>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Book a Consultation</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-8">
                                Tell us a bit about your data needs and we'll be in touch.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={e => setFormData(f => ({ ...f, name: e.target.value }))}
                                        className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent dark:bg-slate-800 dark:text-white outline-none transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            value={formData.email}
                                            onChange={e => setFormData(f => ({ ...f, email: e.target.value }))}
                                            className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent dark:bg-slate-800 dark:text-white outline-none transition-all"
                                            placeholder="john@company.com"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            required
                                            value={formData.phone}
                                            onChange={e => setFormData(f => ({ ...f, phone: e.target.value }))}
                                            className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent dark:bg-slate-800 dark:text-white outline-none transition-all"
                                            placeholder="0400 000 000"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="description" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Project Description</label>
                                    <textarea
                                        id="description"
                                        required
                                        rows={4}
                                        value={formData.description}
                                        onChange={e => setFormData(f => ({ ...f, description: e.target.value }))}
                                        className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent dark:bg-slate-800 dark:text-white outline-none transition-all resize-none"
                                        placeholder="Briefly describe your reporting challenges or Power BI goals..."
                                    />
                                </div>

                                {status === 'error' && (
                                    <p className="text-red-500 text-sm">An error occurred. Please try again.</p>
                                )}

                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className="w-full bg-[#003366] hover:bg-[#003366]/90 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center disabled:opacity-70"
                                    >
                                        {status === 'submitting' ? (
                                            <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Submitting...</>
                                        ) : 'Request Consultation'}
                                    </button>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
