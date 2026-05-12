'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const caseStudies = [
  {
    title: 'FlowBank',
    description: 'UX Research, Interface Design',
    bgColor: 'bg-gradient-to-br from-green-300 to-green-400',
  },
  {
    title: 'Academy.co',
    description: 'Product Design, Interaction Design',
    bgColor: 'bg-gradient-to-br from-purple-300 to-purple-400',
  },
  {
    title: 'Genome',
    description: 'Brand Identity design, UX Research',
    bgColor: 'bg-gradient-to-br from-gray-300 to-gray-400',
  },
  {
    title: 'Hatto',
    description: 'Web & Mobile Design, Visual Storytelling',
    bgColor: 'bg-gradient-to-br from-blue-300 to-blue-400',
  },
]

export default function Integrations() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-4 text-balance">
            How we <span className="italic">transformed</span> a small business&apos;s online presence
          </h2>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${study.bgColor} rounded-3xl overflow-hidden h-64 flex flex-col items-center justify-center text-center p-6 relative hover:shadow-xl transition-shadow`}
            >
              <div className="absolute inset-0 bg-black/5"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                <p className="text-white/90 text-sm">{study.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-black dark:bg-slate-900 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div>
            <h3 className="text-xl font-bold text-white mb-1">See Our Work in Action.</h3>
            <p className="text-white/70">Start Your Creative Journey with Us!</p>
          </div>
          <div className="flex gap-3">
            <Button
              className="bg-white text-black hover:bg-slate-100 rounded-full font-semibold group"
              asChild
            >
              <Link href="/auth/signup" className="flex items-center gap-2">
                Let's Collaborate
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 rounded-full font-semibold"
              asChild
            >
              <Link href="#work">View Portfolio</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
