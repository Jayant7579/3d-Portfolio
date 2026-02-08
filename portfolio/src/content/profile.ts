import { about } from './about'
import { achievements } from './achievements'
import { basics } from './basics'
import { contact } from './contact'
import { experience } from './experience'
import { projects } from './projects'
import { skills } from './skills'
import { socials } from './socials'

export const profile = {
  ...basics,
  about,
  socials,
  skills,
  projects,
  experience,
  achievements,
  contact,
} as const

export type { Experience, Project, Skill, SocialLink } from './types'
