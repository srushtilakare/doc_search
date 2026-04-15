'use client'

import { SearchResult } from './search-page'
import { FileText, ArrowRight } from 'lucide-react'

interface SearchResultsProps {
  results: SearchResult[]
}

export function SearchResults({ results }: SearchResultsProps) {
  const formatScore = (score: number) => {
    return `${Math.round(score * 100)}%`
  }

  return (
    <div className="space-y-4">
      <div className="text-sm text-muted-foreground mb-6">
        Found {results.length} result{results.length !== 1 ? 's' : ''}
      </div>

      {results.map((result) => (
        <div
          key={result.id}
          className="p-4 rounded-lg border border-border bg-card/50 hover:bg-card/80 transition-colors cursor-pointer group"
        >
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <FileText className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <h3 className="font-semibold text-foreground truncate">{result.title}</h3>
              </div>
              <p className="text-xs text-muted-foreground">
                From <span className="font-medium">{result.document}</span> •{' '}
                <span>{result.section}</span>
              </p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="text-right">
                <div className="text-sm font-semibold text-accent">{formatScore(result.score)}</div>
                <div className="text-xs text-muted-foreground">match</div>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </div>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {result.content}
          </p>
        </div>
      ))}
    </div>
  )
}
