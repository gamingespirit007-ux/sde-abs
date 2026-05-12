'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Users, Copy, Trash2, Shield } from 'lucide-react'

const teamMembers = [
  { id: 1, name: 'You', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Sarah Williams', email: 'sarah@example.com', role: 'Editor', status: 'Active' },
  { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'Viewer', status: 'Active' },
  { id: 4, name: 'Emma Davis', email: 'emma@example.com', role: 'Editor', status: 'Pending' },
]

export default function TeamPage() {
  const [inviteEmail, setInviteEmail] = useState('')
  const [inviteRole, setInviteRole] = useState('editor')

  const handleInvite = () => {
    console.log('[v0] Inviting:', { email: inviteEmail, role: inviteRole })
    setInviteEmail('')
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-foreground">Team Management</h2>
        <p className="text-foreground/60 mt-2">Manage team members and their permissions</p>
      </div>

      {/* Invite Section */}
      <Card className="p-6 border-border bg-accent/5">
        <h3 className="text-lg font-semibold text-foreground mb-4">Invite Team Members</h3>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Label htmlFor="invite-email" className="text-sm text-foreground mb-2 block">
              Email address
            </Label>
            <Input
              id="invite-email"
              type="email"
              placeholder="colleague@example.com"
              value={inviteEmail}
              onChange={(e) => setInviteEmail(e.target.value)}
              className="bg-background border-border"
            />
          </div>

          <div className="w-full md:w-40">
            <Label htmlFor="invite-role" className="text-sm text-foreground mb-2 block">
              Role
            </Label>
            <select
              id="invite-role"
              value={inviteRole}
              onChange={(e) => setInviteRole(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground"
            >
              <option value="viewer">Viewer</option>
              <option value="editor">Editor</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <Button
            onClick={handleInvite}
            className="bg-primary text-primary-foreground hover:bg-primary/90 md:self-end"
          >
            Send Invite
          </Button>
        </div>
      </Card>

      {/* Team Members */}
      <Card className="border-border overflow-hidden">
        <div className="p-6 border-b border-border">
          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Users className="w-5 h-5" />
            Team Members ({teamMembers.length})
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left py-3 px-6 font-medium text-foreground/70 text-sm">Name</th>
                <th className="text-left py-3 px-6 font-medium text-foreground/70 text-sm">Email</th>
                <th className="text-left py-3 px-6 font-medium text-foreground/70 text-sm">Role</th>
                <th className="text-left py-3 px-6 font-medium text-foreground/70 text-sm">Status</th>
                <th className="text-left py-3 px-6 font-medium text-foreground/70 text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {teamMembers.map((member) => (
                <tr key={member.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="py-4 px-6">
                    <p className="font-medium text-foreground">{member.name}</p>
                  </td>
                  <td className="py-4 px-6 text-sm text-foreground/60">{member.email}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-accent" />
                      <span className="text-sm font-medium text-foreground capitalize">{member.role}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        member.status === 'Active'
                          ? 'bg-green-500/20 text-green-700 dark:text-green-400'
                          : 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-400'
                      }`}
                    >
                      {member.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex gap-2">
                      {member.status === 'Pending' && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => console.log('[v0] Resending invite to', member.email)}
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                      )}
                      {member.id !== 1 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => console.log('[v0] Removing', member.name)}
                        >
                          <Trash2 className="w-4 h-4 text-destructive" />
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Workspace Settings */}
      <Card className="p-6 border-border">
        <h3 className="text-lg font-semibold text-foreground mb-6">Workspace Settings</h3>

        <div className="space-y-6">
          <div>
            <Label className="text-foreground font-medium mb-2 block">Workspace Name</Label>
            <Input
              type="text"
              defaultValue="Acme Inc."
              className="bg-background border-border max-w-md"
            />
          </div>

          <div>
            <Label className="text-foreground font-medium mb-2 block">Workspace URL</Label>
            <Input
              type="text"
              defaultValue="https://app.draftr.io/acme-inc"
              readOnly
              className="bg-background border-border max-w-md"
            />
          </div>

          <div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Save Changes
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
