import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SchemaOrg from "@/components/SchemaOrg";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col pt-24`}
      >
        <SchemaOrg schema={orgSchema} />
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
