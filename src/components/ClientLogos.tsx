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
    // Duplicate the array to create a seamless infinite scrolling effect
    const marqueeItems = [...clients, ...clients, ...clients]

    return (
        <section className="py-16 bg-gradient-to-b from-[#E9F0F9] to-white border-b border-slate-100 overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <p className="text-center text-[11px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-12">
                    Trusted by industry leaders
                </p>

                {/* Marquee Container */}
                <div className="relative flex overflow-x-hidden group mask-image: linear-gradient(to_right,transparent,black_10%,black_90%,transparent)">

                    <div
                        className="flex items-center gap-16 md:gap-24 animate-marquee-left will-change-transform w-max pr-16 md:pr-24 group-hover:[animation-play-state:paused]"
                        style={{ "--duration": "40s" } as React.CSSProperties}
                    >
                        {marqueeItems.map((client, idx) => (
                            <div
                                key={`${client.name}-${idx}`}
                                className="relative w-40 h-20 md:w-[220px] md:h-28 flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300 filter brightness-0 shrink-0"
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
            </div>
        </section>
    )
}
