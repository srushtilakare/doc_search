'use client'

import { Header } from '@/components/layout/header'
import { InsightCard } from './insight-card'
import { Lightbulb } from 'lucide-react'

export interface Insight {
  id: string
  title: string
  description: string
  type: 'summary' | 'finding' | 'recommendation' | 'metric'
  document: string
  icon: string
}

export function InsightsPage() {
  const insights: Insight[] = [
    {
      id: '1',
      title: 'Revenue Growth Trend',
      description: 'Q4 showed 15% YoY growth with accelerating month-over-month momentum. This trend suggests strong market demand.',
      type: 'metric',
      document: 'Q4_Report.pdf',
      icon: '📈',
    },
    {
      id: '2',
      title: 'Market Opportunity',
      description: 'Enterprise segment represents 40% of addressable market with 2.5x growth potential in next 18 months.',
      type: 'finding',
      document: 'Market_Analysis.docx',
      icon: '🎯',
    },
    {
      id: '3',
      title: 'Key Recommendation',
      description: 'Prioritize AI-powered feature development to capture emerging market segment. ROI projected at 3.2x.',
      type: 'recommendation',
      document: 'Q4_Report.pdf',
      icon: '💡',
    },
    {
      id: '4',
      title: 'Executive Summary',
      description: 'Strong quarterly performance with healthy margins. Strategic initiatives on track for Q1 launch.',
      type: 'summary',
      document: 'Q4_Report.pdf',
      icon: '📊',
    },
  ]

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <Header title="Insights" description="AI-powered analysis and summaries" />
      <div className="flex-1 overflow-y-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {insights.map((insight) => (
            <InsightCard key={insight.id} insight={insight} />
          ))}
        </div>
      </div>
    </div>
  )
}
