'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Bell, Lock, CreditCard, AlertCircle } from 'lucide-react'

export default function SettingsPage() {
  return (
    <div className="space-y-8 max-w-3xl">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-foreground">Settings</h2>
        <p className="text-foreground/60 mt-2">Manage your account and preferences</p>
      </div>

      {/* Account Settings */}
      <Card className="p-6 border-border">
        <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
          <Lock className="w-5 h-5" />
          Account Settings
        </h3>

        <div className="space-y-6">
          <div>
            <Label className="text-foreground font-medium mb-2 block">Full Name</Label>
            <Input
              type="text"
              defaultValue="John Doe"
              className="bg-background border-border max-w-md"
            />
          </div>

          <div>
            <Label className="text-foreground font-medium mb-2 block">Email</Label>
            <Input
              type="email"
              defaultValue="john@example.com"
              className="bg-background border-border max-w-md"
            />
          </div>

          <div>
            <Label className="text-foreground font-medium mb-2 block">Current Password</Label>
            <Input
              type="password"
              placeholder="••••••••"
              className="bg-background border-border max-w-md"
            />
          </div>

          <div>
            <Label className="text-foreground font-medium mb-2 block">New Password</Label>
            <Input
              type="password"
              placeholder="••••••••"
              className="bg-background border-border max-w-md"
            />
          </div>

          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Update Password
          </Button>
        </div>
      </Card>

      {/* Billing */}
      <Card className="p-6 border-border">
        <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
          <CreditCard className="w-5 h-5" />
          Billing & Subscription
        </h3>

        <div className="space-y-6">
          <div>
            <p className="text-foreground font-medium mb-2">Current Plan</p>
            <div className="flex items-center justify-between p-4 rounded-lg bg-accent/10 border border-accent/20">
              <div>
                <p className="font-semibold text-foreground">Professional</p>
                <p className="text-sm text-foreground/60">$79/month • Renews Dec 18, 2024</p>
              </div>
              <Button variant="outline">Manage Plan</Button>
            </div>
          </div>

          <div>
            <p className="text-foreground font-medium mb-3">Payment Method</p>
            <div className="flex items-center justify-between p-4 rounded-lg border border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-muted flex items-center justify-center">
                  <span className="font-bold text-sm text-foreground">•••• 4242</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">Visa</p>
                  <p className="text-sm text-foreground/60">Expires 12/25</p>
                </div>
              </div>
              <Button variant="ghost">Update</Button>
            </div>
          </div>

          <div>
            <Button variant="outline" className="border-border">
              View Billing History
            </Button>
          </div>
        </div>
      </Card>

      {/* Notifications */}
      <Card className="p-6 border-border">
        <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
          <Bell className="w-5 h-5" />
          Notifications
        </h3>

        <div className="space-y-4">
          {[
            { label: 'Email notifications for document updates', checked: true },
            { label: 'Weekly summary of your activity', checked: true },
            { label: 'Product updates and announcements', checked: false },
            { label: 'Tips and best practices', checked: false },
          ].map((item) => (
            <label key={item.label} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                defaultChecked={item.checked}
                className="w-4 h-4 rounded border-border cursor-pointer"
              />
              <span className="text-foreground">{item.label}</span>
            </label>
          ))}
        </div>

        <Button className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90">
          Save Preferences
        </Button>
      </Card>

      {/* Danger Zone */}
      <Card className="p-6 border-2 border-destructive/20 bg-destructive/5">
        <h3 className="text-lg font-semibold text-destructive mb-6 flex items-center gap-2">
          <AlertCircle className="w-5 h-5" />
          Danger Zone
        </h3>

        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-foreground mb-2">Delete Account</h4>
            <p className="text-sm text-foreground/60 mb-4">
              Permanently delete your account and all associated data. This action cannot be undone.
            </p>
            <Button variant="outline" className="border-destructive text-destructive hover:bg-destructive/10">
              Delete Account
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
