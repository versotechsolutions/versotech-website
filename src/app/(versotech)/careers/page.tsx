import SectionHeading from '@/components/ui/SectionHeading'
import CareerForm from '@/components/forms/CareerForm'
import { openings } from '@/lib/data'
import { Briefcase, MapPin, Clock, Heart, Zap, BookOpen, Coffee, Globe } from 'lucide-react'

export const metadata = { title: 'Careers' }

const benefits = [
  { icon: Heart, title: 'Health & Wellness', desc: 'Comprehensive medical, dental, and mental health support.' },
  { icon: Zap, title: 'Flexible Hours', desc: 'Outcome-based work culture with full schedule flexibility.' },
  { icon: BookOpen, title: 'Learning Budget', desc: 'Annual budget for courses, conferences, and certifications.' },
  { icon: Globe, title: 'Remote-First', desc: 'Work from anywhere with quarterly in-person team retreats.' },
  { icon: Coffee, title: 'Modern Tooling', desc: 'Top-tier hardware and best-in-class development tools.' },
  { icon: Briefcase, title: 'Real Equity', desc: 'Stock options for full-time team members.' },
]

export default function CareersPage() {
  return (
    <section className="py-16">
      <div className="container-custom">
        <SectionHeading eyebrow="Careers" title="Build your career with us" subtitle="Join a team of senior engineers solving meaningful problems for ambitious companies." />

        <div className="mb-20">
          <h3 className="font-display text-2xl font-bold mb-6">Current openings</h3>
          <div className="space-y-3">
            {openings.map((o) => (
              <div key={o.title} className="card-modern flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h4 className="font-semibold text-lg">{o.title}</h4>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400 mt-2">
                    <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {o.type}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {o.location}</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {o.exp}</span>
                  </div>
                </div>
                <a href="#apply" className="btn-primary !py-2 !px-5 text-sm">Apply Now</a>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h3 className="font-display text-2xl font-bold mb-6">Why join VersoTech</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="card-modern">
                <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-950/50 grid place-items-center mb-4">
                  <b.icon className="w-6 h-6 text-brand-600" />
                </div>
                <h4 className="font-display font-bold text-lg mb-2">{b.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="apply" className="max-w-2xl mx-auto">
          <div className="card-modern">
            <h3 className="font-display text-2xl font-bold mb-2">Apply now</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">Submit your application and we'll get back to you within 5 business days.</p>
            <CareerForm />
          </div>
        </div>
      </div>
    </section>
  )
}
