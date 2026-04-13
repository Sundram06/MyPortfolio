/**
 * Contact Section - Redesigned
 * 
 * Compact, visually balanced layout
 * - Direct contact methods with emojis
 * - Social links with brand colors
 * - Clear CTA
 */

import { FaLinkedinIn } from 'react-icons/fa6'
import { SiGithub, SiLeetcode } from 'react-icons/si'

export function Contact() {
  const contactMethods = [
    {
      label: 'Email',
      value: 'sundramgupta9@gmail.com',
      href: 'mailto:sundramgupta9@gmail.com',
    },
    {
      label: 'Phone',
      value: '+91 9340591905',
      href: 'tel:+919340591905',
    },
  ]

  return (
    <section id="contact" className="section section-alt" data-reveal>
      <div className="container max-w-4xl">
        <div className="mb-16 space-y-2 text-center reveal reveal-delay-1">
          <h2 className="text-3xl font-bold md:text-4xl">Get in Touch</h2>
          <p className="text-muted-foreground">
            Let's connect and discuss opportunities, ideas, or anything tech-related
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Left: Direct Contact Methods */}
          <div className="space-y-6 reveal reveal-delay-2">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Reach Out
            </p>
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                className="flex items-center gap-4 rounded-lg border border-primary/35 bg-background p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {method.label}
                  </p>
                  <p className="mt-1 font-semibold text-foreground hover:text-primary">
                    {method.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Right: Social & CTA */}
          <div className="flex flex-col justify-between space-y-6">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Connect
              </p>
              <div className="flex flex-nowrap gap-3 reveal reveal-delay-3">
                <a
                  href="https://github.com/Sundram06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 font-semibold text-foreground transition duration-200 hover:-translate-y-0.5 hover:bg-foreground hover:text-background"
                >
                  <SiGithub className="h-3.5 w-3.5" aria-hidden="true" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/sundram-gupta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-blue-400/60 bg-card px-4 py-2 font-semibold text-foreground transition duration-200 hover:-translate-y-0.5 hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <FaLinkedinIn className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                  LinkedIn
                </a>
                <a
                  href="https://leetcode.com/u/sundramgpt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-yellow-400/60 bg-card px-4 py-2 font-semibold text-foreground transition duration-200 hover:-translate-y-0.5 hover:bg-yellow-400/10 hover:text-yellow-600 dark:hover:text-yellow-400"
                >
                  <SiLeetcode className="h-3.5 w-3.5 text-yellow-500" aria-hidden="true" />
                  LeetCode
                </a>
              </div>
            </div>

            {/* CTA Box */}
            <div className="rounded-lg border border-primary/20 bg-card p-6 text-center reveal reveal-delay-4 shadow-[0_24px_60px_rgba(234,120,30,0.12)]">
              <p className="mb-4 font-semibold text-foreground">
                Interested in working together?
              </p>
              <a
                href="mailto:sundramgupta9@gmail.com"
                className="btn-solid"
              >
                Send me an email →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
