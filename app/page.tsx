'use client'

const CALENDLY_URL = 'https://calendly.com/peter-quinn-alliance/30min'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A14] text-white font-sans overflow-hidden">

      <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-[#C9A84C]/10 to-transparent pointer-events-none" />

      <nav className="relative flex items-center justify-between px-6 py-5 max-w-6xl mx-auto z-10">
        <div className="flex flex-col">
          <span className="font-display text-2xl font-bold tracking-tight leading-none">
            Peter <span className="text-[#C9A84C]">Quinn</span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#8888A0] mt-1">
            Wealth Consulting · Insurance Broker
          </span>
        </div>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-block bg-[#C9A84C] text-[#0A0A14] text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-[#E8C97A] transition-colors"
        >
          Book Now →
        </a>
      </nav>

      <section className="relative max-w-4xl mx-auto px-6 pt-12 pb-20 text-center z-10">
        <div className="inline-flex items-center gap-2 bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#C9A84C] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-[#C9A84C] rounded-full animate-pulse" />
          Free Strategy Review — Limited Spots
        </div>

        <h1 className="text-5xl md:text-7xl font-display font-black leading-[1.05] tracking-tight mb-8">
          Most people are<br />
          <span className="text-[#C9A84C]">set up wrong.</span>
        </h1>

        <p className="text-xl md:text-2xl text-[#A0A0B8] max-w-2xl mx-auto leading-relaxed mb-12">
          Your 401k. Old rollovers. Roth positioning. Cash value strategies. Most people leave money on the table.
          <span className="text-white font-semibold"> See if your setup is costing you.</span>
        </p>

        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#C9A84C] text-[#0A0A14] font-bold text-lg px-10 py-5 rounded-xl hover:bg-[#E8C97A] transition-all shadow-2xl shadow-[#C9A84C]/30 active:scale-[0.98] mb-4"
        >
          Book My Free Review →
        </a>
        <p className="text-sm text-[#6A6A82]">30 minutes. No obligation. Just clarity.</p>
      </section>

      <section className="relative max-w-5xl mx-auto px-6 py-16 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              icon: (
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="6" width="18" height="13" rx="1" />
                  <path d="M3 10h18" />
                  <path d="M7 15h3" />
                  <path d="M14 15h3" />
                </svg>
              ),
              title: 'Your 401k is a future tax bill',
              body: 'Every dollar pulled out gets taxed at whatever rate exists then. Most people never run the numbers.',
            },
            {
              icon: (
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
                  <path d="M21 3v5h-5" />
                  <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
                  <path d="M3 21v-5h5" />
                </svg>
              ),
              title: 'Old rollovers sitting wrong',
              body: 'Changed jobs? That old 401k might be costing you. A rollover done wrong burns thousands.',
            },
            {
              icon: (
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 10l9-6 9 6" />
                  <path d="M5 10v9h14v-9" />
                  <path d="M9 19v-6h6v6" />
                  <path d="M3 19h18" />
                </svg>
              ),
              title: 'Strategies you have never seen',
              body: 'IULs. Whole life cash value. Roth conversion timing. Used by high earners — never advertised.',
            },
            {
              icon: (
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3l8 4v5c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7l8-4z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              ),
              title: 'What your family really inherits',
              body: 'Taxes, RMDs, and estate costs cut deep. Most people leave less than they planned.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-7 hover:border-[#C9A84C]/40 hover:bg-white/[0.05] transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-[#C9A84C]/10 border border-[#C9A84C]/20 text-[#C9A84C] flex items-center justify-center mb-5">
                {item.icon}
              </div>
              <h3 className="font-display text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-[#8888A0] text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative max-w-4xl mx-auto px-6 py-20 z-10">
        <div className="bg-gradient-to-br from-[#C9A84C] to-[#A88A38] rounded-3xl p-10 md:p-16 text-center shadow-2xl shadow-[#C9A84C]/20">
          <h2 className="text-4xl md:text-5xl font-display font-black text-[#0A0A14] mb-6 leading-tight">
            See what high earners are quietly doing.
          </h2>
          <p className="text-[#1A1A2E] text-lg mb-10 max-w-xl mx-auto font-medium">
            Tax-free income. Protected growth. Cash value access. Wealth transfer. We talk through all of it.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 text-left">
            {['Rollovers', 'Roth Strategy', 'IUL & Whole Life', 'Legacy Planning'].map((tag) => (
              <div key={tag} className="bg-[#0A0A14]/10 border border-[#0A0A14]/20 rounded-lg px-4 py-3 text-center">
                <span className="text-[#0A0A14] font-bold text-sm">{tag}</span>
              </div>
            ))}
          </div>

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#0A0A14] text-[#C9A84C] font-bold text-lg px-12 py-5 rounded-xl hover:bg-[#1A1A2E] transition-all shadow-xl active:scale-[0.98]"
          >
            Book My Free Review →
          </a>
          <p className="text-sm text-[#1A1A2E] mt-4 font-medium">No pressure. No sales pitch. Just clarity.</p>
        </div>
      </section>

      <section className="relative max-w-3xl mx-auto px-6 py-16 z-10">
        <h3 className="text-2xl md:text-3xl font-display font-bold text-center mb-10">
          This is for you if...
        </h3>
        <div className="space-y-3 mb-12">
          {[
            'Old 401k from a previous employer',
            'Recently changed jobs',
            'Business owner or high income earner',
            'Want tax-free retirement income',
            'Want to leave money to family efficiently',
            'Not sure if your setup is working',
          ].map((item) => (
            <div key={item} className="flex items-center gap-4 bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4">
              <div className="w-8 h-8 rounded-md bg-[#C9A84C] text-[#0A0A14] flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="text-white font-medium">{item}</span>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C9A84C] text-[#0A0A14] font-bold text-lg px-12 py-5 rounded-xl hover:bg-[#E8C97A] transition-all shadow-2xl shadow-[#C9A84C]/30 active:scale-[0.98]"
          >
            Book My Free Review →
          </a>
        </div>
      </section>

      <footer className="relative border-t border-white/10 py-10 px-6 text-center text-xs text-[#6A6A82] z-10">
        <p className="text-white font-bold mb-1 font-display text-base">Peter Quinn</p>
        <p className="text-[#C9A84C] mb-3 text-[11px] uppercase tracking-widest">Wealth Consulting · Licensed Insurance Broker</p>
        <p className="mb-3">© {new Date().getFullYear()} All rights reserved.</p>
        <p className="max-w-lg mx-auto leading-relaxed">
          For informational purposes only. Not financial, tax, or legal advice. Insurance products and strategies discussed are subject to suitability and licensing requirements.
        </p>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 md:hidden z-50 bg-[#0A0A14] border-t border-[#C9A84C]/30 p-3">
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-[#C9A84C] text-[#0A0A14] font-bold text-center py-4 rounded-xl"
        >
          Book My Free Review →
        </a>
      </div>

    </main>
  )
}
