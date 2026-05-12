'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export default function FloatingNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { label: 'About us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Team', href: '#team' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Awards', href: '#awards' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Logo/Branding - appears at top left when scrolled */}
      <div
        className={`fixed top-6 left-6 z-40 transition-all duration-300 ${
          scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-black dark:bg-white flex items-center justify-center">
            <span className="text-white dark:text-black font-bold text-sm">S</span>
          </div>
          <span className="font-bold text-lg text-black dark:text-white">SDE Labs</span>
        </Link>
      </div>

      {/* Floating Capsule Navbar */}
      <nav
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          scrolled ? 'top-6' : 'top-8 md:top-6'
        }`}
      >
        <div
          className={`flex items-center gap-1 px-2 py-2 rounded-full backdrop-blur-md transition-all duration-300 ${
            scrolled
              ? 'bg-white/80 dark:bg-slate-950/80 shadow-lg border border-slate-200 dark:border-slate-800'
              : 'bg-white/60 dark:bg-slate-950/60 border border-slate-200/50 dark:border-slate-800/50'
          }`}
        >
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-0">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors rounded-full hover:bg-black/5 dark:hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-6 bg-slate-200 dark:bg-slate-800 mx-1" />

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:inline-flex text-xs rounded-full"
              asChild
            >
              <Link href="/auth/login">Sign in</Link>
            </Button>

            <Button
              size="sm"
              className="hidden sm:inline-flex bg-black dark:bg-white text-white dark:text-black hover:bg-slate-800 dark:hover:bg-slate-100 text-xs rounded-full font-semibold"
              asChild
            >
              <Link href="/auth/signup">Sign up</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-screen max-w-xs mx-auto">
            <div className="rounded-3xl bg-white dark:bg-slate-950 shadow-xl border border-slate-200 dark:border-slate-800 backdrop-blur-md p-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 rounded-2xl transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              <div className="flex flex-col gap-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full rounded-full"
                  asChild
                >
                  <Link href="/auth/login">Sign in</Link>
                </Button>
                <Button
                  size="sm"
                  className="w-full bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold"
                  asChild
                >
                  <Link href="/auth/signup">Sign up</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-20" />
    </>
  )
}
