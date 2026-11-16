import type { Metadata } from 'next'
import { vpBrand } from './brand'
import { heroImage } from './images'

/**
 * Public origin VERSOPICK is served from. Canonical and Open Graph URLs are built from this.
 * (www is the host production actually serves; the apex redirects to it.)
 */
export const VP_ORIGIN = 'https://www.versotechsolutions.com'

const ogImage =
  heroImage && typeof heroImage.src === 'object'
    ? [{ url: heroImage.src.src, width: heroImage.src.width, height: heroImage.src.height, alt: heroImage.alt }]
    : undefined

/**
 * Per-page metadata for VERSOPICK: title, description, canonical URL and Open Graph / Twitter
 * tags. Each page sets its own canonical (Next.js would otherwise let child pages inherit the
 * layout's). Indexing is controlled separately by the `robots` block in versopick/layout.tsx.
 *
 * @param path  Path under the site origin, e.g. "/versopick/kitchen-home" (no query string).
 * @param title Page title; omit for the VERSOPICK home page (uses the layout's absolute title).
 */
export function vpMetadata({ path, title, description }: { path: string; title?: string; description: string }): Metadata {
  const fullTitle = title ? `${title} | ${vpBrand.name}` : `${vpBrand.name} — ${vpBrand.tagline}`
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      siteName: vpBrand.name,
      locale: 'en_IN',
      url: path,
      title: fullTitle,
      description,
      images: ogImage,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: ogImage?.map((i) => i.url),
    },
  }
}
