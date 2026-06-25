'use client'

import { Code2, Globe, Mail, Phone, ArrowUpRight } from 'lucide-react'
import { profile } from '@/lib/data'
import { Magnetic } from '@/components/magnetic'
import { useReveal } from '@/components/use-reveal'

const channels = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}`, color: 'bg-neo-accent' },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}`, color: 'bg-neo-secondary' },
  { icon: Globe, label: 'LinkedIn', value: 'siddharth-tamang', href: profile.linkedin, color: 'bg-neo-muted' },
  { icon: Code2, label: 'GitHub', value: 'siddharth-tamang', href: profile.github, color: 'bg-neo-white' },
]

export function Contact() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <footer id="contact" className="bg-black bg-grid-light py-20 text-white sm:py-28">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal mb-12 text-center">
          <p className="mb-4 inline-block rotate-2 border-4 border-white bg-neo-accent px-4 py-1 font-bold uppercase tracking-widest text-black">
            Let&apos;s Build
          </p>
          <h2 className="font-heading text-5xl font-black uppercase leading-[0.9] tracking-tighter sm:text-8xl">
            <span className="block">Got A</span>
            <span className="block text-stroke-white">Project?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg font-medium leading-relaxed text-white/80">
            Open to remote full-time roles and freelance work globally. Drop a
            message and let&apos;s ship something great.
          </p>
        </div>

        <div className="reveal mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className={`group flex flex-col gap-3 border-4 border-white ${c.color} p-5 text-black neo-shadow-white transition-transform duration-200 hover:-translate-y-1`}
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center border-4 border-black bg-neo-bg">
                  <c.icon className="h-5 w-5 text-black" strokeWidth={3} />
                </span>
                <ArrowUpRight className="h-6 w-6 transition-transform duration-200 group-hover:rotate-45" strokeWidth={3} />
              </div>
              <span className="text-xs font-black uppercase tracking-widest">{c.label}</span>
              <span className="truncate text-sm font-bold">{c.value}</span>
            </a>
          ))}
        </div>

        <div className="reveal flex justify-center">
          <Magnetic strength={0.5}>
            <a
                       href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
  target="_blank"
  rel="noopener noreferrer"
              className="inline-flex h-16 items-center gap-3 border-4 border-white bg-neo-accent px-8 font-heading text-xl font-black uppercase tracking-wide text-black neo-shadow-white transition-all duration-100 hover:-translate-y-1 active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
            >
              <Mail className="h-6 w-6" strokeWidth={3} />
              Say Hello
            </a>
          </Magnetic>
        </div>

        <div className="mt-16 flex flex-col items-center gap-2 border-t-4 border-white/30 pt-8 text-center text-sm font-bold uppercase tracking-widest text-white/60 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Siddharth Tamang</span>
          <span>Nepali · English · Built with React.js</span>
        </div>
      </div>
    </footer>
  )
}
