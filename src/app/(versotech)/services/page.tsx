import SectionHeading from '@/components/ui/SectionHeading'
import CTA from '@/components/sections/CTA'
import { services } from '@/lib/data'
import { CheckCircle2 } from 'lucide-react'

export const metadata = { title: 'Services' }

export default function ServicesPage() {
  return (
    <>
      <section className="py-16">
        <div className="container-custom">
          <SectionHeading eyebrow="Services" title="Engineering services built for scale" subtitle="A full-stack engineering partner across quality, AI, cloud, and modern application delivery." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="card-modern group">
                <div className="w-14 h-14 rounded-2xl gradient-bg grid place-items-center mb-5 shadow-lg shadow-brand-500/30">
                  <s.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display font-bold text-xl mb-3">{s.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">{s.desc}</p>
                <ul className="space-y-2">
                  {['Senior engineers', 'Best-in-class tooling', 'Transparent reporting'].map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-brand-600" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  )
}
