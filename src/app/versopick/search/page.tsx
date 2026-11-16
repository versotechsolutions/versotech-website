import type { Metadata } from 'next'
import { Suspense } from 'react'
import { products, queryProducts } from '@/lib/versopick/products'
import CategoryNav from '@/components/versopick/CategoryNav'
import { AffiliateDisclosure } from '@/components/versopick/Notices'
import ProductBrowser from '@/components/versopick/ProductBrowser'
import { ProductGrid } from '@/components/versopick/ProductCard'

export const metadata: Metadata = {
  title: 'Search all products',
  description: 'Search, filter and sort every VERSOPICK product across all categories.',
}

export default function SearchPage() {
  return (
    <>
      <section className="border-b border-vp-navy/10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-vp-gold-deep">All products</p>
          <h1 className="mt-2 font-vp-display text-4xl sm:text-5xl font-semibold">Find your next pick</h1>
          <p className="mt-3 max-w-2xl text-lg text-vp-navy/70">Search across every category, then narrow down with filters.</p>
          <div className="mt-8">
            <CategoryNav />
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <AffiliateDisclosure compact className="mb-8" />
        <Suspense fallback={<ProductGrid products={queryProducts(products, {})} />}>
          <ProductBrowser products={products} />
        </Suspense>
      </section>
    </>
  )
}
