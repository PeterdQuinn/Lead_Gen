'use client'

import Image from 'next/image'
import SectionVideo from '../components/SectionVideo'

const CALENDLY_URL = 'https://calendly.com/peter-quinn-alliance/30min'

function CtaButton({
  label,
  variant = 'gold',
  className = '',
}: {
  label: string
  variant?: 'gold' | 'dark'
  className?: string
}) {
  const base =
    'inline-block font-bold text-base md:text-lg px-8 md:px-10 py-4 md:py-5 rounded-xl transition-all active:scale-[0.98] text-center'
  const styles =
    variant === 'dark'
      ? 'bg-[#0A1428] text-[#E8C97A] hover:bg-[#0E1E3A] shadow-xl'
      : 'bg-[#C9A84C] text-[#0A1428] hover:bg-[#E8C97A] shadow-2xl shadow-[#C9A84C]/30'
  return (
    <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className={`${base} ${styles} ${className}`}>
      {label}
    </a>
  )
}

// Lightweight inline CTA placed after every content section so the
// visitor never scrolls more than one section without a path to book.
function SectionCta({ label, sub }: { label: string; sub?: string }) {
  return (
    <div className="text-center mt-10 md:mt-12">
      {sub && (
        <p className="text-[#A9B6CE] text-base md:text-lg max-w-xl mx-auto mb-5">{sub}</p>
      )}
      <CtaButton label={label} />
    </div>
  )
}

const livingBenefits = [
  {
    title: 'Critical Illness',
    body: 'Get diagnosed with cancer and your policy pays you a lump sum immediately.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21C12 21 4 14.5 4 8.5A4.5 4.5 0 0 1 12 6a4.5 4.5 0 0 1 8 2.5C20 14.5 12 21 12 21z" />
        <path d="M12 9v5M9.5 11.5h5" />
      </svg>
    ),
  },
  {
    title: 'Chronic Illness',
    body: 'Can’t perform daily activities due to illness — your policy covers your income.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h4l2 5 4-10 2 5h6" />
      </svg>
    ),
  },
  {
    title: 'Terminal Illness',
    body: 'Access your death benefit early, on your own terms.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    title: 'Disability',
    body: 'Injury or illness stops you from working — your paycheck keeps coming.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l8 4v5c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7l8-4z" />
        <path d="M12 8v4M12 16h.01" />
      </svg>
    ),
  },
]

const products = [
  {
    title: 'Term Life',
    body: 'The most affordable protection you can get. Covers your family if you pass AND pays you a cash benefit if you get diagnosed with a critical illness while the policy is active.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l7 3v6c0 4-3 7-7 8-4-1-7-4-7-8V6l7-3z" />
      </svg>
    ),
  },
  {
    title: 'IUL',
    body: 'Indexed Universal Life builds tax-free cash value tied to market performance with zero downside risk. Think of it as a retirement account the IRS can’t touch — with living benefits built in.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 17l5-5 4 4 8-8" />
        <path d="M16 8h4v4" />
      </svg>
    ),
  },
  {
    title: 'Mortgage Protection',
    body: 'If you die or get diagnosed with a serious illness, your mortgage gets paid. Your family stays in their home no matter what happens to you.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 10l9-7 9 7" />
        <path d="M5 9v11h14V9" />
        <path d="M10 20v-6h4v6" />
      </svg>
    ),
  },
  {
    title: 'Whole Life',
    body: 'Guaranteed cash value that grows every single year regardless of the market. Borrow against it, pass it on, or use it while you’re alive. Never goes down.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3 6 6 .9-4.5 4.3 1.1 6.3L12 16.8 6.4 19.5l1.1-6.3L3 8.9 9 8z" />
      </svg>
    ),
  },
  {
    title: 'Infinite Banking',
    body: 'Stop paying interest to banks. Use a specially structured whole life policy as your own personal banking system. Borrow against your cash value and pay yourself back.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-5 9 5" />
        <path d="M4 10v8M20 10v8M9 10v8M15 10v8" />
        <path d="M2 21h20" />
      </svg>
    ),
  },
  {
    title: 'Final Expense',
    body: 'Covers funeral and burial costs so your family never has to make a financial decision while they’re grieving. Policies start as low as a few dollars a day.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.8 7.6a5 5 0 0 0-8.8-2 5 5 0 0 0-8.8 2c-1 3 1.5 6 8.8 10.4C19.3 13.6 21.8 10.6 20.8 7.6z" />
      </svg>
    ),
  },
  {
    title: 'Annuities',
    body: 'A guaranteed income stream you cannot outlive. Put money in, get a check every month for life. No market risk, no running out.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10M9.5 9.5h3.5a2 2 0 0 1 0 4h-3M14.5 14.5h-3.5" />
      </svg>
    ),
  },
  {
    title: 'Long-Term Care',
    body: 'The average nursing home costs $10,000 a month. Medicare barely covers it. This policy pays those costs so your savings and your family are protected.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v6" />
        <path d="M3 14h18M3 18h18M7 9V6h4v3" />
      </svg>
    ),
  },
  {
    title: 'Disability Income',
    body: 'Your ability to earn is your most valuable asset. If an injury or illness stops you from working, this policy replaces your paycheck so your bills keep getting paid.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="7" width="18" height="12" rx="2" />
        <path d="M3 11h18M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </svg>
    ),
  },
  {
    title: 'Small Biz Planning',
    body: 'Key person insurance, buy-sell agreements, business continuation. If you can’t show up, your business keeps running and your partners are protected.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18" />
      </svg>
    ),
  },
]

