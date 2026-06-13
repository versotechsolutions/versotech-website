import SectionHeading from '@/components/ui/SectionHeading'
import CTA from '@/components/sections/CTA'
import { Target, Eye, Heart, Award, Users, Shield } from 'lucide-react'

export const metadata = { title: 'About Us' }

const values = [
  { icon: Award, title: 'Excellence', desc: 'We hold ourselves to senior-engineer standards on every line of code.' },
  { icon: Heart, title: 'Integrity', desc: 'Transparent communication and honest tradeoffs — always.' },
  { icon: Users, title: 'Partnership', desc: 'Your success is our metric. We win together or not at all.' },
  { icon: Shield, title: 'Quality First', desc: 'Quality is not a phase — it is the foundation of how we build.' },
]

export default function AboutPage() {
  return (
    <>
      <section className="py-16">
        <div className="container-custom">
          <SectionHeading eyebrow="About Us" title="Engineering the future of intelligent software" subtitle="Founded by engineers who believe great software is built with discipline, curiosity, and care." />

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="card-modern">
              <Target className="w-10 h-10 text-brand-600 mb-4" />
              <h3 className="font-display font-bold text-2xl mb-3">Our Mission</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">To empower modern businesses with intelligent, automated, and reliable software — engineered to scale and built to last.</p>
            </div>
            <div className="card-modern">
              <Eye className="w-10 h-10 text-brand-600 mb-4" />
              <h3 className="font-display font-bold text-2xl mb-3">Our Vision</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">To become the most trusted AI-powered engineering partner for ambitious companies worldwide.</p>
            </div>
          </div>

          <div className="rounded-3xl gradient-bg p-10 md:p-14 text-white mb-16">
            <div className="max-w-3xl">
              <span className="text-xs uppercase tracking-widest opacity-80">A note from our Founder</span>
              <h3 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-5">"We started VersoTech to build the engineering partner we always wished we had."</h3>
              <p className="opacity-90 leading-relaxed">
                Throughout our careers in QA, AI, and product engineering, we saw the same pattern: brilliant ideas held back by execution. VersoTech exists to close that gap — combining senior expertise, modern stacks, and a relentless focus on outcomes. We don't just deliver projects. We deliver leverage.
              </p>
              <p className="mt-6 font-semibold">— Founder &amp; CEO, VersoTech Solutions</p>
            </div>
          </div>

          <SectionHeading eyebrow="Core values" title="The principles that guide us" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {values.map((v) => (
              <div key={v.title} className="card-modern text-center">
                <div className="w-14 h-14 mx-auto rounded-2xl gradient-bg grid place-items-center mb-4">
                  <v.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl bg-slate-50 dark:bg-slate-900/50 p-10 md:p-14">
            <h3 className="font-display text-3xl font-bold mb-6">Why clients trust us</h3>
            <div className="grid md:grid-cols-2 gap-5 text-slate-700 dark:text-slate-300">
              {[
                'Senior-only engineering teams — no junior bait-and-switch',
                'Transparent communication, weekly demos, no surprises',
                'Strong NDA and IP protection from day one',
                'Outcome-based partnerships, not hourly extraction',
                'ISO-aligned processes for quality and security',
                'Long-term retention: 80% of clients work with us again',
              ].map((p) => (
                <div key={p} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-600 mt-2 shrink-0" />
                  <p>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  )
}
