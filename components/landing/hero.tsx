'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="w-full pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 via-white to-orange-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center gap-8">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4 max-w-3xl"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-black dark:text-white text-balance">
              Building bold brands with{' '}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
                thoughtful design
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              At SDE Labs, we help startups tackle the world&apos;s toughest challenges with tailored solutions, guiding you from strategy to success in a competitive market.
            </p>
          </motion.div>

          {/* CTA and Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center gap-6 justify-center"
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold px-8 group"
              asChild
            >
              <Link href="/auth/signup" className="flex items-center gap-2">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            {/* Social Proof */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-300 to-slate-400 dark:from-slate-600 dark:to-slate-700 border-2 border-white dark:border-slate-950"
                  />
                ))}
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                ))}
                <span className="text-sm text-slate-600 dark:text-slate-400 ml-1">
                  Trusted by 300+ clients
                </span>
              </div>
            </div>
          </motion.div>

          {/* Client Logos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full pt-8 mt-8 border-t border-slate-200 dark:border-slate-800"
          >
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
              Loved by 300+ big and small brands around the worlds
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
              {['Logoipsum', 'Logoipsum', 'Logoipsum', 'Logoipsum', 'Logoipsum'].map((brand, i) => (
                <div
                  key={i}
                  className="text-sm font-medium text-slate-600 dark:text-slate-400 opacity-60 hover:opacity-100 transition-opacity"
                >
                  {brand}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
