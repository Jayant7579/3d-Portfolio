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
    title: 'Languages',
    description: 'Core programming languages and foundations.',
    skills: [
      { name: 'Python (OOP, Modules, Exception Handling)' },
      { name: 'JavaScript' },
      { name: 'HTML' },
      { name: 'CSS' },
    ],
  },
  {
    id: 'ml-libraries',
    title: 'ML Libraries',
    description: 'Libraries used for data science and modeling.',
    skills: [
      { name: 'NumPy' },
      { name: 'Pandas' },
      { name: 'Matplotlib' },
      { name: 'Seaborn' },
      { name: 'Scikit-Learn' },
      { name: 'TensorFlow (basic)' },
      { name: 'Keras (basic)' },
    ],
  },
  {
    id: 'ml-skills',
    title: 'ML Skills',
    description: 'Machine learning skills and workflows.',
    skills: [
      { name: 'Data Preprocessing' },
      { name: 'Feature Engineering' },
      { name: 'Model Training & Evaluation' },
      { name: 'Classification & Regression' },
      { name: 'Deep Learning Basics' },
      { name: 'Generative AI (basic)' },
      { name: 'Prompt Engineering (basic)' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    description: 'Daily tools and development environment.',
    skills: [
      { name: 'Jupyter Notebook' },
      { name: 'N8N Workflow' },
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'VS Code' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    description: 'Storage and querying.',
    skills: [{ name: 'MongoDB' }, { name: 'MySQL' }],
  },
  {
    id: 'areas',
    title: 'Areas of Work',
    description: 'Problem domains and focus areas.',
    skills: [
      { name: 'Machine Learning' },
      { name: 'Data Analysis' },
      { name: 'Model Deployment' },
      { name: 'REST APIs' },
      { name: 'Problem Solving' },
    ],
  },
  {
    id: 'competencies',
    title: 'Core Competencies',
    description: 'Ways of working and thinking.',
    skills: [
      { name: 'Analytical Thinking' },
      { name: 'Logical Problem Solving' },
      { name: 'Continuous Learning' },
    ],
  },
] satisfies SkillCategory[]

export const skills = skillCategories.flatMap((category) => category.skills) satisfies Skill[]
