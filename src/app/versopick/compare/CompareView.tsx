'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { GitCompareArrows } from 'lucide-react'
import { getProduct } from '@/lib/versopick/products'
import { MAX_COMPARE, useCompare } from '@/components/versopick/CompareProvider'
import { AffiliateDisclosure } from '@/components/versopick/Notices'
import ProductComparison from '@/components/versopick/ProductComparison'

/**
 * Shows products from ?ids=a,b,c (shareable link) or, when absent, the visitor's saved selection.
 */
export default function CompareView() {
  const params = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const { ids: savedIds, remove } = useCompare()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const urlIds = (params.get('ids') ?? '').split(',').filter(Boolean)
  const ids = urlIds.length ? urlIds : savedIds
  const selected = ids.map(getProduct).filter((p) => p !== undefined).slice(0, MAX_COMPARE)

  const handleRemove = (id: string) => {
    remove(id)
    if (urlIds.length) {
      const next = urlIds.filter((x) => x !== id)
      router.replace(next.length ? `${pathname}?ids=${next.join(',')}` : pathname, { scroll: false })
    }
  }

  // Saved selection lives in browser storage, so wait for the client before showing the empty state.
  if (!mounted && !urlIds.length) return <p className="text-vp-navy/60">Loading comparison…</p>

  if (selected.length < 2) {
    return (
      <div className="rounded-3xl border border-dashed border-vp-navy/20 bg-white p-10 sm:p-14 text-center">
        <GitCompareArrows className="mx-auto w-10 h-10 text-vp-gold-deep" aria-hidden="true" />
        <p className="mt-4 font-vp-display text-2xl font-semibold">
          {selected.length === 1 ? 'Add one more product to compare' : 'Nothing to compare yet'}
        </p>
        <p className="mx-auto mt-2 max-w-md text-vp-navy/65">
          Use “Add to compare” on any product card to build a side-by-side comparison of up to {MAX_COMPARE} products.
        </p>
        <Link href="/versopick/search" className="mt-6 inline-flex rounded-xl bg-vp-navy px-5 py-3 font-semibold text-white hover:bg-vp-navy-soft">
          Browse products
        </Link>
      </div>
    )
  }

  return (
    <>
      <ProductComparison products={selected} onRemove={handleRemove} />
      <AffiliateDisclosure compact className="mt-8" />
    </>
  )
}
