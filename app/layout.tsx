import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://aztrax.in'),
  title: {
    default: 'AZTRAX | Industrial Asset Movement Detection',
    template: '%s | AZTRAX',
  },
  description:
    'Aztrax detects unexpected movement of industrial equipment and assets inside defined sites, yards and project areas — without putting GPS and a SIM on everything.',
  keywords: [
    'industrial movement detection',
    'asset movement detection',
    'equipment removal detection',
    'industrial site security',
    'generator monitoring',
    'welding machine security',
    'cable reel tracking',
    'EPC equipment security',
    'plant asset protection',
    'non-GPS asset monitoring',
  ],
  authors: [{ name: 'AZTRAX' }],
  creator: 'AZTRAX',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://aztrax.in',
    siteName: 'AZTRAX',
    title: 'AZTRAX | Know when something moves that shouldn’t.',
    description:
      'Aztrax detects unexpected movement of industrial equipment and assets inside defined sites, yards and project areas — without putting GPS and a SIM on everything.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AZTRAX Industrial Movement Detection',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AZTRAX | Industrial Movement Detection',
    description:
      'Aztrax detects unexpected movement of industrial equipment inside defined sites without putting GPS on everything.',
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap"
        />
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
