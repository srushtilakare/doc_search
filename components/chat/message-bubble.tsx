'use client'

import { Message } from './chat-window'
import { FileIcon, CheckCircle2 } from 'lucide-react'

interface MessageBubbleProps {
  message: Message
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === 'user'

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-lg px-4 py-3 rounded-lg ${
          isUser
            ? 'bg-accent text-accent-foreground'
            : 'bg-card border border-border text-foreground'
        }`}
      >
        <p className="text-sm leading-relaxed">{message.content}</p>

        {/* Sources/Files */}
        {message.sources && message.sources.length > 0 && !isUser && (
          <div className="mt-3 pt-3 border-t border-border/50 space-y-2">
            <p className="text-xs font-semibold text-muted-foreground">Sources:</p>
            {message.sources.map((source, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                <FileIcon className="w-3 h-3" />
                <span className="truncate">{source}</span>
              </div>
            ))}
          </div>
        )}

        {/* Timestamp */}
        <div className={`text-xs mt-2 ${isUser ? 'text-accent-foreground/70' : 'text-muted-foreground'}`}>
          {message.timestamp.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </div>
      </div>
    </div>
  )
}
