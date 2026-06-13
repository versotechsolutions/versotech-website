'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -left-32 w-96 h-96 rounded-full bg-brand-400/20 blur-3xl animate-float" />
        <div className="absolute bottom-0 -right-32 w-96 h-96 rounded-full bg-purple-400/20 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-grid-pattern opacity-30 dark:opacity-10" />
      </div>

      <div className="container-custom relative">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 text-brand-600" />
            AI-Powered Engineering Excellence
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
            Empowering Modern Businesses with{' '}
            <span className="gradient-text">Intelligent Solutions</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            QA Automation, AI, Custom Software, Cloud, and DevOps — engineered to accelerate your business at every layer.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/services" className="btn-secondary">Explore Services</Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 max-w-5xl mx-auto"
        >
          <div className="glass rounded-3xl p-2 shadow-2xl">
            <div className="aspect-[16/9] rounded-2xl gradient-bg grid place-items-center text-white">
              <div className="text-center">
                <div className="text-6xl font-display font-bold mb-2">8+</div>
                <div className="text-lg opacity-90">Years of Engineering Excellence</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
