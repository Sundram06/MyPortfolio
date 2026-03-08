import { useEffect } from 'react'
import { initializeTheme } from '@/lib/theme'
import { AppShell } from '@/components/AppShell'
import { Hero } from '@/sections/Hero'
import { Project } from '@/sections/Project'
import { Experience } from '@/sections/Experience'
import { Skills } from '@/sections/Skills'
import { About } from '@/sections/About'
import { Contact } from '@/sections/Contact'

function App() {
  useEffect(() => {
    initializeTheme()
  }, [])

  return (
    <AppShell>
      <Hero />
      <Project />
      <Experience />
      <Skills />
      <About />
      <Contact />
    </AppShell>
  )
}

export default App
