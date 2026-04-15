'use client'

import { useState } from 'react'
import { MessageInput } from './message-input'
import { MessageList } from './message-list'
import { EmptyState } from './empty-state'

export interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
  sources?: string[]
  isStreaming?: boolean
  thinking?: string
}

export function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = async (content: string, files?: File[]) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date(),
      sources: files ? files.map((f) => f.name) : undefined,
    }

    setMessages((prev) => [...prev, userMessage])
    setIsLoading(true)

    // Simulate thinking phase
    const thinkingId = (Date.now() + 0.5).toString()
    const thinkingMessage: Message = {
      id: thinkingId,
      role: 'assistant',
      content: '',
      timestamp: new Date(),
      thinking: 'Analyzing your question...',
      isStreaming: true,
    }
    setMessages((prev) => [...prev, thinkingMessage])

    // Simulate AI response with thinking
    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === thinkingId
            ? {
                ...msg,
                thinking: undefined,
                content:
                  "I've analyzed your documents and here are the key findings. Based on the uploaded files, I can see that the main topics covered include business strategy, market analysis, and quarterly performance metrics.",
                isStreaming: false,
              }
            : msg
        )
      )
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="flex flex-col h-full bg-background">
      {messages.length === 0 ? (
        <EmptyState />
      ) : (
        <MessageList messages={messages} isLoading={isLoading} />
      )}
      <MessageInput onSendMessage={handleSendMessage} disabled={isLoading} />
    </div>
  )
}
