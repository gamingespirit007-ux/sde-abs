'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Link from 'next/link'

const plans = [
  {
    name: 'Starter',
    price: 2500,
    bgColor: 'bg-yellow-300 dark:bg-yellow-400',
    textColor: 'text-black',
    features: [
      'Design Updates Every 2 Days',
      'Mid-level Designer',
      'SEO optimization',
      'Monthly analytics',
      '2+ Calls Per Month',
      'License free assets',
    ],
    cta: 'Let\'s Collaborate',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: 3800,
    bgColor: 'bg-blue-600 dark:bg-blue-700',
    textColor: 'text-white',
    features: [
      'Design Updates Daily',
      'Senior-level Designer',
      'AI Advisory Framework',
      'Weekly dedicated Team',
      'AI Calls Per Month',
      'License free assets',
    ],
    cta: 'Let\'s Collaborate',
    highlighted: true,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
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
            Pick the plan that fits your <span className="italic">start-up</span>
          </h2>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className={`${plan.bgColor} ${plan.textColor} rounded-2xl p-8 h-full flex flex-col`}
              >
                {/* Badge */}
                {plan.highlighted && (
                  <div className="mb-6">
                    <span className={`inline-block px-3 py-1 rounded-full ${plan.textColor === 'text-white' ? 'bg-white/20 text-white' : 'bg-black/10 text-black'} text-xs font-semibold`}>
                      Pro
                    </span>
                  </div>
                )}

                {/* Plan Info */}
                <div className="mb-8">
                  <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-5xl font-bold">${plan.price}</span>
                    <span className="text-sm opacity-75">/month</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full mb-8 rounded-full font-semibold ${
                    plan.highlighted
                      ? 'bg-white text-blue-600 hover:bg-slate-100'
                      : 'bg-black/20 text-black hover:bg-black/30'
                  }`}
                  asChild
                >
                  <Link href="/auth/signup">{plan.cta}</Link>
                </Button>

                {/* Features */}
                <div className="space-y-4 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.textColor}`} />
                      <span className={plan.textColor}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
