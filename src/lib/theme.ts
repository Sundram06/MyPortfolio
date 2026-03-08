/**
 * Theme utilities for managing light/dark mode and palette switching
 */

export type ThemeName = 'default' | 'ocean' | 'forest'

export const AVAILABLE_THEMES: Record<ThemeName, string> = {
  default: 'Default (Light/Dark)',
  ocean: 'Ocean Blue (future)',
  forest: 'Forest Green (future)',
}

export const THEME_STORAGE_KEY = 'portfolio-theme-preference'
export const DARK_MODE_STORAGE_KEY = 'portfolio-dark-mode'

/**
 * Get the current theme from root element
 */
export function getCurrentTheme(): ThemeName {
  const theme = document.documentElement.getAttribute('data-theme') as ThemeName
  return theme || 'default'
}

/**
 * Set the theme on root element
 */
export function setTheme(theme: ThemeName): void {
  if (theme === 'default') {
    document.documentElement.removeAttribute('data-theme')
  } else {
    document.documentElement.setAttribute('data-theme', theme)
  }
  localStorage.setItem(THEME_STORAGE_KEY, theme)
}

/**
 * Check if dark mode is enabled
 */
export function isDarkMode(): boolean {
  const stored = localStorage.getItem(DARK_MODE_STORAGE_KEY)
  if (stored !== null) {
    return stored === 'true'
  }
  // Default to system preference
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

/**
 * Set dark mode status
 */
export function setDarkMode(enabled: boolean): void {
  if (enabled) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  localStorage.setItem(DARK_MODE_STORAGE_KEY, String(enabled))
}

/**
 * Toggle dark mode
 */
export function toggleDarkMode(): void {
  setDarkMode(!isDarkMode())
}

/**
 * Initialize theme from localStorage and system preferences
 * Call this in app root on mount
 */
export function initializeTheme(): void {
  const dark = isDarkMode()
  const theme = (localStorage.getItem(THEME_STORAGE_KEY) as ThemeName) || 'default'
  
  setTheme(theme)
  setDarkMode(dark)
}
