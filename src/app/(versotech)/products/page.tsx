import SectionHeading from '@/components/ui/SectionHeading'
import { products } from '@/lib/data'
import { CheckCircle2, Sparkles } from 'lucide-react'
import Link from 'next/link'

export const metadata = { title: 'Products' }

export default function ProductsPage() {
  return (
    <section className="py-16">
      <div className="container-custom">
        <SectionHeading eyebrow="Products" title="Products that productize our expertise" subtitle="Battle-tested platforms born from real client engagements." />
        <div className="space-y-16">
          {products.map((p, idx) => (
            <div key={p.name} className={`grid lg:grid-cols-2 gap-10 items-center ${idx % 2 ? 'lg:[&>div:first-child]:order-2' : ''}`}>
              <div className="glass rounded-3xl aspect-[4/3] grid place-items-center overflow-hidden">
                <div className="text-center px-6">
                  <Sparkles className="w-10 h-10 mx-auto text-brand-600 mb-4" />
                  <div className="font-display font-bold text-2xl gradient-text">{p.name}</div>
                  <p className="text-sm text-slate-500 mt-2">Product Screenshot</p>
                </div>
              </div>
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/50 text-brand-600 text-xs font-semibold uppercase tracking-wider mb-3">
                  {p.tagline}
                </span>
                <h3 className="font-display text-3xl font-bold mb-4">{p.name}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{p.desc}</p>
                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
                  {p.features.map((f) => (
                    <div key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-brand-600 mt-0.5 shrink-0" /> {f}
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl bg-slate-50 dark:bg-slate-900/50 p-5 mb-6">
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-brand-600">Benefits</h4>
                  <ul className="space-y-1.5 text-sm text-slate-700 dark:text-slate-300">
                    {p.benefits.map((b) => <li key={b}>• {b}</li>)}
                  </ul>
                </div>
                <Link href="/contact" className="btn-primary">Request a Demo</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
