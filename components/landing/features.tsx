'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '+40', label: 'Total Projects Completed' },
  { value: '+15', label: 'Years of Experience' },
  { value: '+12', label: 'Design Awards' },
]

export default function Features() {
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
            We fuse{' '}
            <span className="italic text-pink-500">Creativity</span>, <span className="italic text-blue-400">Innovation</span> & <span className="italic text-orange-400">Strategy</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            to craft exceptional, digital experiences strategy, and technology to drive exceptional, impactful results.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-6xl sm:text-7xl font-bold text-black dark:text-white mb-2">
                {stat.value}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
