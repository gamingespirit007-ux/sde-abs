'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: 'About us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Team', href: '#team' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Awards', href: '#awards' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-black dark:bg-white flex items-center justify-center">
              <span className="text-white dark:text-black font-bold text-sm">S</span>
            </div>
            <span className="font-bold text-lg text-black dark:text-white">SDE Labs</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden sm:inline-flex text-sm" asChild>
              <Link href="/auth/login">Sign in</Link>
            </Button>

            <Button className="hidden sm:inline-flex bg-black dark:bg-white text-white dark:text-black hover:bg-slate-800 dark:hover:bg-slate-100 text-sm" asChild>
              <Link href="/auth/signup">Sign up</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
            <div className="flex flex-col gap-4 p-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/auth/login">Sign in</Link>
                </Button>
                <Button className="w-full bg-black dark:bg-white text-white dark:text-black" asChild>
                  <Link href="/auth/signup">Sign up</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
