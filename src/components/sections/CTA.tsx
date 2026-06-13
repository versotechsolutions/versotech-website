import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24">
      <div className="container-custom">
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 p-10 md:p-16 text-center bg-gradient-to-br from-brand-50 to-white dark:from-brand-950/30 dark:to-slate-950">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Ready to build something <span className="gradient-text">remarkable?</span></h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-8">Book a free 30-minute consultation. No pitch — just a conversation about your goals.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Book Free Consultation <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/services" className="btn-secondary">View Services</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
