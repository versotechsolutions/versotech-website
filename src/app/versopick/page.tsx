import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Award, Compass, GitCompareArrows, ListChecks, Search, ShieldCheck, Sofa, Sparkles } from 'lucide-react'

import { vpBrand } from '@/lib/versopick/brand'
import { categories } from '@/lib/versopick/categories'
import { guides } from '@/lib/versopick/guides'
import { categoryImages, heroImage } from '@/lib/versopick/images'
import { editorsPicks, featuredProducts, productsInCategory } from '@/lib/versopick/products'
import GuideCard from '@/components/versopick/GuideCard'
import { AffiliateDisclosure } from '@/components/versopick/Notices'
import VpImageFrame from '@/components/versopick/VpImage'
import { ProductGrid } from '@/components/versopick/ProductCard'
import ProductComparison from '@/components/versopick/ProductComparison'
import SectionHeading from '@/components/versopick/SectionHeading'
import { vpMetadata } from '@/lib/versopick/seo'

export const metadata: Metadata = vpMetadata({ path: '/versopick', description: vpBrand.description })

const container = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'

// How VERSOPICK works. Comparisons are always between PRODUCTS (never people or sellers).
const steps = [
  {
    icon: Compass,
    label: 'Discover',
    title: 'Discover products',
    text: 'Explore useful products across our six categories.',
    cta: { href: '/versopick/search', label: 'Browse products' },
  },
  {
    icon: GitCompareArrows,
    label: 'Compare',
    title: 'Compare your options',
    // Add "prices" back once real retailer prices are shown on VERSOPICK.
    text: 'Compare product features, pros and cons side by side.',
    cta: { href: '/versopick/compare', label: 'Compare products' },
  },
  {
    icon: ListChecks,
    label: 'Pick',
    title: 'Pick what works for you',
    text: 'Make an informed choice and visit the retailer to check the latest offer.',
    cta: { href: '/versopick/about', label: 'How we pick' },
  },
]

