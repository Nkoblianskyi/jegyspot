import type { Metadata } from 'next'
import { Outfit, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import CookieBanner from '@/components/cookie-banner'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  metadataBase: new URL('https://jegyspot.com'),
  title: {
    default: 'Jegyspot – Jegyárak összehasonlítása egy helyen',
    template: '%s | Jegyspot',
  },
  description: 'A Jegyspot független jegyár-összehasonlító platform. Összehasonlítjuk több megbízható partner árait – koncertek, sport, fesztiválok. Ingyenes, regisztráció nélkül.',
  keywords: 'jegy, jegyár, összehasonlítás, koncert, sport, fesztivál, Jegyspot, Jegy.hu, Eventim, StubHub',
  alternates: { canonical: 'https://jegyspot.com' },
  openGraph: {
    type: 'website',
    locale: 'hu_HU',
    url: 'https://jegyspot.com',
    siteName: 'Jegyspot',
    title: 'Jegyspot – Jegyárak összehasonlítása',
    description: 'Összehasonlítjuk több megbízható partner jegyárait egy helyen – koncertek, sportesemények, fesztiválok.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jegyspot – Jegyárak összehasonlítása',
    description: 'Összehasonlítjuk több megbízható partner árait egy helyen.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hu" className={`${outfit.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}
