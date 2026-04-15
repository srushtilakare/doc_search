'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { date: 'Mon', documents: 12, chats: 18, searches: 8 },
  { date: 'Tue', documents: 15, chats: 22, searches: 11 },
  { date: 'Wed', documents: 10, chats: 16, searches: 9 },
  { date: 'Thu', documents: 18, chats: 25, searches: 14 },
  { date: 'Fri', documents: 22, chats: 28, searches: 18 },
  { date: 'Sat', documents: 8, chats: 12, searches: 6 },
  { date: 'Sun', documents: 14, chats: 20, searches: 12 },
]

export function UsageChart() {
  return (
    <div className="p-4 rounded-lg border border-border bg-card/50">
      <h2 className="text-lg font-semibold mb-4 text-foreground">Usage This Week</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
          <YAxis stroke="hsl(var(--muted-foreground))" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
            }}
            labelStyle={{ color: 'hsl(var(--foreground))' }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="documents"
            stroke="hsl(var(--chart-1))"
            dot={false}
            strokeWidth={2}
            name="Documents"
          />
          <Line
            type="monotone"
            dataKey="chats"
            stroke="hsl(var(--chart-2))"
            dot={false}
            strokeWidth={2}
            name="Chat Sessions"
          />
          <Line
            type="monotone"
            dataKey="searches"
            stroke="hsl(var(--chart-3))"
            dot={false}
            strokeWidth={2}
            name="Searches"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
