'use client'

import { Header } from '@/components/layout/header'
import { StatCard } from './stat-card'
import { UsageChart } from './usage-chart'
import { DocumentStats } from './document-stats'
import { FileText, MessageSquare, TrendingUp, Clock } from 'lucide-react'

export function AnalyticsPage() {
  const stats = [
    {
      label: 'Total Documents',
      value: '24',
      change: '+3 this week',
      icon: FileText,
      color: 'text-blue-500',
    },
    {
      label: 'Chat Sessions',
      value: '47',
      change: '+12 this week',
      icon: MessageSquare,
      color: 'text-purple-500',
    },
    {
      label: 'Avg Response Time',
      value: '1.2s',
      change: '-0.3s from last week',
      icon: Clock,
      color: 'text-green-500',
    },
    {
      label: 'Engagement Rate',
      value: '87%',
      change: '+5% from last week',
      icon: TrendingUp,
      color: 'text-orange-500',
    },
  ]

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <Header title="Analytics" description="Document analytics and statistics" />
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <UsageChart />
          </div>
          <DocumentStats />
        </div>
      </div>
    </div>
  )
}
