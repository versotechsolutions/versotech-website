import type { Metadata } from 'next'
import './globals.css'
import ThemeProvider from '@/components/layout/ThemeProvider'
import { siteConfig } from '@/lib/data'

export const metadata: Metadata = {
  title: { default: `${siteConfig.name} — ${siteConfig.tagline}`, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  keywords: ['QA Automation', 'AI Solutions', 'Software Development', 'DevOps', 'Cloud', 'VersoTech'],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.tagline,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: siteConfig.name, description: siteConfig.tagline },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
        {/* Site chrome (header/footer) lives in each section's own layout, e.g. (versotech)/layout.tsx */}
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
