'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const footerLinks = {
  'Quick Links': [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Download', href: '#download' },
  ],
  'All Pages': [
    { label: 'Power-Ups', href: '#power-ups' },
    { label: 'About us', href: '#about' },
    { label: 'Contact us', href: '#contact' },
    { label: 'Blog', href: '#blog' },
    { label: 'Waitlist', href: '#waitlist' },
    { label: 'Changelog', href: '#changelog' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: '404', href: '/404' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="text-lg font-bold text-foreground mb-4 inline-block">
              Draftr
            </Link>
            <div className="flex gap-4">
              <a href="#twitter" className="text-foreground/60 hover:text-foreground transition-colors" aria-label="Twitter">
                𝕏
              </a>
              <a href="#linkedin" className="text-foreground/60 hover:text-foreground transition-colors" aria-label="LinkedIn">
                in
              </a>
              <a href="#instagram" className="text-foreground/60 hover:text-foreground transition-colors" aria-label="Instagram">
                IG
              </a>
              <a href="#dribbble" className="text-foreground/60 hover:text-foreground transition-colors" aria-label="Dribbble">
                D
              </a>
              <a href="#youtube" className="text-foreground/60 hover:text-foreground transition-colors" aria-label="YouTube">
                YT
              </a>
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-border pt-8 text-center text-sm text-foreground/60"
        >
          <p>
            © 2024 Draftr. Made with ❤️ by Webestica & Framer.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
