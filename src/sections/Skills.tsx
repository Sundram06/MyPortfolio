/**
 * Skills Section
 * 
 * Technical capabilities organized by category
 * - Frontend technologies
 * - Backend technologies
 * - Databases & Tools
 * - DevOps & Deployment
 */

import { IconType } from 'react-icons'
import {
  SiCplusplus,
  SiCss,
  SiDocker,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiKubernetes,
  SiMongodb,
  SiMui,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiWebpack,
} from 'react-icons/si'

interface SkillCategory {
  name: string
  skills: string[]
}

const skillIcons: Record<string, IconType> = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  'C++': SiCplusplus,
  React: SiReact,
  Redux: SiRedux,
  'Redux Toolkit': SiRedux,
  'Tailwind CSS': SiTailwindcss,
  MUI: SiMui,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  Git: SiGit,
  Webpack: SiWebpack,
  Vite: SiVite,
  Jest: SiJest,
  HTML: SiHtml5,
  CSS: SiCss,
}

const skillIconClass: Record<string, string> = {
  JavaScript: 'text-yellow-500',
  TypeScript: 'text-blue-600',
  'C++': 'text-blue-500',
  React: 'text-cyan-500',
  Redux: 'text-purple-500',
  'Redux Toolkit': 'text-purple-500',
  'Tailwind CSS': 'text-sky-500',
  MUI: 'text-indigo-500',
  'Node.js': 'text-green-600',
  'Express.js': 'text-slate-600 dark:text-slate-300',
  MongoDB: 'text-emerald-600',
  PostgreSQL: 'text-blue-700',
  Docker: 'text-sky-600',
  Kubernetes: 'text-blue-600',
  Git: 'text-orange-600',
  Webpack: 'text-blue-500',
  Vite: 'text-violet-500',
  Jest: 'text-rose-600',
  HTML: 'text-orange-500',
  CSS: 'text-blue-500',
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Java', 'C++', 'SQL'],
  },
  {
    name: 'Frontend',
    skills: [
      'React',
      'React Router',
      'Context API',
      'Redux',
      'Redux Toolkit',
      'Tanstack Query',
      'Tailwind CSS',
      'MUI',
    ],
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'WebSocket'],
  },
  {
    name: 'Database',
    skills: ['MongoDB', 'Mongoose', 'PostgreSQL', 'Oracle DBMS'],
  },
  {
    name: 'DevOps & Tools',
    skills: [
      'Docker',
      'Kubernetes',
      'Git',
      'Webpack',
      'Vite',
      'Jest',
      'React Testing Library',
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <div className="mb-12 space-y-2">
          <h2 className="text-3xl font-bold md:text-4xl">Technical Skills</h2>
          <p className="text-muted-foreground">
            Technologies and tools I work with daily
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="rounded-lg border border-border bg-card p-6"
            >
              <h3 className="mb-4 font-semibold">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-sm font-medium"
                  >
                    {skillIcons[skill] ? (
                      (() => {
                        const SkillIcon = skillIcons[skill]
                        return (
                          <SkillIcon
                            className={`h-3.5 w-3.5 ${skillIconClass[skill] ?? 'text-foreground'}`}
                            aria-hidden="true"
                          />
                        )
                      })()
                    ) : null}
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
