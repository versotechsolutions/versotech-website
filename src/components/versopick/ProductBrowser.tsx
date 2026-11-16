'use client'
import { useEffect, useMemo, useRef, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import { categories } from '@/lib/versopick/categories'
import { queryProducts } from '@/lib/versopick/products'
import type { CategorySlug, PickFilter, Product, SortOption } from '@/lib/versopick/types'
import { cn } from '@/lib/utils'
import { ProductGrid } from './ProductCard'

const SORTS: { value: SortOption; label: string }[] = [
  { value: 'recommended', label: 'Recommended' },
  { value: 'newest', label: 'Newest picks' },
  { value: 'name-asc', label: 'Name: A–Z' },
  { value: 'name-desc', label: 'Name: Z–A' },
]
const PICKS: { value: PickFilter; label: string }[] = [
  { value: 'all', label: 'All products' },
  { value: 'featured', label: 'Featured picks' },
  { value: 'editors', label: 'Editor’s picks' },
]

const oneOf = <T extends string>(value: string | null, allowed: readonly T[], fallback: T): T =>
  allowed.includes(value as T) ? (value as T) : fallback

/**
 * Search + filter + sort over a product list. State lives in the URL (?q=&category=&sub=&picks=&sort=)
 * so results are shareable and survive refresh. Must be rendered inside <Suspense>.
 * `fixedCategory` hides the category filter (category pages).
 */
export default function ProductBrowser({ products, fixedCategory }: { products: Product[]; fixedCategory?: CategorySlug }) {
  const router = useRouter()
  const pathname = usePathname()
  const params = useSearchParams()

  const category = fixedCategory ?? oneOf(params.get('category'), ['all', ...categories.map((c) => c.slug)] as const, 'all')
  const subcategoryOptions = useMemo(
    () => (category === 'all' ? [] : categories.find((c) => c.slug === category)?.subcategories ?? []),
    [category]
  )
  const sub = oneOf(params.get('sub'), ['all', ...subcategoryOptions], 'all')
  const picks = oneOf(params.get('picks'), PICKS.map((p) => p.value), 'all')
  const sort = oneOf(params.get('sort'), SORTS.map((s) => s.value), 'recommended')
  const urlQ = params.get('q') ?? ''
  const [q, setQ] = useState(urlQ)
  const [filtersOpen, setFiltersOpen] = useState(false)

  // Pick up queries that arrive from outside this component (e.g. the header search form),
  // but ignore URL updates we made ourselves while typing.
  const lastPushedQ = useRef(urlQ)
  useEffect(() => {
    if (urlQ !== lastPushedQ.current) {
      lastPushedQ.current = urlQ
      setQ(urlQ)
    }
  }, [urlQ])

  const update = (changes: Record<string, string>) => {
    if ('q' in changes) lastPushedQ.current = changes.q
    const next = new URLSearchParams(params.toString())
    for (const [k, v] of Object.entries(changes)) {
      if (!v || v === 'all' || (k === 'sort' && v === 'recommended')) next.delete(k)
      else next.set(k, v)
    }
    const qs = next.toString()
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false })
  }

  const results = useMemo(
    () => queryProducts(products, { q, category, subcategory: sub, picks, sort }),
    [products, q, category, sub, picks, sort]
  )

  const activeCount = [category !== 'all' && !fixedCategory, sub !== 'all', picks !== 'all', q.trim() !== ''].filter(Boolean).length
  const resetAll = () => {
    setQ('')
    update({ q: '', category: '', sub: '', picks: '' })
  }

  const chip = (active: boolean) =>
    cn(
      'rounded-full border px-3 py-1.5 text-sm transition text-left',
      active ? 'border-vp-navy bg-vp-navy text-white' : 'border-vp-navy/15 bg-white text-vp-navy hover:border-vp-navy/40'
    )

  const filters = (
    <div className="space-y-7">
      {!fixedCategory && (
        <fieldset>
          <legend className="mb-3 text-xs font-bold uppercase tracking-wider text-vp-navy/60">Category</legend>
          <div className="flex flex-wrap gap-2">
            <button type="button" className={chip(category === 'all')} onClick={() => update({ category: '', sub: '' })}>
              All
            </button>
            {categories.map((c) => (
              <button key={c.slug} type="button" className={chip(category === c.slug)} onClick={() => update({ category: c.slug, sub: '' })}>
                {c.shortName}
              </button>
            ))}
          </div>
        </fieldset>
      )}
      {subcategoryOptions.length > 0 && (
        <fieldset>
          <legend className="mb-3 text-xs font-bold uppercase tracking-wider text-vp-navy/60">Type</legend>
          <div className="flex flex-wrap gap-2">
            <button type="button" className={chip(sub === 'all')} onClick={() => update({ sub: '' })}>
              All
            </button>
            {subcategoryOptions.map((s) => (
              <button key={s} type="button" className={chip(sub === s)} onClick={() => update({ sub: s })}>
                {s}
              </button>
            ))}
          </div>
        </fieldset>
      )}
      <fieldset>
        <legend className="mb-3 text-xs font-bold uppercase tracking-wider text-vp-navy/60">Picks</legend>
        <div className="flex flex-wrap gap-2">
          {PICKS.map((p) => (
            <button key={p.value} type="button" className={chip(picks === p.value)} onClick={() => update({ picks: p.value })}>
              {p.label}
            </button>
          ))}
        </div>
      </fieldset>
      {activeCount > 0 && (
        <button type="button" onClick={resetAll} className="text-sm font-semibold underline decoration-vp-gold underline-offset-4">
          Clear all filters
        </button>
      )}
    </div>
  )

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <label className="relative flex-1">
          <span className="sr-only">Search products</span>
          <Search className="pointer-events-none absolute left-4 top-1/2 w-5 h-5 -translate-y-1/2 text-vp-navy/40" aria-hidden="true" />
          <input
            type="search"
            value={q}
            onChange={(e) => {
              setQ(e.target.value)
              update({ q: e.target.value })
            }}
            placeholder="Search products, materials, uses…"
            className="w-full rounded-xl border border-vp-navy/15 bg-white py-3 pl-12 pr-4 text-vp-navy placeholder:text-vp-navy/40 outline-none focus:border-vp-gold focus:ring-2 focus:ring-vp-gold/30"
          />
        </label>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setFiltersOpen((o) => !o)}
            aria-expanded={filtersOpen}
            className="lg:hidden inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-vp-navy/15 bg-white px-4 py-3 text-sm font-semibold"
          >
            <SlidersHorizontal className="w-4 h-4" aria-hidden="true" /> Filters{activeCount > 0 && ` (${activeCount})`}
          </button>
          <label className="flex-1 sm:flex-none">
            <span className="sr-only">Sort by</span>
            <select
              value={sort}
              onChange={(e) => update({ sort: e.target.value })}
              className="w-full rounded-xl border border-vp-navy/15 bg-white px-4 py-3 text-sm font-semibold text-vp-navy outline-none focus:border-vp-gold focus:ring-2 focus:ring-vp-gold/30"
            >
              {SORTS.map((s) => (
                <option key={s.value} value={s.value}>
                  Sort: {s.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      {filtersOpen && <div className="lg:hidden mt-4 rounded-2xl border border-vp-navy/10 bg-white p-5">{filters}</div>}

      <div className="mt-8 grid gap-8 lg:grid-cols-[240px_1fr]">
        <aside className="hidden lg:block" aria-label="Filters">
          {filters}
        </aside>
        <div>
          <p className="mb-5 text-sm text-vp-navy/60" aria-live="polite">
            {results.length} {results.length === 1 ? 'product' : 'products'}
            {q.trim() && (
              <>
                {' '}for “<span className="font-semibold text-vp-navy">{q.trim()}</span>”
              </>
            )}
          </p>
          {results.length > 0 ? (
            <ProductGrid products={results} />
          ) : (
            <div className="rounded-2xl border border-dashed border-vp-navy/20 bg-white p-10 text-center">
              <p className="font-vp-display text-xl font-semibold">No products match</p>
              <p className="mt-2 text-sm text-vp-navy/60">Try a different search term or clear your filters.</p>
              <button
                type="button"
                onClick={resetAll}
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-vp-navy px-4 py-2.5 text-sm font-semibold text-white"
              >
                <X className="w-4 h-4" aria-hidden="true" /> Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
