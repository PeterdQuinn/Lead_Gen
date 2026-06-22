import type { Metadata } from 'next'
import HighEarnerForm from '../../components/HighEarnerForm'
import CalendlyEmbed from '../../components/CalendlyEmbed'
import ClusterLinks from '../../components/seo/ClusterLinks'

const CALENDLY_URL = 'https://calendly.com/peter-quinn-alliance/30min'
const PDF_URL = '/documents/High_Earner_Wealth_Assessment.pdf'

export const metadata: Metadata = {
  title: 'High Income Strategy Assessment | Peter Quinn',
  description:
    'A private strategy assessment for high-income professionals, executives, business owners, and investors exploring retirement flexibility, tax diversification, liquidity, and advanced wealth strategies.',
  alternates: { canonical: '/high-income-strategy' },
  openGraph: {
    title: 'High Income Strategy Assessment | Peter Quinn',
    description:
      'A private strategy assessment for high-income professionals, executives, business owners, and investors exploring retirement flexibility, tax diversification, and liquidity.',
    type: 'website',
  },
}

// ---- Static content ------------------------------------------------------

const audience = [
  'Household income $150k+',
  'Executives',
  'Engineers & Technology Professionals',
  'Business Owners',
  'Medical Professionals',
  'Real Estate Investors',
  'High-income households planning for retirement',
]

const reasons = [
  {
    title: 'Tax Exposure',
    body: 'Many retirement plans delay taxes rather than eliminate them. The bill comes due in retirement, often at unknown future rates.',
  },
  {
    title: 'Contribution Limits',
    body: 'High earners frequently hit IRS contribution ceilings, leaving surplus income with nowhere tax-advantaged to go.',
  },
  {
    title: 'Liquidity',
    body: 'Retirement money is often difficult to access when opportunities arise, locking up capital until 59½.',
  },
  {
    title: 'Concentration Risk',
    body: 'Many professionals become overly dependent on a single retirement vehicle, with little diversification across tax treatment.',
  },
]

const questions = [
  'Have I outgrown my current retirement strategy?',
  'What happens after I max out my 401(k)?',
  'How do I create additional tax diversification?',
  'How can I improve liquidity without sacrificing growth?',
  'How do policy loans work?',
  'What causes some strategies to fail?',
  'How do high-income earners prepare for retirement differently?',
]

const reviewItems = [
  'Retirement Positioning',
  'Tax Diversification',
  'Liquidity Planning',
  'Existing Insurance Structures',
  'Wealth Transfer Objectives',
  'Business Planning Considerations',
  'Potential Strategy Gaps',
]

// ---- Small presentational helpers ---------------------------------------

function CheckMark() {
  return (
    <span className="w-6 h-6 rounded-md bg-[#C9A84C] text-[#0A1428] flex items-center justify-center flex-shrink-0">
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  )
}

