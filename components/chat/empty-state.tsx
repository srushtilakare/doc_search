'use client'

import { Sparkles, FileText, Zap, Share2 } from 'lucide-react'

export function EmptyState() {
  const suggestions = [
    {
      icon: FileText,
      title: 'Analyze Documents',
      description: 'Upload and analyze your documents with AI',
    },
    {
      icon: Zap,
      title: 'Quick Insights',
      description: 'Get instant summaries and key findings',
    },
    {
      icon: Share2,
      title: 'Compare Files',
      description: 'Compare multiple documents side by side',
    },
  ]

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-12 text-center">
      <div className="mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
          <Sparkles className="w-8 h-8 text-accent" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Welcome to DocSearch</h1>
        <p className="text-muted-foreground text-lg max-w-md">
          Upload documents and use AI to search, analyze, and extract insights
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl mb-12">
        {suggestions.map((item) => {
          const Icon = item.icon
          return (
            <div
              key={item.title}
              className="p-4 rounded-lg border border-border bg-card/50 hover:bg-card/80 transition-colors cursor-pointer"
            >
              <div className="flex justify-center mb-3">
                <Icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          )
        })}
      </div>

      <div className="text-sm text-muted-foreground">
        <p>Start by uploading a document or asking a question</p>
      </div>
    </div>
  )
}
