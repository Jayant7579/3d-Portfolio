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

export type Education = {
  school: string
  degree: string
  period: string
  details?: string[]
}

export type SocialLink = { label: string; href: string }
