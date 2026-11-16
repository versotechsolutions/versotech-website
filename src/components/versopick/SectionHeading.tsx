import { cn } from '@/lib/utils'

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  tone = 'dark',
  action,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  tone?: 'dark' | 'light'
  action?: React.ReactNode
}) {
  return (
    <div
      className={cn(
        'mb-8 sm:mb-10 flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'sm:flex-row sm:items-end sm:justify-between'
      )}
    >
      <div className={cn('max-w-2xl', align === 'center' && 'mx-auto')}>
        {eyebrow && (
          <p className={cn('text-xs font-bold uppercase tracking-[0.2em]', tone === 'dark' ? 'text-vp-gold-deep' : 'text-vp-gold')}>
            {eyebrow}
          </p>
        )}
        <h2 className={cn('mt-2 font-vp-display text-3xl sm:text-4xl font-semibold', tone === 'dark' ? 'text-vp-navy' : 'text-white')}>
          {title}
        </h2>
        {subtitle && <p className={cn('mt-3 leading-relaxed', tone === 'dark' ? 'text-vp-navy/70' : 'text-vp-cream/80')}>{subtitle}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}
