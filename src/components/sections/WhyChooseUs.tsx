'use client'
import { motion } from 'framer-motion'
import { whyChooseUs } from '@/lib/data'
import SectionHeading from '@/components/ui/SectionHeading'

export default function WhyChooseUs() {
  return (
    <section className="py-24">
      <div className="container-custom">
        <SectionHeading eyebrow="Why VersoTech" title="Engineering partners, not vendors" subtitle="We bring senior expertise, modern stacks, and a relentless focus on outcomes." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-modern group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-950/50 grid place-items-center mb-4 group-hover:gradient-bg transition-all">
                <item.icon className="w-6 h-6 text-brand-600 group-hover:text-white transition" />
              </div>
              <h3 className="font-display font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
