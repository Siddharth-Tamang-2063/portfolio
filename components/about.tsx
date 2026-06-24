'use client'

import { Code2, Server, Database, Rocket } from 'lucide-react'
import { profile } from '@/lib/data'
import { useReveal } from '@/components/use-reveal'

const pillars = [
  { icon: Code2, label: 'Animated Frontends', color: 'bg-neo-accent' },
  { icon: Server, label: 'Secure REST APIs', color: 'bg-neo-secondary' },
  { icon: Database, label: 'Schema Design', color: 'bg-neo-muted' },
  { icon: Rocket, label: 'Owns Full SDLC', color: 'bg-neo-white' },
]

export function About() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="about" className="border-b-4 border-black bg-neo-bg py-20 sm:py-28">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal mb-12 flex items-center gap-4">
          <span className="border-4 border-black bg-neo-accent px-3 py-1 font-heading text-lg font-black text-black neo-shadow-sm">
            01
          </span>
          <h2 className="font-heading text-4xl font-black uppercase tracking-tighter text-black sm:text-6xl">
            About Me
          </h2>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="reveal -rotate-1 border-4 border-black bg-neo-white p-6 neo-shadow-lg sm:p-10">
            <p className="text-xl font-medium leading-relaxed text-black sm:text-2xl">
              {profile.summary}
            </p>
            <p className="mt-6 text-lg font-bold uppercase tracking-wide text-black">
              Expanding into CI/CD pipelines, Docker, and AWS. Open to remote
              full-time and freelance opportunities globally.
            </p>
          </div>

          <div className="reveal grid grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <div
                key={p.label}
                style={{ transform: `rotate(${i % 2 === 0 ? -2 : 2}deg)` }}
                className={`flex flex-col gap-3 border-4 border-black ${p.color} p-5 neo-shadow transition-transform duration-200 hover:-translate-y-1 hover:rotate-0`}
              >
                <span className="flex h-12 w-12 items-center justify-center border-4 border-black bg-neo-bg">
                  <p.icon className="h-6 w-6 text-black" strokeWidth={3} />
                </span>
                <span className="font-heading text-lg font-black uppercase leading-tight text-black">
                  {p.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
