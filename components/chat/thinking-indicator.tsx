'use client'

interface ThinkingIndicatorProps {
  text: string
}

export function ThinkingIndicator({ text }: ThinkingIndicatorProps) {
  return (
    <div className="flex justify-start">
      <div className="max-w-lg px-4 py-3 rounded-lg bg-card border border-border text-foreground flex items-center gap-2">
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-accent/60 animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 rounded-full bg-accent/60 animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 rounded-full bg-accent/60 animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
        <span className="text-sm text-muted-foreground italic">{text}</span>
      </div>
    </div>
  )
}
