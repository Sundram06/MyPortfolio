/**
 * Project Section
 * 
 * Featured project case study: VittNest
 * - Project name and description
 * - Problem statement
 * - Solution and architecture
 * - Technologies used
 * - Key features
 * - Links to live demo and GitHub
 */

import { IconType } from 'react-icons'
import {
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiRedux,
} from 'react-icons/si'

const techIcons: Record<string, { icon: IconType; color: string }> = {
  React: { icon: SiReact, color: 'text-cyan-500' },
  'Node.js': { icon: SiNodedotjs, color: 'text-green-600' },
  Express: { icon: SiExpress, color: 'text-slate-600 dark:text-slate-300' },
  MongoDB: { icon: SiMongodb, color: 'text-emerald-600' },
  Redux: { icon: SiRedux, color: 'text-purple-500' },
}

export function Project() {
  return (
    <section id="project" className="section section-alt" data-reveal>
      <div className="container">
        <div className="mb-12 space-y-2 reveal reveal-delay-1">
          <h2 className="text-3xl font-bold md:text-4xl">Featured Project</h2>
          <p className="text-muted-foreground">
            Deep dive into one of my significant full-stack builds
          </p>
        </div>

        {/* VittNest Case Study Card */}
        <div className="grid gap-8 rounded-xl border border-border bg-card p-8 md:grid-cols-2 card-glow reveal reveal-delay-2">
          {/* Left: Project Info */}
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-2xl font-semibold">VittNest</h3>
              <p className="text-muted-foreground">
                Full-stack stock management system with real-time LTP updates
                and FIFO-based profit tracking
              </p>
            </div>

            {/* Problem & Solution */}
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Problem</h4>
                <p className="text-sm text-muted-foreground">
                  Needed a system to manage stock portfolios with real-time
                  market data integration, accurate profit/loss calculations,
                  and a responsive user experience.
                </p>
              </div>

              <div>
                <h4 className="font-semibold">Solution</h4>
                <p className="text-sm text-muted-foreground">
                  Built a full-stack application with React frontend for dynamic
                  UI, Node.js/Express backend for API handling, MongoDB for
                  persistent storage, and WebSocket for real-time data.
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="mb-3 font-semibold">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'React',
                  'Node.js',
                  'Express',
                  'MongoDB',
                  'WebSocket',
                  'Redux',
                  'Tanstack Query',
                ].map((tech) => {
                  const techConfig = techIcons[tech]
                  return (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-sm font-medium transition duration-200 hover:bg-primary/10 hover:text-primary"
                    >
                      {techConfig ? (
                        (() => {
                          const TechIcon = techConfig.icon
                          return (
                            <TechIcon
                              className={`h-3.5 w-3.5 ${techConfig.color}`}
                              aria-hidden="true"
                            />
                          )
                        })()
                      ) : null}
                      {tech}
                    </span>
                  )
                })}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://vittnest.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-solid"
              >
                View Live →
              </a>
              <a
                href="https://github.com/Sundram06/stockManager"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                GitHub Repo →
              </a>
            </div>
          </div>

          {/* Right: Key Features */}
          <div className="space-y-4">
            <h4 className="font-semibold">Key Features</h4>
            <ul className="space-y-3 text-sm">
              {[
                'Real-time LTP (Last Traded Price) updates via WebSocket',
                'FIFO-based profit/loss calculations with precision',
                'JWT-based authentication with Google OAuth integration',
                'Persistent transaction history in MongoDB',
                'Responsive design across all device sizes',
                'Clean React architecture with modern patterns (Redux, React Router, Tanstack Query)',
                'RESTful API with proper error handling',
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-emerald-600 dark:text-emerald-400">✅</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
