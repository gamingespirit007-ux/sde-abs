'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { FileText, Search, Trash2, Share2 } from 'lucide-react'

const documents = [
  { id: 1, name: 'Q4 Marketing Campaign', author: 'You', date: 'Dec 18, 2024', words: 1200, status: 'Draft' },
  { id: 2, name: 'Product Launch Email', author: 'You', date: 'Dec 15, 2024', words: 450, status: 'Published' },
  { id: 3, name: 'Blog Post Outline', author: 'Team Lead', date: 'Dec 14, 2024', words: 800, status: 'Draft' },
  { id: 4, name: 'Social Media Copy', author: 'Marketing', date: 'Dec 12, 2024', words: 350, status: 'Published' },
  { id: 5, name: 'Newsletter Draft', author: 'You', date: 'Dec 10, 2024', words: 2100, status: 'Draft' },
  { id: 6, name: 'Case Study', author: 'Sales Team', date: 'Dec 8, 2024', words: 3000, status: 'Published' },
]

export default function DocumentsPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = documents.filter((doc) =>
    doc.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Documents</h2>
          <p className="text-foreground/60 mt-2">Manage all your content and drafts</p>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full md:w-auto" asChild>
          <Link href="/dashboard/documents/new">Create New Document</Link>
        </Button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foreground/40" />
        <Input
          type="text"
          placeholder="Search documents..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 bg-card border-border"
        />
      </div>

      {/* Documents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((doc) => (
          <Card key={doc.id} className="p-6 border-border hover:border-accent/50 transition-colors group cursor-pointer">
            <Link href={`/dashboard/documents/${doc.id}`}>
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <FileText className="w-6 h-6 text-accent" />
                </div>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                    <Share2 className="w-4 h-4 text-foreground/60" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                    <Trash2 className="w-4 h-4 text-foreground/60" />
                  </button>
                </div>
              </div>

              <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                {doc.name}
              </h3>
              <p className="text-sm text-foreground/60 mb-4">{doc.words.toLocaleString()} words</p>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="text-xs text-foreground/50">
                  <p>{doc.author}</p>
                  <p>{doc.date}</p>
                </div>
                <span
                  className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                    doc.status === 'Published'
                      ? 'bg-green-500/20 text-green-700 dark:text-green-400'
                      : 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-400'
                  }`}
                >
                  {doc.status}
                </span>
              </div>
            </Link>
          </Card>
        ))}
      </div>

      {filtered.length === 0 && (
        <Card className="p-12 border-border text-center">
          <FileText className="w-12 h-12 text-foreground/30 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">No documents found</h3>
          <p className="text-foreground/60 mb-6">Try adjusting your search or create a new document</p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <Link href="/dashboard/documents/new">Create Document</Link>
          </Button>
        </Card>
      )}
    </div>
  )
}
