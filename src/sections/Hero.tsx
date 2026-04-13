/**
 * Hero Section
 *
 * Primary call-to-action above the fold.
 * - Scramble effect on name: decodes from random chars using rAF.
 *   Starts with correct text so no layout shift; scrambles then resolves.
 * - Role and headline, professional bio, primary CTAs.
 */

import { useEffect, useState } from 'react'

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

/**
 * Scrambles `target` text using rAF — resolves one character every ~4 frames
 * (≈ 67ms at 60 fps). Starts with the correct text to avoid layout shift;
 * scrambles briefly then settles. Respects prefers-reduced-motion.
 */
function useScramble(target: string, startDelay = 160) {
  const [text, setText] = useState(target)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    let rafId: number
    // 4 rAF frames per character resolved; space is resolved instantly.
    const nonSpaceChars = target.replace(/ /g, '').length
    const totalFrames = nonSpaceChars * 4

    const timer = setTimeout(() => {
      const tick = () => {
        const resolved = Math.floor(frame / 4)
        setText(
          target
            .split('')
            .map((char, i) => {
              if (char === ' ') return ' '
              if (i < resolved) return char
              return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
            })
            .join('')
        )
        frame++
        if (frame <= totalFrames) {
          rafId = requestAnimationFrame(tick)
        } else {
          setText(target) // guarantee final text is exact
        }
      }
      rafId = requestAnimationFrame(tick)
    }, startDelay)

    return () => {
      clearTimeout(timer)
      cancelAnimationFrame(rafId)
      setText(target)
    }
  }, [target, startDelay])

  return text
}

export function Hero() {
  const heroName = useScramble('Sundram Gupta', 160)

  return (
    <section
      id="hero"
      className="hero-pattern section flex min-h-screen items-center justify-center overflow-hidden"
      data-reveal
    >
      <div className="container text-center">
        <h1 className="mb-4 font-mono text-5xl font-bold tracking-tight md:text-6xl reveal reveal-delay-1">
          {heroName}
        </h1>
        <p className="mb-6 text-2xl font-semibold text-primary md:text-3xl reveal reveal-delay-2">
          Full-stack engineer building scalable web applications with React,
          Node.js, and modern web architecture.
        </p>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground reveal reveal-delay-3">
          I am a full-stack software engineer focused on building scalable and
          reliable web applications using modern technologies like React and
          Node.js. I enjoy designing clean architectures, building intuitive
          user interfaces, and developing backend systems that power real-world
          products.
        </p>

        {/* CTAs */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center reveal reveal-delay-4">
          <a href="#project" className="btn-solid shadow-lg shadow-primary/10">
            View Projects
          </a>
          <a
            href="/Sundram_Gupta_Resume.pdf"
            download="Sundram_Gupta_Resume.pdf"
            className="btn-ghost"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}
