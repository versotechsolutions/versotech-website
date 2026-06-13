'use client'
import { useState } from 'react'
import { Send } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-3xl gradient-bg p-10 md:p-16 text-center text-white">
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-3">Stay ahead of the curve</h3>
          <p className="opacity-90 max-w-xl mx-auto mb-8">Get monthly insights on AI, automation, and modern engineering — straight to your inbox.</p>
          <form
            onSubmit={(e) => { e.preventDefault(); setDone(true); setEmail('') }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="flex-1 px-5 py-3 rounded-xl bg-white/15 backdrop-blur border border-white/20 placeholder:text-white/60 text-white focus:outline-none focus:bg-white/25"
            />
            <button className="px-6 py-3 rounded-xl bg-white text-brand-700 font-semibold hover:bg-slate-100 transition inline-flex items-center justify-center gap-2">
              Subscribe <Send className="w-4 h-4" />
            </button>
          </form>
          {done && <p className="mt-4 text-sm opacity-90">Thanks — you're on the list.</p>}
        </div>
      </div>
    </section>
  )
}
