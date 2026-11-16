import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, MapPin } from 'lucide-react'
import { siteConfig } from '@/lib/data'
import { vpBrand } from '@/lib/versopick/brand'
import { vpMetadata } from '@/lib/versopick/seo'
import ContactForm from './ContactForm'

export const metadata: Metadata = vpMetadata({
  path: '/versopick/contact',
  title: 'Contact us',
  description: 'Contact the VERSOPICK team with questions, product suggestions, corrections or partnership enquiries.',
})

export default function ContactPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-vp-gold-deep">Contact</p>
      <h1 className="mt-2 font-vp-display text-4xl sm:text-5xl font-semibold">Get in touch</h1>
      <p className="mt-3 max-w-2xl text-lg text-vp-navy/70">
        Questions, product suggestions or spotted an error? Send us a message and the {vpBrand.name} team will reply by email.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_300px]">
        <ContactForm fallbackEmail={siteConfig.email} />

        <aside className="space-y-5 text-sm">
          <div className="rounded-2xl border border-vp-navy/10 bg-white p-5">
            <h2 className="font-semibold">Email us directly</h2>
            <a href={`mailto:${siteConfig.email}`} className="mt-2 inline-flex items-center gap-2 text-vp-navy underline decoration-vp-gold underline-offset-2">
              <Mail className="w-4 h-4" aria-hidden="true" /> {siteConfig.email}
            </a>
          </div>
          <div className="rounded-2xl border border-vp-navy/10 bg-white p-5">
            <h2 className="font-semibold">Operated by</h2>
            <p className="mt-2 text-vp-navy/75">{vpBrand.parent.name}</p>
            <p className="mt-1 inline-flex items-start gap-2 text-vp-navy/75">
              <MapPin className="mt-0.5 w-4 h-4 shrink-0" aria-hidden="true" /> {siteConfig.address}
            </p>
          </div>
          <div className="rounded-2xl border border-vp-gold/40 bg-white p-5 text-vp-navy/75">
            <h2 className="font-semibold text-vp-navy">Brands and retailers</h2>
            <p className="mt-2">
              Paid placements are always labelled under our{' '}
              <Link href="/versopick/about#sponsored-content" className="underline decoration-vp-gold underline-offset-2">
                Sponsored Content Policy
              </Link>
              .
            </p>
          </div>
          <p className="text-vp-navy/60">
            See our{' '}
            <Link href="/versopick/privacy" className="underline underline-offset-2">Privacy Policy</Link> and{' '}
            <Link href="/versopick/terms" className="underline underline-offset-2">Terms of Use</Link>.
          </p>
        </aside>
      </div>
    </section>
  )
}
