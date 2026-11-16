import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/lib/data'
import { vpBrand } from '@/lib/versopick/brand'
import { vpMetadata } from '@/lib/versopick/seo'
import LegalPage from '@/components/versopick/LegalPage'

export const metadata: Metadata = vpMetadata({
  path: '/versopick/terms',
  title: 'Terms of Use',
  description: 'The terms that apply when you use VERSOPICK, including product information, affiliate links and retailer purchases.',
})

// EDITORS: have these terms (especially governing law and liability) reviewed by a qualified legal
// adviser before public launch.
const LAST_UPDATED = '16 November 2026'
const email = siteConfig.email

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow={`${vpBrand.name} legal`}
      title="Terms of Use"
      lastUpdated={LAST_UPDATED}
      intro={
        <p>
          These terms apply to your use of {vpBrand.name} at <strong>versotechsolutions.com/versopick</strong>, operated by{' '}
          {vpBrand.parent.name} (&quot;we&quot;, &quot;us&quot;). By using {vpBrand.name} you agree to these terms. If you do not
          agree, please do not use the site.
        </p>
      }
      sections={[
        {
          id: 'what-versopick-is',
          heading: 'What VERSOPICK is',
          body: (
            <>
              <p>
                {vpBrand.name} is an information service that helps you discover and compare products. We do not sell
                products, take orders or handle payments, deliveries, returns or warranties. Any purchase you make is
                between you and the retailer, under the retailer&apos;s own terms.
              </p>
              <p>
                <strong>Preview status:</strong> {vpBrand.name} is currently in preview. Products marked &quot;Demo
                product&quot; are demonstration content, not real listings, and are not offered for sale.
              </p>
            </>
          ),
        },
        {
          id: 'product-information',
          heading: 'Product information',
          body: (
            <>
              <p>
                We take care to describe products accurately, but product details, specifications, availability and prices
                can change and may contain errors. Always check the retailer&apos;s product page before you buy. Where prices
                or availability are shown in future, they come from the retailer, are accurate only as of the time shown,
                and may change.
              </p>
              <p>
                Our content is general information to help you decide; it is not professional advice. Choose products that
                suit your own needs and follow the manufacturer&apos;s instructions and safety information.
              </p>
              <p>
                If you spot an error, please tell us through our <Link href="/versopick/contact">contact page</Link>.
              </p>
            </>
          ),
        },
        {
          id: 'affiliate-links',
          heading: 'Affiliate links and sponsored content',
          body: (
            <p>
              Some links on {vpBrand.name} may be affiliate links, which means we may earn a commission if you make a
              qualifying purchase, at no extra cost to you. Paid placements are labelled under our{' '}
              <Link href="/versopick/about#sponsored-content">Sponsored Content Policy</Link>. Read our full{' '}
              <Link href="/versopick/about#disclosure">affiliate disclosure</Link>.
            </p>
          ),
        },
        {
          id: 'third-party-sites',
          heading: 'Third-party websites',
          body: (
            <p>
              Links to retailers and other websites are provided for convenience. We do not control those websites and are
              not responsible for their content, products, services, privacy practices or availability.
            </p>
          ),
        },
        {
          id: 'intellectual-property',
          heading: 'Content and intellectual property',
          body: (
            <p>
              The text, design, logos and original content on {vpBrand.name} belong to {vpBrand.parent.name} or are used under
              licence. Photographs are used under their licences and credited on our{' '}
              <Link href="/versopick/about#image-credits">About page</Link>. Brand and product names belong to their
              respective owners. You may view and share links to our pages for personal, non-commercial use, but you may not
              copy, republish or commercially reuse our content without permission.
            </p>
          ),
        },
        {
          id: 'acceptable-use',
          heading: 'Acceptable use',
          body: (
            <ul>
              <li>Do not misuse the site, attempt to disrupt it, or access it in ways that place an unreasonable load on it.</li>
              <li>Do not use the contact form to send spam, unlawful, abusive or misleading content.</li>
              <li>Do not misrepresent your identity or affiliation when contacting us.</li>
            </ul>
          ),
        },
        {
          id: 'messages',
          heading: 'Messages you send us',
          body: (
            <p>
              When you send us a suggestion or correction, you allow us to use it to improve {vpBrand.name}. We handle your
              personal information as described in our <Link href="/versopick/privacy">Privacy Policy</Link>.
            </p>
          ),
        },
        {
          id: 'disclaimer',
          heading: 'Disclaimer and limitation of liability',
          body: (
            <>
              <p>
                {vpBrand.name} is provided &quot;as is&quot; and &quot;as available&quot;. To the extent permitted by law, we
                make no warranties about the completeness, accuracy or availability of the site or its content.
              </p>
              <p>
                To the extent permitted by law, we are not liable for any loss arising from your use of {vpBrand.name}, from
                reliance on its content, or from any purchase you make from a retailer. Nothing in these terms limits any
                rights you have that cannot be limited under applicable law.
              </p>
            </>
          ),
        },
        {
          id: 'changes',
          heading: 'Changes to these terms',
          body: (
            <p>
              We may update these terms from time to time. The &quot;Last updated&quot; date above shows when they last
              changed. Continuing to use the site after changes means you accept the updated terms.
            </p>
          ),
        },
        {
          id: 'law',
          heading: 'Governing law',
          body: (
            <p>
              These terms are governed by the laws of India. Subject to applicable law, the courts at Chennai, Tamil Nadu
              have jurisdiction over any dispute relating to them.
            </p>
          ),
        },
        {
          id: 'contact',
          heading: 'Contact us',
          body: (
            <p>
              {vpBrand.parent.name}, {siteConfig.address}. Email: <a href={`mailto:${email}`}>{email}</a>, or use our{' '}
              <Link href="/versopick/contact">contact page</Link>.
            </p>
          ),
        },
      ]}
    />
  )
}
