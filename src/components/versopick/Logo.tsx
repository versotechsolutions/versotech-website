import { cn } from '@/lib/utils'

/**
 * Colours taken from the VersoTech logo (public/primarylogo.png):
 * the V is a blue gradient and the "VersoTech" lettering is charcoal.
 */
export const VT_LOGO = {
  blueLight: '#0063B8',
  blueDark: '#004A9A',
  charcoal: '#21303B',
} as const

/**
 * The VersoTech outlined "V" (an outline of a V with a hollow inner V and softly rounded
 * corners), traced from the VersoTech logo so VERSOPICK shares the parent brand mark.
 */
export function VersoV({ className, gradientId = 'vt-v-gradient' }: { className?: string; gradientId?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={VT_LOGO.blueLight} />
          <stop offset="1" stopColor={VT_LOGO.blueDark} />
        </linearGradient>
      </defs>
      <path
        d="M3.28 6.85 H9.57 L16 16.72 L22.43 6.85 H28.72 L16 24.98 Z"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="2.16"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/**
 * VERSOPICK mark + wordmark, matching the VersoTech logo colours.
 * `tone="light"` is for dark (navy) backgrounds: the V sits on a white tile so the logo blue
 * keeps its contrast, and the wordmark switches to white with a lighter blue "PICK".
 */
export default function Logo({ tone = 'dark', className }: { tone?: 'dark' | 'light'; className?: string }) {
  const onDark = tone === 'light'
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      {onDark ? (
        <span className="grid w-9 h-9 shrink-0 place-items-center rounded-lg bg-white">
          <VersoV className="w-8 h-8" gradientId="vt-v-gradient-tile" />
        </span>
      ) : (
        <VersoV className="w-9 h-9 shrink-0" />
      )}
      <span className="font-vp-display text-xl font-bold tracking-[0.12em] leading-none">
        <span style={{ color: onDark ? '#FFFFFF' : VT_LOGO.charcoal }}>VERSO</span>
        <span style={{ color: onDark ? '#7FB2EA' : VT_LOGO.blueLight }}>PICK</span>
      </span>
    </span>
  )
}
