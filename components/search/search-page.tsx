'use client'

import { useState } from 'react'
import { Header } from '@/components/layout/header'
import { SearchInput } from './search-input'
import { SearchResults } from './search-results'
import { SearchIcon } from 'lucide-react'

export interface SearchResult {
  id: string
  title: string
  content: string
  document: string
  score: number
  section: string
}

export function SearchPage() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [hasSearched, setHasSearched] = useState(false)

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery)
    setHasSearched(true)

    // Simulate search results
    if (searchQuery.trim()) {
      const mockResults: SearchResult[] = [
        {
          id: '1',
          title: 'Q4 Revenue Growth',
          content:
            'The Q4 revenue exceeded expectations by 15%. Key factors included increased market demand and successful product launches...',
          document: 'Q4_Report.pdf',
          score: 0.95,
          section: 'Financial Overview',
        },
        {
          id: '2',
          title: 'Market Analysis Summary',
          content:
            'Our competitive analysis shows strong positioning in the enterprise segment. Market trends indicate growing demand for AI-powered solutions...',
          document: 'Market_Analysis.docx',
          score: 0.87,
          section: 'Market Overview',
        },
        {
          id: '3',
          title: 'Strategic Initiatives',
          content:
            'For next year, we plan to focus on product innovation, market expansion, and strategic partnerships...',
          document: 'Q4_Report.pdf',
          score: 0.78,
          section: 'Future Strategy',
        },
      ]
      setResults(mockResults)
    } else {
      setResults([])
    }
  }

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <Header title="Search" description="Search across all your documents" />
      <div className="flex-1 flex flex-col overflow-y-auto p-6">
        <SearchInput onSearch={handleSearch} initialValue={query} />

        {!hasSearched ? (
          <div className="flex-1 flex flex-col items-center justify-center">
            <SearchIcon className="w-16 h-16 text-muted-foreground/30 mb-4" />
            <p className="text-muted-foreground text-lg">Start searching documents</p>
            <p className="text-sm text-muted-foreground/70 mt-2">Enter keywords to find relevant sections</p>
          </div>
        ) : results.length > 0 ? (
          <SearchResults results={results} />
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center">
            <SearchIcon className="w-16 h-16 text-muted-foreground/30 mb-4" />
            <p className="text-muted-foreground text-lg">No results found</p>
            <p className="text-sm text-muted-foreground/70 mt-2">Try different search terms</p>
          </div>
        )}
      </div>
    </div>
  )
}
