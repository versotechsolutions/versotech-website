import Link from 'next/link'
import { Search } from 'lucide-react'
import CategoryNav from '@/components/versopick/CategoryNav'

export default function VersoPickNotFound() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
      <title>Page not found | VERSOPICK</title>
      <p className="font-vp-display text-7xl sm:text-8xl font-semibold text-vp-gold">404</p>
      <h1 className="mt-4 font-vp-display text-3xl sm:text-4xl font-semibold">We couldn’t find that page</h1>
      <p className="mx-auto mt-4 max-w-lg text-vp-navy/70">
        The page may have moved, or the product may no longer be one of our picks. Try searching, or browse a category.
      </p>

      <form action="/versopick/search" method="get" role="search" className="mx-auto mt-8 flex max-w-md gap-2">
        <label htmlFor="vp-404-search" className="sr-only">Search products</label>
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 w-4 h-4 -translate-y-1/2 text-vp-navy/40" aria-hidden="true" />
          <input
            id="vp-404-search"
            type="search"
            name="q"
            placeholder="Search products"
            className="w-full rounded-xl border border-vp-navy/15 bg-white py-3 pl-10 pr-4 outline-none focus:border-vp-gold focus:ring-2 focus:ring-vp-gold/30"
          />
        </div>
        <button type="submit" className="rounded-xl bg-vp-navy px-5 py-3 font-semibold text-white hover:bg-vp-navy-soft">
          Search
        </button>
      </form>

      <div className="mt-10 flex justify-center">
        <CategoryNav />
      </div>
      <Link href="/versopick" className="mt-10 inline-block font-semibold underline decoration-vp-gold underline-offset-4">
        Back to VERSOPICK home
      </Link>
    </section>
  )
}
