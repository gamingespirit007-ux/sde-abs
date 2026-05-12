'use client'

import { motion } from 'framer-motion'
import { MousePointer2, Zap, Users } from 'lucide-react'

const features = [
  {
    icon: MousePointer2,
    title: 'Intuitive drag & drop editor',
    description: 'Create beautiful designs without writing a single line of code',
  },
  {
    icon: Zap,
    title: 'Advanced prototyping',
    description: 'Build interactive prototypes with smooth animations and transitions',
  },
  {
    icon: Users,
    title: 'Real-time collaboration',
    description: 'Work together with your team in real-time from anywhere',
  },
]

export default function Features() {
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
            The ultimate toolkit for designers & teams
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col gap-4"
              >
                <div className="p-3 w-fit rounded-lg bg-accent/10">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
