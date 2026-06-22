// Renders a JSON-LD structured-data block. Server component, ships in the
// initial HTML so crawlers see it without executing JS.
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
