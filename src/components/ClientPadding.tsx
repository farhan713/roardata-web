"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function ClientPadding({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const hidePadding = pathname?.startsWith('/admin') || pathname?.startsWith('/mock-dashboards');

    return (
        <main className={`flex-grow ${hidePadding ? '' : 'pt-24'}`}>
            {children}
        </main>
    );
}
