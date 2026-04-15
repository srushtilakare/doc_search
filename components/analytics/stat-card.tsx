'use client'

import { LucideIcon } from 'lucide-react'

interface StatCardProps {
  label: string
  value: string
  change: string
  icon: LucideIcon
  color: string
}

export function StatCard({ label, value, change, icon: Icon, color }: StatCardProps) {
  return (
    <div className="p-4 rounded-lg border border-border bg-card/50 hover:bg-card/80 transition-colors">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-sm font-medium text-muted-foreground">{label}</h3>
        <Icon className={`w-5 h-5 ${color}`} />
      </div>
      <div className="mb-2">
        <p className="text-3xl font-bold text-foreground">{value}</p>
      </div>
      <p className="text-xs text-muted-foreground">{change}</p>
    </div>
  )
}
