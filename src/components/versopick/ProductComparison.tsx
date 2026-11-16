'use client'
import { Award, Check, Minus, X } from 'lucide-react'
import { categoryName } from '@/lib/versopick/categories'
import type { Product } from '@/lib/versopick/types'
import { cn } from '@/lib/utils'
import { DemoBadge, SponsoredBadge } from './Notices'
import { ProductVisual } from './ProductCard'
import RetailerButton from './RetailerButton'

type Row = { label: string; render: (p: Product) => React.ReactNode }

const bulletList = (items: string[], icon: 'check' | 'minus') => (
  <ul className="space-y-1.5">
    {items.map((t) => (
      <li key={t} className="flex gap-2">
        {icon === 'check' ? (
          <Check className="w-4 h-4 mt-0.5 shrink-0 text-vp-gold-deep" aria-hidden="true" />
        ) : (
          <Minus className="w-4 h-4 mt-0.5 shrink-0 text-vp-navy/40" aria-hidden="true" />
        )}
        <span>{t}</span>
      </li>
    ))}
  </ul>
)

/**
 * Reusable side-by-side comparison. Pass 2–4 products; pass `onRemove` to show remove buttons.
 * Spec rows are the union of every product's spec keys, so products with different
 * attributes still line up ("—" where a value is missing).
 */
export default function ProductComparison({
  products,
  onRemove,
  showRetailer = true,
  className,
}: {
  products: Product[]
  onRemove?: (id: string) => void
  showRetailer?: boolean
  className?: string
}) {
  const specKeys = Array.from(new Set(products.flatMap((p) => Object.keys(p.specs))))

  const rows: Row[] = [
    { label: 'Category', render: (p) => `${categoryName(p.category)} · ${p.subcategory}` },
    { label: 'Best for', render: (p) => p.bestFor },
    { label: 'Highlights', render: (p) => bulletList(p.highlights, 'check') },
    { label: 'Things to consider', render: (p) => bulletList(p.considerations, 'minus') },
    ...specKeys.map<Row>((key) => ({ label: key, render: (p) => p.specs[key] ?? '—' })),
  ]
  if (showRetailer) rows.push({ label: 'Where to buy', render: (p) => <RetailerButton product={p} className="w-full" /> })

  return (
    <div className={cn('overflow-x-auto rounded-2xl border border-vp-navy/10 bg-white', className)}>
      <table className="w-full min-w-[640px] table-fixed border-collapse text-sm text-vp-navy">
        <caption className="sr-only">Product comparison</caption>
        <thead>
          <tr>
            <th scope="col" className="sticky left-0 z-10 w-36 sm:w-44 bg-white p-4 text-left align-bottom">
              <span className="text-xs font-semibold uppercase tracking-wider text-vp-navy/50">Comparing {products.length}</span>
            </th>
            {products.map((p) => (
              <th key={p.id} scope="col" className="p-4 text-left align-top font-normal">
                <div className="relative max-w-[220px]">
                  <ProductVisual product={p} className="rounded-xl" sizes="220px" />
                  {onRemove && (
                    <button
                      type="button"
                      onClick={() => onRemove(p.id)}
                      className="absolute right-2 top-2 grid w-8 h-8 place-items-center rounded-full bg-white/90 text-vp-navy shadow hover:bg-white"
                      aria-label={`Remove ${p.name} from comparison`}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.isDemo && <DemoBadge />}
                  {p.sponsored && <SponsoredBadge />}
                  {p.editorsPick && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-vp-gold px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide">
                      <Award className="w-3 h-3" aria-hidden="true" /> Editor’s pick
                    </span>
                  )}
                </div>
                <p className="mt-2 font-vp-display text-base font-semibold leading-snug">{p.name}</p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-t border-vp-navy/10">
              <th scope="row" className="sticky left-0 z-10 bg-vp-cream p-4 text-left align-top text-xs font-semibold uppercase tracking-wider text-vp-navy/70">
                {row.label}
              </th>
              {products.map((p) => (
                <td key={p.id} className="p-4 align-top leading-relaxed text-vp-navy/85">
                  {row.render(p)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
