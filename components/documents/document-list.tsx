'use client'

import { Document } from './documents-page'
import { Trash2, FileText, CheckCircle2, Clock, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface DocumentListProps {
  documents: Document[]
  onDelete: (id: string) => void
}

export function DocumentList({ documents, onDelete }: DocumentListProps) {
  const getFileIcon = (type: string) => {
    switch (type.toUpperCase()) {
      case 'PDF':
        return '📄'
      case 'DOCX':
      case 'DOC':
        return '📝'
      case 'XLSX':
      case 'XLS':
        return '📊'
      case 'PPTX':
      case 'PPT':
        return '📽️'
      case 'TXT':
        return '📃'
      case 'MD':
        return '📋'
      default:
        return '📦'
    }
  }

  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'ready':
        return {
          icon: CheckCircle2,
          label: 'Ready',
          color: 'text-green-500',
          bg: 'bg-green-500/10',
        }
      case 'processing':
        return {
          icon: Clock,
          label: 'Processing',
          color: 'text-blue-500',
          bg: 'bg-blue-500/10',
        }
      case 'error':
        return {
          icon: AlertCircle,
          label: 'Error',
          color: 'text-red-500',
          bg: 'bg-red-500/10',
        }
      default:
        return {
          icon: FileText,
          label: 'Unknown',
          color: 'text-gray-500',
          bg: 'bg-gray-500/10',
        }
    }
  }

  if (documents.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <FileText className="w-12 h-12 text-muted-foreground/30 mb-4" />
        <p className="text-muted-foreground">No documents yet</p>
        <p className="text-sm text-muted-foreground/70">Upload files to get started</p>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {documents.map((doc) => {
        const statusInfo = getStatusInfo(doc.status)
        const StatusIcon = statusInfo.icon
        return (
          <div
            key={doc.id}
            className="flex items-center justify-between p-4 rounded-lg border border-border bg-card/50 hover:bg-card/80 transition-colors"
          >
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <span className="text-2xl flex-shrink-0">{getFileIcon(doc.type)}</span>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-foreground truncate">{doc.name}</h3>
                <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                  <span>{(doc.size).toFixed(2)} MB</span>
                  <span>•</span>
                  <span>{doc.uploadedAt.toLocaleDateString()}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 flex-shrink-0">
              <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full ${statusInfo.bg}`}>
                <StatusIcon className={`w-4 h-4 ${statusInfo.color}`} />
                <span className={`text-xs font-medium ${statusInfo.color}`}>{statusInfo.label}</span>
              </div>
              <Button
                onClick={() => onDelete(doc.id)}
                variant="ghost"
                size="sm"
                className="text-destructive hover:bg-destructive/10 hover:text-destructive"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
