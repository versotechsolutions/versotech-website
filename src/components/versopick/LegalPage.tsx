import Link from 'next/link'

/** Shared layout for VERSOPICK legal pages (Privacy Policy, Terms of Use). */
export default function LegalPage({
  eyebrow,
  title,
  lastUpdated,
  intro,
  sections,
}: {
  eyebrow: string
  title: string
  lastUpdated: string
  intro: React.ReactNode
  sections: { id: string; heading: string; body: React.ReactNode }[]
}) {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-vp-gold-deep">{eyebrow}</p>
      <h1 className="mt-2 font-vp-display text-4xl sm:text-5xl font-semibold">{title}</h1>
      <p className="mt-3 text-sm text-vp-navy/60">Last updated: {lastUpdated}</p>
      <div className="mt-6 text-lg leading-relaxed text-vp-navy/80">{intro}</div>

      <nav aria-label="On this page" className="mt-8 rounded-2xl border border-vp-navy/10 bg-white p-5">
        <p className="text-xs font-bold uppercase tracking-wider text-vp-navy/60">On this page</p>
        <ol className="mt-3 grid gap-1.5 text-sm sm:grid-cols-2">
          {sections.map((s, i) => (
            <li key={s.id}>
              <Link href={`#${s.id}`} className="hover:underline">
                {i + 1}. {s.heading}
              </Link>
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-10 space-y-10">
        {sections.map((s, i) => (
          <section key={s.id} id={s.id} className="scroll-mt-28">
            <h2 className="font-vp-display text-2xl font-semibold">
              {i + 1}. {s.heading}
            </h2>
            <div className="mt-3 space-y-3 leading-relaxed text-vp-navy/80 [&_a]:underline [&_a]:decoration-vp-gold [&_a]:underline-offset-2 [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-vp-navy">
              {s.body}
            </div>
          </section>
        ))}
      </div>
    </article>
  )
}
