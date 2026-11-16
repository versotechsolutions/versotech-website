import { BookOpen } from 'lucide-react'
import { getCategory } from '@/lib/versopick/categories'
import type { Guide } from '@/lib/versopick/guides'
import { guideImages, RATIOS } from '@/lib/versopick/images'
import { cn } from '@/lib/utils'
import VpImageFrame from './VpImage'

function ComingSoon() {
  return (
    <span className="inline-flex items-center rounded-full bg-vp-cream px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-vp-navy/60">
      Coming soon
    </span>
  )
}

/**
 * Buying-guide teaser. `variant="feature"` is the large editorial layout (image beside text on
 * desktop); `variant="card"` is the standard grid card. Both use the 3:2 guide image ratio.
 */
export default function GuideCard({ guide, variant = 'card' }: { guide: Guide; variant?: 'card' | 'feature' }) {
  const category = getCategory(guide.category)
  const image = guideImages[guide.slug] ?? null
  const feature = variant === 'feature'

  return (
    <article
      className={cn(
        'group overflow-hidden rounded-3xl border border-vp-navy/10 bg-white',
        feature && 'lg:grid lg:grid-cols-[1.25fr_1fr] lg:items-stretch'
      )}
    >
      <VpImageFrame
        image={image}
        ratio={RATIOS.guide}
        sizes={feature ? '(min-width: 1024px) 700px, 100vw' : '(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw'}
        placeholderIcon={category?.icon ?? BookOpen}
        tone={feature ? 'dark' : 'light'}
        className={cn(feature && 'lg:aspect-auto lg:h-full lg:min-h-[340px]')}
      />
      <div className={cn('flex flex-col p-6', feature && 'sm:p-8 lg:p-10 lg:justify-center')}>
        <div className="flex flex-wrap items-center gap-3">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-vp-gold-deep">{category?.name} guide</p>
          {guide.status === 'planned' && <ComingSoon />}
        </div>
        <h3 className={cn('mt-3 font-vp-display font-semibold leading-snug', feature ? 'text-2xl sm:text-3xl' : 'text-xl')}>
          {guide.title}
        </h3>
        <p className={cn('mt-3 leading-relaxed text-vp-navy/70', feature ? 'text-base' : 'text-sm')}>{guide.dek}</p>
      </div>
    </article>
  )
}
