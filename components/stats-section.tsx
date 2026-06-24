'use client'

import { useEffect, useRef, useState } from 'react'
import { stats } from '@/lib/data'

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            const duration = 1200
            const start = performance.now()
            const tick = (now: number) => {
              const p = Math.min((now - start) / duration, 1)
              const eased = 1 - Math.pow(1 - p, 3)
              setDisplay(Math.round(eased * value))
              if (p < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="border-b-4 border-black bg-neo-muted">
      <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`border-black p-6 text-center sm:p-10 ${
              i % 2 === 0 ? 'border-r-4' : ''
            } ${i < 2 ? 'border-b-4 lg:border-b-0' : ''} ${
              i === 2 ? 'lg:border-l-4' : ''
            }`}
          >
            <div className="font-heading text-5xl font-black tracking-tighter text-black sm:text-7xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="mt-2 text-sm font-bold uppercase tracking-widest text-black">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
