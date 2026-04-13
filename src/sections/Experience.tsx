/**
 * Experience Section
 * 
 * Work history timeline
 * - Company, role, duration
 * - Key achievements and contributions
 * - Technologies and tools used
 */

interface ExperienceItem {
  id: string
  company: string
  position: string
  duration: string
  location: string
  logo: string
  achievements: string[]
}

const experiences: ExperienceItem[] = [
  {
    id: 'edgeverve',
    company: 'Edgeverve Systems Limited',
    position: 'Software Developer',
    duration: 'June 2022 - Present',
    location: 'Bengaluru, India',
    logo: '/logos/EdgeverveLogo.png',
    achievements: [
      'Developed backend APIs for loan modules (Schedule Balance, Salary Loans)',
      'Built Loan Summary Card component with reusable loan insights',
      'Migrated legacy loan processing menus to React',
      'Integrated RESTful APIs for dynamic data rendering',
      'Reduced API response times using JMeter load testing',
      'Ensured cross-browser compatibility and responsive design',
      'Wrote unit tests using Jest and React Testing Library',
      'Regular code reviews and team discussions',
    ],
  },
  {
    id: 'xoriant',
    company: 'Xoriant Solutions Pvt. Ltd.',
    position: 'Associate Software Engineer',
    duration: 'Sep 2021 - May 2022',
    location: 'Remote',
    logo: '/logos/XoriantLogo.png',
    achievements: [
      'Developed internal form builder for 4,000+ employees',
      'Optimized form creation process (60% generation time reduction)',
    ],
  },
]

// --- tilt handlers (to remove: delete these two functions and the
//     onMouseMove/onMouseLeave props on the card div in the map below) ---
function onCardTilt(e: React.MouseEvent<HTMLDivElement>) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const card = e.currentTarget
  const { left, top, width, height } = card.getBoundingClientRect()
  const x = (e.clientX - left) / width - 0.5
  const y = (e.clientY - top) / height - 0.5
  card.style.transition = 'transform 0.06s ease'
  card.style.transform = `perspective(800px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg)`
}

function onCardTiltReset(e: React.MouseEvent<HTMLDivElement>) {
  const card = e.currentTarget
  card.style.transition = 'transform 0.55s cubic-bezier(0.23, 1, 0.32, 1)'
  card.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg)'
}
// --- end tilt handlers ---

export function Experience() {
  return (
    <section id="experience" className="section" data-reveal>
      <div className="container">
        <div className="mb-12 space-y-2 reveal reveal-delay-1">
          <h2 className="text-3xl font-bold md:text-4xl">Work Experience</h2>
          <p className="text-muted-foreground">
            Professional background in full-stack development and enterprise systems
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              onMouseMove={onCardTilt}
              onMouseLeave={onCardTiltReset}
              className={`relative space-y-4 rounded-lg border border-border bg-card p-6 card-glow reveal reveal-delay-${Math.min(idx + 2, 4)}`}
              style={{ willChange: 'transform' }}
            >
              {/* Timeline marker (left side on larger screens) */}
              {idx !== experiences.length - 1 && (
                <div className="absolute -bottom-7 left-1/2 h-6 w-0.5 -translate-x-1/2 transform bg-border" />
              )}

              {/* Company & Role */}
              <div className="flex items-start gap-4">
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="h-14 w-14 rounded-xl border border-border bg-muted/40 object-contain p-1"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-lg font-semibold">{exp.company}</h3>
                  <p className="text-primary">{exp.position}</p>
                  <p className="text-sm text-muted-foreground">
                    {exp.duration} • {exp.location}
                  </p>
                </div>
              </div>

              {/* Achievements */}
              <ul className="space-y-2">
                {exp.achievements.map((achievement, achIdx) => (
                  <li key={achIdx} className="flex gap-3 text-sm">
                    <span className="mt-1 flex-shrink-0 text-primary">→</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
