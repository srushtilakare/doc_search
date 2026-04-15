'use client'

import { useState } from 'react'
import { DocumentList } from './document-list'
import { DocumentUploader } from './document-uploader'
import { Header } from '@/components/layout/header'

export interface Document {
  id: string
  name: string
  size: number
  type: string
  uploadedAt: Date
  status: 'processing' | 'ready' | 'error'
}

export function DocumentsPage() {
  const [documents, setDocuments] = useState<Document[]>([
    {
      id: '1',
      name: 'Q4_Report.pdf',
      size: 2.5,
      type: 'PDF',
      uploadedAt: new Date('2024-04-14'),
      status: 'ready',
    },
    {
      id: '2',
      name: 'Market_Analysis.docx',
      size: 1.8,
      type: 'DOCX',
      uploadedAt: new Date('2024-04-13'),
      status: 'ready',
    },
    {
      id: '3',
      name: 'Budget_2024.xlsx',
      size: 0.5,
      type: 'XLSX',
      uploadedAt: new Date('2024-04-12'),
      status: 'processing',
    },
  ])

  const handleUpload = (files: File[]) => {
    const newDocuments: Document[] = files.map((file, idx) => ({
      id: Date.now().toString() + idx,
      name: file.name,
      size: file.size / 1024 / 1024,
      type: file.name.split('.').pop()?.toUpperCase() || 'UNKNOWN',
      uploadedAt: new Date(),
      status: 'processing',
    }))
    setDocuments((prev) => [...newDocuments, ...prev])
  }

  const handleDelete = (id: string) => {
    setDocuments((prev) => prev.filter((doc) => doc.id !== id))
  }

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <Header title="Documents" description="Manage your uploaded files" />
      <div className="flex-1 overflow-y-auto p-6">
        <DocumentUploader onUpload={handleUpload} />
        <DocumentList documents={documents} onDelete={handleDelete} />
      </div>
    </div>
  )
}
