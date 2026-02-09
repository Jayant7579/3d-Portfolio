import type { Skill } from './types'

export type SkillCategory = {
  id: string
  title: string
  description: string
  skills: Skill[]
}

export const skillCategories = [
  {
    id: 'languages',
    title: 'Languages & Core',
    description: 'Core languages and programming foundations.',
    skills: [
      { name: 'Python', level: 'Core' },
      { name: 'JavaScript' },
      { name: 'TypeScript', level: 'Core' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'UI development and responsive styling.',
    skills: [
      { name: 'React.js', level: 'Core' },
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'Tailwind CSS' },
      { name: 'Bootstrap' },
      { name: 'Responsive Web Design' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    description: 'Server-side development and API design.',
    skills: [
      { name: 'Node.js', level: 'Proficient' },
      { name: 'Express.js' },
      { name: 'Flask' },
      { name: 'FastAPI' },
      { name: 'REST APIs' },
      { name: 'API Integration' },
      { name: 'JWT Authentication' },
      { name: 'CRUD Applications' },
      { name: 'Full Stack Development' },
    ],
  },
  {
    id: 'data',
    title: 'Data & Databases',
    description: 'Data pipelines, analytics, and storage.',
    skills: [
      { name: 'SQL' },
      { name: 'MySQL' },
      { name: 'MongoDB' },
      { name: 'Excel' },
      { name: 'NumPy' },
      { name: 'Pandas' },
      { name: 'Matplotlib' },
      { name: 'Seaborn' },
      { name: 'Data Cleaning' },
      { name: 'Data Preprocessing' },
      { name: 'Data Analysis' },
      { name: 'Exploratory Data Analysis (EDA)' },
      { name: 'Data Visualization' },
    ],
  },
  {
    id: 'ai',
    title: 'AI & LLM',
    description: 'LLM tooling, prompt work, and evaluation.',
    skills: [
      { name: 'Generative AI' },
      { name: 'Large Language Models (LLMs)' },
      { name: 'OpenAI API' },
      { name: 'Prompt Engineering' },
      { name: 'LangChain' },
      { name: 'RAG (Retrieval Augmented Generation)' },
      { name: 'NLP (Natural Language Processing)' },
      { name: 'AI Integration with Python' },
      { name: 'Model Evaluation' },
      { name: 'AI Automation' },
    ],
  },
  {
    id: 'tools',
    title: 'Workflow & Tools',
    description: 'Version control and delivery workflows.',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Automation' },
    ],
  },
] satisfies SkillCategory[]

export const skills = skillCategories.flatMap((category) => category.skills) satisfies Skill[]
