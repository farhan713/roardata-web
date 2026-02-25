import React from 'react'
import Image from 'next/image'

const clients = [
    { name: 'Arglass', src: '/clients/arglass.svg' },
    { name: 'Baxter', src: '/clients/baxter.svg' },
    { name: 'BJC', src: '/clients/bjc_blass.svg' },
    { name: 'Nihon Yamamura', src: '/clients/nihon_ymamura.svg' },
    { name: 'OL', src: '/clients/ol.svg' },
    { name: 'RE Group', src: '/clients/re_group.svg' },
    { name: 'Right Price', src: '/clients/right_price.svg' },
    { name: 'Stamp', src: '/clients/stamp.svg' },
    { name: 'XPAR Vision', src: '/clients/xpar_vision.svg' }
]

export default function ClientLogos() {
    return (
        <section className="py-12 bg-gradient-to-b from-[#E9F0F9] to-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-xs font-semibold text-slate-500 uppercase tracking-[0.2em] mb-8">
                    Trusted by industry leaders
                </p>
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-20">
                    {clients.map((client) => (
                        <div
                            key={client.name}
                            className="relative w-24 h-10 md:w-32 md:h-12 flex items-center justify-center opacity-40 hover:opacity-80 transition-opacity duration-300 filter brightness-0"
                            title={client.name}
                        >
                            <img
                                src={client.src}
                                alt={client.name}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
