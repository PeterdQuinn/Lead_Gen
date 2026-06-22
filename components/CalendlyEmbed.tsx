'use client'

import { useEffect } from 'react'

// Inline Calendly widget. Loads Calendly's embed script once and renders the
// scheduling calendar directly in the page (no popup).
export default function CalendlyEmbed({ url }: { url: string }) {
  useEffect(() => {
    const existing = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]',
    )
    if (existing) return
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <div
      className="calendly-inline-widget rounded-xl overflow-hidden bg-white"
      data-url={`${url}?hide_gdpr_banner=1&background_color=ffffff&primary_color=c9a84c`}
      style={{ minWidth: '280px', height: '640px' }}
    />
  )
}
