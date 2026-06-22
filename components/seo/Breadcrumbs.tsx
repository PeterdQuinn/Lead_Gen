import JsonLd from './JsonLd'
import { SITE_URL } from './config'

export type Crumb = { name: string; href: string }

// Visible breadcrumb trail + BreadcrumbList schema. Reinforces the topical
// silo for crawlers and gives users a way back up the cluster.
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  }

  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-[#7B8AA6]">
        {items.map((item, i) => {
          const last = i === items.length - 1
          return (
            <li key={item.href} className="flex items-center gap-2">
              {last ? (
                <span className="text-[#A9B6CE]">{item.name}</span>
              ) : (
                <a href={item.href} className="hover:text-[#E8C97A] transition-colors">
                  {item.name}
                </a>
              )}
              {!last && <span className="text-[#3E4A63]">/</span>}
            </li>
          )
        })}
      </ol>
      <JsonLd data={schema} />
    </nav>
  )
}
