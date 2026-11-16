'use client'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { CheckCircle2, Loader2, Send } from 'lucide-react'
import { CONTACT_TOPICS } from '@/lib/versopick/contact'
import { cn } from '@/lib/utils'

type Status = { state: 'idle' } | { state: 'sending' } | { state: 'sent' } | { state: 'error'; message: string }

const field =
  'w-full rounded-xl border border-vp-navy/15 bg-white px-4 py-3 text-vp-navy placeholder:text-vp-navy/40 outline-none focus:border-vp-gold focus:ring-2 focus:ring-vp-gold/30'

export default function ContactForm({ fallbackEmail }: { fallbackEmail: string }) {
  const [status, setStatus] = useState<Status>({ state: 'idle' })
  const startedAt = useRef(Date.now())

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    setStatus({ state: 'sending' })
    try {
      const res = await fetch('/api/versopick/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fd.get('name'),
          email: fd.get('email'),
          topic: fd.get('topic'),
          message: fd.get('message'),
          consent: fd.get('consent') === 'on',
          website: fd.get('website') ?? '',
          startedAt: startedAt.current,
        }),
      })
      const json = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null
      if (res.ok && json?.ok) {
        setStatus({ state: 'sent' })
        form.reset()
      } else {
        setStatus({ state: 'error', message: json?.error ?? `Sorry, something went wrong. Please email us at ${fallbackEmail}.` })
      }
    } catch {
      setStatus({ state: 'error', message: `Sorry, we couldn't reach the server. Please email us at ${fallbackEmail}.` })
    }
  }

  if (status.state === 'sent') {
    return (
      <div role="status" className="rounded-2xl border border-vp-gold/40 bg-white p-8 text-center">
        <CheckCircle2 className="mx-auto w-10 h-10 text-vp-gold-deep" aria-hidden="true" />
        <p className="mt-4 font-vp-display text-2xl font-semibold">Thank you, your message has been sent</p>
        <p className="mt-2 text-vp-navy/70">We'll reply to the email address you gave us.</p>
        <button
          type="button"
          onClick={() => {
            startedAt.current = Date.now()
            setStatus({ state: 'idle' })
          }}
          className="mt-6 text-sm font-semibold underline decoration-vp-gold underline-offset-4"
        >
          Send another message
        </button>
      </div>
    )
  }

  const sending = status.state === 'sending'

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-2xl border border-vp-navy/10 bg-white p-6 sm:p-8" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold">Your name</span>
          <input name="name" required minLength={2} maxLength={100} autoComplete="name" className={cn(field, 'mt-1.5')} />
        </label>
        <label className="block">
          <span className="text-sm font-semibold">Email address</span>
          <input name="email" type="email" required maxLength={200} autoComplete="email" className={cn(field, 'mt-1.5')} />
        </label>
      </div>
      <label className="block">
        <span className="text-sm font-semibold">Topic</span>
        <select name="topic" required defaultValue={CONTACT_TOPICS[0]} className={cn(field, 'mt-1.5')}>
          {CONTACT_TOPICS.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="text-sm font-semibold">Message</span>
        <textarea name="message" required minLength={10} maxLength={5000} rows={6} className={cn(field, 'mt-1.5 resize-y')} />
      </label>

      {/* Honeypot: hidden from people, tempting for bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Leave this empty
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className="flex items-start gap-3 text-sm">
        <input name="consent" type="checkbox" required className="mt-1 h-4 w-4 accent-vp-navy" />
        <span className="text-vp-navy/80">
          I have read the{' '}
          <Link href="/versopick/privacy" className="font-semibold underline decoration-vp-gold underline-offset-2">
            privacy policy
          </Link>{' '}
          and understand my message will be sent to the VERSOPICK team by email so they can reply.
        </span>
      </label>

      {status.state === 'error' && (
        <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {status.message}
        </p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-vp-navy px-6 py-3 font-semibold text-white transition hover:bg-vp-navy-soft disabled:opacity-60"
      >
        {sending ? <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" /> : <Send className="w-4 h-4" aria-hidden="true" />}
        {sending ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}
