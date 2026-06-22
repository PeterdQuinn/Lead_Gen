// Shared footer navigation so every page links to the funnel and the full
// content cluster. Drop into any footer to keep the whole site interconnected.
const COLUMNS: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: 'Strategy',
    links: [
      { label: 'High Income Strategy', href: '/high-income-strategy' },
      { label: 'Take the Assessment', href: '/high-income-strategy#assessment' },
    ],
  },
  {
    heading: 'IUL Guide',
    links: [
      { label: 'What Is an IUL', href: '/iul' },
      { label: 'IUL vs Roth IRA', href: '/iul/iul-vs-roth-ira' },
      { label: 'IUL vs 401(k)', href: '/iul/iul-vs-401k' },
      { label: 'Policy Loans', href: '/iul/policy-loans' },
    ],
  },
  {
    heading: 'Tax Planning',
    links: [{ label: 'After Maxing Your 401(k)', href: '/tax-diversification/after-maxing-401k' }],
  },
]

export default function ClusterLinks() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-8 max-w-3xl mx-auto text-left mb-10">
      {COLUMNS.map((col) => (
        <div key={col.heading}>
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#C9A84C] font-bold mb-3">
            {col.heading}
          </p>
          <ul className="space-y-2">
            {col.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[#A9B6CE] text-sm hover:text-[#E8C97A] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
