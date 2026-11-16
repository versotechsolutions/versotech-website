import { ExternalLink } from 'lucide-react'
import type { Product } from '@/lib/versopick/types'
import { cn } from '@/lib/utils'

/**
 * Outbound retailer link. Renders a real link only for verified (non-demo) products with a
 * retailerUrl, marked rel="sponsored" as affiliate links must be. Demo products get a
 * disabled placeholder so no fake affiliate links can ever be shown.
 */
export default function RetailerButton({ product, className }: { product: Product; className?: string }) {
  if (!product.isDemo && product.retailerUrl) {
    // Link-level disclosure: a visible label right at the point of the affiliate link.
    return (
      <span className={cn('inline-flex flex-col items-stretch gap-1', className)}>
        <a
          href={product.retailerUrl}
          target="_blank"
          rel="sponsored nofollow noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-vp-navy px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-vp-navy-soft"
        >
          Check price at retailer <ExternalLink className="w-4 h-4" aria-hidden="true" />
          <span className="sr-only">(affiliate link, opens in a new tab)</span>
        </a>
        <a href="/versopick/about#disclosure" className="text-center text-[11px] text-vp-navy/60 underline-offset-2 hover:underline">
          Affiliate link: we may earn a commission
        </a>
      </span>
    )
  }
  return (
    <span
      aria-disabled="true"
      className={cn(
        'inline-flex items-center justify-center rounded-xl border border-vp-navy/15 bg-vp-cream px-4 py-2.5 text-sm font-medium text-vp-navy/50 cursor-not-allowed',
        className
      )}
    >
      Retailer link coming soon
    </span>
  )
}
