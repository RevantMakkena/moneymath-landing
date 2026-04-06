import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://moneymath.pro";

export const metadata: Metadata = {
  title: "MoneyMath — Free Financial Tools for Everyday Money Decisions",
  description:
    "MoneyMath is a suite of 28 free financial calculators — mortgage, compound interest, paycheck, tax, retirement, and more. Understand your finances without jargon or sign-ups.",
  keywords: [
    "MoneyMath",
    "financial calculators",
    "mortgage calculator",
    "compound interest calculator",
    "paycheck calculator",
    "free financial tools",
    "tax calculator",
    "retirement calculator",
  ],
  authors: [{ name: "Ojas Labs" }],
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "MoneyMath",
    title: "MoneyMath — Free Financial Tools",
    description:
      "A suite of free financial tools for everyday money decisions. Built by Ojas Labs.",
  },
  twitter: {
    card: "summary",
    title: "MoneyMath — Free Financial Tools",
    description:
      "A suite of free financial tools for everyday money decisions. Built by Ojas Labs.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MoneyMath",
  url: siteUrl,
  description:
    "MoneyMath is a suite of free financial tools for everyday money decisions.",
  parentOrganization: {
    "@type": "Organization",
    name: "Ojas Labs",
    url: "https://ojaslabs.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var d=document.documentElement;var t=localStorage.getItem('theme');if(t==='light'){d.classList.remove('dark')}else{d.classList.add('dark')}}catch(e){d.classList.add('dark')}})()`,
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900 dark:bg-zinc-950 dark:text-white antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
