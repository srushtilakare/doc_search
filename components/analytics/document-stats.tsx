'use client'

import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'PDF', value: 35 },
  { name: 'DOCX', value: 28 },
  { name: 'XLSX', value: 20 },
  { name: 'Other', value: 17 },
]

const COLORS = [
  'hsl(var(--chart-1))',
  'hsl(var(--chart-2))',
  'hsl(var(--chart-3))',
  'hsl(var(--chart-4))',
]

export function DocumentStats() {
  return (
    <div className="p-4 rounded-lg border border-border bg-card/50">
      <h2 className="text-lg font-semibold mb-4 text-foreground">Document Types</h2>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }) => `${name}: ${value}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
