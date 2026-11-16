import { cn } from '@/lib/utils'

/** VERSOPICK mark + wordmark. `tone="light"` is for dark (navy) backgrounds. */
export default function Logo({ tone = 'dark', className }: { tone?: 'dark' | 'light'; className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <svg viewBox="0 0 32 32" className="w-9 h-9 shrink-0" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill={tone === 'dark' ? '#0B1F3A' : '#F8F4EC'} />
        <path d="M8.5 10.5 L16 23 L23.5 10.5" fill="none" stroke="#C9A24A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="8" r="1.8" fill="#C9A24A" />
      </svg>
      <span className="font-vp-display text-xl font-bold tracking-[0.12em] leading-none">
        <span className={tone === 'dark' ? 'text-vp-navy' : 'text-white'}>VERSO</span>
        <span className="text-vp-gold">PICK</span>
      </span>
    </span>
  )
}
