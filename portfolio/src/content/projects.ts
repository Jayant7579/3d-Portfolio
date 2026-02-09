import type { Project } from './types'

export const projects = [
  {
    title: 'Calendar in C',
    description: 'Program that generates a calendar for a specified year.',
    tech: ['C'],
    links: [
      { label: 'Code', href: 'https://github.com/Jayant7579/calendar-in-c' },
    ],
  },
  {
    title: 'Phonebook Application in C',
    description:
      'Console phonebook app for saving contact numbers and maintaining a stored list.',
    tech: ['C'],
    links: [{ label: 'Code', href: 'https://github.com/Jayant7579/phonebook-application-in-c' }],
  },
  {
    title: 'Snake Game in Python',
    description: 'Classic snake game built in Python.',
    tech: ['Python'],
    links: [{ label: 'Code', href: 'https://github.com/Jayant7579/snake-game-in-python' }],
  },
  {
    title: 'Oasis',
    description: 'HTML-based project repository.',
    tech: ['HTML'],
    links: [{ label: 'Code', href: 'https://github.com/Jayant7579/oasis' }],
  },
  {
    title: 'Video Conferencing',
    description: 'JavaScript project focused on video conferencing.',
    tech: ['JavaScript'],
    links: [{ label: 'Code', href: 'https://github.com/Jayant7579/video-conferencing' }],
  },
  {
    title: 'Social Media Clone',
    description: 'JavaScript-based social media clone project.',
    tech: ['JavaScript'],
    links: [{ label: 'Code', href: 'https://github.com/Jayant7579/Social-Media-Clone' }],
  },
] satisfies Project[]
