import type { MetadataRoute } from 'next'
import { SITE_URL } from '../components/seo/config'

// XML sitemap served at /sitemap.xml. Add new cluster pages here as they ship.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    { path: '/', priority: 1, changeFrequency: 'monthly' },
    { path: '/high-income-strategy', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/iul', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/iul/iul-vs-roth-ira', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/iul/iul-vs-401k', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/iul/policy-loans', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/tax-diversification/after-maxing-401k', priority: 0.7, changeFrequency: 'monthly' },
  ]

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }))
}
