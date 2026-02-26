import type { Metadata } from "next";
import "./globals.css";
import SchemaOrg from "@/components/SchemaOrg";
import Navigation from "@/components/Navigation";
import Script from "next/script";

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
        {/* We are replacing the old <Chatbot /> custom static react component with Tawk.to */}
        <Script id="tawk-to-script" strategy="lazyOnload">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/69a06760a29a6d1c30a57e8b/1jid97kbc';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();

            // Attempt to hide the branding by finding the specific iframe. 
            // Tawk.to often puts the branding in its own iframe or wrapper.
            setInterval(function() {
              var iframes = document.querySelectorAll('iframe[title="chat widget"]');
              iframes.forEach(function(iframe) {
                try {
                  var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
                  var branding = innerDoc.querySelector('a[href*="tawk.to/"]');
                  if (branding) {
                    branding.style.display = 'none';
                    branding.parentElement.style.display = 'none';
                  }
                } catch(e) {
                   // Cross-origin may block this
                }
              });
              
              // Also try to find a link directly in the body just in case
              var links = document.querySelectorAll('a[href*="tawk.to"]');
              for (var i = 0; i < links.length; i++) {
                 links[i].style.display = "none";
              }
            }, 1000);
          `}
        </Script>
      </body>
    </html>
  );
}
