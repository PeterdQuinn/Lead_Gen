import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-display',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Peter Quinn | Wealth Consulting & Insurance Strategy',
  description:
    'Most people are set up wrong. Find out if your 401k, rollovers, Roth, and cash value strategies are actually working for you. Book a free 30-minute review with Peter Quinn.',
  openGraph: {
    title: 'Peter Quinn — Wealth Consulting & Insurance Strategy',
    description: 'See if your 401k, rollovers, Roth, and cash value setup are costing you. Free 30-min review.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
