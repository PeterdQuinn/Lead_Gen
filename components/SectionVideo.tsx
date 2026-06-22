'use client'

import { useEffect, useRef, useState } from 'react'

// Embedded video that lives under the "Who I Am" section. It autoplays
// (muted, per browser rules) as soon as it scrolls into view and pauses
// when it leaves. A prominent "Tap for sound" button turns audio on; native
// controls are available for scrubbing/pausing.
export default function SectionVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [muted, setMuted] = useState(true)

  // Play when on screen, pause when off screen.
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.muted = true
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().catch(() => {})
        else v.pause()
      },
      { threshold: 0.4 },
    )
    io.observe(v)
    return () => io.disconnect()
  }, [])

  function toggleMute() {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
    if (!v.muted) v.play().catch(() => {})
  }

  return (
    <div className="relative mt-10 md:mt-12 rounded-3xl overflow-hidden ring-2 ring-[#C9A84C]/40 shadow-2xl shadow-[#C9A84C]/10 bg-black">
      <video
        ref={videoRef}
        src="/intro.mp4"
        className="w-full h-auto block"
        playsInline
        loop
        controls
        preload="metadata"
      />

      {/* Tap for sound, only while muted */}
      {muted && (
        <button
          onClick={toggleMute}
          className="absolute top-4 right-4 inline-flex items-center gap-2 font-bold text-sm md:text-base px-5 py-3 rounded-xl bg-[#C9A84C] text-[#0A1428] hover:bg-[#E8C97A] animate-pulse shadow-2xl shadow-[#C9A84C]/40 transition-all"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 5L6 9H2v6h4l5 4V5z" />
            <path d="M23 9l-6 6M17 9l6 6" />
          </svg>
          Tap for sound
        </button>
      )}
    </div>
  )
}
