import { NextResponse } from 'next/server'
import { z } from 'zod'
import { siteConfig } from '@/lib/data'
import { CONTACT_TOPICS } from '@/lib/versopick/contact'

/*
 * VERSOPICK contact form endpoint.
 *
 * Delivery: email via Resend's REST API (https://resend.com/docs/api-reference/emails/send-email).
 * Configure in Vercel → Project → Settings → Environment Variables (server-side only, never NEXT_PUBLIC_):
 *   RESEND_API_KEY            required: without it the endpoint returns 503 and the form says so honestly
 *   VERSOPICK_CONTACT_TO      optional, defaults to the site's contact email (siteConfig.email)
 *   VERSOPICK_CONTACT_FROM    optional, defaults to Resend's shared sender "onboarding@resend.dev"
 * Without a verified sending domain (which needs DNS records), Resend's shared sender only delivers
 * to the email address that owns the Resend account, so create the account with VERSOPICK_CONTACT_TO.
 *
 * Messages are not stored on the website: they are validated, emailed, and discarded.
 */
export const runtime = 'nodejs'

const MIN_FILL_MS = 3_000 // humans take longer than this to fill the form
const RATE_LIMIT = { max: 5, windowMs: 10 * 60_000 }
const hits = new Map<string, number[]>() // best-effort, per server instance

const schema = z.object({
  name: z.string().trim().min(2, 'Please enter your name.').max(100),
  email: z.string().trim().email('Please enter a valid email address.').max(200),
  topic: z.enum(CONTACT_TOPICS, { errorMap: () => ({ message: 'Please choose a topic from the list.' }) }),
  message: z.string().trim().min(10, 'Please write a little more (at least 10 characters).').max(5000),
  consent: z.literal(true, { errorMap: () => ({ message: 'Please confirm you have read the privacy policy.' }) }),
  website: z.string().max(0).optional(), // honeypot: must stay empty
  startedAt: z.number().int().positive(),
})

function rateLimited(ip: string): boolean {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT.windowMs)
  recent.push(now)
  hits.set(ip, recent)
  return recent.length > RATE_LIMIT.max
}

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: 'Too many messages. Please try again in a few minutes.' }, { status: 429 })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 })
  }

  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    const first = parsed.error.issues[0]
    // Honeypot or timing failures get a generic answer so bots learn nothing.
    if (first?.path[0] === 'website') return NextResponse.json({ ok: true })
    return NextResponse.json({ ok: false, error: first?.message ?? 'Please check the form.' }, { status: 400 })
  }
  const data = parsed.data
  if (Date.now() - data.startedAt < MIN_FILL_MS) return NextResponse.json({ ok: true }) // silently drop bots

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('[versopick/contact] RESEND_API_KEY is not configured; message not delivered')
    return NextResponse.json(
      { ok: false, error: `Our contact form is temporarily unavailable. Please email us at ${siteConfig.email}.` },
      { status: 503 }
    )
  }

  const to = process.env.VERSOPICK_CONTACT_TO || siteConfig.email
  const from = process.env.VERSOPICK_CONTACT_FROM || 'VERSOPICK <onboarding@resend.dev>'
  const text = [
    `New VERSOPICK contact message`,
    ``,
    `Topic:   ${data.topic}`,
    `Name:    ${data.name}`,
    `Email:   ${data.email}`,
    `Consent: privacy policy acknowledged`,
    ``,
    data.message,
  ].join('\n')

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: data.email,
        subject: `[VERSOPICK] ${data.topic}: ${data.name}`.slice(0, 150),
        text,
      }),
    })
    if (!res.ok) {
      // Log status only, never the visitor's message or details.
      console.error('[versopick/contact] email provider error', res.status)
      return NextResponse.json(
        { ok: false, error: `Sorry, your message could not be sent. Please email us at ${siteConfig.email}.` },
        { status: 502 }
      )
    }
  } catch {
    console.error('[versopick/contact] email provider unreachable')
    return NextResponse.json(
      { ok: false, error: `Sorry, your message could not be sent. Please email us at ${siteConfig.email}.` },
      { status: 502 }
    )
  }

  return NextResponse.json({ ok: true })
}
