import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingButtons from '@/components/ui/FloatingButtons'

// VersoTech site chrome (header, footer, floating buttons). Previously lived in the
// root layout; shared by the (versotech) route group layout and the root 404 page.
export default function VersoTechShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">{children}</main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
