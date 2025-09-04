import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import GAProvider from './ga-provider';
import { Toaster } from '@/components/ui/sonner';
import Header from '@/components/sections/Header';

const inter = Inter({ subsets: ['latin'] });

const gaId = process.env.NEXT_PUBLIC_GA_ID;
const enableGA =
  !!gaId && (process.env.NODE_ENV === 'production' || process.env.NEXT_PUBLIC_ENABLE_GA_DEV === 'true');

export const metadata: Metadata = {
  metadataBase: new URL('https://aiworkshops.se'),
  title: 'AI workshops för företag | Träning i AI för ert team',
  description:
    'Boka AI workshops för företag. Vi tränar ert team i att använda AI för marknadsföring, försäljning, produktutveckling och administration – med resultat som märks.',
  alternates: { canonical: 'https://aiworkshops.se' },
  openGraph: {
    title: 'AI workshops för företag | Träning i AI för ert team',
    description:
      'Boka AI workshops för företag och lär ert team använda AI i arbetet. Effektivisera marknadsföring, försäljning och administration.',
    type: 'website',
    url: '/',
    siteName: 'AI Workshops',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI workshops för företag | Träning i AI för ert team',
    description:
      'AI workshops för företag – lär ert team använda AI i arbetet. Från teori till praktik.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
    <head>
      {enableGA ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('consent', 'default', {
                  ad_storage: 'denied',
                  ad_user_data: 'denied',
                  ad_personalization: 'denied',
                  analytics_storage: 'denied'
                });
                gtag('js', new Date());
                gtag('config', '${gaId}', { send_page_view: false });
              `}
          </Script>
        </>
      ) : null}
    </head>
    <body className={inter.className}>
    {enableGA ? <GAProvider /> : null}
    <Header />
    {children}
    <Toaster position="bottom-right" />
    </body>
    </html>
  );
}
