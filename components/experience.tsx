'use client'

import { Briefcase, Check } from 'lucide-react'
import { experience } from '@/lib/data'
import { useReveal } from '@/components/use-reveal'

export function Experience() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="experience" className="border-b-4 border-black bg-neo-bg bg-halftone py-20 sm:py-28">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal mb-12 flex items-center gap-4">
          <span className="border-4 border-black bg-neo-muted px-3 py-1 font-heading text-lg font-black text-black neo-shadow-sm">
            03
          </span>
          <h2 className="font-heading text-4xl font-black uppercase tracking-tighter text-black sm:text-6xl">
            Experience
          </h2>
        </div>

        {experience.map((job) => (
          <div
            key={job.role}
            className="reveal border-4 border-black bg-neo-white neo-shadow-lg"
          >
            <div className="flex flex-col gap-4 border-b-4 border-black bg-black p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center border-4 border-white bg-neo-accent">
                  <Briefcase className="h-7 w-7 text-black" strokeWidth={3} />
                </span>
                <div>
                  <h3 className="font-heading text-2xl font-black uppercase tracking-tight sm:text-3xl">
                    {job.role}
                  </h3>
                  <p className="font-bold uppercase tracking-wide text-neo-secondary">
                    {job.company}
                  </p>
                </div>
              </div>
              <span className="w-fit border-4 border-white bg-neo-secondary px-3 py-1.5 text-sm font-black uppercase tracking-wide text-black">
                {job.period}
              </span>
            </div>

            <ul className="flex flex-col gap-5 p-6 sm:p-8">
              {job.points.map((point, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center border-4 border-black bg-neo-accent">
                    <Check className="h-4 w-4 text-black" strokeWidth={4} />
                  </span>
                  <p className="text-base font-medium leading-relaxed text-black sm:text-lg">
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
