import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import Newsletter from '@/components/sections/Newsletter'
import CTA from '@/components/sections/CTA'
import SectionHeading from '@/components/ui/SectionHeading'
import { services } from '@/lib/data'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />

      <section className="py-24">
        <div className="container-custom">
          <SectionHeading eyebrow="What we do" title="Full-spectrum engineering services" subtitle="From idea to scale — we cover every layer of the modern technology stack." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 8).map((s) => (
              <div key={s.title} className="card-modern group">
                <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-950/50 grid place-items-center mb-4 group-hover:gradient-bg transition-all">
                  <s.icon className="w-6 h-6 text-brand-600 group-hover:text-white transition" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/services" className="btn-secondary">Explore all services <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container-custom">
          <SectionHeading eyebrow="Client wins" title="Outcomes that move the needle" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { metric: '70%', label: 'Reduction in QA cycle time for a Fortune 500 retailer' },
              { metric: '4x', label: 'Faster release frequency for a banking platform' },
              { metric: '$2M', label: 'Annual savings via automation for a logistics enterprise' },
            ].map((c, i) => (
              <div key={i} className="card-modern text-center">
                <div className="font-display text-5xl font-bold gradient-text mb-3">{c.metric}</div>
                <p className="text-slate-600 dark:text-slate-400">{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ />
      <Newsletter />
      <CTA />
    </>
  )
}
