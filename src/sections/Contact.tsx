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
      icon: '📧',
      label: 'Email',
      value: 'sundramgupta9@gmail.com',
      href: 'mailto:sundramgupta9@gmail.com',
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+91 9340591905',
      href: 'tel:+919340591905',
    },
  ]

  return (
    <section id="contact" className="section section-alt">
      <div className="container max-w-4xl">
        <div className="mb-16 space-y-2 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Get in Touch</h2>
          <p className="text-muted-foreground">
            Let's connect and discuss opportunities, ideas, or anything tech-related
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Left: Direct Contact Methods */}
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Reach Out
            </p>
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                className="flex items-center gap-4 rounded-lg border border-border/50 bg-card/40 p-4 shadow-[0_0_0_0_rgba(0,0,0,0)] transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/35 hover:bg-background hover:shadow-sm"
              >
                <span className="text-2xl">{method.icon}</span>
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
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/Sundram06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-black/15 bg-white px-4 py-2 font-semibold text-black transition-colors hover:bg-black hover:text-white"
                >
                  <SiGithub className="h-3.5 w-3.5" aria-hidden="true" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/sundram-gupta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-blue-400/80 bg-white px-4 py-2 font-semibold text-black transition-colors hover:bg-blue-100"
                >
                  <FaLinkedinIn className="h-3.5 w-3.5 text-blue-600" aria-hidden="true" />
                  LinkedIn
                </a>
                <a
                  href="https://leetcode.com/u/sundramgpt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-yellow-400/80 bg-white px-4 py-2 font-semibold text-black transition-colors hover:bg-yellow-300"
                >
                  <SiLeetcode className="h-3.5 w-3.5 text-yellow-500" aria-hidden="true" />
                  LeetCode
                </a>
              </div>
            </div>

            {/* CTA Box */}
            <div className="rounded-lg border border-primary/20 bg-primary/5 p-6 text-center">
              <p className="mb-4 font-semibold text-foreground">
                Interested in working together?
              </p>
              <a
                href="mailto:sundramgupta9@gmail.com"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2 font-semibold text-primary-foreground transition-colors hover:opacity-90"
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
