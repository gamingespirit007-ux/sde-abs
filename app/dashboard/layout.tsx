'use client'

import { ReactNode, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Menu, X, LogOut, Settings, BarChart3, Users, FileText } from 'lucide-react'
import { useTheme } from 'next-themes'

const navItems = [
  {
    label: 'Overview',
    href: '/dashboard',
    icon: BarChart3,
  },
  {
    label: 'Documents',
    href: '/dashboard/documents',
    icon: FileText,
  },
  {
    label: 'Team',
    href: '/dashboard/team',
    icon: Users,
  },
  {
    label: 'Settings',
    href: '/dashboard/settings',
    icon: Settings,
  },
]

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:inset-auto md:z-auto`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-border">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">D</span>
              </div>
              <span className="text-lg font-bold text-foreground">Draftr</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <div className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
                      isActive
                        ? 'bg-accent/10 text-accent'
                        : 'text-foreground/70 hover:text-foreground'
                    }`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </nav>

          {/* User Section */}
          <div className="border-t border-border p-4 space-y-2">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-foreground/70 hover:text-foreground hover:bg-muted transition-colors"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
              <span>{theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
            </button>
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => (window.location.href = '/')}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-40">
          <div className="flex items-center justify-between px-6 py-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {sidebarOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            <h1 className="hidden md:block text-2xl font-bold text-foreground">
              {navItems.find((item) => item.href === pathname)?.label || 'Dashboard'}
            </h1>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-sm font-semibold text-accent">JD</span>
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-foreground">John Doe</p>
                  <p className="text-xs text-foreground/60">john@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-6 md:p-8">{children}</div>
        </main>
      </div>
    </div>
  )
}
