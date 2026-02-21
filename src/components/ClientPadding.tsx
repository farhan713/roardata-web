"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function ClientPadding({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const isAdminRoute = pathname?.startsWith('/admin');

    return (
        <main className={`flex-grow ${isAdminRoute ? '' : 'pt-24'}`}>
            {children}
        </main>
    );
}
