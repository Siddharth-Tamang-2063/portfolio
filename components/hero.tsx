'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowDown, Code2, Globe, MapPin, Sparkles, Star } from 'lucide-react'
import { profile } from '@/lib/data'
import { Magnetic } from '@/components/magnetic'

export function Hero() {
  const sceneRef = useRef<HTMLDivElement>(null)
  const [photoError, setPhotoError] = useState(false)

  useEffect(() => {
    const scene = sceneRef.current
    if (!scene) return
    if (window.matchMedia('(pointer: coarse)').matches) return

    function onMove(e: MouseEvent) {
      const { innerWidth, innerHeight } = window
      const x = (e.clientX / innerWidth - 0.5) * 2
      const y = (e.clientY / innerHeight - 0.5) * 2
      scene!.querySelectorAll<HTMLElement>('[data-depth]').forEach((el) => {
        const depth = Number(el.dataset.depth ?? 0)
        el.style.transform = `translate(${x * depth * 30}px, ${y * depth * 30}px) rotate(var(--rot, 0deg))`
      })
    }

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section
      id="top"
      ref={sceneRef}
      className="relative overflow-hidden border-b-4 border-black bg-neo-bg pb-20 pt-32 sm:pt-40"
    >
      {/* floating decorative shapes */}
      <div
        data-depth="1.2"
        style={{ ['--rot' as string]: '12deg' }}
        className="pointer-events-none absolute -left-6 top-32 hidden h-24 w-24 animate-float border-4 border-black bg-neo-accent neo-shadow md:block"
      />
      <div
        data-depth="0.8"
        style={{ ['--rot' as string]: '-8deg' }}
        className="pointer-events-none absolute right-10 top-28 hidden h-20 w-20 rounded-full border-4 border-black bg-neo-muted neo-shadow md:block"
      />
      <Star
        data-depth="1.6"
        className="-z-10 pointer-events-none absolute bottom-16 left-1/4 hidden h-16 w-16 animate-spin-slow fill-neo-secondary text-black lg:block"
        strokeWidth={2}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <div className="mb-6 inline-flex -rotate-2 items-center gap-2 border-4 border-black bg-neo-secondary px-4 py-2 font-bold uppercase tracking-widest text-black neo-shadow-sm">
            <Sparkles className="h-4 w-4 fill-black" strokeWidth={3} />
            Available for remote work
          </div>

          <h1 className="font-heading text-5xl font-black uppercase leading-[0.9] tracking-tighter text-black sm:text-7xl lg:text-8xl">
            <span className="block">Siddharth</span>
            <span className="block text-stroke">Tamang</span>
          </h1>

          <div className="mt-6 inline-block rotate-1 border-4 border-black bg-neo-accent px-4 py-2 font-heading text-xl font-black uppercase tracking-tight text-black neo-shadow sm:text-2xl">
            {profile.role}
          </div>

          <p className="mt-8 max-w-xl border-l-8 border-black pl-4 text-lg font-medium leading-relaxed text-black sm:text-xl">
            {profile.tagline}. I build production MERN apps end-to-end — secure
            APIs, clean schemas, and animated UIs that score 90+ on Lighthouse.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Magnetic>
              <a
                href="#projects"
                className="inline-flex h-14 items-center gap-2 border-4 border-black bg-neo-accent px-6 font-bold uppercase tracking-wide text-black neo-shadow transition-all duration-100 hover:-translate-y-0.5 active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
              >
                See My Work
                <ArrowDown className="h-5 w-5" strokeWidth={3} />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="inline-flex h-14 items-center border-4 border-black bg-neo-white px-6 font-bold uppercase tracking-wide text-black neo-shadow-sm transition-all duration-100 hover:-translate-y-0.5 active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
              >
                Get In Touch
              </a>
            </Magnetic>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm font-bold uppercase tracking-wide text-black">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" strokeWidth={3} /> {profile.location}
            </span>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-b-4 border-transparent transition-colors hover:border-black"
            >
              <Code2 className="h-4 w-4" strokeWidth={3} /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-b-4 border-transparent transition-colors hover:border-black"
            >
              <Globe className="h-4 w-4" strokeWidth={3} /> LinkedIn
            </a>
          </div>
        </div>

        {/* Right visual chaos zone */}
        <div className="relative hidden lg:block">
          {/* Polaroid photo card */}
          <div
            data-depth="0.3"
            style={{ ['--rot' as string]: '-4deg' }}
            className="absolute -left-12 -top-10 z-30 -rotate-[4deg] border-4 border-black bg-white p-2 pb-8 neo-shadow-xl"
          >
            <div className="h-36 w-28 overflow-hidden border-2 border-black bg-neo-muted">
              {photoError ? (
                <div className="flex h-full w-full items-center justify-center font-heading text-4xl font-black text-black">
                  ST
                </div>
              ) : (
                <img
                src="/images/image.jpeg"
                  alt="Siddharth Tamang"
                  className="h-full w-full object-cover object-top"
                  onError={() => setPhotoError(true)}
                />
              )}
            </div>
            <p className="mt-2 text-center font-mono text-[10px] font-bold uppercase tracking-widest text-black">
              Siddharth ✦
            </p>
          </div>

          <div
            data-depth="0.5"
            className="relative z-10 rotate-3 border-4 border-black bg-black p-8 text-white neo-shadow-xl"
          >
            <div className="font-mono text-sm leading-relaxed">
              <p className="text-neo-secondary">{'const developer = {'}</p>
              <p className="pl-4">name: <span className="text-neo-accent">{"'Siddharth'"}</span>,</p>
              <p className="pl-4">stack: <span className="text-neo-muted">{"['MERN', 'TS']"}</span>,</p>
              <p className="pl-4">ships: <span className="text-neo-secondary">true</span>,</p>
              <p className="pl-4">lighthouse: <span className="text-neo-accent">90</span>,</p>
              <p>{'}'}</p>
            </div>
          </div>
          <div
            data-depth="1"
            style={{ ['--rot' as string]: '-6deg' }}
            className="absolute -bottom-8 -left-6 z-20 -rotate-6 border-4 border-black bg-neo-secondary px-5 py-3 font-heading text-xl font-black uppercase text-black neo-shadow"
          >
            2+ Years Shipping
          </div>
          <div
            data-depth="1.4"
            style={{ ['--rot' as string]: '12deg' }}
            className="absolute -right-4 -top-6 z-20 flex h-24 w-24 rotate-12 items-center justify-center rounded-full border-4 border-black bg-neo-accent text-center font-heading text-sm font-black uppercase leading-tight text-black neo-shadow"
          >
            Full Stack
          </div>
        </div>
      </div>
    </section>
  )
}