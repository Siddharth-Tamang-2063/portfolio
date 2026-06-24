import { Star } from 'lucide-react'

export function Marquee({
  items,
  reverse = false,
  className = 'bg-black text-white',
}: {
  items: string[]
  reverse?: boolean
  className?: string
}) {
  const doubled = [...items, ...items]
  return (
    <div className={`overflow-hidden border-y-4 border-black py-4 ${className}`}>
      <div
        className={`flex w-max items-center gap-8 ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
      >
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="font-heading text-2xl font-black uppercase tracking-tight sm:text-4xl">
              {item}
            </span>
            <Star className="h-6 w-6 shrink-0 fill-current sm:h-8 sm:w-8" strokeWidth={2} />
          </div>
        ))}
      </div>
    </div>
  )
}
