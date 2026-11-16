'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { GitCompareArrows, Menu, Search, X } from 'lucide-react'
import { categories } from '@/lib/versopick/categories'
import { cn } from '@/lib/utils'
import { useCompare } from './CompareProvider'
import Logo from './Logo'
import { NoticeBar } from './Notices'

function SearchForm({ className, autoFocus }: { className?: string; autoFocus?: boolean }) {
  // Plain GET form: works without JavaScript and lands on the shareable search URL.
  return (
    <form action="/versopick/search" method="get" role="search" className={cn('relative', className)}>
      <label htmlFor={autoFocus ? 'vp-search-mobile' : 'vp-search'} className="sr-only">
        Search VERSOPICK
      </label>
      <Search className="pointer-events-none absolute left-3.5 top-1/2 w-4 h-4 -translate-y-1/2 text-vp-navy/40" aria-hidden="true" />
      <input
        id={autoFocus ? 'vp-search-mobile' : 'vp-search'}
        type="search"
        name="q"
        placeholder="Search kitchen, decor, gadgets…"
        autoFocus={autoFocus}
        className="w-full rounded-full border border-vp-navy/15 bg-vp-cream py-2.5 pl-10 pr-4 text-sm text-vp-navy placeholder:text-vp-navy/40 outline-none focus:border-vp-gold focus:bg-white focus:ring-2 focus:ring-vp-gold/30"
      />
    </form>
  )
}

export default function Header() {
  const pathname = usePathname()
  const { ids } = useCompare()
  const [open, setOpen] = useState(false)

  useEffect(() => setOpen(false), [pathname])

  const navLink = (href: string, label: string) => (
    <Link
      key={href}
      href={href}
      aria-current={pathname === href ? 'page' : undefined}
      className={cn(
        'relative py-3 text-sm font-medium transition hover:text-vp-gold-deep',
        pathname === href ? 'text-vp-navy after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-vp-gold' : 'text-vp-navy/70'
      )}
    >
      {label}
    </Link>
  )

  const compareLink = (
    <Link
      href="/versopick/compare"
      className="relative inline-flex items-center gap-2 rounded-full border border-vp-navy/15 px-3 py-2 text-sm font-semibold text-vp-navy hover:border-vp-gold"
    >
      <GitCompareArrows className="w-4 h-4" aria-hidden="true" />
      <span className="hidden sm:inline">Compare</span>
      {ids.length > 0 && (
        <span className="grid min-w-5 h-5 place-items-center rounded-full bg-vp-gold px-1 text-[11px] font-bold text-vp-navy">
          {ids.length}
          <span className="sr-only"> products selected</span>
        </span>
      )}
    </Link>
  )

  return (
    <>
      {/* Notice bar scrolls away; only the main bar stays pinned (saves space on phones) */}
      <NoticeBar />
      <header className="sticky top-0 z-40 border-b border-vp-navy/10 bg-white/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center gap-4 lg:gap-8">
            <Link href="/versopick" aria-label="VERSOPICK home" className="shrink-0">
              <Logo />
            </Link>
            <SearchForm className="hidden md:block flex-1 max-w-md" />
            <div className="ml-auto flex items-center gap-2">
              <Link href="/versopick/about" className="hidden lg:inline text-sm font-medium text-vp-navy/70 hover:text-vp-gold-deep mr-2">
                How we pick
              </Link>
              {compareLink}
              <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
                aria-controls="vp-mobile-menu"
                aria-label={open ? 'Close menu' : 'Open menu'}
                className="lg:hidden grid w-10 h-10 place-items-center rounded-full hover:bg-vp-cream"
              >
                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
          <nav aria-label="Main" className="hidden lg:flex items-center gap-4 xl:gap-6 -mb-px overflow-x-auto whitespace-nowrap">
            {navLink('/versopick', 'Home')}
            {categories.map((c) => navLink(`/versopick/${c.slug}`, c.shortName))}
            {navLink('/versopick/search', 'All products')}
            {navLink('/versopick/guides', 'Buying guides')}
          </nav>
        </div>

        {open && (
          <div id="vp-mobile-menu" className="lg:hidden border-t border-vp-navy/10 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-4">
              <SearchForm className="md:hidden" autoFocus />
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                {[
                  { href: '/versopick', label: 'Home' },
                  ...categories.map((c) => ({ href: `/versopick/${c.slug}`, label: c.name })),
                  { href: '/versopick/search', label: 'All products' },
                  { href: '/versopick/guides', label: 'Buying guides' },
                  { href: '/versopick/compare', label: 'Compare' },
                  { href: '/versopick/about', label: 'How we pick' },
                ].map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      aria-current={pathname === l.href ? 'page' : undefined}
                      className={cn(
                        'block rounded-lg px-3 py-2.5 font-medium',
                        pathname === l.href ? 'bg-vp-cream text-vp-navy' : 'text-vp-navy/80 hover:bg-vp-cream'
                      )}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
