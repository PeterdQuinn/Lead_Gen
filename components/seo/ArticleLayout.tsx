import Breadcrumbs, { type Crumb } from './Breadcrumbs'
import ClusterLinks from './ClusterLinks'
import { ASSESSMENT_URL } from './config'

// Shared shell for every educational cluster page: brand nav, breadcrumb,
// the article body (styled via the global `.article` scope), a conversion
// CTA into the assessment, and a compliance footer.
export default function ArticleLayout({
  breadcrumbs,
  children,
}: {
  breadcrumbs: Crumb[]
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen bg-[#0A1428] text-white font-sans overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-[#C9A84C]/8 to-transparent pointer-events-none" />

      {/* NAV */}
      <nav className="relative flex items-center justify-between px-6 py-5 max-w-5xl mx-auto z-10">
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
            IUL Guide
          </a>
          <a
            href={ASSESSMENT_URL}
            className="hidden sm:inline-block bg-[#C9A84C] text-[#0A1428] font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-[#E8C97A] transition-all"
          >
            Take the Assessment
          </a>
        </div>
      </nav>

      {/* ARTICLE */}
      <article className="relative max-w-3xl mx-auto px-6 pt-6 pb-16 z-10">
        <Breadcrumbs items={breadcrumbs} />
        <div className="article">{children}</div>
      </article>

      {/* CONVERSION CTA */}
      <section className="relative max-w-3xl mx-auto px-6 pb-16 z-10">
        <div className="bg-white/[0.03] border border-[#C9A84C]/30 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl tracking-wide leading-tight mb-4">
            See How This Applies To <span className="text-[#C9A84C]">Your Situation</span>
          </h2>
          <p className="text-[#A9B6CE] text-base md:text-lg max-w-xl mx-auto mb-7">
            The High Income Strategy Assessment is a confidential way to review your current
            retirement, tax, and liquidity position. Education and analysis, no product pitch.
          </p>
          <a
            href={ASSESSMENT_URL}
            className="inline-block font-bold text-base md:text-lg px-8 md:px-10 py-4 md:py-5 rounded-xl bg-[#C9A84C] text-[#0A1428] hover:bg-[#E8C97A] shadow-2xl shadow-[#C9A84C]/30 transition-all active:scale-[0.98]"
          >
            Take the Assessment
          </a>
        </div>
      </section>

      {/* FOOTER + COMPLIANCE */}
      <footer className="relative border-t border-white/10 py-12 px-6 text-center z-10">
        <ClusterLinks />
        <p className="font-display text-2xl tracking-wide mb-1">
          Quinn <span className="text-[#C9A84C]">Consulting</span>
        </p>
        <p className="text-[#7B8AA6] text-xs uppercase tracking-[0.2em] mb-6">Mesa, Arizona</p>
        <p className="text-[#5E6E8A] text-xs max-w-2xl mx-auto leading-relaxed">
          For informational and educational purposes only. This content is not financial, tax, legal,
          or investment advice, and is not an offer or solicitation to buy any product. Indexed
          universal life and other insurance products involve costs, and any non-guaranteed values are
          illustrations, not promises of future results. Guarantees are subject to the
          claims-paying ability of the issuing carrier. Suitability depends on your individual
          circumstances. Consult a qualified tax, legal, or financial professional before making
          decisions.
        </p>
      </footer>
    </main>
  )
}
