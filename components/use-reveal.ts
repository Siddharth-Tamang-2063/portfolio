'use client'

import { useEffect, useRef } from 'react'

/**
 * Adds the `is-visible` class to the element (and any descendants with the
 * `reveal` class) once it scrolls into view, triggering the CSS reveal.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const targets = [el, ...Array.from(el.querySelectorAll<HTMLElement>('.reveal'))].filter(
      (t) => t.classList.contains('reveal'),
    )
    if (targets.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )

    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
  }, [])

  return ref
}
