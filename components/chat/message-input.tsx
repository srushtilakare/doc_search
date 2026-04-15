'use client'

import { useState, useRef } from 'react'
import { Send, Paperclip, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface MessageInputProps {
  onSendMessage: (message: string, files?: File[]) => void
  disabled?: boolean
}

export function MessageInput({ onSendMessage, disabled }: MessageInputProps) {
  const [input, setInput] = useState('')
  const [files, setFiles] = useState<File[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() && files.length === 0) return

    onSendMessage(input, files)
    setInput('')
    setFiles([])
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = e.currentTarget.files
    if (newFiles) {
      setFiles((prev) => [...prev, ...Array.from(newFiles)])
    }
    e.currentTarget.value = ''
  }

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t border-border bg-background">
      {/* File previews */}
      {files.length > 0 && (
        <div className="mb-3 flex flex-wrap gap-2">
          {files.map((file, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/30 border border-border text-sm"
            >
              <span className="truncate max-w-[150px]">{file.name}</span>
              <button
                type="button"
                onClick={() => removeFile(idx)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Input area */}
      <div className="flex gap-2">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileSelect}
          multiple
          className="hidden"
          accept=".pdf,.doc,.docx,.txt,.md"
        />

        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => fileInputRef.current?.click()}
          disabled={disabled}
          className="text-muted-foreground hover:text-foreground hover:bg-secondary/50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Paperclip className="w-5 h-5" />
        </Button>

        <textarea
          value={input}
          onChange={(e) => setInput(e.currentTarget.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && e.ctrlKey && !disabled) {
              handleSubmit(e as any)
            }
          }}
          disabled={disabled}
          placeholder="Ask something or type a question... (Ctrl+Enter to send)"
          className="flex-1 min-h-[48px] max-h-[200px] px-4 py-3 rounded-lg bg-secondary/30 border border-border text-foreground placeholder-muted-foreground resize-none focus:outline-none focus:border-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        />

        <Button
          type="submit"
          disabled={(!input.trim() && files.length === 0) || disabled}
          className="bg-accent hover:bg-accent/90 text-accent-foreground disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>

      <div className="mt-2 text-xs text-muted-foreground">
        Supports: PDF, DOC, DOCX, TXT, MD
      </div>
    </form>
  )
}
