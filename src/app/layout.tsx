import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://aiworkshops.se'),
  title: 'AI Workshops för Företag – Praktisk Implementation av AI-verktyg',
  description:
    'Professionella workshops för praktisk implementation av AI-verktyg inom marknadsföring, försäljning, produktutveckling och administration. Effektivisera era processer med AI.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'AI Workshops för Företag – Praktisk Implementation',
    description:
      'Professionella workshops för praktisk implementation av AI-verktyg. Effektivisera era processer med AI.',
    type: 'website',
    url: '/',
    siteName: 'AI Workshops',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Workshops för Företag – Praktisk Implementation',
    description:
      'Professionella workshops för praktisk implementation av AI-verktyg.',
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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
