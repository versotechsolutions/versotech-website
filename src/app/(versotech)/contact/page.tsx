import SectionHeading from '@/components/ui/SectionHeading'
import ContactForm from '@/components/forms/ContactForm'
import { siteConfig } from '@/lib/data'
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react'

export const metadata = { title: 'Contact' }

export default function ContactPage() {
  return (
    <section className="py-16">
      <div className="container-custom">
        <SectionHeading eyebrow="Get in touch" title="Let's build something great" subtitle="Tell us about your goals. We'll respond within 24 hours." />

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-5">
            <div className="card-modern">
              <h3 className="font-display font-bold text-xl mb-5">Contact details</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-50 dark:bg-brand-950/50 grid place-items-center shrink-0">
                    <Mail className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs uppercase tracking-wider">Email</div>
                    <a href={`mailto:${siteConfig.email}`} className="font-medium hover:text-brand-600">{siteConfig.email}</a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-50 dark:bg-brand-950/50 grid place-items-center shrink-0">
                    <Phone className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs uppercase tracking-wider">Phone</div>
                    <a href={`tel:${siteConfig.phone}`} className="font-medium hover:text-brand-600">{siteConfig.phone}</a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-50 dark:bg-brand-950/50 grid place-items-center shrink-0">
                    <MapPin className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs uppercase tracking-wider">Office</div>
                    <p className="font-medium">{siteConfig.address}</p>
                  </div>
                </li>
              </ul>
              <div className="flex gap-3 mt-6 pt-6 border-t border-slate-200 dark:border-slate-800">
                {[Linkedin, Twitter, Github].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-brand-600 hover:text-white grid place-items-center transition">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="card-modern !p-0 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-brand-100 to-brand-50 dark:from-brand-950/50 dark:to-slate-900 grid place-items-center">
                <div className="text-center">
                  <MapPin className="w-10 h-10 mx-auto text-brand-600 mb-2" />
                  <p className="font-semibold">Google Maps</p>
                  <p className="text-xs text-slate-500 mt-1">Hyderabad, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="card-modern">
              <h3 className="font-display font-bold text-xl mb-5">Send us a message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
