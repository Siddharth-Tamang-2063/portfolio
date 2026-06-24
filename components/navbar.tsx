'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, profile } from '@/lib/data'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <a
          href="#top"
          className="flex items-center gap-2 border-4 border-black bg-neo-accent px-3 py-2 font-heading text-sm font-bold uppercase tracking-tight text-black neo-shadow-sm transition-transform duration-100 hover:-translate-y-0.5 sm:text-base"
        >
          <span className="font-black">ST</span>
          <span className="hidden sm:inline">/ Siddharth</span>
        </a>

        <div className="hidden items-center gap-1 border-4 border-black bg-neo-white px-2 py-2 neo-shadow-sm md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="border-2 border-transparent px-3 py-1.5 font-bold uppercase tracking-wide text-black transition-all duration-100 hover:border-black hover:bg-neo-secondary hover:neo-shadow-sm"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={`mailto:${profile.email}`}
          className="hidden border-4 border-black bg-black px-4 py-2.5 font-bold uppercase tracking-wide text-white neo-shadow-sm transition-all duration-100 hover:-translate-y-0.5 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none lg:inline-block"
        >
          Hire Me
        </a>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-12 w-12 items-center justify-center border-4 border-black bg-neo-secondary text-black neo-shadow-sm transition-transform duration-100 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none md:hidden"
        >
          {open ? <X className="h-6 w-6" strokeWidth={3} /> : <Menu className="h-6 w-6" strokeWidth={3} />}
        </button>
      </nav>

      {open && (
        <div className="mx-4 mt-2 flex flex-col gap-2 border-4 border-black bg-neo-white p-3 neo-shadow md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-4 border-black bg-neo-bg px-4 py-3 font-bold uppercase tracking-wide text-black transition-transform duration-100 hover:bg-neo-secondary active:translate-x-[2px] active:translate-y-[2px]"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${profile.email}`}
            onClick={() => setOpen(false)}
            className="border-4 border-black bg-neo-accent px-4 py-3 text-center font-bold uppercase tracking-wide text-black neo-shadow-sm"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  )
}
