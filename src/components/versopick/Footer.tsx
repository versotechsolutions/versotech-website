import Link from 'next/link'
import { categories } from '@/lib/versopick/categories'
import { vpBrand, vpDisclosure } from '@/lib/versopick/brand'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="mt-24 bg-vp-navy text-vp-cream/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo tone="light" />
          <p className="mt-4 font-vp-display text-lg text-white">{vpBrand.tagline}</p>
          <p className="mt-1 text-sm">{vpBrand.message}</p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-vp-gold">Categories</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/versopick/${c.slug}`} className="hover:text-white">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-vp-gold">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/versopick/search" className="hover:text-white">All products</Link></li>
            <li><Link href="/versopick/search?picks=featured" className="hover:text-white">Featured picks</Link></li>
            <li><Link href="/versopick/search?picks=editors" className="hover:text-white">Editor’s picks</Link></li>
            <li><Link href="/versopick/guides" className="hover:text-white">Buying guides</Link></li>
            <li><Link href="/versopick/compare" className="hover:text-white">Compare products</Link></li>
            <li><Link href="/versopick/about" className="hover:text-white">How we pick</Link></li>
          </ul>
        </div>

        <div id="footer-disclosure">
          <h2 className="text-sm font-bold uppercase tracking-wider text-vp-gold">Affiliate disclosure</h2>
          <p className="mt-4 text-sm leading-relaxed">
            {vpDisclosure.short} {vpDisclosure.independence}
          </p>
          {vpDisclosure.amazonAssociateActive && <p className="mt-2 text-sm">{vpDisclosure.amazonStatement}</p>}
          <Link href="/versopick/about#disclosure" className="mt-3 inline-block text-sm font-semibold text-white underline decoration-vp-gold underline-offset-4">
            Read the full disclosure
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row sm:justify-between gap-2 text-xs text-vp-cream/60">
          <p>© {new Date().getFullYear()} {vpBrand.name}. All rights reserved.</p>
          <p>
            A{' '}
            <Link href={vpBrand.parent.href} className="underline underline-offset-2 hover:text-white">
              {vpBrand.parent.name}
            </Link>{' '}
            brand
          </p>
        </div>
      </div>
    </footer>
  )
}
