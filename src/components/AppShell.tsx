/**
 * App Shell Component
 * 
 * Main layout wrapper for the entire portfolio SPA.
 * Provides header, navigation, and footer structure.
 * All sections anchor within this layout.
 */

import { useEffect, useState } from 'react'
import { initializeTheme, toggleDarkMode, isDarkMode } from '@/lib/theme'

export function AppShell({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Initialize theme from localStorage/system preference on mount
    initializeTheme()
    setIsDark(isDarkMode())
    setMounted(true)
  }, [])

  const handleToggleDarkMode = () => {
    toggleDarkMode()
    setIsDark(!isDark)
  }

  if (!mounted) {
    return null // Prevent hydration mismatch
  }

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
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Project
            </a>
            <a
              href="#experience"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Experience
            </a>
            <a
              href="#skills"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Skills
            </a>
            <a
              href="#about"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Contact
            </a>
          </nav>

          {/* Dark Mode Toggle (Dev-only for now, can be made public) */}
          <button
            onClick={handleToggleDarkMode}
            className="rounded-lg p-2 hover:bg-muted"
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
