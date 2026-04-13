/**
 * About Section
 * 
 * Development philosophy and approach
 * - How I approach problem-solving
 * - What makes you unique as an engineer
 * - Values and engineering mindset
 */

export function About() {
  return (
    <section id="about" className="section" data-reveal>
      <div className="container max-w-3xl">
        <div className="mb-12 space-y-2 reveal reveal-delay-1">
          <h2 className="text-3xl font-bold md:text-4xl">About My Approach</h2>
          <p className="text-muted-foreground">
            Engineering philosophy and what drives my work
          </p>
        </div>

        {/* Philosophy Content */}
        <div className="space-y-8">
          {/* Development Philosophy */}
          <div className="space-y-4 reveal reveal-delay-2">
            <h3 className="text-2xl font-semibold">Development Philosophy</h3>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I believe good software comes from clarity and simplicity. My approach is to break
              complex problems into smaller components, design clean and scalable architectures,
              and focus on building systems that are easy to maintain and evolve over time. I
              prioritize readability, performance, and thoughtful engineering decisions over quick
              fixes.
            </p>
          </div>

          {/* Unique Value */}
          <div className="space-y-4 reveal reveal-delay-3">
            <h3 className="text-2xl font-semibold">What Sets Me Apart</h3>
            <p className="text-lg leading-relaxed text-muted-foreground">
              What sets me apart is my ability to think across the entire stack while maintaining
              strong attention to frontend architecture and user experience. I enjoy designing
              systems end-to-end, from intuitive interfaces to reliable backend services, ensuring
              the final product is both technically sound and enjoyable to use.
            </p>
          </div>

          {/* Core Values */}
          <div className="grid gap-4 sm:grid-cols-2 reveal reveal-delay-4">
            {[
              {
                title: 'Clean Architecture',
                description: 'Code that is readable, maintainable, and built to scale.',
              },
              {
                title: 'User-Centric Design',
                description: 'Understanding the "why" before implementing the "how".',
              },
              {
                title: 'Performance First',
                description: 'Building systems that are fast, efficient, and reliable.',
              },
              {
                title: 'Continuous Learning',
                description: 'Exploring new technologies while mastering fundamentals.',
              },
            ].map((value) => (
              <div
                key={value.title}
                className="rounded-lg border border-border bg-card p-4 card-glow hover-elevate"
              >
                <h4 className="font-semibold">{value.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
