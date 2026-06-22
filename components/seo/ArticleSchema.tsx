import JsonLd from './JsonLd'
import { SITE_URL, AUTHOR } from './config'

// Article + author (Person) structured data. Supports E-E-A-T by attributing
// content to a named, credentialed author.
export default function ArticleSchema({
  headline,
  description,
  slug,
  datePublished,
  dateModified,
}: {
  headline: string
  description: string
  slug: string // e.g. /iul/iul-vs-roth-ira
  datePublished: string // ISO date
  dateModified: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}${slug}` },
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      name: AUTHOR.name,
      jobTitle: 'Licensed Insurance Broker',
      url: `${SITE_URL}/`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Quinn Consulting',
      url: SITE_URL,
    },
  }
  return <JsonLd data={schema} />
}
