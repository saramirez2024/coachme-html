import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CoachMe — Your AI Fitness Coach",
  description:
    "Personalized workout + meal plans through real conversation with AI. 10x cheaper than a human coach.",
  openGraph: {
    title: "CoachMe — Your AI Fitness Coach",
    description:
      "Personalized workout + meal plans through real conversation with AI. 10x cheaper than a human coach.",
    type: "website",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "CoachMe",
              applicationCategory: "HealthApplication",
              operatingSystem: "Web",
              description:
                "AI-powered fitness and nutrition coaching app",
              offers: {
                "@type": "Offer",
                priceCurrency: "USD",
                price: "15.00",
              },
            }),
          }}
        />
      </head>
      <body className="bg-slate-900 text-white font-[family-name:var(--font-inter)]">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-blue-500 focus:text-white focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
