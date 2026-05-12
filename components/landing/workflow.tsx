'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Start your project',
    description: 'Begin with a blank canvas or choose from our templates',
  },
  {
    title: 'Design with ease',
    description: 'Use our intuitive tools to bring your ideas to life',
  },
  {
    title: 'Export & Share',
    description: 'Share your designs and prototypes with your team',
  },
]

export default function Workflow() {
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
            Simplify your workflow
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10">
                <span className="text-lg font-semibold text-accent">{index + 1}</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
