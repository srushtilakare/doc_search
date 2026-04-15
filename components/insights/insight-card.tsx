'use client'

import { Insight } from './insights-page'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'

interface InsightCardProps {
  insight: Insight
}

export function InsightCard({ insight }: InsightCardProps) {
  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case 'summary':
        return 'bg-blue-500/20 text-blue-300'
      case 'finding':
        return 'bg-green-500/20 text-green-300'
      case 'recommendation':
        return 'bg-purple-500/20 text-purple-300'
      case 'metric':
        return 'bg-orange-500/20 text-orange-300'
      default:
        return 'bg-gray-500/20 text-gray-300'
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'summary':
        return 'Summary'
      case 'finding':
        return 'Finding'
      case 'recommendation':
        return 'Recommendation'
      case 'metric':
        return 'Metric'
      default:
        return 'Insight'
    }
  }

  return (
    <div className="p-5 rounded-lg border border-border bg-card/50 hover:bg-card/80 transition-colors cursor-pointer group">
      <div className="flex items-start gap-3 mb-3">
        <span className="text-2xl flex-shrink-0">{insight.icon}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-semibold text-foreground">{insight.title}</h3>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0 mt-1" />
          </div>
          <Badge className={`${getTypeBadgeColor(insight.type)} text-xs font-medium mb-3`}>
            {getTypeLabel(insight.type)}
          </Badge>
        </div>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-3">
        {insight.description}
      </p>

      <div className="text-xs text-muted-foreground">
        From <span className="font-medium text-foreground">{insight.document}</span>
      </div>
    </div>
  )
}
