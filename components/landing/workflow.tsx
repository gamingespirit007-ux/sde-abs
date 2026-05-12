'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Megaphone, Palette, BarChart3, Code } from 'lucide-react'

const services = [
  {
    icon: Lightbulb,
    title: 'Strategy',
    bgColor: 'bg-pink-100 dark:bg-pink-900/30',
    iconColor: 'text-pink-600 dark:text-pink-400',
  },
  {
    icon: Megaphone,
    title: 'Marketing',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    iconColor: 'text-blue-600 dark:text-blue-400',
  },
  {
    icon: Palette,
    title: 'Design',
    bgColor: 'bg-orange-100 dark:bg-orange-900/30',
    iconColor: 'text-orange-600 dark:text-orange-400',
  },
  {
    icon: BarChart3,
    title: 'Reporting',
    bgColor: 'bg-green-100 dark:bg-green-900/30',
    iconColor: 'text-green-600 dark:text-green-400',
  },
  {
    icon: Code,
    title: 'Development',
    bgColor: 'bg-rose-100 dark:bg-rose-900/30',
    iconColor: 'text-rose-600 dark:text-rose-400',
  },
]

export default function Workflow() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
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
            Where innovation meets{' '}
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
              aesthetics
            </span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`${service.bgColor} rounded-2xl p-6 flex flex-col items-center gap-4 hover:shadow-lg transition-shadow`}
              >
                <Icon className={`w-8 h-8 ${service.iconColor}`} />
                <h3 className="text-lg font-semibold text-black dark:text-white text-center">
                  {service.title}
                </h3>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
