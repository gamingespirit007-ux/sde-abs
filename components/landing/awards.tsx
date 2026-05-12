'use client'

import { motion } from 'framer-motion'

const awards = [
  {
    icon: '⚡',
    title: 'Framer Awards',
    description: 'Celebrated for cutting-edge interaction design and seamless user experiences.',
    year: '2024',
  },
  {
    icon: '⭐',
    title: 'Dribbble Awards',
    description: 'Recognized for creative excellence and innovative design solutions',
    year: '2023',
  },
  {
    icon: 'w.',
    title: 'awwwards Awards',
    description: 'Honored with the Best Website Design for creativity, usability, and innovation.',
    year: '2022',
  },
]

export default function Awards() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
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
            Accolades and achievements celebration our <span className="italic">design excellence</span>
          </h2>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-slate-200 dark:border-slate-800 rounded-2xl p-8 bg-white dark:bg-slate-950 hover:shadow-lg transition-shadow"
            >
              <div className="mb-6">
                <span className="text-4xl">{award.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-3">
                {award.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {award.description}
              </p>
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-500">
                {award.year}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
