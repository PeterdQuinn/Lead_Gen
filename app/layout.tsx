import type { Metadata } from 'next'
import { Bebas_Neue, DM_Sans } from 'next/font/google'
import './globals.css'

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-display',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.peterdquinn.com'),
  title: 'Peter Quinn | Living Benefits & Life Insurance, Mesa, AZ',
  description:
    'Most people think life insurance only pays when you die. Every policy Peter Quinn builds pays YOU at diagnosis, cancer, heart attack, stroke, and more. Book a FREE 30-minute call. No cost, no obligation.',
  openGraph: {
    title: 'Your Death Benefit Is Meant For You While You’re Alive',
    description: 'Independent broker in Mesa, AZ. Living benefits built into every policy. Book a FREE 30 minute call, no cost, no obligation.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebas.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        {children}
        <script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6aa4595b5b2ec56e21e6e6d0"
          data-source="WEB_USER"
        />
      </body>
    </html>
  )
}
