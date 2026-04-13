/**
 * App Shell Component
 * 
 * Main layout wrapper for the entire portfolio SPA.
 * Provides header, navigation, and footer structure.
 * All sections anchor within this layout.
 */

import { useEffect, useLayoutEffect, useState } from 'react'
import { initializeTheme, toggleDarkMode, isDarkMode } from '@/lib/theme'

const NAV_LINKS = [
  { href: '#project',    label: 'Project',    id: 'project'    },
  { href: '#experience', label: 'Experience', id: 'experience' },
  { href: '#skills',     label: 'Skills',     id: 'skills'     },
  { href: '#about',      label: 'About',      id: 'about'      },
  { href: '#contact',    label: 'Contact',    id: 'contact'    },
] as const

export function AppShell({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState<string>('hero')

  // Apply correct theme before first paint — no flash of wrong theme.
  useLayoutEffect(() => {
    initializeTheme()
    setIsDark(isDarkMode())
  }, [])

  // Single scroll listener handles both progress bar and active section.
  // Active section: find the last section whose top edge has scrolled past
  // 40% of the viewport height — that section is definitively "in view".
  // This is more reliable than IntersectionObserver for this use-case because
  // the observer can fire for partially-visible sections above the fold and
  // toggle the active state back unexpectedly.
  useEffect(() => {
    const onScroll = () => {
      // Progress bar
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)

      // Active section — trigger line sits 40% down the viewport
      const triggerY = window.scrollY + window.innerHeight * 0.4
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>('section[id]')
      )
      let active = sections[0]?.id ?? 'hero'
      for (const section of sections) {
        if (section.offsetTop <= triggerY) {
          active = section.id
        }
      }
      setActiveSection(active)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll() // initialise on mount so the hero is highlighted immediately

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll-reveal — runs after paint so the DOM is fully laid out.
  useEffect(() => {
    let observer: IntersectionObserver | null = null

    const raf = requestAnimationFrame(() => {
      const revealElements = Array.from(
        document.querySelectorAll<HTMLElement>('.reveal')
      )
      if (!revealElements.length) return

      const immediateThreshold = window.innerHeight * 2
      revealElements.forEach((el) => {
        if (el.getBoundingClientRect().top < immediateThreshold) {
          el.classList.add('js-visible')
        }
      })

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

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Scroll progress — 2px line at the very top of the viewport */}
      <div
        className="fixed left-0 top-0 z-[60] h-[2px] bg-primary"
        style={{ width: `${scrollProgress}%`, transition: 'width 80ms linear' }}
        aria-hidden="true"
      />

      {/* Header Navigation */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex items-center justify-between py-4">
          <a href="#hero" className="flex items-center gap-2">
            <span className="text-xl font-bold">Sundram</span>
          </a>

          <nav className="hidden gap-8 md:flex">
            {NAV_LINKS.map(({ href, label, id }) => (
              <a
                key={id}
                href={href}
                className={`relative text-sm font-medium transition duration-200 hover:-translate-y-0.5 hover:text-primary
                  ${activeSection === id ? 'text-primary' : ''}`}
              >
                {label}
                {/* Active indicator dot */}
                {activeSection === id && (
                  <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary" />
                )}
              </a>
            ))}
          </nav>

          <button
            onClick={handleToggleDarkMode}
            className="rounded-lg border border-border/60 bg-card/75 p-2 transition duration-200 hover:-translate-y-0.5 hover:bg-muted"
            aria-label="Toggle dark mode"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border/40 bg-muted/30 py-8">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Sundram Gupta</p>
        </div>
      </footer>
    </div>
  )
}
