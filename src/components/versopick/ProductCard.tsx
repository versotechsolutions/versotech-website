'use client'
import { Award, Check, GitCompareArrows, Sparkles } from 'lucide-react'
import { getCategory } from '@/lib/versopick/categories'
import { RATIOS } from '@/lib/versopick/ratios'
import type { Product } from '@/lib/versopick/types'
import { cn } from '@/lib/utils'
import VpImageFrame from './VpImage'
import { useCompare } from './CompareProvider'
import { DemoBadge, SponsoredBadge } from './Notices'
import RetailerButton from './RetailerButton'

/**
 * Square product image. Shows the product's own photograph (object-contain on white, the
 * e-commerce standard) only for real, non-demo products; demo products always get the
 * illustrated tile so no generic photo can ever pass as a specific product.
 */
export function ProductVisual({
  product,
  className,
  sizes = '(min-width: 1280px) 400px, (min-width: 640px) 50vw, 100vw',
}: {
  product: Product
  className?: string
  sizes?: string
}) {
  const photo = product.isDemo ? undefined : product.images?.[0]
  return (
    <VpImageFrame
      image={photo}
      ratio={RATIOS.product}
      sizes={sizes}
      fit="contain"
      placeholderIcon={getCategory(product.category)?.icon ?? Sparkles}
      placeholderLabel={product.isDemo ? 'Illustration' : 'Photo coming soon'}
      className={className}
    />
  )
}

export default function ProductCard({ product }: { product: Product }) {
  const { isSelected, toggle, isFull } = useCompare()
  const selected = isSelected(product.id)
  const category = getCategory(product.category)

  return (
    <article className="group flex flex-col rounded-2xl bg-white border border-vp-navy/10 overflow-hidden transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-vp-navy/10">
      <div className="relative">
        <ProductVisual product={product} />
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {product.isDemo && <DemoBadge />}
          {product.sponsored && <SponsoredBadge />}
        </div>
        <div className="absolute right-3 top-3 flex flex-col items-end gap-1.5">
          {product.editorsPick && (
            <span className="inline-flex items-center gap-1 rounded-full bg-vp-gold px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-vp-navy">
              <Award className="w-3 h-3" aria-hidden="true" /> Editor’s pick
            </span>
          )}
          {product.featured && (
            <span className="inline-flex items-center gap-1 rounded-full bg-vp-navy px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-vp-cream">
              <Sparkles className="w-3 h-3" aria-hidden="true" /> Featured
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-vp-gold-deep">
          {category?.shortName} · {product.subcategory}
        </p>
        <h3 className="mt-1.5 font-vp-display text-lg font-semibold leading-snug text-vp-navy">{product.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-vp-navy/70">{product.summary}</p>
        <p className="mt-3 text-sm">
          <span className="font-semibold">Best for:</span> <span className="text-vp-navy/80">{product.bestFor}</span>
        </p>
        <ul className="mt-3 space-y-1.5 text-sm text-vp-navy/80">
          {product.highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex gap-2">
              <Check className="w-4 h-4 mt-0.5 shrink-0 text-vp-gold-deep" aria-hidden="true" /> {h}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-5 flex flex-col gap-2">
          <RetailerButton product={product} className="w-full" />
          <button
            type="button"
            onClick={() => toggle(product.id)}
            disabled={!selected && isFull}
            aria-pressed={selected}
            className={cn(
              'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-50',
              selected
                ? 'bg-vp-gold text-vp-navy hover:bg-vp-gold/90'
                : 'border border-vp-navy/20 text-vp-navy hover:border-vp-navy hover:bg-vp-cream'
            )}
            title={!selected && isFull ? 'You can compare up to 4 products' : undefined}
          >
            <GitCompareArrows className="w-4 h-4" aria-hidden="true" />
            {selected ? 'Added to compare' : 'Add to compare'}
          </button>
        </div>
      </div>
    </article>
  )
}

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}
