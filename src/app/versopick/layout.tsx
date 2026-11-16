import type { Metadata } from 'next'
import { Manrope, Playfair_Display } from 'next/font/google'
import { vpBrand } from '@/lib/versopick/brand'
import { VP_ORIGIN, vpMetadata } from '@/lib/versopick/seo'
import { CompareProvider } from '@/components/versopick/CompareProvider'
import CompareTray from '@/components/versopick/CompareTray'
import Footer from '@/components/versopick/Footer'
import Header from '@/components/versopick/Header'

const display = Playfair_Display({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-vp-display', display: 'swap' })
const sans = Manrope({ subsets: ['latin'], variable: '--font-vp-sans', display: 'swap' })

// Layout defaults: Open Graph/Twitter tags with the hero image. Each page adds its own canonical
// URL via vpMetadata(); the layout deliberately sets none, so pages never inherit a wrong one.
const { openGraph, twitter } = vpMetadata({ path: '/versopick', description: vpBrand.description })

// PRE-LAUNCH: every /versopick page is noindex/nofollow (children inherit this).
// Remove the `robots` block (and add the routes to src/app/sitemap.ts) only at public launch,
// after the readiness review. Never enable it automatically.
export const metadata: Metadata = {
  // Resolves relative canonical / Open Graph URLs for VERSOPICK pages only (root layout untouched).
  metadataBase: new URL(VP_ORIGIN),
  // `absolute` stops the root layout's "| VersoTech Solutions" template applying here.
  title: { absolute: `${vpBrand.name} — ${vpBrand.tagline}`, template: `%s | ${vpBrand.name}` },
  description: vpBrand.description,
  keywords: ['product discovery', 'kitchen and home', 'furniture and decor', 'daily essentials', 'gadgets and technology', 'work from home', 'personal care', 'VERSOPICK'],
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  openGraph,
  twitter,
  // Replaces the VersoTech icons inherited from the root layout (src/app/versopick/icon.svg)
  icons: { icon: [{ url: '/versopick/icon.svg', type: 'image/svg+xml' }] },
}

export default function VersoPickLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${display.variable} ${sans.variable} font-vp-sans flex min-h-screen flex-col bg-vp-cream text-vp-navy antialiased`}>
      <CompareProvider>
        <a
          href="#vp-main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-semibold"
        >
          Skip to content
        </a>
        <Header />
        <main id="vp-main" className="flex-1">
          {children}
        </main>
        <Footer />
        <CompareTray />
      </CompareProvider>
    </div>
  )
}
