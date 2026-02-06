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
  title: 'Software Engineer • Web Developer • GenAI',
  location: 'Ghaziabad, India',
  tagline:
    'Engineer by mindset, AI by passion',
  about:
    `Im a Computer Science graduate who enjoys building software that is thoughtful, reliable, and impactful. My interest in technology started with web development, where I learned how good design and clean code come together to create meaningful user experiences. Over time, this curiosity expanded into backend systems and artificial intelligence, where I became fascinated by how data and logic power real-world applications. I have hands-on experience working with frontend technologies like React, backend development using APIs and databases, and building AI-driven solutions using Python and machine learning concepts. I enjoy understanding how systems work end to end—from user interfaces to data flow, business logic, and intelligent decision-making. What excites me most is the process of learning by building, experimenting, and continuously improving.

I approach problems with a balance of creativity and structure. I value clean architecture, attention to detail, and writing code that is easy to understand and maintain. I’m comfortable collaborating with teams, learning from feedback, and adapting quickly in fast-paced environments.

As an early-career engineer, I’m focused on growing my skills while contributing to projects that have real impact. I’m especially motivated by roles where I can combine software engineering with modern technologies like AI to build solutions that truly matter.`,
  socials: [
    { label: 'GitHub', href: 'https://github.com/jayant7579' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jayant-chauhan-282358227/' },
    { label: 'Email', href: 'mailto:j.c9639713047@gmail.com' },
  ],
  skills: [
    { name: 'TypeScript', level: 'Core' },
    { name: 'React', level: 'Familiar' },
    { name: 'Three.js', level: 'Proficient' },
    { name: 'Node.js', level: 'Proficient' },
    { name: 'Python', level: 'Familiar' },

  ] satisfies Skill[],
  projects: [
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

