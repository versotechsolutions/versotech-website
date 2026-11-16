import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/lib/data'
import { vpBrand } from '@/lib/versopick/brand'
import { vpMetadata } from '@/lib/versopick/seo'
import LegalPage from '@/components/versopick/LegalPage'

export const metadata: Metadata = vpMetadata({
  path: '/versopick/privacy',
  title: 'Privacy Policy',
  description: 'How VERSOPICK collects, uses and protects information, including contact messages, cookies and affiliate links.',
})

// EDITORS: this policy must describe what the site ACTUALLY does. Update it before adding analytics,
// advertising, new cookies, accounts, newsletters or new service providers. Have it reviewed by a
// qualified legal adviser before public launch.
const LAST_UPDATED = '16 November 2026'
const email = siteConfig.email

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow={`${vpBrand.name} legal`}
      title="Privacy Policy"
      lastUpdated={LAST_UPDATED}
      intro={
        <p>
          This policy explains what information {vpBrand.name} collects when you use the pages at{' '}
          <strong>versotechsolutions.com/versopick</strong>, why we collect it, and the choices you have. {vpBrand.name} is
          operated by {vpBrand.parent.name}, {siteConfig.address}.
        </p>
      }
      sections={[
        {
          id: 'summary',
          heading: 'Summary',
          body: (
            <ul>
              <li>You can browse {vpBrand.name} without creating an account or telling us who you are.</li>
              <li>We do not currently use analytics, advertising trackers or advertising cookies on {vpBrand.name}.</li>
              <li>If you use our contact form, we use your details only to reply to you.</li>
              <li>Your comparison list stays in your own browser and is never sent to us.</li>
              <li>Retailers you visit through our links (for example Amazon) have their own privacy policies and may set their own cookies.</li>
            </ul>
          ),
        },
        {
          id: 'information-we-collect',
          heading: 'Information we collect',
          body: (
            <>
              <p>
                <strong>Contact form.</strong> When you send us a message we receive your name, email address, the topic you
                chose and your message. The form is delivered to our team&apos;s email inbox through an email delivery
                provider. The website itself does not store your message in a database.
              </p>
              <p>
                <strong>Comparison list.</strong> Products you add to &quot;Compare&quot; are saved only in your browser&apos;s
                local storage (under the name <code>versopick-compare</code>) so the list survives a page refresh. It is not
                sent to us. You can clear it with the &quot;Clear&quot; button or through your browser settings. Your browser
                may also store a display preference (such as light or dark mode) in the same way.
              </p>
              <p>
                <strong>Technical information.</strong> Like any website, our hosting provider automatically processes
                technical data needed to deliver pages securely, such as your IP address, browser type, the page requested
                and the time of the request. This is used to operate and protect the site.
              </p>
              <p>
                <strong>Fonts.</strong> Some pages load typefaces from Google Fonts, which means your browser connects to
                Google&apos;s servers and Google receives your IP address. See{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google&apos;s Privacy Policy</a>.
              </p>
            </>
          ),
        },
        {
          id: 'how-we-use',
          heading: 'How we use information',
          body: (
            <ul>
              <li>To reply to your message and handle your request, including correction reports and privacy requests.</li>
              <li>To operate, secure and maintain the website, and to prevent spam and abuse.</li>
              <li>To comply with legal obligations.</li>
            </ul>
          ),
        },
        {
          id: 'affiliate-links-cookies',
          heading: 'Affiliate links, third parties and cookies',
          body: (
            <>
              <p>
                Some links on {vpBrand.name} may be affiliate links to retailers, such as Amazon. If you click one, you leave
                our site and the retailer&apos;s own privacy policy and terms apply. Retailers and affiliate programmes may use
                cookies and similar technologies to recognise that you arrived from {vpBrand.name} and to attribute any
                qualifying purchase, so that we may earn a commission.
              </p>
              <p>
                Third parties, including Amazon and other advertisers or retailers, may provide content or advertisements,
                collect information directly from visitors, and place or recognise cookies on visitors&apos; browsers. We do
                not control these cookies. You can block or delete cookies in your browser settings; doing so may affect how
                retailer websites work.
              </p>
              <p>
                {vpBrand.name} does not currently set its own advertising or analytics cookies. If that changes, we will
                update this policy first. See also our{' '}
                <Link href="/versopick/about#disclosure">affiliate disclosure</Link> and{' '}
                <Link href="/versopick/about#sponsored-content">Sponsored Content Policy</Link>.
              </p>
            </>
          ),
        },
        {
          id: 'service-providers',
          heading: 'Service providers and sharing',
          body: (
            <>
              <p>We do not sell your personal information. We share it only with providers that help us run the site:</p>
              <ul>
                <li><strong>Vercel</strong> (website hosting and delivery)</li>
                <li><strong>Resend</strong> (delivering contact form messages to our inbox)</li>
                <li><strong>Our email provider</strong> (storing and replying to messages you send us)</li>
                <li><strong>Google Fonts</strong> (typefaces, as described above)</li>
              </ul>
              <p>
                These providers may process information outside India. We may also disclose information where required by
                law or to protect our rights, users or the public.
              </p>
            </>
          ),
        },
        {
          id: 'retention',
          heading: 'How long we keep information',
          body: (
            <p>
              We keep contact messages only for as long as needed to handle your request and any follow-up, and then delete
              them, unless we need to keep them longer to meet a legal obligation. Hosting logs are retained by our hosting
              provider for a limited period under its own policies.
            </p>
          ),
        },
        {
          id: 'your-rights',
          heading: 'Your choices and rights',
          body: (
            <>
              <p>
                Subject to applicable law, including India&apos;s Digital Personal Data Protection Act, 2023, you may ask us
                to access, correct or delete personal information you have given us, withdraw consent you have given, or
                raise a concern about how we handle your information.
              </p>
              <p>
                To make a request, email <a href={`mailto:${email}`}>{email}</a> or use the{' '}
                <Link href="/versopick/contact">contact form</Link> and choose &quot;Privacy request&quot;. We may need to
                confirm your identity before acting on a request.
              </p>
            </>
          ),
        },
        {
          id: 'children',
          heading: 'Children',
          body: (
            <p>
              {vpBrand.name} is intended for adults. We do not knowingly collect personal information from children under 18.
              If you believe a child has sent us personal information, please contact us and we will delete it.
            </p>
          ),
        },
        {
          id: 'security',
          heading: 'Security',
          body: (
            <p>
              The site is served over HTTPS, and access to messages and site systems is limited to people who need it. No
              method of transmission or storage is completely secure, but we take reasonable steps to protect information.
            </p>
          ),
        },
        {
          id: 'changes',
          heading: 'Changes to this policy',
          body: (
            <p>
              We will update this page when our practices change and revise the &quot;Last updated&quot; date above. Please
              check it from time to time.
            </p>
          ),
        },
        {
          id: 'contact',
          heading: 'Contact us',
          body: (
            <p>
              {vpBrand.parent.name}, {siteConfig.address}. Email: <a href={`mailto:${email}`}>{email}</a>. You can also reach us
              through our <Link href="/versopick/contact">contact page</Link>.
            </p>
          ),
        },
      ]}
    />
  )
}
