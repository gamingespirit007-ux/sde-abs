'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BarChart3, FileText, Users, Zap, TrendingUp, Clock } from 'lucide-react'
import Link from 'next/link'

const stats = [
  {
    label: 'Documents Created',
    value: '24',
    change: '+12% from last month',
    icon: FileText,
    color: 'bg-blue-500/20 text-blue-600 dark:text-blue-400',
  },
  {
    label: 'Words Generated',
    value: '12,450',
    change: '+8% from last month',
    icon: Zap,
    color: 'bg-purple-500/20 text-purple-600 dark:text-purple-400',
  },
  {
    label: 'Team Members',
    value: '5',
    change: '2 pending invites',
    icon: Users,
    color: 'bg-green-500/20 text-green-600 dark:text-green-400',
  },
  {
    label: 'API Usage',
    value: '68%',
    change: 'of monthly quota',
    icon: TrendingUp,
    color: 'bg-orange-500/20 text-orange-600 dark:text-orange-400',
  },
]

const recentDocuments = [
  { id: 1, name: 'Q4 Marketing Campaign', date: '2 hours ago', status: 'Draft' },
  { id: 2, name: 'Product Launch Email', date: '5 hours ago', status: 'Published' },
  { id: 3, name: 'Blog Post Outline', date: '1 day ago', status: 'Draft' },
  { id: 4, name: 'Social Media Copy', date: '2 days ago', status: 'Published' },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Welcome back!</h2>
          <p className="text-foreground/60 mt-2">Here&apos;s what&apos;s happening with your content today.</p>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full md:w-auto" asChild>
          <Link href="/dashboard/documents/new">Create Document</Link>
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.label} className="p-6 border-border">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground/60 mb-2">{stat.label}</p>
                  <p className="text-3xl font-bold text-foreground mb-2">{stat.value}</p>
                  <p className="text-xs text-foreground/50">{stat.change}</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Activity Chart */}
        <Card className="lg:col-span-2 p-6 border-border">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground">Activity</h3>
            <p className="text-sm text-foreground/60">Documents created per day this week</p>
          </div>

          <div className="h-80 flex items-end justify-around gap-2">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => {
              const heights = [40, 60, 45, 75, 65, 35, 50]
              return (
                <div key={day} className="flex flex-col items-center gap-2 flex-1">
                  <div className="w-full bg-accent/20 rounded-t-lg" style={{ height: `${heights[index]}%` }} />
                  <span className="text-xs text-foreground/60">{day}</span>
                </div>
              )
            })}
          </div>
        </Card>

        {/* Quick Stats */}
        <Card className="p-6 border-border">
          <h3 className="text-lg font-semibold text-foreground mb-6">Quick Stats</h3>

          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-foreground/70">Generation Speed</span>
                <span className="text-sm font-semibold text-accent">98%</span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full w-full bg-accent rounded-full" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-foreground/70">API Uptime</span>
                <span className="text-sm font-semibold text-green-600 dark:text-green-400">99.9%</span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full w-[99.9%] bg-green-600 dark:bg-green-400 rounded-full" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-foreground/70">Team Collaboration</span>
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">5/5</span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full w-full bg-blue-600 dark:bg-blue-400 rounded-full" />
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Recent Documents */}
      <Card className="p-6 border-border">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-foreground">Recent Documents</h3>
          <Link href="/dashboard/documents" className="text-sm text-accent hover:underline">
            View all
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-medium text-foreground/70 text-sm">Name</th>
                <th className="text-left py-3 px-4 font-medium text-foreground/70 text-sm">Date</th>
                <th className="text-left py-3 px-4 font-medium text-foreground/70 text-sm">Status</th>
                <th className="text-left py-3 px-4 font-medium text-foreground/70 text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentDocuments.map((doc) => (
                <tr key={doc.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="py-4 px-4">
                    <p className="font-medium text-foreground">{doc.name}</p>
                  </td>
                  <td className="py-4 px-4 text-sm text-foreground/60">{doc.date}</td>
                  <td className="py-4 px-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        doc.status === 'Published'
                          ? 'bg-green-500/20 text-green-700 dark:text-green-400'
                          : 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-400'
                      }`}
                    >
                      {doc.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/dashboard/documents/${doc.id}`}>Edit</Link>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
