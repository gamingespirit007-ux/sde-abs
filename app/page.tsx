'use client'

import Navigation from '@/components/landing/navigation'
import Hero from '@/components/landing/hero'
import Features from '@/components/landing/features'
import Workflow from '@/components/landing/workflow'
import Integrations from '@/components/landing/integrations'
import Testimonials from '@/components/landing/testimonials'
import Pricing from '@/components/landing/pricing'
import CTA from '@/components/landing/cta'
import Footer from '@/components/landing/footer'

export default function Home() {
  return (
    <main className="w-full">
      <Navigation />
      <Hero />
      <Features />
      <Workflow />
      <Integrations />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  )
}
