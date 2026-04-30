import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { Features } from "@/components/features"
import { Modules } from "@/components/modules"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { ServiceForm } from "@/components/service-form"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Stats />
      <Features />
      <Modules />
      <Testimonials />
      <Pricing />
      <ServiceForm />
      <FAQ />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