const comparison = [
  {
    topic: 'Product Access',
    captive: 'Locked into one company’s lineup',
    quinn: 'Shops 30+ top-rated carriers',
  },
  {
    topic: 'Living Benefits',
    captive: 'Often not offered at all',
    quinn: 'Living benefits built into every policy',
  },
  {
    topic: 'Whose Side They’re On',
    captive: 'Paid to push their company’s products',
    quinn: 'Works for your goals, not the commission',
  },
]

const objections = [
  {
    q: 'Is it really free?',
    a: 'Yes. There’s no cost to you, ever, for a consultation. Ever.',
  },
  {
    q: 'Will I get sold something?',
    a: 'No. This is an education call. You decide if anything makes sense for you.',
  },
  {
    q: 'How long does it take?',
    a: '30 minutes. That’s it. Schedule it around your life.',
  },
]

function CheckMark() {
  return (
    <span className="w-6 h-6 rounded-md bg-[#C9A84C] text-[#0A1428] flex items-center justify-center flex-shrink-0">
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  )
}

function XMark() {
  return (
    <span className="w-6 h-6 rounded-md bg-white/10 text-[#6E7E9A] flex items-center justify-center flex-shrink-0">
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 6L6 18M6 6l12 12" />
      </svg>
    </span>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A1428] text-white font-sans overflow-hidden pb-24 md:pb-0">
      {/* gold glow top */}
      <div className="absolute top-0 left-0 right-0 h-[620px] bg-gradient-to-b from-[#C9A84C]/12 to-transparent pointer-events-none" />

      {/* NAV */}
      <nav className="relative flex items-center justify-between px-6 py-5 max-w-6xl mx-auto z-10">
        <div className="flex flex-col">
          <span className="font-display text-2xl tracking-wide leading-none">
            Quinn <span className="text-[#C9A84C]">Consulting</span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#7B8AA6] mt-1">
            Living Benefits · Mesa, Arizona
          </span>
        </div>
        <CtaButton label="Book Free Call →" className="hidden sm:inline-block !py-2.5 !px-5 !text-sm" />
      </nav>

      {/* HERO */}
      <section className="relative max-w-4xl mx-auto px-6 pt-10 md:pt-14 pb-20 text-center z-10">
        <div className="inline-flex items-center gap-2 bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#E8C97A] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-[#C9A84C] rounded-full animate-pulse" />
          100% Free · No Obligation
        </div>

        <h1 className="text-4xl md:text-6xl font-display leading-[1.04] tracking-wide mb-7">
          Did You Know Your Death Benefit Is Meant For You{' '}
          <span className="text-[#C9A84C]">While You’re Alive?</span>
        </h1>

        <p className="text-lg md:text-2xl text-[#A9B6CE] max-w-2xl mx-auto leading-relaxed mb-10">
          Most people think life insurance only pays when you die.
          <span className="text-white font-semibold"> Every policy I build pays YOU at diagnosis</span> — cancer,
          heart attack, stroke, and more.
        </p>

        <CtaButton label="Book Your FREE 30-Min Call — No Cost, No Obligation" />
        <p className="text-sm text-[#7B8AA6] mt-5">Takes 2 minutes to schedule · 100% free · No pitch.</p>
      </section>

      {/* URGENCY STRIP */}
      <section className="relative z-10 -mt-6 mb-4">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 bg-[#C9A84C]/[0.07] border-y border-[#C9A84C]/25 md:rounded-2xl md:border px-6 py-5">
            <span className="hidden sm:flex w-10 h-10 flex-shrink-0 rounded-full bg-[#C9A84C]/15 text-[#E8C97A] items-center justify-center">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
            </span>
            <p className="text-[#D7E0F0] text-sm md:text-base leading-snug">
              <span className="text-white font-semibold">Every day without the right coverage is a day your family is exposed.</span>{' '}
              Book your free call today and find out exactly where you stand.
            </p>
          </div>
        </div>
      </section>

      {/* WHO I AM */}
      <section className="relative max-w-4xl mx-auto px-6 py-14 z-10">
        <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-10 items-center md:items-start">
          <div className="flex-shrink-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden ring-2 ring-[#C9A84C]/40 shadow-2xl shadow-[#C9A84C]/10">
              <Image
                src="/Peter.Quinn.png"
                alt="Peter Quinn, Independent Insurance Broker"
                fill
                sizes="(min-width: 768px) 20rem, 16rem"
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="text-center md:text-left">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C9A84C] font-bold">Who I Am</span>
            <h2 className="font-display text-3xl md:text-4xl tracking-wide mt-3 mb-5">
              Peter Quinn — Independent Insurance Broker
            </h2>
            <p className="text-[#A9B6CE] text-base md:text-lg leading-relaxed mb-4">
              Based in <span className="text-white font-medium">Mesa, Arizona</span>, I work with the{' '}
              <span className="text-white font-medium">Alliance Group Living Benefits IMO</span>. I’m{' '}
              <span className="text-white font-medium">not captive</span> — I’m not tied to a single company. I shop{' '}
              <span className="text-[#C9A84C] font-semibold">30+ carriers</span> to find what’s right for the client, not
              what pays the biggest commission.
            </p>
            <p className="text-[#A9B6CE] text-base md:text-lg leading-relaxed">
              One honest conversation can show you exactly what you’re missing.
            </p>
          </div>
        </div>

        {/* Intro video — autoplays as it scrolls into view, tap for sound */}
        <SectionVideo />

        <SectionCta label="See What You Qualify For — FREE" />
      </section>

      {/* LIVING BENEFITS — green accents */}
      <section className="relative max-w-5xl mx-auto px-6 py-16 z-10">
        <div className="absolute inset-x-0 top-0 h-[400px] bg-gradient-to-b from-[#22C55E]/8 to-transparent pointer-events-none rounded-3xl" />
        <div className="relative text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#4ADE80] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            The Living Benefit
          </span>
          <h2 className="font-display text-4xl md:text-5xl tracking-wide mb-4">
            Pays You <span className="text-[#4ADE80]">While You’re Still Alive</span>
          </h2>
          <p className="text-white text-lg md:text-xl font-semibold max-w-2xl mx-auto mb-2">
            Your current policy probably pays nothing if you survive.
          </p>
          <p className="text-[#A9B6CE] text-lg max-w-2xl mx-auto">
            Your policy doesn’t wait until you’re gone. It pays out the moment you’re diagnosed.
          </p>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-5">
          {livingBenefits.map((b) => (
            <div
              key={b.title}
              className="bg-[#22C55E]/[0.04] border border-[#22C55E]/20 rounded-2xl p-7 hover:border-[#22C55E]/50 hover:bg-[#22C55E]/[0.07] transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-[#22C55E]/10 border border-[#22C55E]/25 text-[#4ADE80] flex items-center justify-center mb-5">
                {b.icon}
              </div>
              <h3 className="font-display text-2xl tracking-wide mb-2">{b.title}</h3>
              <p className="text-[#A9B6CE] text-sm leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
        <div className="relative">
          <SectionCta label="Find Out If Your Policy Has Living Benefits — FREE Call" />
        </div>
      </section>

      {/* CTA — repeated */}
      <section className="relative max-w-4xl mx-auto px-6 py-14 z-10">
        <div className="bg-gradient-to-br from-[#C9A84C] to-[#A88A38] rounded-3xl p-9 md:p-14 text-center shadow-2xl shadow-[#C9A84C]/20">
          <p className="text-[#0A1428] text-xl md:text-2xl font-bold leading-snug max-w-2xl mx-auto mb-2">
            It’s completely free to book and see what you qualify for.
          </p>
          <p className="text-[#1A2740] text-base md:text-lg font-medium mb-8">No pitch. No pressure. One honest conversation.</p>
          <CtaButton label="Book My FREE 30-Min Call" variant="dark" />
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="relative max-w-6xl mx-auto px-6 py-16 z-10">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C9A84C] font-bold">What I Offer</span>
          <h2 className="font-display text-4xl md:text-5xl tracking-wide mt-3 mb-4">Protection For Every Situation</h2>
          <p className="text-[#A9B6CE] text-lg max-w-2xl mx-auto">
            From your first policy to a full wealth strategy — built around you, not a sales quota.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p) => (
            <div
              key={p.title}
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-[#C9A84C]/40 hover:bg-white/[0.05] transition-all"
            >
              <div className="w-11 h-11 rounded-lg bg-[#C9A84C]/10 border border-[#C9A84C]/20 text-[#C9A84C] flex items-center justify-center mb-4">
                {p.icon}
              </div>
              <h3 className="font-display text-2xl tracking-wide mb-2">{p.title}</h3>
              <p className="text-[#8FA0BE] text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
        <SectionCta
          label="Book a Free Call — We’ll Figure It Out Together"
          sub="Not sure which one fits you?"
        />
      </section>

      {/* WHY INDEPENDENT */}
      <section className="relative max-w-4xl mx-auto px-6 py-16 z-10">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C9A84C] font-bold">Why Independent</span>
          <h2 className="font-display text-4xl md:text-5xl tracking-wide mt-3">Captive Agent vs. Peter Quinn</h2>
        </div>

        {/* column headers */}
        <div className="grid grid-cols-2 gap-3 md:gap-4 mb-3 px-1">
          <div className="text-center text-sm md:text-base font-bold text-[#8FA0BE] uppercase tracking-wider">Captive Agent</div>
          <div className="text-center text-sm md:text-base font-bold text-[#E8C97A] uppercase tracking-wider">Peter Quinn</div>
        </div>

        <div className="space-y-3">
          {comparison.map((row) => (
            <div key={row.topic} className="rounded-2xl border border-white/10 overflow-hidden">
              <div className="bg-white/[0.03] px-5 py-2.5 text-center text-[11px] uppercase tracking-[0.2em] text-[#C9A84C] font-bold">
                {row.topic}
              </div>
              <div className="grid grid-cols-2 divide-x divide-white/10">
                <div className="p-5 flex gap-3 items-start">
                  <XMark />
                  <span className="text-[#8FA0BE] text-sm leading-snug">{row.captive}</span>
                </div>
                <div className="p-5 flex gap-3 items-start bg-[#C9A84C]/[0.05]">
                  <CheckMark />
                  <span className="text-white text-sm leading-snug font-medium">{row.quinn}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <SectionCta label="Work With a Broker Who Works For YOU — Book Free" />
      </section>

      {/* OBJECTION CRUSHER */}
      <section className="relative max-w-5xl mx-auto px-6 py-16 z-10">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C9A84C] font-bold">No Catch</span>
          <h2 className="font-display text-4xl md:text-5xl tracking-wide mt-3">Let’s Clear This Up Right Now</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {objections.map((o) => (
            <div key={o.q} className="bg-white/[0.03] border border-white/10 rounded-2xl p-7 hover:border-[#C9A84C]/40 transition-all">
              <h3 className="font-display text-2xl tracking-wide text-[#E8C97A] mb-3">{o.q}</h3>
              <p className="text-[#A9B6CE] text-base leading-relaxed">{o.a}</p>
            </div>
          ))}
        </div>

        <SectionCta label="Good. Book My FREE 30-Min Call" />
      </section>

      {/* FINAL CTA */}
      <section className="relative max-w-4xl mx-auto px-6 py-16 z-10">
        <div className="bg-white/[0.03] border border-[#C9A84C]/30 rounded-3xl p-9 md:p-16 text-center">
          <h2 className="font-display text-4xl md:text-6xl tracking-wide leading-[1.05] mb-6">
            Most People Find Out They’re <span className="text-[#C9A84C]">Underprotected When It’s Already Too Late.</span>
          </h2>
          <p className="text-[#A9B6CE] text-lg md:text-xl max-w-2xl mx-auto mb-9">
            Don’t be that family. It takes 2 minutes to book and 30 minutes to change everything.{' '}
            <span className="text-white font-semibold">And it’s completely free.</span>
          </p>
          <CtaButton label="Book My FREE 30-Min Call Now" />
          <p className="text-sm text-[#7B8AA6] mt-5">No pitch · No pressure · No cost · Just answers.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-white/10 py-12 px-6 text-center z-10">
        <p className="font-display text-2xl tracking-wide mb-1">
          Quinn <span className="text-[#C9A84C]">Consulting</span>
        </p>
        <p className="text-[#7B8AA6] text-xs uppercase tracking-[0.2em] mb-5">Mesa, Arizona</p>
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[11px] uppercase tracking-widest text-[#8FA0BE] mb-6">
          <span>Family Protection</span>
          <span className="text-[#C9A84C]">·</span>
          <span>Living Benefits</span>
          <span className="text-[#C9A84C]">·</span>
          <span>Wealth Strategy</span>
        </div>
        <p className="text-[#7B8AA6] text-xs mb-6">Licensed Independent Broker · Alliance Group</p>
        <p className="text-[#5E6E8A] text-xs max-w-lg mx-auto leading-relaxed">
          © {new Date().getFullYear()} Quinn Consulting. For informational purposes only. Not financial, tax, or legal
          advice. Insurance products and benefits are subject to suitability, eligibility, and licensing requirements.
        </p>
      </footer>

      {/* MOBILE STICKY CTA */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden z-50 bg-[#0A1428]/95 backdrop-blur border-t border-[#C9A84C]/30 p-3">
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-[#C9A84C] text-[#0A1428] font-bold text-center py-4 rounded-xl active:scale-[0.98] transition-transform"
        >
          Book Your FREE Call →
        </a>
      </div>
    </main>
  )
}
