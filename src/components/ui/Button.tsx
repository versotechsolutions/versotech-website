import Link from 'next/link'
import { cn } from '@/lib/utils'

type Props = {
  href?: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
  type?: 'button' | 'submit'
  onClick?: () => void
}

export default function Button({ href, children, variant = 'primary', className, type = 'button', onClick }: Props) {
  const cls = cn(variant === 'primary' ? 'btn-primary' : 'btn-secondary', className)
  if (href) return <Link href={href} className={cls}>{children}</Link>
  return <button type={type} onClick={onClick} className={cls}>{children}</button>
}
