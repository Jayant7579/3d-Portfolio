import type { Project } from './types'

export const projects = [
  {
    title: 'Task Manager WebApp',
    description:
      'A short, outcome-focused description. Mention what problem it solved and the impact.',
    tech: ['React', 'TypeScript', 'Three.js'],
    links: [
      { label: 'Live', href: 'https://example.com' },
      { label: 'Code', href: 'https://github.com/your-handle/project' },
    ],
  },
  {
    title: 'Project Two',
    description: 'Another project. Keep it to 1-2 lines and emphasize what you owned.',
    tech: ['Vite', 'Tailwind', 'Framer Motion'],
    links: [{ label: 'Code', href: 'https://github.com/your-handle/project2' }],
  },
] satisfies Project[]
