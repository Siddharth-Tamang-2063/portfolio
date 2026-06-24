'use client'

import { skillGroups } from '@/lib/data'
import { useReveal } from '@/components/use-reveal'

export function Skills() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="skills" className="border-b-4 border-black bg-neo-secondary bg-grid py-20 sm:py-28">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal mb-12 flex items-center gap-4">
          <span className="border-4 border-black bg-neo-white px-3 py-1 font-heading text-lg font-black text-black neo-shadow-sm">
            02
          </span>
          <h2 className="font-heading text-4xl font-black uppercase tracking-tighter text-black sm:text-6xl">
            Tech Stack
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="reveal flex flex-col border-4 border-black bg-neo-white neo-shadow transition-transform duration-200 hover:-translate-y-2 hover:neo-shadow-lg"
            >
              <div className={`border-b-4 border-black ${group.color} px-5 py-3`}>
                <h3 className="font-heading text-2xl font-black uppercase tracking-tight text-black">
                  {group.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 p-5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border-2 border-black bg-neo-bg px-3 py-1.5 text-sm font-bold text-black transition-all duration-100 hover:-translate-y-0.5 hover:bg-neo-accent hover:neo-shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
