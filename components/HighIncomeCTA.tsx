// Homepage doorway into the High Income Strategy funnel. Text on the left,
// CTA card on the right; stacks to a single column on phones/tablets.
// Brand-matched to the site's navy + gold palette.
export default function HighIncomeCTA() {
  return (
    <section className="relative w-full px-4 py-10 sm:px-6 lg:px-8 z-10">
      <div className="mx-auto max-w-6xl rounded-3xl border border-[#C9A84C]/30 bg-white/[0.03] px-5 py-8 text-white shadow-2xl shadow-black/30 sm:px-8 sm:py-10 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A84C]">
              High Income Professionals
            </p>

            <h2 className="font-display text-3xl leading-tight tracking-wide sm:text-4xl lg:text-5xl">
              Are you earning $150,000+ and looking for{' '}
              <span className="text-[#C9A84C]">smarter wealth strategy?</span>
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-[#A9B6CE] sm:text-lg">
              If you are an executive, engineer, business owner, medical professional, or investor,
              the High Income Strategy Assessment helps identify potential planning gaps around
              retirement flexibility, tax diversification, liquidity, and long-term wealth protection.
            </p>
          </div>

          <div className="flex flex-col gap-4 rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-6">
            <a
              href="/high-income-strategy"
              className="w-full rounded-xl bg-[#C9A84C] px-6 py-4 text-center text-base font-bold text-[#0A1428] transition hover:bg-[#E8C97A] focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:ring-offset-2 focus:ring-offset-[#0A1428]"
            >
              Take The High Income Strategy Assessment
            </a>

            <p className="text-center text-sm leading-6 text-[#7B8AA6]">
              Built for high earners who want to review their current strategy before making
              financial decisions.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
