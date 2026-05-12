'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Link from 'next/link'

const plans = [
  {
    name: 'Starter plan',
    price: 19,
    description: 'For individuals',
    features: [
      'Up to 5 projects',
      '1 GB storage',
      'Basic support',
      'Export as image',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Pro plan',
    price: 49,
    description: 'For small teams',
    features: [
      'Unlimited projects',
      '100 GB storage',
      'Priority support',
      'Export as video',
      'Team collaboration',
      'Custom branding',
    ],
    cta: 'Get Started',
    highlighted: true,
  },
  {
    name: 'Business plan',
    price: 79,
    description: 'For enterprises',
    features: [
      'Everything in Pro',
      'Unlimited storage',
      'Dedicated support',
      'Advanced analytics',
      'Custom integrations',
      'SSO & security',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Flexible pricing plans
          </h2>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={plan.highlighted ? 'md:scale-105' : ''}
            >
              <Card
                className={`p-8 h-full flex flex-col border-2 ${
                  plan.highlighted
                    ? 'border-accent bg-accent/5'
                    : 'border-border'
                }`}
              >
                {/* Badge */}
                {plan.highlighted && (
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-accent text-primary-foreground text-xs font-semibold">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                {/* Plan Info */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-sm text-foreground/60 mb-4">{plan.description}</p>

                  {plan.price ? (
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                      <span className="text-foreground/60">/month</span>
                    </div>
                  ) : (
                    <div className="text-4xl font-bold text-foreground">Custom</div>
                  )}
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full mb-6 ${
                    plan.highlighted
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'border border-border bg-transparent hover:bg-muted'
                  }`}
                  asChild
                >
                  <Link href="/auth/signup">{plan.cta}</Link>
                </Button>

                {/* Features */}
                <div className="space-y-4 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-foreground/60 mt-12"
        >
          All plans include a 14-day free trial. Cancel anytime.
        </motion.p>
      </div>
    </section>
  )
}
