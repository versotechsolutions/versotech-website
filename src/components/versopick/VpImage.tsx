import Image from 'next/image'
import type { LucideIcon } from 'lucide-react'
import { ImageIcon } from 'lucide-react'
import type { VpImage } from '@/lib/versopick/images'
import { cn } from '@/lib/utils'

type Props = {
  image: VpImage | null | undefined
  /** Tailwind aspect class from RATIOS, e.g. "aspect-[4/5]". */
  ratio: string
  /** Responsive `sizes` hint so the browser downloads the right width. */
  sizes: string
  /** Above-the-fold images (hero) load eagerly with high priority; everything else lazy-loads. */
  priority?: boolean
  /** `cover` for lifestyle photos; `contain` for product shots on white. */
  fit?: 'cover' | 'contain'
  /** Shown in the placeholder when no image is supplied yet. */
  placeholderIcon?: LucideIcon
  placeholderLabel?: string
  tone?: 'light' | 'dark'
  /** `overlay` keeps the placeholder icon/label in the top area, clear of overlaid text (children). */
  placeholderLayout?: 'center' | 'overlay'
  className?: string
  children?: React.ReactNode
}

/**
 * Fixed-ratio image frame for VERSOPICK. Renders an optimised next/image (responsive srcset,
 * lazy loading, blur-up for static imports) or, when no licensed image is registered yet, a
 * designed placeholder that is clearly not a photograph. `children` render as an overlay.
 */
export default function VpImageFrame({
  image,
  ratio,
  sizes,
  priority = false,
  fit = 'cover',
  placeholderIcon: Icon = ImageIcon,
  placeholderLabel = 'Photo coming soon',
  tone = 'light',
  placeholderLayout = 'center',
  className,
  children,
}: Props) {
  return (
    <div className={cn('relative overflow-hidden', ratio, className)}>
      {image ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          // Remote images (e.g. future Amazon API images) bypass the optimiser so they are never
          // stored or cached by us, as Amazon's Operating Agreement requires.
          unoptimized={isRemote(image.src)}
          placeholder={typeof image.src === 'object' && image.src.blurDataURL ? 'blur' : 'empty'}
          className={cn(fit === 'cover' ? 'object-cover' : 'object-contain p-6 bg-white')}
          style={image.focus ? { objectPosition: image.focus } : undefined}
        />
      ) : (
        <ArtPlaceholder icon={Icon} label={placeholderLabel} tone={tone} layout={placeholderLayout} />
      )}
      {children}
    </div>
  )
}

/** True for absolute http(s) URLs, i.e. images not hosted in this project. */
export function isRemote(src: VpImage['src']): boolean {
  return typeof src === 'string' && /^https?:\/\//i.test(src)
}

function ArtPlaceholder({
  icon: Icon,
  label,
  tone,
  layout,
}: {
  icon: LucideIcon
  label: string
  tone: 'light' | 'dark'
  layout: 'center' | 'overlay'
}) {
  const dark = tone === 'dark'
  const overlay = layout === 'overlay'
  return (
    <div
      className={cn(
        'absolute inset-0 grid',
        overlay ? 'place-items-start p-5' : 'place-items-center',
        dark ? 'bg-gradient-to-br from-vp-navy-soft via-vp-navy to-[#071427]' : 'bg-gradient-to-br from-vp-cream via-vp-cream-deep to-[#E5D9BF]'
      )}
    >
      {/* Decorative arcs: an obviously illustrative treatment, never mistaken for a photo */}
      <svg aria-hidden="true" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 400 400">
        <g fill="none" stroke="#C9A24A" strokeOpacity={dark ? 0.35 : 0.45}>
          <circle cx="330" cy="70" r="120" />
          <circle cx="330" cy="70" r="170" strokeOpacity={dark ? 0.18 : 0.25} />
          <circle cx="40" cy="380" r="140" strokeOpacity={dark ? 0.15 : 0.2} />
        </g>
        <g fill="none" stroke={dark ? '#F8F4EC' : '#0B1F3A'} strokeOpacity="0.06">
          {Array.from({ length: 9 }, (_, i) => (
            <line key={i} x1={i * 50} y1="0" x2={i * 50 - 200} y2="400" />
          ))}
        </g>
      </svg>
      <Icon
        aria-hidden="true"
        strokeWidth={1}
        className={cn(
          'relative',
          overlay ? 'w-10 h-10' : 'w-1/4 h-1/4 max-w-24 max-h-24',
          dark ? 'text-vp-gold/80' : 'text-vp-navy/55'
        )}
      />
      <span
        className={cn(
          'absolute right-3 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider',
          overlay ? 'top-3' : 'bottom-3',
          dark ? 'bg-white/10 text-vp-cream/70' : 'bg-white/70 text-vp-navy/50'
        )}
      >
        <ImageIcon className="w-3 h-3" aria-hidden="true" /> {label}
      </span>
    </div>
  )
}
