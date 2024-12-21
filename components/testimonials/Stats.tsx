import { ArrowUp } from 'lucide-react'

const stats = [
  {
    value: '45k+',
    label: 'users - from new startups to public companies'
  },
  {
    value: '23%',
    label: 'increase in traffic on webpages with Looms',
    trend: 'up'
  },
  {
    value: '9.3%',
    label: 'boost in reply rates across sales outreach',
    trend: 'up'
  },
  {
    value: '2x',
    label: 'faster than previous versions'
  }
]

export function Stats() {
  return (
    <ul className="grid grid-cols-2 divide-y-2 divide-x-2 divide-border overflow-hidden">
      {stats.map((stat, index) => (
        <li key={index} className="flex flex-col p-4 sm:p-8">
          <div className="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold mb-2">
            {stat.trend === 'up' && (
              <ArrowUp className="size-5 text-primary" />
            )}
            {stat.value}
          </div>
          <p className="text-sm sm:text-base text-muted-foreground">
            {stat.label}
          </p>
        </li>
      ))}
    </ul>
  )
}