import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components/layout";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: "Aluvera | Aluminium Veranda's & Overkappingen Helmond",
    template: "%s | Aluvera",
  },
  description: "Specialist in maatwerk aluminium veranda's en overkappingen in Helmond en omstreken. Vakkundige montage, 10 jaar garantie. Vraag een gratis offerte aan!",
  keywords: ["veranda", "aluminium veranda", "overkapping", "Helmond", "glazen schuifwanden", "terrasoverkapping", "maatwerk veranda"],
  authors: [{ name: "Aluvera" }],
  creator: "Aluvera",
  publisher: "Aluvera",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.aluvera.nl'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Aluvera | Aluminium Veranda's & Overkappingen",
    description: "Specialist in maatwerk aluminium veranda's en overkappingen in Helmond en omstreken.",
    url: 'https://www.aluvera.nl',
    siteName: 'Aluvera',
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Aluvera | Aluminium Veranda's",
    description: "Specialist in maatwerk aluminium veranda's en overkappingen.",
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
    <html lang="nl" className={inter.variable}>
      <body className="font-sans antialiased bg-white text-slate-900">
        <Navbar />
        <main className="pt-20 md:pt-28">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
