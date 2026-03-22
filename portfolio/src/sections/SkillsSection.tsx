import { useState } from 'react'
import type { CSSProperties } from 'react'
import { Section } from '../components/Section'
import { skillCategories, skills as allSkills } from '../content/skills'
import reactLogo from '../assets/react.svg'
import bootstrapLogo from '../assets/skills/bootstrap.svg'
import cssLogo from '../assets/skills/css.svg'
import excelLogo from '../assets/skills/excel.svg'
import expressLogo from '../assets/skills/express.svg'
import fastapiLogo from '../assets/skills/fastapi.svg'
import flaskLogo from '../assets/skills/flask.svg'
import gitLogo from '../assets/skills/git.svg'
import githubLogo from '../assets/skills/github.svg'
import htmlLogo from '../assets/skills/html.svg'
import javascriptLogo from '../assets/skills/javascript.svg'
import langchainLogo from '../assets/skills/langchain.svg'
import matplotlibLogo from '../assets/skills/matplotlib.svg'
import mongodbLogo from '../assets/skills/mongodb.svg'
import mysqlLogo from '../assets/skills/mysql.svg'
import nodeLogo from '../assets/skills/nodejs.svg'
import numpyLogo from '../assets/skills/numpy.svg'
import openaiLogo from '../assets/skills/openai.svg'
import pandasLogo from '../assets/skills/pandas.svg'
import pythonLogo from '../assets/skills/python.svg'
import seabornLogo from '../assets/skills/seaborn.svg'
import sqlLogo from '../assets/skills/sql.svg'
import tailwindLogo from '../assets/skills/tailwind.svg'
import typescriptLogo from '../assets/skills/typescript.svg'

type SkillTone = {
  label: string
  accent: string
  accentSoft: string
  image?: string
}

const FALLBACK_TONES: Array<Pick<SkillTone, 'accent' | 'accentSoft'>> = [
  { accent: '#38bdf8', accentSoft: 'rgba(56, 189, 248, 0.25)' },
  { accent: '#f472b6', accentSoft: 'rgba(244, 114, 182, 0.22)' },
  { accent: '#a78bfa', accentSoft: 'rgba(167, 139, 250, 0.22)' },
  { accent: '#34d399', accentSoft: 'rgba(52, 211, 153, 0.24)' },
  { accent: '#fbbf24', accentSoft: 'rgba(251, 191, 36, 0.24)' },
]

const SKILL_TONES: Record<string, SkillTone> = {
  Python: {
    label: 'Py',
    accent: '#3776AB',
    accentSoft: 'rgba(55, 118, 171, 0.25)',
    image: pythonLogo,
  },
  'Python (OOP, Modules, Exception Handling)': {
    label: 'Py',
    accent: '#3776AB',
    accentSoft: 'rgba(55, 118, 171, 0.25)',
    image: pythonLogo,
  },
  'React.js': {
    label: 'React',
    accent: '#22d3ee',
    accentSoft: 'rgba(34, 211, 238, 0.25)',
    image: reactLogo,
  },
  'Node.js': {
    label: 'Node',
    accent: '#22c55e',
    accentSoft: 'rgba(34, 197, 94, 0.25)',
    image: nodeLogo,
  },
  JavaScript: {
    label: 'JS',
    accent: '#f7df1e',
    accentSoft: 'rgba(247, 223, 30, 0.25)',
    image: javascriptLogo,
  },
  TypeScript: {
    label: 'TS',
    accent: '#3178c6',
    accentSoft: 'rgba(49, 120, 198, 0.25)',
    image: typescriptLogo,
  },
  HTML: {
    label: 'HTML',
    accent: '#f97316',
    accentSoft: 'rgba(249, 115, 22, 0.25)',
    image: htmlLogo,
  },
  CSS: {
    label: 'CSS',
    accent: '#2563eb',
    accentSoft: 'rgba(37, 99, 235, 0.25)',
    image: cssLogo,
  },
  'Tailwind CSS': {
    label: 'TW',
    accent: '#38bdf8',
    accentSoft: 'rgba(56, 189, 248, 0.25)',
    image: tailwindLogo,
  },
  Git: {
    label: 'Git',
    accent: '#f97316',
    accentSoft: 'rgba(249, 115, 22, 0.24)',
    image: gitLogo,
  },
  GitHub: {
    label: 'GH',
    accent: '#cbd5f5',
    accentSoft: 'rgba(203, 213, 245, 0.22)',
    image: githubLogo,
  },
  SQL: {
    label: 'SQL',
    accent: '#38bdf8',
    accentSoft: 'rgba(56, 189, 248, 0.25)',
    image: sqlLogo,
  },
  MySQL: {
    label: 'MySQL',
    accent: '#00758f',
    accentSoft: 'rgba(0, 117, 143, 0.25)',
    image: mysqlLogo,
  },
  MongoDB: {
    label: 'MDB',
    accent: '#10b981',
    accentSoft: 'rgba(16, 185, 129, 0.25)',
    image: mongodbLogo,
  },
  Excel: {
    label: 'XLS',
    accent: '#107C41',
    accentSoft: 'rgba(16, 124, 65, 0.25)',
    image: excelLogo,
  },
  'OpenAI API': {
    label: 'AI',
    accent: '#e2e8f0',
    accentSoft: 'rgba(226, 232, 240, 0.2)',
    image: openaiLogo,
  },
  LangChain: {
    label: 'LC',
    accent: '#a855f7',
    accentSoft: 'rgba(168, 85, 247, 0.24)',
    image: langchainLogo,
  },
  Flask: {
    label: 'Flask',
    accent: '#e2e8f0',
    accentSoft: 'rgba(226, 232, 240, 0.2)',
    image: flaskLogo,
  },
  FastAPI: {
    label: 'API',
    accent: '#009688',
    accentSoft: 'rgba(0, 150, 136, 0.25)',
    image: fastapiLogo,
  },
  NumPy: {
    label: 'NP',
    accent: '#4dabcf',
    accentSoft: 'rgba(77, 171, 207, 0.25)',
    image: numpyLogo,
  },
  Pandas: {
    label: 'PD',
    accent: '#150458',
    accentSoft: 'rgba(21, 4, 88, 0.25)',
    image: pandasLogo,
  },
  Matplotlib: {
    label: 'MP',
    accent: '#f97316',
    accentSoft: 'rgba(249, 115, 22, 0.24)',
    image: matplotlibLogo,
  },
  Seaborn: {
    label: 'SB',
    accent: '#14b8a6',
    accentSoft: 'rgba(20, 184, 166, 0.24)',
    image: seabornLogo,
  },
  'Express.js': {
    label: 'EX',
    accent: '#e2e8f0',
    accentSoft: 'rgba(226, 232, 240, 0.2)',
    image: expressLogo,
  },
  Bootstrap: {
    label: 'BS',
    accent: '#7952B3',
    accentSoft: 'rgba(121, 82, 179, 0.25)',
    image: bootstrapLogo,
  },
}

