'use client'

import FloatingNavbar from '@/components/landing/floating-navbar'
import Hero from '@/components/landing/hero'
import Features from '@/components/landing/features'
import Workflow from '@/components/landing/workflow'
import Integrations from '@/components/landing/integrations'
import Testimonials from '@/components/landing/testimonials'
import Pricing from '@/components/landing/pricing'
import FAQ from '@/components/landing/faq'
import Awards from '@/components/landing/awards'
import CTA from '@/components/landing/cta'
import Footer from '@/components/landing/footer'

export default function Home() {
  return (
    <main className="w-full">
      <FloatingNavbar />
      <Hero />
      <Features />
      <Workflow />
      <Integrations />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Awards />
      <CTA />
      <Footer />
    </main>
  )
}
