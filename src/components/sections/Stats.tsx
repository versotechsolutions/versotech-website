'use client'
import { motion } from 'framer-motion'
import { stats } from '@/lib/data'

export default function Stats() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container-custom grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center p-6 rounded-2xl glass"
          >
            <div className="font-display text-4xl lg:text-5xl font-bold gradient-text mb-2">{s.value}</div>
            <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
