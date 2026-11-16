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
    return (
      <a
        href={product.retailerUrl}
        target="_blank"
        rel="sponsored nofollow noopener noreferrer"
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-xl bg-vp-navy px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-vp-navy-soft',
          className
        )}
      >
        Check price at retailer <ExternalLink className="w-4 h-4" aria-hidden="true" />
        <span className="sr-only">(affiliate link, opens in a new tab)</span>
      </a>
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
