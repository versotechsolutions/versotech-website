import type { Metadata } from 'next'
import { vpMetadata } from '@/lib/versopick/seo'
import { guides } from '@/lib/versopick/guides'
import GuideCard from '@/components/versopick/GuideCard'
import { AffiliateDisclosure } from '@/components/versopick/Notices'

export const metadata: Metadata = vpMetadata({
  path: '/versopick/guides',
  title: 'Buying guides',
  description: 'Plain-English buying guides from VERSOPICK to help you choose with confidence.',
})

export default function GuidesPage() {
  const [lead, ...rest] = guides
  return (
    <>
      <section className="border-b border-vp-navy/10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-vp-gold-deep">Buying guides</p>
          <h1 className="mt-2 font-vp-display text-4xl sm:text-5xl font-semibold">Know what to look for</h1>
          <p className="mt-3 max-w-2xl text-lg text-vp-navy/70">
            Plain-English guides that explain the trade-offs before you buy. Our first guides are in preparation.
          </p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-6">
        {lead && <GuideCard guide={lead} variant="feature" />}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((g) => (
            <GuideCard key={g.slug} guide={g} />
          ))}
        </div>
        <AffiliateDisclosure compact />
      </section>
    </>
  )
}