function getInitials(name: string) {
  const acronymMatch = name.match(/\(([^)]+)\)/)
  if (acronymMatch) {
    const acronym = acronymMatch[1].replace(/[^a-zA-Z]/g, '')
    if (acronym.length >= 2 && acronym.length <= 4) {
      return acronym.toUpperCase()
    }
  }

  const words = name
    .replace(/[^a-zA-Z0-9 ]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)

  const initials = words.slice(0, 2).map((word) => word[0]?.toUpperCase() ?? '')
  return initials.join('') || name.slice(0, 2).toUpperCase()
}

function getTone(name: string): SkillTone {
  const preset = SKILL_TONES[name]
  if (preset) return preset

  const hash = Array.from(name).reduce((acc, char) => acc + char.charCodeAt(0), 0)
  const fallback = FALLBACK_TONES[hash % FALLBACK_TONES.length]
  return {
    label: getInitials(name),
    accent: fallback.accent,
    accentSoft: fallback.accentSoft,
  }
}

export function SkillsSection() {
  const [openCategoryId, setOpenCategoryId] = useState(() => skillCategories[0]?.id ?? '')
  const carouselSkills = allSkills.filter((skill, index, list) => {
    const tone = getTone(skill.name)
    if (!tone.image) return false
    return list.findIndex((item) => item.name === skill.name) === index
  })
  const carouselCount = carouselSkills.length || 1
  const carouselRadius = Math.min(300, 140 + carouselCount * 5)
  const carouselStyle = {
    '--count': carouselCount,
    '--radius': `${carouselRadius}px`,
  } as CSSProperties

  return (
    <Section id="skills" title="Skills" subtitle="Tools I use to ship reliable, polished work.">
      <div className="skills-layout">
        <div className="skills-carousel" style={carouselStyle} aria-label="Skills carousel">
          <div className="skills-carousel__ring">
            {carouselSkills.map((skill, index) => {
              const tone = getTone(skill.name)
              const style = {
                '--accent': tone.accent,
                '--accent-soft': tone.accentSoft,
                '--i': index,
              } as CSSProperties

              return (
                <div key={skill.name} className="skills-carousel__item" style={style}>
                  <div className="skills-carousel__card">
                    <div className="skills-logo" aria-hidden="true">
                      {tone.image ? (
                        <img src={tone.image} alt={`${skill.name} logo`} />
                      ) : (
                        <span>{tone.label}</span>
                      )}
                    </div>
                    <div className="skills-carousel__name">{skill.name}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="skills-groups">
          {skillCategories.map((category) => {
            const isOpen = category.id === openCategoryId
            return (
              <div key={category.id} className="skills-group">
                <div className="skills-group__header">
                  <div>
                    <div className="skills-group__title">{category.title}</div>
                    <div className="skills-group__desc">{category.description}</div>
                  </div>
                  <button
                    type="button"
                    className="skills-group__toggle"
                    onClick={() => setOpenCategoryId(isOpen ? '' : category.id)}
                    aria-expanded={isOpen}
                  >
                    {isOpen ? 'Hide' : 'View'}
                  </button>
                </div>
                {isOpen ? (
                  <ol className="skills-group__list">
                    {category.skills.map((skill, index) => {
                      const tone = getTone(skill.name)
                      const style = {
                        '--accent': tone.accent,
                        '--accent-soft': tone.accentSoft,
                      } as CSSProperties

                      return (
                        <li key={skill.name} className="skills-group__item" style={style}>
                          <span className="skills-group__index">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <div className="skills-logo skills-logo--mini" aria-hidden="true">
                            {tone.image ? (
                              <img src={tone.image} alt={`${skill.name} logo`} />
                            ) : (
                              <span>{tone.label}</span>
                            )}
                          </div>
                          <div className="skills-group__name">{skill.name}</div>
                          {skill.level ? (
                            <span className="skills-group__level">{skill.level}</span>
                          ) : null}
                        </li>
                      )
                    })}
                  </ol>
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
