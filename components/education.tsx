'use client'

import { GraduationCap } from 'lucide-react'
import { education } from '@/lib/data'
import { useReveal } from '@/components/use-reveal'

export function Education() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="border-b-4 border-black bg-neo-bg py-20 sm:py-28">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal mb-12 flex items-center gap-4">
          <span className="border-4 border-black bg-neo-secondary px-3 py-1 font-heading text-lg font-black text-black neo-shadow-sm">
            05
          </span>
          <h2 className="font-heading text-4xl font-black uppercase tracking-tighter text-black sm:text-6xl">
            Education
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((edu, i) => (
            <div
              key={edu.title}
              style={{ transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)` }}
              className="reveal flex flex-col gap-4 border-4 border-black bg-neo-white p-6 neo-shadow transition-transform duration-200 hover:rotate-0 hover:-translate-y-1 sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center border-4 border-black bg-neo-muted">
                  <GraduationCap className="h-6 w-6 text-black" strokeWidth={3} />
                </span>
                <span className="border-2 border-black bg-neo-secondary px-3 py-1 text-sm font-black uppercase tracking-wide text-black">
                  {edu.date}
                </span>
              </div>
              <h3 className="font-heading text-2xl font-black uppercase leading-tight tracking-tight text-black">
                {edu.title}
              </h3>
              <p className="font-bold uppercase tracking-wide text-black/70">
                {edu.place}
              </p>
              <p className="text-base font-medium leading-relaxed text-black">
                {edu.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
