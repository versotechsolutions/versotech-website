import Link from 'next/link'
import { Linkedin, Twitter, Github, Mail, Phone, MapPin } from 'lucide-react'
import { siteConfig } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 mt-20">
      <div className="container-custom py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center font-display font-bold text-white text-xl">V</div>
            <div>
              <div className="font-display font-bold text-white text-lg">VersoTech</div>
              <div className="text-[10px] tracking-widest text-slate-400 uppercase">Solutions</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed">{siteConfig.tagline}</p>
          <div className="flex gap-3 mt-5">
            {[Linkedin, Twitter, Github].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-brand-600 grid place-items-center transition">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            {['About', 'Services', 'Products', 'Portfolio', 'Careers', 'Contact'].map((l) => (
              <li key={l}><Link href={`/${l.toLowerCase()}`} className="hover:text-brand-400 transition">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            {['QA Automation', 'AI & ML', 'Web Development', 'Mobile Apps', 'DevOps', 'Cloud Solutions'].map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><Mail className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" /> {siteConfig.email}</li>
            <li className="flex gap-2"><Phone className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" /> {siteConfig.phone}</li>
            <li className="flex gap-2"><MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" /> {siteConfig.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="container-custom py-5 text-sm text-slate-500 flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} VersoTech Solutions. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-brand-400">Privacy</Link>
            <Link href="#" className="hover:text-brand-400">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
