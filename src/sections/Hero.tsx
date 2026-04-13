/**
 * Hero Section
 * 
 * Primary call-to-action above the fold
 * - Role and headline
 * - Professional bio
 * - Primary CTA: View Projects
 * - Secondary CTA: Download Resume / Contact
 */

export function Hero() {
  return (
    <section
      id="hero"
      className="hero-pattern section flex min-h-screen items-center justify-center overflow-hidden"
      data-reveal
    >
      <div className="container text-center">
        <h1 className="mb-4 text-5xl font-bold md:text-6xl reveal reveal-delay-1">
          Sundram Gupta
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
          <a
            href="#project"
            className="btn-solid shadow-lg shadow-primary/10"
          >
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
