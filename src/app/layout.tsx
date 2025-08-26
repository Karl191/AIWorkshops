import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://aiworkshops.se'),
  title: 'AI workshops för företag | Träning i AI för ert team',
  description: 'Boka AI workshops för företag. Vi tränar ert team i att använda AI för marknadsföring, försäljning, produktutveckling och administration – med resultat som märks.',
  alternates: { canonical: 'https://aiworkshops.se' },
  openGraph: {
    title: 'AI workshops för företag | Träning i AI för ert team',
    description: 'Boka AI workshops för företag och lär ert team använda AI i arbetet. Effektivisera marknadsföring, försäljning och administration.',
    type: 'website',
    url: '/',
    siteName: 'AI Workshops',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI workshops för företag | Träning i AI för ert team',
    description: 'AI workshops för företag – lär ert team använda AI i arbetet. Från teori till praktik.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body className={inter.className}>
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  )
}
