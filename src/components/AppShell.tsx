/**
 * App Shell Component
 * 
 * Main layout wrapper for the entire portfolio SPA.
 * Provides header, navigation, and footer structure.
 * All sections anchor within this layout.
 */

import { useEffect, useLayoutEffect, useState } from 'react'
import { initializeTheme, toggleDarkMode, isDarkMode } from '@/lib/theme'

export function AppShell({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false)

  // useLayoutEffect: synchronous — runs before the browser paints.
  // This applies the correct theme class to <html> immediately so there
  // is never a flash of wrong theme on first render.
  // (No SSR here — pure client-side Vite SPA — so useLayoutEffect is safe.)
  useLayoutEffect(() => {
    initializeTheme()
    setIsDark(isDarkMode())
  }, [])

  // useEffect: async — runs after the browser has painted the first frame.
  // By this point the full DOM is rendered and layout is stable, so
  // getBoundingClientRect() returns correct values and querySelectorAll
  // finds every .reveal element.
  useEffect(() => {
    // requestAnimationFrame defers to the next paint cycle, guaranteeing
    // that every section has been laid out before we measure positions.
    let observer: IntersectionObserver | null = null

    const raf = requestAnimationFrame(() => {
      const revealElements = Array.from(
        document.querySelectorAll<HTMLElement>('.reveal')
      )
      if (!revealElements.length) return

      // Content within the first 200vh loads immediately (hero + top of
      // next section). The browser already painted them at opacity:0, so
      // adding js-visible here triggers the CSS transition naturally.
      const immediateThreshold = window.innerHeight * 2
      revealElements.forEach((el) => {
        if (el.getBoundingClientRect().top < immediateThreshold) {
          el.classList.add('js-visible')
        }
      })

      // Everything below 200vh animates in as the user scrolls down.
      const belowFold = revealElements.filter(
        (el) => !el.classList.contains('js-visible')
      )
      if (!belowFold.length) return

      observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              ;(entry.target as HTMLElement).classList.add('js-visible')
              obs.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
      )

      belowFold.forEach((el) => observer!.observe(el))
    })

    return () => {
      cancelAnimationFrame(raf)
      observer?.disconnect()
    }
  }, [])

  const handleToggleDarkMode = () => {
    toggleDarkMode()
    setIsDark((prev) => !prev)
  }

  // No mounted guard — this is a pure client-side SPA (Vite, no SSR).
  // The "prevent hydration mismatch" null-return pattern was the original
  // bug: it caused querySelectorAll to run on an empty DOM.

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex items-center justify-between py-4">
          {/* Logo / Name */}
          <a href="#hero" className="flex items-center gap-2">
            <span className="text-xl font-bold">Sundram</span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden gap-8 md:flex">
            <a
              href="#project"
              className="text-sm font-medium transition duration-200 hover:-translate-y-0.5 hover:text-primary"
            >
              Project
            </a>
            <a
              href="#experience"
              className="text-sm font-medium transition duration-200 hover:-translate-y-0.5 hover:text-primary"
            >
              Experience
            </a>
            <a
              href="#skills"
              className="text-sm font-medium transition duration-200 hover:-translate-y-0.5 hover:text-primary"
            >
              Skills
            </a>
            <a
              href="#about"
              className="text-sm font-medium transition duration-200 hover:-translate-y-0.5 hover:text-primary"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm font-medium transition duration-200 hover:-translate-y-0.5 hover:text-primary"
            >
              Contact
            </a>
          </nav>

          {/* Dark Mode Toggle (Dev-only for now, can be made public) */}
          <button
            onClick={handleToggleDarkMode}
            className="rounded-lg border border-border/60 bg-card/75 p-2 transition duration-200 hover:-translate-y-0.5 hover:bg-muted"
            aria-label="Toggle dark mode"
            title="Dev: Theme toggle (to be hidden in production)"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-muted/30 py-8">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Sundram Gupta</p>
        </div>
      </footer>
    </div>
  )
}
