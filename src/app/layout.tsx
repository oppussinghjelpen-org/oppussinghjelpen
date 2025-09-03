import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oppussing Hjelpen - Få 3 Gratis Tilbud på Renovering | Kvalitetssikrede Entreprenører",
  description: "Få 3 gratis tilbud på renovering, oppussing og byggeprosjekter. Vi kobler deg til kvalitetssikrede entreprenører i hele Norge. Sammenlign priser og velg beste tilbud.",
  keywords: "oppussing, renovering, entreprenør, tilbud, gratis, kvalitetssikret, byggeprosjekt, håndverker",
  alternates: {
    canonical: 'https://oppussinghjelpen.no'
  },
  openGraph: {
    title: "Oppussing Hjelpen - Få 3 Gratis Tilbud på Renovering",
    description: "Få 3 gratis tilbud på renovering, oppussing og byggeprosjekter. Vi kobler deg til kvalitetssikrede entreprenører i hele Norge.",
    url: 'https://oppussinghjelpen.no',
    siteName: 'Oppussing Hjelpen',
    locale: 'no_NO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Oppussing Hjelpen - Få 3 Gratis Tilbud på Renovering",
    description: "Få 3 gratis tilbud på renovering, oppussing og byggeprosjekter. Vi kobler deg til kvalitetssikrede entreprenører i hele Norge.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
