export type Skill = { name: string; level?: 'Core' | 'Proficient' | 'Familiar' }
export type Project = {
  title: string
  description: string
  tech: string[]
  links?: { label: string; href: string }[]
}
export type Experience = {
  org: string
  role: string
  period: string
  bullets: string[]
}

export const profile = {
  name: 'Jayant Chauhan',
  title: 'Software Engineer • 3D / Web • GenAI',
  location: 'City, Country',
  tagline:
    'I build fast, delightful web experiences—now with an interactive 3D twist.',
  about:
    "Write a short bio here. Keep it punchy: what you do, what you're into, and what you're looking for.",
  socials: [
    { label: 'GitHub', href: 'https://github.com/your-handle' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-handle/' },
    { label: 'Email', href: 'mailto:you@example.com' },
  ],
  skills: [
    { name: 'TypeScript', level: 'Core' },
    { name: 'React', level: 'Core' },
    { name: 'Three.js', level: 'Proficient' },
    { name: 'Node.js', level: 'Proficient' },
    { name: 'Python', level: 'Familiar' },
  ] satisfies Skill[],
  projects: [
    {
      title: 'Project One',
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
      description:
        'Another project. Keep it to 1–2 lines and emphasize what you owned.',
      tech: ['Vite', 'Tailwind', 'Framer Motion'],
      links: [{ label: 'Code', href: 'https://github.com/your-handle/project2' }],
    },
  ] satisfies Project[],
  experience: [
    {
      org: 'Company / Lab',
      role: 'Role Title',
      period: '2025 — Present',
      bullets: [
        'One high-signal accomplishment with a measurable result.',
        'Another accomplishment that shows scope and ownership.',
      ],
    },
  ] satisfies Experience[],
  achievements: [
    'Certification / Award / Scholarship',
    'Conference talk / Hackathon win / Publication',
  ],
  contact: {
    email: 'you@example.com',
    calendly: '',
  },
} as const

