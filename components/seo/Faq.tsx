import JsonLd from './JsonLd'

export type QA = { q: string; a: string }

// Visible FAQ accordion (native <details>, no client JS) + FAQPage schema,
// which is eligible for FAQ rich results in search.
export default function Faq({ items }: { items: QA[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  return (
    <section className="mt-14">
      <h2 className="font-display text-3xl tracking-wide text-white mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-3">
        {items.map(({ q, a }) => (
          <details
            key={q}
            className="group bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 [&_summary]:list-none"
          >
            <summary className="flex items-center justify-between gap-4 cursor-pointer text-[#D7E0F0] font-semibold text-base md:text-lg">
              {q}
              <span className="text-[#C9A84C] text-xl transition-transform group-open:rotate-45 shrink-0">
                +
              </span>
            </summary>
            <p className="text-[#A9B6CE] text-base leading-relaxed mt-3">{a}</p>
          </details>
        ))}
      </div>
      <JsonLd data={schema} />
    </section>
  )
}
