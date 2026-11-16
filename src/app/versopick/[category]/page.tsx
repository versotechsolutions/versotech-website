import type { Metadata } from 'next'
import { vpMetadata } from '@/lib/versopick/seo'
import { Suspense } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
import { categories, getCategory } from '@/lib/versopick/categories'
import { categoryImages } from '@/lib/versopick/images'
import VpImageFrame from '@/components/versopick/VpImage'
import { productsInCategory, queryProducts } from '@/lib/versopick/products'
import CategoryNav from '@/components/versopick/CategoryNav'
import { AffiliateDisclosure } from '@/components/versopick/Notices'
import ProductBrowser from '@/components/versopick/ProductBrowser'
import { ProductGrid } from '@/components/versopick/ProductCard'

type Props = { params: Promise<{ category: string }> }

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getCategory((await params).category)
  if (!category) return {}
  return vpMetadata({ path: `/versopick/${category.slug}`, title: category.name, description: category.description })
}

export default async function CategoryPage({ params }: Props) {
  const category = getCategory((await params).category)
  if (!category) notFound()

  const list = productsInCategory(category.slug)

  return (
    <>
      <section className="border-b border-vp-navy/10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-vp-navy/60">
            <Link href="/versopick" className="hover:text-vp-navy">VERSOPICK</Link>
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
            <span aria-current="page" className="text-vp-navy">{category.name}</span>
          </nav>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_440px] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-vp-gold-deep">Category</p>
              <h1 className="mt-2 font-vp-display text-4xl sm:text-5xl lg:text-6xl font-semibold">{category.name}</h1>
              <p className="mt-4 max-w-xl text-lg text-vp-navy/70 leading-relaxed">{category.description}</p>
              <p className="mt-4 text-sm text-vp-navy/60">
                {list.length} {list.length === 1 ? 'pick' : 'picks'} · {category.subcategories.join(' · ')}
              </p>
            </div>
            <VpImageFrame
              image={categoryImages[category.slug]}
              ratio="aspect-[16/9] lg:aspect-[4/3]"
              sizes="(min-width: 1024px) 440px, 100vw"
              priority
              placeholderIcon={category.icon}
              tone="dark"
              className="rounded-3xl"
            />
          </div>
          <div className="mt-8">
            <CategoryNav active={category.slug} />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <AffiliateDisclosure compact className="mb-8" />
        {/* Fallback = server-rendered list, so products show before JS loads */}
        <Suspense fallback={<ProductGrid products={queryProducts(list, {})} />}>
          <ProductBrowser products={list} fixedCategory={category.slug} />
        </Suspense>
      </section>
    </>
  )
}
