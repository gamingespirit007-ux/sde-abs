'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail } from 'lucide-react'

const footerLinks = {
  'Sitemap': [
    { label: 'Contact us', href: '#contact' },
    { label: 'About us', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
  ],
  'Other Pages': [
    { label: 'Error 404', href: '/404' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Documentation', href: '/docs' },
  ],
}

const contact = {
  address: 'B1 Rivington Street London EC2A 3AY',
  email: 'hello@sdelabs.agency',
  phone: '0805 182 3556',
}

const socialLinks = [
  { icon: '𝕏', href: '#twitter', label: 'Twitter' },
  { icon: 'in', href: '#linkedin', label: 'LinkedIn' },
  { icon: 'ig', href: '#instagram', label: 'Instagram' },
  { icon: 'd', href: '#dribbble', label: 'Dribbble' },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-black dark:bg-white flex items-center justify-center">
                <span className="text-white dark:text-black font-bold text-sm">S</span>
              </div>
              <span className="font-bold text-lg text-black dark:text-white">SDE Labs</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              Empowering businesses with innovative solutions. Let's create something amazing together.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors text-sm font-medium"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-black dark:text-white mb-4 text-sm uppercase tracking-wide">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-black dark:text-white mb-4 text-sm uppercase tracking-wide">
              Contact Details
            </h4>
            <ul className="space-y-3">
              <li className="text-sm text-slate-600 dark:text-slate-400">
                {contact.address}
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  {contact.email}
                </a>
              </li>
              <li className="text-sm text-slate-600 dark:text-slate-400">
                {contact.phone}
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-slate-200 dark:border-slate-800 pt-8 text-center text-sm text-slate-600 dark:text-slate-400"
        >
          <p>© 2025 SDE Labs. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
