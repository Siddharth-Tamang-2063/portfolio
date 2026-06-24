'use client'

import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/data'
import { useReveal } from '@/components/use-reveal'

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el || window.matchMedia('(pointer: coarse)').matches) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(900px) rotateX(${py * -8}deg) rotateY(${px * 8}deg) translateY(-6px)`
  }

  function reset() {
    const el = ref.current
    if (el) el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)'
  }

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="reveal group block"
    >
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        style={{ transition: 'transform 0.2s ease-out', willChange: 'transform' }}
        className="flex h-full flex-col border-4 border-black bg-neo-white neo-shadow-lg"
      >
        <div
          className={`relative flex items-center justify-between border-b-4 border-black ${project.color} p-6`}
        >
          <span className="font-mono text-5xl font-black text-black/80">
            0{index + 1}
          </span>
          <span className="flex h-14 w-14 items-center justify-center border-4 border-black bg-neo-white transition-transform duration-200 group-hover:rotate-45">
            <ArrowUpRight className="h-7 w-7 text-black" strokeWidth={3} />
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <span className="mb-2 w-fit border-2 border-black bg-neo-bg px-2 py-0.5 text-xs font-black uppercase tracking-widest text-black">
            {project.year}
          </span>
          <h3 className="font-heading text-3xl font-black uppercase leading-none tracking-tight text-black">
            {project.title}
          </h3>
          <p className="mt-1 text-sm font-bold uppercase tracking-wide text-black/70">
            {project.subtitle}
          </p>
          <p className="mt-4 flex-1 text-base font-medium leading-relaxed text-black">
            {project.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="border-2 border-black bg-neo-bg px-2 py-1 text-xs font-bold text-black"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  )
}

export function Projects() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="projects" className="border-b-4 border-black bg-neo-accent bg-grid py-20 sm:py-28">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal mb-12 flex flex-wrap items-center gap-4">
          <span className="border-4 border-black bg-neo-white px-3 py-1 font-heading text-lg font-black text-black neo-shadow-sm">
            04
          </span>
          <h2 className="font-heading text-4xl font-black uppercase tracking-tighter text-black sm:text-6xl">
            Featured Work
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