export default function HighEarnerWealthAssessment() {
  return (
    <main className="min-h-screen bg-[#0A1428] text-white font-sans overflow-hidden">
      {/* subtle top glow */}
      <div className="absolute top-0 left-0 right-0 h-[620px] bg-gradient-to-b from-[#C9A84C]/10 to-transparent pointer-events-none" />

      {/* NAV */}
      <nav className="relative flex items-center justify-between px-6 py-5 max-w-6xl mx-auto z-10">
        <a href="/" className="flex flex-col">
          <span className="font-display text-2xl tracking-wide leading-none">
            Quinn <span className="text-[#C9A84C]">Consulting</span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#7B8AA6] mt-1">
            Private Wealth Strategy · Mesa, Arizona
          </span>
        </a>
        <div className="flex items-center gap-5">
          <a
            href="/iul"
            className="hidden sm:inline-block text-sm font-semibold text-[#A9B6CE] hover:text-[#E8C97A] transition-colors"
          >
            Resources
          </a>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block bg-[#C9A84C] text-[#0A1428] font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-[#E8C97A] transition-all"
          >
            Book Strategy Session →
          </a>
        </div>
      </nav>

      {/* 1. HERO */}
      <section className="relative max-w-4xl mx-auto px-6 pt-12 md:pt-16 pb-16 text-center z-10">
        <div className="inline-flex items-center gap-2 bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#E8C97A] text-xs font-bold uppercase tracking-[0.18em] px-4 py-2 rounded-full mb-8">
          Private · By Application · For Professionals Earning $150k+
        </div>

        <h1 className="text-4xl md:text-6xl font-display leading-[1.06] tracking-wide mb-7">
          Have You Outgrown <span className="text-[#C9A84C]">Traditional Retirement Planning?</span>
        </h1>

        <p className="text-lg md:text-xl text-[#A9B6CE] max-w-2xl mx-auto leading-relaxed mb-5">
          High-income professionals often discover that retirement contribution limits, future tax
          exposure, and liquidity restrictions create planning gaps.
        </p>
        <p className="text-base md:text-lg text-[#8FA0BE] max-w-2xl mx-auto leading-relaxed mb-10">
          The High Income Strategy Assessment helps identify potential opportunities and risks before
          making financial decisions.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#assessment"
            className="inline-block w-full sm:w-auto font-bold text-base md:text-lg px-8 md:px-10 py-4 md:py-5 rounded-xl bg-[#C9A84C] text-[#0A1428] hover:bg-[#E8C97A] shadow-2xl shadow-[#C9A84C]/30 transition-all active:scale-[0.98] text-center"
          >
            Take The Assessment
          </a>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto font-bold text-base md:text-lg px-8 md:px-10 py-4 md:py-5 rounded-xl bg-white/[0.04] border border-white/15 text-white hover:border-[#C9A84C]/50 hover:bg-white/[0.07] transition-all active:scale-[0.98] text-center"
          >
            Book Strategy Session
          </a>
        </div>
        <p className="text-sm text-[#7B8AA6] mt-5">
          Education and analysis, no pressure, no product pitch.
        </p>
      </section>

      {/* DIFFERENTIATOR, what most agents don't lead with */}
      <section className="relative max-w-4xl mx-auto px-6 pb-4 z-10">
        <div className="border-y border-[#C9A84C]/25 py-7 text-center">
          <p className="font-display text-3xl md:text-4xl tracking-wide">
            We Start With <span className="text-[#C9A84C]">Strategy</span>, Not Products.
          </p>
        </div>
      </section>

      {/* CREDIBILITY, "Am I the type of person this is for?" */}
      <section className="relative max-w-4xl mx-auto px-6 py-12 z-10 text-center">
        <span className="text-xs uppercase tracking-[0.25em] text-[#C9A84C] font-bold">Who We Help</span>
        <div className="flex flex-wrap items-center justify-center gap-3 mt-5">
          {['Families', 'Business Owners', 'High Income Professionals', 'Executives', 'Engineers', 'Investors'].map(
            (who) => (
              <span
                key={who}
                className="inline-block bg-white/[0.04] border border-white/10 text-[#D7E0F0] text-sm md:text-base font-medium px-4 py-2 rounded-full"
              >
                {who}
              </span>
            ),
          )}
        </div>
      </section>

      {/* 2. WHO THIS IS FOR */}
      <section className="relative max-w-5xl mx-auto px-6 py-16 z-10">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C9A84C] font-bold">Eligibility</span>
          <h2 className="font-display text-4xl md:text-5xl tracking-wide mt-3">This Assessment Is Designed For</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {audience.map((item) => (
            <div
              key={item}
              className="flex items-center gap-4 bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 hover:border-[#C9A84C]/40 transition-all"
            >
              <CheckMark />
              <span className="text-[#D7E0F0] text-base md:text-lg">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WHY HIGH EARNERS START LOOKING */}
      <section className="relative max-w-6xl mx-auto px-6 py-16 z-10">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C9A84C] font-bold">The Planning Gap</span>
          <h2 className="font-display text-4xl md:text-5xl tracking-wide mt-3 mb-4">
            Why High Earners Start Looking For Alternatives
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r) => (
            <div key={r.title} className="bg-white/[0.03] border border-white/10 rounded-2xl p-7 hover:border-[#C9A84C]/40 transition-all">
              <h3 className="font-display text-xl tracking-wide text-[#E8C97A] mb-3">{r.title}</h3>
              <p className="text-[#8FA0BE] text-sm leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. QUESTIONS WE HELP ANSWER */}
      <section className="relative max-w-5xl mx-auto px-6 py-16 z-10">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C9A84C] font-bold">Clarity First</span>
          <h2 className="font-display text-4xl md:text-5xl tracking-wide mt-3">Questions We Help Answer</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {questions.map((q) => (
            <div
              key={q}
              className="flex items-start gap-4 bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-5 hover:border-[#C9A84C]/40 transition-all"
            >
              <span className="font-display text-2xl text-[#C9A84C] leading-none mt-0.5">?</span>
              <span className="text-[#D7E0F0] text-base md:text-lg leading-snug">{q}</span>
            </div>
          ))}
        </div>
      </section>

      {/* RESOURCES, featured education topics */}
      <section className="relative max-w-5xl mx-auto px-6 py-16 z-10">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C9A84C] font-bold">Resources</span>
          <h2 className="font-display text-4xl md:text-5xl tracking-wide mt-3">Worth Understanding First</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              title: 'IUL vs Roth IRA',
              href: '/iul/iul-vs-roth-ira',
              body: 'Both offer tax advantages, but they differ on contribution limits, access, and how growth is treated. A side-by-side look at where each may fit.',
            },
            {
              title: 'What Happens After You Max Your 401(k)?',
              href: '/tax-diversification/after-maxing-401k',
              body: 'Once you hit the annual ceiling, surplus income needs somewhere to go. A look at the options high earners typically weigh next.',
            },
            {
              title: 'Understanding Policy Loans',
              href: '/iul/policy-loans',
              body: 'How borrowing against cash value works, what it can cost, and the common missteps that cause strategies to underperform.',
            },
          ].map((article) => (
            <a
              key={article.title}
              href={article.href}
              className="group bg-white/[0.03] border border-white/10 rounded-2xl p-7 hover:border-[#C9A84C]/40 hover:bg-white/[0.05] transition-all flex flex-col"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C9A84C] font-bold mb-4">
                Article
              </span>
              <h3 className="font-display text-2xl tracking-wide mb-3 leading-tight">{article.title}</h3>
              <p className="text-[#8FA0BE] text-sm leading-relaxed mb-4">{article.body}</p>
              <span className="mt-auto text-[#E8C97A] text-sm font-semibold group-hover:translate-x-1 transition-transform">
                Read &rarr;
              </span>
            </a>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="/iul"
            className="inline-block text-[#E8C97A] font-semibold hover:text-[#C9A84C] transition-colors"
          >
            Start with the full IUL Guide &rarr;
          </a>
        </div>
      </section>

      {/* 5. ASSESSMENT FORM, centerpiece */}
      <section id="assessment" className="relative max-w-3xl mx-auto px-6 py-16 z-10 scroll-mt-6">
        <div className="text-center mb-8">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C9A84C] font-bold">The Assessment</span>
          <h2 className="font-display text-4xl md:text-5xl tracking-wide mt-3 mb-4">
            High Income Strategy Assessment
          </h2>
          <p className="text-[#A9B6CE] text-lg max-w-xl mx-auto">
            A confidential snapshot of where you stand today. Only your contact details are required.
            The rest sharpens your strategy review.
          </p>
        </div>
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl shadow-black/30">
          <HighEarnerForm calendlyUrl={CALENDLY_URL} />
        </div>
      </section>

      {/* 7. PREPARATION & SCHEDULING */}
      <section className="relative max-w-5xl mx-auto px-6 py-16 z-10">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C9A84C] font-bold">Prepare &amp; Schedule</span>
          <h2 className="font-display text-4xl md:text-5xl tracking-wide mt-3">Ready For Your Strategy Session?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Left, PDF */}
          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 flex flex-col">
            <h3 className="font-display text-2xl md:text-3xl tracking-wide mb-3">
              Download Assessment Worksheet
            </h3>
            <p className="text-[#A9B6CE] text-base leading-relaxed mb-6">
              Complete this worksheet before your appointment so we can focus on strategy rather than
              information gathering.
            </p>
            <a
              href={PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center justify-center gap-2 font-bold text-base px-6 py-4 rounded-xl bg-[#C9A84C] text-[#0A1428] hover:bg-[#E8C97A] transition-all active:scale-[0.98] mt-auto"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download PDF
            </a>
          </div>

          {/* Right, Calendly embed */}
          <div className="bg-white/[0.03] border border-[#C9A84C]/30 rounded-3xl p-8 flex flex-col">
            <h3 className="font-display text-2xl md:text-3xl tracking-wide mb-3">
              Schedule Strategy Session
            </h3>
            <p className="text-[#A9B6CE] text-base leading-relaxed mb-6">
              Choose a time that works best for your schedule.
            </p>
            <div className="mt-auto">
              <CalendlyEmbed url={CALENDLY_URL} />
            </div>
          </div>
        </div>
      </section>

      {/* 8. WHAT WE REVIEW */}
      <section className="relative max-w-4xl mx-auto px-6 py-16 z-10">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C9A84C] font-bold">On The Call</span>
          <h2 className="font-display text-4xl md:text-5xl tracking-wide mt-3">What We Review</h2>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {reviewItems.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4"
            >
              <CheckMark />
              <span className="text-[#D7E0F0] text-base md:text-lg">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 10. FINAL CTA */}
      <section className="relative max-w-4xl mx-auto px-6 py-16 z-10">
        <div className="bg-white/[0.03] border border-[#C9A84C]/30 rounded-3xl p-9 md:p-16 text-center">
          <h2 className="font-display text-4xl md:text-6xl tracking-wide leading-[1.05] mb-8">
            Ready To Understand <span className="text-[#C9A84C]">Where You Stand?</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#assessment"
              className="inline-block w-full sm:w-auto font-bold text-base md:text-lg px-10 py-5 rounded-xl bg-[#C9A84C] text-[#0A1428] hover:bg-[#E8C97A] shadow-2xl shadow-[#C9A84C]/30 transition-all active:scale-[0.98] text-center"
            >
              Take The Assessment
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto font-bold text-base md:text-lg px-10 py-5 rounded-xl bg-white/[0.04] border border-white/15 text-white hover:border-[#C9A84C]/50 hover:bg-white/[0.07] transition-all active:scale-[0.98] text-center"
            >
              Schedule A Strategy Session
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-white/10 py-12 px-6 text-center z-10">
        <ClusterLinks />
        <p className="font-display text-2xl tracking-wide mb-1">
          Quinn <span className="text-[#C9A84C]">Consulting</span>
        </p>
        <p className="text-[#7B8AA6] text-xs uppercase tracking-[0.2em] mb-6">Mesa, Arizona</p>
        <p className="text-[#7B8AA6] text-xs mb-6">Licensed Insurance Broker · Business Owner</p>
        <p className="text-[#5E6E8A] text-xs max-w-2xl mx-auto leading-relaxed">
          © {new Date().getFullYear()} Quinn Consulting. For informational and educational purposes
          only. Not financial, tax, or legal advice. Any strategies discussed are reviewed
          individually; suitability depends on your specific situation. Consult a qualified tax or
          legal professional regarding your circumstances.
        </p>
      </footer>
    </main>
  )
}
