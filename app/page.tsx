'use client'

import { Sidebar } from '@/components/layout/sidebar'
import { ChatWindow } from '@/components/chat/chat-window'
import { DocumentsPage } from '@/components/documents/documents-page'
import { SearchPage } from '@/components/search/search-page'
import { InsightsPage } from '@/components/insights/insights-page'
import { AnalyticsPage } from '@/components/analytics/analytics-page'
import { useState } from 'react'

export default function Home() {
  const [activeTab, setActiveTab] = useState<'chat' | 'documents' | 'search' | 'insights' | 'analytics'>('chat')

  return (
    <div className="flex h-screen bg-background text-foreground">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 flex flex-col overflow-hidden">
        {activeTab === 'chat' && <ChatWindow />}
        {activeTab === 'documents' && <DocumentsPage />}
        {activeTab === 'search' && <SearchPage />}
        {activeTab === 'insights' && <InsightsPage />}
        {activeTab === 'analytics' && <AnalyticsPage />}
      </main>
    </div>
  )
}
