import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aztrax.in'),
  title: {
    default: 'AZTRAX | Industrial Asset Movement & Removal Detection',
    template: '%s | AZTRAX',
  },
  description:
    'Detect when valuable equipment moves or is removed when it shouldn\'t. AZTRAX provides low-cost wireless asset movement detection for industrial sites, EPC equipment, telecom infrastructure, EV charging and controlled parking environments.',
  keywords: [
    'industrial asset tracking',
    'asset movement detection',
    'equipment theft prevention',
    'industrial asset security',
    'equipment removal detection',
    'telecom equipment security',
    'construction equipment security',
    'EV charging equipment security',
    'warehouse asset monitoring',
    'wireless asset detection',
    'equipment removal alert',
    'asset protection system',
    'industrial IoT security',
  ],
  authors: [{ name: 'AZTRAX' }],
  creator: 'AZTRAX',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://aztrax.in',
    siteName: 'AZTRAX',
    title: 'AZTRAX | Industrial Asset Movement & Removal Detection',
    description:
      'Know when something valuable moves when it shouldn\'t. Wireless asset movement and removal detection for industrial sites, telecom infrastructure, EV charging locations and controlled environments.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AZTRAX Industrial Asset Movement Detection',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AZTRAX | Industrial Asset Movement & Removal Detection',
    description:
      'Know when something valuable moves when it shouldn\'t. Wireless detection for industrial assets.',
    images: ['/og-image.png'],
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
  alternates: {
    canonical: 'https://aztrax.in',
  },
  icons: {
    icon: [
      {
        url: '/favicon.png',
        type: 'image/png',
      },
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="any" />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
