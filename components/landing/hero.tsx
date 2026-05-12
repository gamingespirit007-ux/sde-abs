'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="w-full pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#f3e8ff] dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground text-balance"
            >
              Bring ideas to life in just a few clicks.
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg text-foreground/70 max-w-xl leading-relaxed"
            >
              Create stunning designs and interactive prototypes with our intuitive drag-and-drop editor. No design experience needed.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Button
                size="lg"
                className="bg-accent text-white hover:bg-accent/90 group font-medium"
                asChild
              >
                <Link href="/auth/signup" className="flex items-center gap-2">
                  Get Started • it&apos;s free
                  <motion.div
                    className="flex gap-1"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4" />
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Visual - Product Mockups */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex items-center justify-center relative h-96"
          >
            <div className="relative w-full h-full">
              {/* Decorative background elements */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/50 to-transparent" />
              
              {/* Product mockup cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute left-0 top-8 w-48 h-32 bg-white rounded-lg shadow-lg p-4 border border-border"
              >
                <div className="h-full bg-gradient-to-br from-slate-100 to-slate-50 rounded flex items-center justify-center text-xs font-medium text-foreground/50">
                  Design Preview
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.3 }}
                className="absolute right-0 bottom-4 w-48 h-40 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg shadow-lg p-4"
              >
                <div className="h-full rounded flex items-center justify-center text-sm font-semibold text-white">
                  Prototype
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
