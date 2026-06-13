'use client'
import { MessageCircle, Calendar } from 'lucide-react'
import Link from 'next/link'
import { siteConfig } from '@/lib/data'

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <Link
        href={`https://wa.me/${siteConfig.whatsapp[1]}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 grid place-items-center shadow-2xl shadow-green-500/40 hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
        <span className="absolute right-16 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
          Chat on WhatsApp
        </span>
      </Link>
      <Link
        href="/contact"
        className="group w-14 h-14 rounded-full gradient-bg grid place-items-center shadow-2xl shadow-brand-500/40 hover:scale-110 transition-transform"
        aria-label="Book Consultation"
      >
        <Calendar className="w-6 h-6 text-white" />
        <span className="absolute right-16 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
          Book Free Consultation
        </span>
      </Link>
    </div>
  )
}
