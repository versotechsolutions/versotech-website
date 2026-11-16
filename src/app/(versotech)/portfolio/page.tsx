import SectionHeading from '@/components/ui/SectionHeading'
import CTA from '@/components/sections/CTA'
import { portfolio } from '@/lib/data'

export const metadata = { title: 'Portfolio' }

export default function PortfolioPage() {
  return (
    <>
      <section className="py-16">
        <div className="container-custom">
          <SectionHeading eyebrow="Portfolio" title="Selected client engagements" subtitle="A snapshot of how we engineer outcomes — from quality at scale to AI-powered platforms." />
          <div className="space-y-8">
            {portfolio.map((p) => (
              <div key={p.title} className="card-modern">
                <h3 className="font-display text-2xl font-bold mb-3 gradient-text">{p.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{p.overview}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.stack.map((s) => (
                    <span key={s} className="px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/50 text-brand-700 dark:text-brand-300 text-xs font-medium">{s}</span>
                  ))}
                </div>

                <div className="grid md:grid-cols-3 gap-5">
                  {[
                    { label: 'Challenges', value: p.challenges },
                    { label: 'Solutions', value: p.solutions },
                    { label: 'Results', value: p.results },
                  ].map((b) => (
                    <div key={b.label} className="rounded-xl bg-slate-50 dark:bg-slate-900/50 p-4">
                      <h4 className="font-semibold text-brand-600 text-xs uppercase tracking-wider mb-2">{b.label}</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{b.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  )
}
