'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const companies = [
  'Slack', 'Figma', 'Notion', 'GitHub', 'Adobe XD', 'InVision',
  'Framer', 'Webflow', 'Zapier', 'Airtable', 'Asana', 'Monday',
]

export default function Integrations() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
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
            One platform, unlimited integrations
          </h2>
        </motion.div>

        {/* Companies Grid - 3 columns, horizontal scroll feel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8"
        >
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex items-center justify-center p-4 rounded-lg bg-card border border-border hover:border-accent/50 transition-colors"
            >
              <span className="text-foreground/70 font-medium text-center text-sm">{company}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="outline" asChild>
            <Link href="#integrations">View all integrations</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
