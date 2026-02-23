'use client';

import React, { useState, useEffect } from 'react';

interface DashboardEmbedProps {
    embedCode: string;
    industryName: string;
}

export default function DashboardEmbed({ embedCode, industryName }: DashboardEmbedProps) {
    // We explicitly delay the rendering of the iframe until the component has mounted on the client
    // This completely bypasses the Next.js SSR blocking pipeline, allowing the rest of the text content to render instantly
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // A small artificial delay ensures the main thread has fully hydrated the text before we spin up the heavy chart canvas
        const timer = setTimeout(() => {
            setIsMounted(true);
        }, 300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="mb-16 not-prose">
            <h2 className="text-2xl font-bold tracking-tight mb-6">{industryName} Dashboard Mockup</h2>
            <div className="w-full aspect-[16/9] min-h-[600px] rounded-2xl overflow-hidden flex items-center justify-center relative z-10 group bg-transparent">
                {!isMounted ? (
                    <div className="flex flex-col items-center justify-center space-y-4 animate-in fade-in duration-500">
                        <div className="w-12 h-12 relative">
                            <div className="absolute inset-0 rounded-full border-4 border-slate-100 dark:border-slate-800"></div>
                            <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
                        </div>
                        <p className="text-sm font-medium text-slate-500 tracking-wide animate-pulse">Establishing Secure Data Connection...</p>
                    </div>
                ) : (
                    <div
                        className="w-full h-full animate-in fade-in zoom-in-95 duration-700 dashboard-iframe-wrapper"
                        dangerouslySetInnerHTML={{ __html: embedCode }}
                    />
                )}
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .dashboard-iframe-wrapper iframe {
                    width: 100%;
                    height: 100%;
                    min-height: 600px;
                    border: none;
                    border-radius: 1rem;
                }
            `}} />
        </div>
    );
}
