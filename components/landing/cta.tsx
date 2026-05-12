'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-100 via-white to-orange-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-6 text-balance">
            Innovative solutions for bold brands
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            Looking to elevate your brand? We craft immersive experiences that captivate, engage, and make your business unforgettable in every interaction.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-black dark:bg-white text-white dark:text-black hover:bg-slate-800 dark:hover:bg-slate-100 group font-semibold rounded-full px-8"
              asChild
            >
              <Link href="/auth/signup" className="flex items-center gap-2">
                Let's Collaborate
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-black dark:border-white text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-full px-8"
              asChild
            >
              <Link href="#portfolio" className="flex items-center gap-2">
                View Portfolio
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
