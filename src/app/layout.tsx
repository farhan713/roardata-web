import type { Metadata } from "next";
import "./globals.css";
import SchemaOrg from "@/components/SchemaOrg";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: {
    template: "%s | ROAR DATA",
    default: "ROAR DATA - National Organic Power BI Domination",
  },
  description: "Power BI Consulting Specialists in Australia. We build fast, scalable, and intuitive dashboards.",
  metadataBase: new URL("https://roardata.com.au"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ROAR DATA - National Organic Power BI Domination",
    description: "Power BI Consulting Specialists in Australia.",
    url: "https://roardata.com.au",
    siteName: "ROAR DATA",
    locale: "en_AU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import ClientPadding from "@/components/ClientPadding";
import Chatbot from "@/components/Chatbot";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ROAR DATA",
    "url": "https://roardata.com.au",
    "logo": "https://roardata.com.au/logo.png",
    "sameAs": []
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col">
        <SchemaOrg schema={orgSchema} />
        <Navigation />
        <ClientPadding>
          {children}
        </ClientPadding>
        <Chatbot />
      </body>
    </html>
  );
}
