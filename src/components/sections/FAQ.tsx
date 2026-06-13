'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { faqs } from '@/lib/data'
import SectionHeading from '@/components/ui/SectionHeading'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section className="py-24">
      <div className="container-custom max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="card-modern !p-0 overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-semibold">{f.q}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${open === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-slate-600 dark:text-slate-400 leading-relaxed">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
