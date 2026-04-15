'use client'

interface HeaderProps {
  title: string
  description?: string
}

export function Header({ title, description }: HeaderProps) {
  return (
    <div className="border-b border-border bg-card/50 px-6 py-4">
      <h1 className="text-2xl font-bold text-foreground">{title}</h1>
      {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
    </div>
  )
}
