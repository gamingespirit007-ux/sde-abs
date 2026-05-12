'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

const teamMembers = [
  {
    name: 'Logan Dang',
    role: 'WordPress Developer',
    bgColor: 'bg-gradient-to-br from-blue-400 to-blue-600',
  },
  {
    name: 'Ana Belić',
    role: 'Social Media Specialist',
    bgColor: 'bg-gradient-to-br from-orange-400 to-orange-500',
  },
  {
    name: 'Brian Hanley',
    role: 'Product Designer',
    bgColor: 'bg-gradient-to-br from-yellow-300 to-yellow-400',
  },
  {
    name: 'Darko Stanković',
    role: 'UI Designer',
    bgColor: 'bg-gradient-to-br from-cyan-400 to-cyan-500',
  },
]

const testimonials = [
  {
    type: 'customer',
    content: 'SDE Labs&apos; expertise transformed my vision into success with creativity, precision, and a deep understanding of my goals.',
    author: 'Anaya Shah',
    role: 'Founder of Chainex',
    isHero: false,
  },
  {
    type: 'stat',
    stat: '91%',
    content: 'clients recommend our design services.',
  },
  {
    type: 'customer',
    content: 'Their creativity and attention to detail transformed our brand completely!',
    author: '',
    role: '',
    isHero: true,
  },
  {
    type: 'customer',
    content: 'SDE Labs Design Agency brought our ideas to life with exceptional creativity and precision, exceeding expectations.',
    author: 'Sarah Mitchell',
    role: 'Marketing Head at TalenConnect',
    isHero: false,
  },
]

export default function Testimonials() {
  return (
    <>
      {/* Team Section */}
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
              Meet the <span className="italic">creative minds</span> behind our success
            </h2>
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-4"
              >
                <div className={`w-40 h-40 sm:w-48 sm:h-48 rounded-3xl ${member.bgColor} flex items-center justify-center text-white text-4xl font-bold shadow-lg`}>
                  {member.name.charAt(0)}
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-black dark:text-white text-lg">{member.name}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              What our <span className="italic">satisfied</span> customers are saying about us
            </h2>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First card - customer story */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0 }}
              viewport={{ once: true }}
              className="bg-black dark:bg-slate-900 rounded-2xl p-8 text-white flex flex-col justify-between min-h-64"
            >
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Customer Stories</p>
                <p className="text-lg leading-relaxed font-medium">
                  SDE Labs&apos; expertise transformed my vision into success with creativity, precision, and a deep understanding of my goals.
                </p>
              </div>
              <div>
                <p className="font-semibold">Anaya Shah</p>
                <p className="text-sm text-gray-400">Founder of Chainex</p>
              </div>
            </motion.div>

            {/* Stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-yellow-300 dark:bg-yellow-400 rounded-2xl p-8 flex flex-col justify-center items-center min-h-64"
            >
              <p className="text-xs uppercase tracking-widest text-gray-700 mb-4">Facts & numbers</p>
              <h3 className="text-7xl font-bold text-black mb-4">91%</h3>
              <p className="text-lg font-semibold text-black text-center">
                clients recommend our design services.
              </p>
            </motion.div>

            {/* Bottom two cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-black dark:bg-slate-900 rounded-2xl p-8 text-white flex flex-col justify-between min-h-64 md:col-span-2 lg:col-span-1"
            >
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Customer Stories</p>
                <p className="text-lg leading-relaxed font-medium">
                  Their creativity and attention to detail transformed our brand completely!
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-8 flex flex-col justify-between min-h-64 md:col-span-2 lg:col-span-1"
            >
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-600 dark:text-slate-400 mb-4">Customer Stories</p>
                <p className="text-lg leading-relaxed font-medium text-black dark:text-white">
                  SDE Labs Design Agency brought our ideas to life with exceptional creativity and precision, exceeding expectations.
                </p>
              </div>
              <div>
                <p className="font-semibold text-black dark:text-white">Sarah Mitchell</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Marketing Head at TalenConnect</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
