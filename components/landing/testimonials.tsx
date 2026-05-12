'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

const testimonials = [
  {
    name: 'Alex Morgan',
    role: 'Design Lead',
    content: 'This tool has completely changed how we prototype. The speed and ease of use are unmatched.',
  },
  {
    name: 'Jordan Lee',
    role: 'Product Manager',
    content: 'Our team loves the real-time collaboration features. Makes working remotely feel seamless.',
  },
  {
    name: 'Casey Roberts',
    role: 'UX Director',
    content: 'The best design solution we\'ve found. Powerful yet incredibly intuitive to use.',
  },
  {
    name: 'Taylor Brown',
    role: 'Creative Director',
    content: 'We\'ve recommended this to everyone. The results speak for themselves.',
  },
  {
    name: 'Morgan Davis',
    role: 'Startup Founder',
    content: 'Exactly what we needed to launch faster. Highly recommend to any design team.',
  },
]

export default function Testimonials() {
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
            Loved by designers & teams
          </h2>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full border-border flex flex-col gap-4 bg-card hover:border-accent/50 transition-colors">
                {/* Content */}
                <p className="text-foreground/80 leading-relaxed flex-1">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-foreground/60">{testimonial.role}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
