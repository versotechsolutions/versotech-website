import Link from 'next/link'
import { FlaskConical, Info } from 'lucide-react'
import { SPONSORED_LABEL, vpDemoNotice, vpDisclosure } from '@/lib/versopick/brand'
import { cn } from '@/lib/utils'

/** Thin site-wide strip above the header: demo status + affiliate disclosure. */
export function NoticeBar() {
  return (
    <div className="bg-vp-navy text-vp-cream text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-6">
        <p className="flex items-start gap-1.5">
          <FlaskConical className="w-3.5 h-3.5 mt-px shrink-0 text-vp-gold" aria-hidden="true" />
          <span>{vpDemoNotice}</span>
        </p>
        <Link href="/versopick/about#disclosure" className="shrink-0 underline decoration-vp-gold underline-offset-2 hover:text-vp-gold">
          Affiliate disclosure
        </Link>
      </div>
    </div>
  )
}

/** Prominent inline disclosure box, placed near product listings. */
export function AffiliateDisclosure({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <aside
      aria-label="Affiliate disclosure"
      className={cn('rounded-2xl border border-vp-gold/40 bg-white/70 text-vp-navy', compact ? 'p-4 text-sm' : 'p-5 sm:p-6', className)}
    >
      <div className="flex gap-3">
        <Info className="w-5 h-5 text-vp-gold-deep shrink-0 mt-0.5" aria-hidden="true" />
        <div className="space-y-1">
          <p className="font-semibold">Affiliate disclosure</p>
          <p className="text-vp-navy/80">
            {vpDisclosure.short} {vpDisclosure.independence}
          </p>
          {vpDisclosure.amazonAssociateActive && <p className="text-vp-navy/80">{vpDisclosure.amazonStatement}</p>}
          {!compact && (
            <Link href="/versopick/about#disclosure" className="inline-block text-sm font-semibold underline decoration-vp-gold underline-offset-4">
              How VERSOPICK works
            </Link>
          )}
        </div>
      </div>
    </aside>
  )
}

/** Required label for paid placements (Sponsored Content Policy). Links to the policy. */
export function SponsoredBadge({ className }: { className?: string }) {
  return (
    <Link
      href="/versopick/about#sponsored-content"
      className={cn(
        'inline-flex items-center rounded-full bg-white px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-vp-navy ring-1 ring-vp-navy/30 hover:ring-vp-navy',
        className
      )}
    >
      {SPONSORED_LABEL}
    </Link>
  )
}

export function DemoBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full border border-dashed border-vp-navy/40 bg-white px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-vp-navy/70',
        className
      )}
    >
      <FlaskConical className="w-3 h-3" aria-hidden="true" /> Demo product
    </span>
  )
}
