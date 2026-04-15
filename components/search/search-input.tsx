'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface SearchInputProps {
  onSearch: (query: string) => void
  initialValue?: string
}

export function SearchInput({ onSearch, initialValue = '' }: SearchInputProps) {
  const [query, setQuery] = useState(initialValue)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-2">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search documents, tables, figures, and more..."
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-secondary/30 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
          />
        </div>
        <Button
          type="submit"
          className="bg-accent hover:bg-accent/90 text-accent-foreground px-6"
        >
          Search
        </Button>
      </div>
    </form>
  )
}
