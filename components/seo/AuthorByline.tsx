import { AUTHOR } from './config'

// E-E-A-T byline: names a credentialed author and shows freshness.
export default function AuthorByline({ updated, readTime }: { updated: string; readTime: string }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#7B8AA6] mb-8 pb-8 border-b border-white/10">
      <span className="text-[#A9B6CE] font-medium">{AUTHOR.name}</span>
      <span className="text-[#3E4A63]">·</span>
      <span>{AUTHOR.title}</span>
      <span className="text-[#3E4A63]">·</span>
      <span>Updated {updated}</span>
      <span className="text-[#3E4A63]">·</span>
      <span>{readTime}</span>
    </div>
  )
}
