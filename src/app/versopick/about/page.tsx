import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, FlaskConical } from 'lucide-react'
import { SPONSORED_LABEL, vpBrand, vpDemoNotice, vpDisclosure } from '@/lib/versopick/brand'
import { categories } from '@/lib/versopick/categories'
import { allImageCredits } from '@/lib/versopick/images'

export const metadata: Metadata = {
  title: 'About VERSOPICK & how we pick',
  description: 'How VERSOPICK chooses and presents products, how the site is funded, and how affiliate links work.',
}

// NOTE FOR EDITORS: keep every statement on this page true in practice. Do not add promises
// (e.g. "brands can never pay to be included") unless that policy is formally adopted and followed.
const process = [
  {
    title: 'Start with real needs',
    text: 'We start from everyday problems people want solved (a calmer bedroom, quicker weeknight cooking, a better desk setup) rather than from whatever is trending.',
  },
  {
    title: 'Research the options',
    text: 'We look at manufacturer specifications, materials, warranty and support terms, safety information and published buyer feedback to build a shortlist.',
  },
  {
    title: 'Apply our criteria',
    text: 'Shortlisted products are weighed against the criteria listed below: usefulness, build and materials, ease of use and care, value, and likely durability.',
  },
  {
    title: 'Compare side by side',
    text: 'We compare products on the same attributes so the differences are easy to see, in our own notes and in the comparison tool on this site.',
  },
  {
    title: 'Explain the trade-offs',
    text: 'No product suits everyone. Each pick says who it is best for and what to consider before buying, so you can decide what fits your home.',
  },
  {
    title: 'Update over time',
    text: 'Products change and better options appear. We aim to review picks periodically and update or remove them when they no longer fit our criteria or are unavailable.',
  },
]

const criteria = ['Usefulness in everyday life', 'Build quality & materials', 'Ease of use & care', 'Value for what it offers', 'Durability & support']

export default function AboutPage() {
  const credits = allImageCredits()

  return (
    <>
      <section className="bg-vp-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-vp-gold">About {vpBrand.name}</p>
          <h1 className="mt-4 font-vp-display text-4xl sm:text-6xl font-semibold leading-tight">
            Fewer, better choices for everyday living
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-vp-cream/80 leading-relaxed">
            Shopping online means endless options and very little clarity. {vpBrand.name} aims to narrow the field to
            products worth your time across {categories.map((c) => c.name.toLowerCase()).join(', ').replace(/, ([^,]*)$/, ' and $1')}, and to explain why.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-vp-gold-deep">Our selection process</p>
        <h2 className="mt-2 font-vp-display text-3xl sm:text-4xl font-semibold">How we choose products</h2>
        <ol className="mt-10 grid gap-5 md:grid-cols-2">
          {process.map((step, i) => (
            <li key={step.title} className="rounded-2xl border border-vp-navy/10 bg-white p-6 sm:p-7">
              <span className="font-vp-display text-3xl font-semibold text-vp-gold">0{i + 1}</span>
              <h3 className="mt-2 font-vp-display text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-vp-navy/70 leading-relaxed">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 rounded-2xl bg-white border border-vp-navy/10 p-6 sm:p-8">
          <h3 className="font-vp-display text-xl font-semibold">Our criteria</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {criteria.map((c) => (
              <li key={c} className="rounded-full bg-vp-cream px-4 py-2 text-sm font-medium">{c}</li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-vp-navy/65 leading-relaxed">
            We do not invent prices, ratings or reviews. Where prices or availability are shown in future, they will come
            directly from the retailer and may change at any time.
          </p>
        </div>
      </section>

      <section className="bg-white border-y border-vp-navy/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-vp-gold-deep">Transparency</p>
            <h2 className="mt-2 font-vp-display text-3xl font-semibold">How recommendations are made</h2>
            <p className="mt-4 text-vp-navy/70 leading-relaxed">
              Products on {vpBrand.name} are chosen by our team using the process and criteria on this page.
            </p>
            <p className="mt-3 text-vp-navy/70 leading-relaxed">
              We may earn a commission when you buy through some links, and commission rates differ between retailers.
              We recognise that this could create a conflict of interest. That is why we publish our criteria, list the
              trade-offs for every pick and label affiliate links clearly, so you can judge our recommendations for
              yourself.
            </p>
            <div id="sponsored-content" className="mt-6 scroll-mt-28 rounded-2xl border border-vp-gold/40 bg-vp-cream p-5">
              <h3 className="font-vp-display text-xl font-semibold">Sponsored Content Policy</h3>
              <p className="mt-2 text-vp-navy/75 leading-relaxed">
                If a brand or retailer pays for a product placement, promotion or sponsored article on {vpBrand.name}, it
                will be clearly labelled as <strong className="text-vp-navy">{SPONSORED_LABEL}</strong>.
              </p>
              <p className="mt-2 text-vp-navy/75 leading-relaxed">
                Affiliate links may also generate commissions when visitors make qualifying purchases. These commercial
                relationships will be disclosed transparently.
              </p>
            </div>
          </div>
          <div id="disclosure" className="scroll-mt-28">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-vp-gold-deep">Affiliate disclosure</p>
            <h2 className="mt-2 font-vp-display text-3xl font-semibold">How {vpBrand.name} is funded</h2>
            <p className="mt-4 text-vp-navy/70 leading-relaxed">{vpDisclosure.short}</p>
            <p className="mt-3 text-vp-navy/70 leading-relaxed">{vpDisclosure.independence}</p>
            {vpDisclosure.amazonAssociateActive && <p className="mt-3 font-semibold">{vpDisclosure.amazonStatement}</p>}
            <p className="mt-3 text-vp-navy/70 leading-relaxed">
              Affiliate links are labelled on the page, marked as sponsored links for search engines, and open the
              retailer’s own website, where the final price, availability and terms are set.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col gap-4 rounded-2xl border border-dashed border-vp-navy/30 bg-white p-6 sm:flex-row sm:items-start">
          <FlaskConical className="w-6 h-6 shrink-0 text-vp-gold-deep" aria-hidden="true" />
          <div>
            <h2 className="font-semibold">Preview status</h2>
            <p className="mt-1 text-vp-navy/70">{vpDemoNotice}</p>
          </div>
        </div>

        <div id="image-credits" className="mt-8 rounded-2xl bg-white border border-vp-navy/10 p-6">
          <h2 className="font-semibold">Image credits</h2>
          {credits.length === 0 ? (
            <p className="mt-1 text-sm text-vp-navy/65">
              Photography on {vpBrand.name} is used under licence. Credits are listed here as images are added.
            </p>
          ) : (
            <ul className="mt-3 space-y-1.5 text-sm text-vp-navy/70">
              {credits.map(({ alt, credit }, i) => (
                <li key={i}>
                  {alt}: {credit.author}, via{' '}
                  {credit.url ? (
                    <a href={credit.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                      {credit.source}
                    </a>
                  ) : (
                    credit.source
                  )}{' '}
                  ({credit.license})
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link href="/versopick/search" className="inline-flex items-center justify-center gap-2 rounded-xl bg-vp-navy px-5 py-3 font-semibold text-white hover:bg-vp-navy-soft">
            Browse products <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          <Link href="/contact" className="inline-flex items-center justify-center rounded-xl border border-vp-navy/20 px-5 py-3 font-semibold hover:border-vp-navy">
            Contact the team
          </Link>
        </div>
      </section>
    </>
  )
}
