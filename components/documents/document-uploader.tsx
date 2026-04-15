'use client'

import { useRef, useState } from 'react'
import { Upload, X } from 'lucide-react'

interface DocumentUploaderProps {
  onUpload: (files: File[]) => void
}

export function DocumentUploader({ onUpload }: DocumentUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const files = Array.from(e.dataTransfer.files)
    if (files.length > 0) {
      onUpload(files)
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files
    if (files) {
      onUpload(Array.from(files))
    }
    e.currentTarget.value = ''
  }

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => fileInputRef.current?.click()}
      className={`mb-6 p-8 rounded-lg border-2 border-dashed cursor-pointer transition-colors ${
        isDragging
          ? 'border-accent bg-accent/10'
          : 'border-border bg-card/50 hover:bg-card/80 hover:border-accent/50'
      }`}
    >
      <input
        ref={fileInputRef}
        type="file"
        onChange={handleFileSelect}
        multiple
        className="hidden"
        accept=".pdf,.doc,.docx,.txt,.md,.xlsx,.xls,.pptx,.ppt"
      />

      <div className="flex flex-col items-center justify-center gap-3">
        <div className="p-3 rounded-lg bg-accent/10">
          <Upload className="w-6 h-6 text-accent" />
        </div>
        <div>
          <p className="font-semibold text-foreground">Drag and drop files here</p>
          <p className="text-sm text-muted-foreground">or click to select files</p>
        </div>
        <p className="text-xs text-muted-foreground">
          Supported formats: PDF, DOC, DOCX, TXT, MD, XLSX, XLS, PPTX, PPT
        </p>
      </div>
    </div>
  )
}
