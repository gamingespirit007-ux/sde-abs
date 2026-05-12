'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What services does SDE Labs offer?',
    answer: 'We offer a comprehensive range of design and development services including strategy, UI/UX design, branding, web development, mobile app development, and digital marketing solutions tailored to your business needs.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary depending on scope and complexity. Typically, a standard project takes 4-12 weeks. We provide detailed timelines after understanding your specific requirements.',
  },
  {
    question: 'How is pricing structured at SDE Labs?',
    answer: 'Our pricing is flexible and based on project scope. We offer fixed-price projects, time & materials, and retainer-based engagements. Our Starter plan is $2500/month and Pro plan is $3800/month.',
  },
  {
    question: 'Do you offer ongoing support after project completion?',
    answer: 'Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.',
  },
  {
    question: 'How often will I receive updates on my project?',
    answer: 'Communication frequency depends on your plan. Our Starter plan includes bi-weekly updates, while the Pro plan offers daily updates and dedicated team support.',
  },
  {
    question: 'How do I get started with SDE Labs?',
    answer: 'Getting started is simple! Contact us to schedule a discovery call. We&apos;ll discuss your goals, understand your challenges, and create a customized solution for your business.',
  },
]

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState(0)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-4 text-balance">
            Got questions? We&apos;ve got <span className="italic">answers</span>
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
                className={`w-full text-left p-6 rounded-2xl transition-all ${
                  expandedIndex === index
                    ? 'bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700'
                    : 'bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold text-black dark:text-white text-left">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 text-slate-600 dark:text-slate-400 transition-transform ${
                      expandedIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>

                {/* Answer */}
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700"
                  >
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
