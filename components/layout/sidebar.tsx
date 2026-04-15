'use client'

import { Plus, MessageSquare, Search, Lightbulb, BarChart3, Settings, LogOut, Menu, X, Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { FileText } from 'lucide-react'
import { useTheme } from '@/components/providers/theme-provider'

type TabType = 'chat' | 'documents' | 'search' | 'insights' | 'analytics'

interface SidebarProps {
  activeTab: TabType
  setActiveTab: (tab: TabType) => void
}

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(true)
  const { theme, toggleTheme } = useTheme()
  const [sessions, setSessions] = useState([
    { id: '1', title: 'Project Overview', date: 'Today' },
    { id: '2', title: 'Q4 Analysis', date: 'Yesterday' },
  ])

  const navItems = [
    { id: 'chat', label: 'Chat', icon: MessageSquare },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'search', label: 'Search', icon: Search },
    { id: 'insights', label: 'Insights', icon: Lightbulb },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  ]

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-card border border-border hover:bg-secondary transition-colors"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 fixed md:relative z-40 w-64 h-screen bg-card border-r border-border flex flex-col transition-transform duration-300 overflow-y-auto`}
      >
        {/* Header */}
        <div className="p-4 border-b border-border">
          <h1 className="text-lg font-bold flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center text-accent">
              📄
            </div>
            DocSearch
          </h1>
        </div>

        {/* New Chat Button */}
        <div className="p-4 border-b border-border">
          <Button
            onClick={() => setActiveTab('chat')}
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium rounded-lg flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            New Chat
          </Button>
        </div>

        {/* Navigation */}
        <nav className="px-2 py-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as TabType)}
                className={`w-full px-4 py-2 rounded-lg flex items-center gap-3 transition-colors ${
                  activeTab === item.id
                    ? 'bg-secondary text-foreground'
                    : 'text-muted-foreground hover:bg-secondary/50 hover:text-foreground'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            )
          })}
        </nav>

        {/* Sessions */}
        <div className="flex-1 px-2 py-4 border-t border-border overflow-y-auto">
          <div className="text-xs font-semibold text-muted-foreground px-2 mb-3">RECENT CHATS</div>
          <div className="space-y-2">
            {sessions.map((session) => (
              <button
                key={session.id}
                className="w-full text-left px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-secondary/50 hover:text-foreground transition-colors truncate"
              >
                <div className="truncate">{session.title}</div>
                <div className="text-xs text-muted-foreground/70">{session.date}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-border space-y-2">
          <button
            onClick={toggleTheme}
            className="w-full px-4 py-2 rounded-lg flex items-center gap-3 text-muted-foreground hover:bg-secondary/50 hover:text-foreground transition-colors"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
            <span className="text-sm font-medium">{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
          </button>
          <button className="w-full px-4 py-2 rounded-lg flex items-center gap-3 text-muted-foreground hover:bg-secondary/50 hover:text-foreground transition-colors">
            <Settings className="w-4 h-4" />
            <span className="text-sm font-medium">Settings</span>
          </button>
          <button className="w-full px-4 py-2 rounded-lg flex items-center gap-3 text-muted-foreground hover:bg-secondary/50 hover:text-foreground transition-colors">
            <LogOut className="w-4 h-4" />
            <span className="text-sm font-medium">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
