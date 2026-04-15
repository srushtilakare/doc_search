'use client'

import { useEffect, useRef } from 'react'
import { Message } from './chat-window'
import { MessageBubble } from './message-bubble'
import { ThinkingIndicator } from './thinking-indicator'

interface MessageListProps {
  messages: Message[]
  isLoading?: boolean
}

export function MessageList({ messages, isLoading }: MessageListProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  return (
    <div
      ref={scrollRef}
      className="flex-1 overflow-y-auto px-4 py-6 space-y-4"
    >
      {messages.map((message) => (
        <div key={message.id}>
          {message.thinking && <ThinkingIndicator text={message.thinking} />}
          {message.content && <MessageBubble message={message} />}
        </div>
      ))}
      {isLoading && messages.length > 0 && messages[messages.length - 1].role === 'user' && (
        <ThinkingIndicator text="Processing..." />
      )}
    </div>
  )
}