export default function VersoPickHome() {
  const featured = featuredProducts().slice(0, 6)
  const editors = editorsPicks().slice(0, 3)
  const comparisonSample = productsInCategory('kitchen-home').slice(0, 3)
  const [leadGuide, ...otherGuides] = guides
  const moreGuides = otherGuides.slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-vp-navy text-white">
        <div aria-hidden="true" className="absolute -right-32 -top-32 w-[28rem] h-[28rem] rounded-full border border-vp-gold/20" />
        <div aria-hidden="true" className="absolute -right-10 top-24 w-72 h-72 rounded-full border border-vp-gold/10" />
        <div className={`${container} relative py-16 sm:py-20`}>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-vp-gold">Premium product discovery</p>
          {/* One line from 640px up (font scales with the viewport so it always fits); wraps naturally on phones */}
          <h1 className="mt-5 font-vp-display font-semibold leading-[1.05] text-[clamp(2.5rem,9vw,4rem)] sm:whitespace-nowrap sm:text-[clamp(2.75rem,7.4vw,4rem)] lg:text-[clamp(3.75rem,6.4vw,6rem)]">
            Discover. Compare. <span className="text-vp-gold italic">Pick.</span>
          </h1>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <div>
            <p className="text-xl sm:text-2xl text-vp-cream leading-snug">
              Find useful products. Compare your options. Choose what works best for you.
            </p>
            <p className="mt-4 max-w-xl text-vp-cream/70 leading-relaxed">
              Explore thoughtfully selected products, understand the differences, and find the right choice for your home,
              workspace and everyday life.
            </p>

            <form action="/versopick/search" method="get" role="search" className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
              <label htmlFor="vp-hero-search" className="sr-only">Search products</label>
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-4 top-1/2 w-5 h-5 -translate-y-1/2 text-vp-navy/40" aria-hidden="true" />
                <input
                  id="vp-hero-search"
                  type="search"
                  name="q"
                  placeholder="What are you looking for?"
                  className="w-full rounded-xl bg-white py-3.5 pl-12 pr-4 text-vp-navy placeholder:text-vp-navy/40 outline-none focus:ring-4 focus:ring-vp-gold/40"
                />
              </div>
              <button type="submit" className="rounded-xl bg-vp-gold px-6 py-3.5 font-bold text-vp-navy transition hover:bg-vp-gold/90">
                Search
              </button>
            </form>

            <div className="mt-6 flex flex-wrap gap-2">
              {categories.map((c) => (
                <Link
                  key={c.slug}
                  href={`/versopick/${c.slug}`}
                  className="rounded-full border border-white/20 px-3.5 py-1.5 text-sm text-vp-cream/90 transition hover:border-vp-gold hover:text-white"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Lifestyle hero image (licensed photo from images.ts), framed with a gold offset border */}
          <div className="relative lg:pl-6">
            <div aria-hidden="true" className="absolute -inset-3 translate-x-3 translate-y-3 rounded-[2rem] border border-vp-gold/40 hidden sm:block" />
            <VpImageFrame
              image={heroImage}
              ratio="aspect-[4/3] lg:aspect-[5/4]"
              sizes="(min-width: 1024px) 560px, 100vw"
              priority
              placeholderIcon={Sofa}
              placeholderLabel="Lifestyle photo coming soon"
              className="rounded-[2rem] shadow-2xl shadow-black/40"
            />
            <div className="relative -mt-16 mx-4 sm:mx-8 rounded-2xl bg-white p-5 text-vp-navy shadow-xl lg:absolute lg:-bottom-8 lg:-left-8 lg:mx-0 lg:mt-0 lg:w-72">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-vp-gold-deep">The VERSOPICK way</p>
              <ol className="mt-3 space-y-2.5">
                {steps.map((s, i) => (
                  <li key={s.title} className="flex items-center gap-3">
                    <span className="grid w-8 h-8 shrink-0 place-items-center rounded-lg bg-vp-navy text-vp-gold">
                      <s.icon className="w-4 h-4" aria-hidden="true" />
                    </span>
                    <span className="font-vp-display font-semibold">
                      <span className="mr-1.5 text-vp-gold-deep">0{i + 1}</span>
                      {s.label}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* How VERSOPICK works: three clear steps */}
      <section className="border-b border-vp-navy/10 bg-white" aria-labelledby="how-it-works">
        <div className={`${container} py-14 sm:py-16`}>
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-vp-gold-deep">How VERSOPICK works</p>
            <h2 id="how-it-works" className="mt-2 font-vp-display text-3xl sm:text-4xl font-semibold">
              Three simple steps to the right product
            </h2>
          </div>
          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="relative flex flex-col rounded-2xl border border-vp-navy/10 bg-vp-cream p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="grid w-12 h-12 place-items-center rounded-xl bg-vp-navy text-vp-gold">
                    <s.icon className="w-6 h-6" aria-hidden="true" />
                  </span>
                  <span className="font-vp-display text-4xl font-semibold text-vp-gold/80" aria-hidden="true">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-vp-navy">
                  <span className="sr-only">Step {i + 1}: </span>
                  {s.title}
                </h3>
                <p className="mt-2 flex-1 text-vp-navy/70 leading-relaxed">{s.text}</p>
                <Link
                  href={s.cta.href}
                  className="mt-5 inline-flex items-center gap-1 self-start text-sm font-semibold underline decoration-vp-gold underline-offset-4 hover:text-vp-gold-deep"
                >
                  {s.cta.label} <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Categories */}
      <section className={`${container} py-16 sm:py-20`}>
        <SectionHeading eyebrow="Shop by category" title="Everything for everyday living" subtitle="Six focused categories, each curated with the same care." />
        {/* Editorial photo cards: 3 x 2 grid of 4:3 cards on desktop, 2 columns on tablet, 16:10 on phones */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/versopick/${c.slug}`}
              className="group block overflow-hidden rounded-2xl transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-vp-navy/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-vp-gold"
            >
              <VpImageFrame
                image={categoryImages[c.slug]}
                ratio="aspect-[16/10] sm:aspect-[4/3]"
                sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                placeholderIcon={c.icon}
                placeholderLabel="Photo soon"
                placeholderLayout="overlay"
                tone="dark"
                className="[&_img]:transition-transform [&_img]:duration-700 group-hover:[&_img]:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-vp-navy via-vp-navy/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="font-vp-display text-2xl font-semibold">{c.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-vp-cream/80 line-clamp-2">{c.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-vp-gold">
                    Explore <ArrowRight className="w-4 h-4 transition group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </VpImageFrame>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured picks */}
      <section className={`${container} pb-16 sm:pb-20`}>
        <SectionHeading
          eyebrow="Featured picks"
          title="Standout products right now"
          subtitle="A rotating selection of products we think deserve a closer look."
          action={
            <Link href="/versopick/search?picks=featured" className="inline-flex items-center gap-1 font-semibold underline decoration-vp-gold underline-offset-4">
              See all featured <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          }
        />
        <ProductGrid products={featured} />
      </section>

      {/* Editor's picks */}
      <section className="bg-vp-navy py-16 sm:py-20">
        <div className={container}>
          <SectionHeading
            tone="light"
            eyebrow="Editor’s picks"
            title="Our editors’ top choices"
            subtitle="The products our editors would recommend to a friend first, across every category."
            action={
              <Link href="/versopick/search?picks=editors" className="inline-flex items-center gap-1 font-semibold text-white underline decoration-vp-gold underline-offset-4">
                See all editor’s picks <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            }
          />
          <ProductGrid products={editors} />
        </div>
      </section>

      {/* Buying guides */}
      <section className={`${container} pt-16 sm:pt-20`}>
        <SectionHeading
          eyebrow="Buying guides"
          title="Know what to look for"
          subtitle="Plain-English guides that explain the trade-offs before you buy. Our first guides are in preparation."
          action={
            <Link href="/versopick/guides" className="inline-flex items-center gap-1 font-semibold underline decoration-vp-gold underline-offset-4">
              All guides <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          }
        />
        <div className="space-y-6">
          {leadGuide && <GuideCard guide={leadGuide} variant="feature" />}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {moreGuides.map((g) => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison preview */}
      <section className={`${container} py-16 sm:py-20`}>
        <SectionHeading
          eyebrow="Compare side by side"
          title="See the differences at a glance"
          subtitle="Add up to four products to compare from any listing. Here’s an example from our kitchen picks."
          action={
            <Link href="/versopick/compare" className="inline-flex items-center gap-1 font-semibold underline decoration-vp-gold underline-offset-4">
              Open compare <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          }
        />
        <ProductComparison products={comparisonSample} showRetailer={false} />
      </section>

      {/* Trust */}
      <section className={`${container} pb-4`}>
        <div className="grid gap-8 rounded-3xl bg-white p-8 sm:p-12 lg:grid-cols-[1fr_1.2fr] lg:items-center border border-vp-navy/10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-vp-gold-deep">How we pick</p>
            <h2 className="mt-2 font-vp-display text-3xl sm:text-4xl font-semibold">Clear criteria. Honest trade-offs.</h2>
            <p className="mt-4 text-vp-navy/70 leading-relaxed">
              We assess products on usefulness, build quality, value and suitability for everyday life, and every
              pick lists what to consider before you buy.
            </p>
            <Link href="/versopick/about" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-vp-navy px-5 py-3 font-semibold text-white hover:bg-vp-navy-soft">
              Our selection process <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: ShieldCheck, title: 'Transparent by default', text: 'Affiliate links and any sponsored content are always disclosed.' },
              { icon: Award, title: 'Published criteria', text: 'The criteria we use to choose products are set out openly.' },
              { icon: GitCompareArrows, title: 'Built to compare', text: 'Consistent details make products easy to weigh up.' },
              { icon: Sparkles, title: 'Trade-offs included', text: 'Every pick says who it suits and what to consider.' },
            ].map((t) => (
              <li key={t.title} className="rounded-2xl bg-vp-cream p-5">
                <t.icon className="w-6 h-6 text-vp-gold-deep" aria-hidden="true" />
                <p className="mt-3 font-semibold">{t.title}</p>
                <p className="mt-1 text-sm text-vp-navy/65">{t.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <AffiliateDisclosure className="mt-8" />
      </section>
    </>
  )
}
