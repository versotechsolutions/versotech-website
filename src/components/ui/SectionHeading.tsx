'use client'
import { motion } from 'framer-motion'

export default function SectionHeading({
  eyebrow, title, subtitle, center = true,
}: { eyebrow?: string; title: string; subtitle?: string; center?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={center ? 'text-center max-w-3xl mx-auto mb-14' : 'mb-14'}
    >
      {eyebrow && (
        <span className="inline-block px-4 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/50 text-brand-700 dark:text-brand-400 text-xs font-semibold tracking-wider uppercase mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">{title}</h2>
      {subtitle && <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">{subtitle}</p>}
    </motion.div>
  )
}
