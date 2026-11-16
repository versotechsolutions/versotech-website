import type { Metadata } from 'next'
import { Suspense } from 'react'
import CompareView from './CompareView'

export const metadata: Metadata = {
  title: 'Compare products',
  description: 'Compare up to four VERSOPICK products side by side.',
}

export default function ComparePage() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-vp-gold-deep">Compare</p>
      <h1 className="mt-2 font-vp-display text-4xl sm:text-5xl font-semibold">Side-by-side comparison</h1>
      <p className="mt-3 max-w-2xl text-lg text-vp-navy/70">
        Weigh up highlights, trade-offs and key details. Add up to four products from any listing.
      </p>
      <div className="mt-10">
        <Suspense fallback={<p className="text-vp-navy/60">Loading comparison…</p>}>
          <CompareView />
        </Suspense>
      </div>
    </section>
  )
}
