'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { GitCompareArrows, X } from 'lucide-react'
import { getProduct } from '@/lib/versopick/products'
import { MAX_COMPARE, useCompare } from './CompareProvider'

/** Floating bar showing the current comparison selection. Hidden on the compare page itself. */
export default function CompareTray() {
  const pathname = usePathname()
  const { ids, remove, clear } = useCompare()
  const selected = ids.map(getProduct).filter((p) => p !== undefined)

  if (selected.length === 0 || pathname === '/versopick/compare') return null

  return (
    <>
      {/* Spacer so the fixed tray never covers the end of the page */}
      <div aria-hidden="true" className="h-28" />
      <div className="fixed inset-x-0 bottom-0 z-40 p-3 sm:p-4" role="region" aria-label="Comparison selection">
        <div className="mx-auto flex max-w-4xl flex-col gap-3 rounded-2xl bg-vp-navy p-3 sm:p-4 text-white shadow-2xl shadow-vp-navy/40 sm:flex-row sm:items-center">
          <div className="flex min-w-0 flex-1 items-center gap-2 overflow-x-auto">
            <span className="shrink-0 text-sm font-semibold text-vp-gold">
              {selected.length}/{MAX_COMPARE}
            </span>
            {selected.map((p) => (
              <span key={p.id} className="inline-flex shrink-0 items-center gap-1 rounded-full bg-white/10 py-1 pl-3 pr-1 text-xs">
                <span className="max-w-[140px] truncate">{p.name}</span>
                <button
                  type="button"
                  onClick={() => remove(p.id)}
                  className="grid w-5 h-5 place-items-center rounded-full hover:bg-white/20"
                  aria-label={`Remove ${p.name}`}
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
          <div className="flex shrink-0 gap-2">
            <button type="button" onClick={clear} className="rounded-xl px-3 py-2 text-sm text-vp-cream/80 hover:text-white">
              Clear
            </button>
            {selected.length >= 2 ? (
              <Link
                href={`/versopick/compare?ids=${selected.map((p) => p.id).join(',')}`}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-vp-gold px-4 py-2 text-sm font-bold text-vp-navy hover:bg-vp-gold/90"
              >
                <GitCompareArrows className="w-4 h-4" aria-hidden="true" /> Compare now
              </Link>
            ) : (
              <span className="inline-flex flex-1 items-center justify-center rounded-xl bg-white/10 px-4 py-2 text-sm text-vp-cream/70">
                Add one more to compare
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
