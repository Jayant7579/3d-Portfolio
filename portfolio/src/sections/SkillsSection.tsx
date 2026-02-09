import { useEffect, useRef, useState } from 'react'
import type {
  CSSProperties,
  KeyboardEvent as ReactKeyboardEvent,
  MouseEvent as ReactMouseEvent,
  PointerEvent as ReactPointerEvent,
  WheelEvent as ReactWheelEvent,
} from 'react'
import { Section } from '../components/Section'
import { skillCategories } from '../content/skills'
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

const AUTO_ROTATE_DEG_PER_SEC = 8
const AUTO_ROTATE_DEG_PER_MS = AUTO_ROTATE_DEG_PER_SEC / 1000
const DRAG_ROTATION_RANGE = 180
const RESUME_AUTO_DELAY_MS = 700

const SKILL_TONES: Record<string, SkillTone> = {
  Python: {
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
  const trackRef = useRef<HTMLDivElement>(null)
  const wheelRef = useRef<HTMLDivElement>(null)
  const resumeTimeoutRef = useRef<number | null>(null)
  const autoRafRef = useRef<number | null>(null)
  const autoLastTimeRef = useRef(0)
  const autoPausedRef = useRef(false)
  const rotationRef = useRef(0)
  const dragActiveRef = useRef(false)
  const dragStartXRef = useRef(0)
  const dragStartRotationRef = useRef(0)
  const dragWidthRef = useRef(1)
  const [activeCategoryId, setActiveCategoryId] = useState(() => skillCategories[0]?.id ?? '')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [viewMode, setViewMode] = useState<'slider' | 'wheel'>('slider')

  const activeCategory =
    skillCategories.find((category) => category.id === activeCategoryId) ?? skillCategories[0]
  const activeSkills = activeCategory?.skills ?? []
  const skillCount = activeSkills.length || 1
  const wheelStep = 360 / skillCount
  const wheelRadiusMax = Math.min(320, 190 + skillCount * 6)
  const wheelStyle = {
    '--count': skillCount,
    '--wheel-rotation': '0deg',
    '--radius': `clamp(150px, 22vw, ${wheelRadiusMax}px)`,
  } as CSSProperties

  const normalizeRotation = (rotation: number) => {
    const normalized = rotation % 360
    return normalized < 0 ? normalized + 360 : normalized
  }

  const setWheelRotation = (rotation: number) => {
    rotationRef.current = normalizeRotation(rotation)
    const wheel = wheelRef.current
    if (!wheel) return
    wheel.style.setProperty('--wheel-rotation', `${rotationRef.current}deg`)
  }

  const clearAutoResume = () => {
    if (resumeTimeoutRef.current) {
      window.clearTimeout(resumeTimeoutRef.current)
      resumeTimeoutRef.current = null
    }
  }

  const pauseAutoRotation = () => {
    autoPausedRef.current = true
    clearAutoResume()
  }

  const resumeAutoRotation = () => {
    if (viewMode !== 'wheel') return
    autoPausedRef.current = false
    autoLastTimeRef.current = performance.now()
  }

  const scheduleAutoResume = () => {
    clearAutoResume()
    resumeTimeoutRef.current = window.setTimeout(() => {
      resumeAutoRotation()
    }, RESUME_AUTO_DELAY_MS)
  }

  useEffect(() => {
    const track = trackRef.current
    if (track) {
      track.scrollTo({ left: 0, behavior: 'auto' })
    }
    setWheelRotation(0)
    autoLastTimeRef.current = performance.now()
  }, [activeCategoryId])

  useEffect(() => {
    if (isModalOpen) {
      const handleKey = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          setIsModalOpen(false)
        }
      }
      const previousOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', handleKey)
      return () => {
        document.body.style.overflow = previousOverflow
        document.removeEventListener('keydown', handleKey)
      }
    }

    setViewMode('slider')
    pauseAutoRotation()
    return undefined
  }, [isModalOpen])

  useEffect(() => {
    autoPausedRef.current = viewMode !== 'wheel'
    autoLastTimeRef.current = performance.now()
    if (viewMode === 'wheel') {
      setWheelRotation(rotationRef.current)
    }
    return () => {
      clearAutoResume()
    }
  }, [viewMode])

  useEffect(() => {
    if (viewMode !== 'wheel') return
    const tick = (time: number) => {
      if (!autoPausedRef.current && !dragActiveRef.current) {
        const delta = time - autoLastTimeRef.current
        autoLastTimeRef.current = time
        setWheelRotation(rotationRef.current + delta * AUTO_ROTATE_DEG_PER_MS)
      } else {
        autoLastTimeRef.current = time
      }
      autoRafRef.current = window.requestAnimationFrame(tick)
    }

    autoLastTimeRef.current = performance.now()
    autoRafRef.current = window.requestAnimationFrame(tick)

    return () => {
      if (autoRafRef.current) {
        window.cancelAnimationFrame(autoRafRef.current)
      }
    }
  }, [viewMode])

  const getScrollStep = () => {
    const track = trackRef.current
    if (!track) return 240
    const card = track.querySelector('.skills-slider__card') as HTMLDivElement | null
    const cardWidth = card?.getBoundingClientRect().width ?? 220
    const styles = window.getComputedStyle(track)
    const gapValue = styles.columnGap || styles.gap || '0'
    const gap = Number.parseFloat(gapValue) || 0
    return cardWidth + gap
  }

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    track.scrollBy({ left: direction * getScrollStep(), behavior: 'smooth' })
  }

  const rotateWheel = (direction: 1 | -1) => {
    if (!skillCount) return
    pauseAutoRotation()
    setWheelRotation(rotationRef.current + direction * wheelStep)
    scheduleAutoResume()
  }

  const handleWheel = (event: ReactWheelEvent<HTMLDivElement>) => {
    const track = trackRef.current
    if (!track) return
    if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return
    track.scrollBy({ left: event.deltaY, behavior: 'auto' })
    event.preventDefault()
  }

  const handleKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      scrollByCard(1)
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      scrollByCard(-1)
    }
  }

  const handleWheelPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return
    const wheel = wheelRef.current
    if (!wheel) return
    pauseAutoRotation()
    dragActiveRef.current = true
    dragStartXRef.current = event.clientX
    dragStartRotationRef.current = rotationRef.current
    dragWidthRef.current = wheel.getBoundingClientRect().width || 1
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const handleWheelPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragActiveRef.current) return
    const deltaX = event.clientX - dragStartXRef.current
    const rotation = dragStartRotationRef.current + (deltaX / dragWidthRef.current) * DRAG_ROTATION_RANGE
    setWheelRotation(rotation)
  }

  const endWheelDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragActiveRef.current) return
    dragActiveRef.current = false
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
    scheduleAutoResume()
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleViewCategory = (categoryId: string, event: ReactMouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    setActiveCategoryId(categoryId)
    setViewMode('wheel')
    setIsModalOpen(true)
    setWheelRotation(0)
    autoPausedRef.current = false
    autoLastTimeRef.current = performance.now()
    clearAutoResume()
  }

  return (
    <Section id="skills" title="Skills" subtitle="Tools I use to ship reliable, polished work.">
      <div className="skills-categories" role="tablist" aria-label="Skill categories">
        {skillCategories.map((category) => {
          const isActive = category.id === activeCategoryId
          return (
            <div
              key={category.id}
              className={`skills-category${isActive ? ' is-active' : ''}`}
              onClick={() => setActiveCategoryId(category.id)}
              role="button"
              aria-pressed={isActive}
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  setActiveCategoryId(category.id)
                }
              }}
            >
              <div className="skills-category__title">{category.title}</div>
              <div className="skills-category__desc">{category.description}</div>
              <div className="skills-category__actions">
                <span className="skills-category__count">{category.skills.length} skills</span>
                <button
                  type="button"
                  className="skills-category__button"
                  onClick={(event) => handleViewCategory(category.id, event)}
                >
                  View
                </button>
              </div>
            </div>
          )
        })}
      </div>
      {isModalOpen ? (
        <div
          className="skills-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeCategory?.title ?? 'Skills'} skills`}
        >
          <button
            type="button"
            className="skills-modal__backdrop"
            onClick={closeModal}
            aria-label="Close skills dialog"
          />
          <div className="skills-modal__panel" role="document">
            <div className="skills-modal__header">
              <div>
                <div className="skills-modal__title">{activeCategory?.title ?? 'Skills'}</div>
                <div className="skills-modal__subtitle">{activeCategory?.description}</div>
              </div>
              <button
                type="button"
                className="skills-modal__close"
                onClick={closeModal}
                aria-label="Close skills dialog"
              >
                Close
              </button>
            </div>
            <div className="skills-slider">
              <div className="skills-slider__header">
                <div className="skills-slider__count">{activeSkills.length} skills</div>
                <div className="skills-slider__toggles">
                  <button
                    type="button"
                    className={`skills-slider__toggle${viewMode === 'slider' ? ' is-active' : ''}`}
                    onClick={() => setViewMode('slider')}
                  >
                    Row
                  </button>
                  <button
                    type="button"
                    className={`skills-slider__toggle${viewMode === 'wheel' ? ' is-active' : ''}`}
                    onClick={() => setViewMode('wheel')}
                  >
                    Circle
                  </button>
                </div>
              </div>
              <div className="skills-slider__controls">
                <button
                  type="button"
                  className="skills-slider__btn"
                  onClick={() => (viewMode === 'wheel' ? rotateWheel(-1) : scrollByCard(-1))}
                  aria-label={viewMode === 'wheel' ? 'Rotate skills left' : 'Scroll skills left'}
                >
                  Prev
                </button>
                <div className="skills-slider__hint">
                  {viewMode === 'wheel'
                    ? 'Auto-spins. Drag to rotate.'
                    : 'Scroll or drag to explore'}
                </div>
                <button
                  type="button"
                  className="skills-slider__btn"
                  onClick={() => (viewMode === 'wheel' ? rotateWheel(1) : scrollByCard(1))}
                  aria-label={viewMode === 'wheel' ? 'Rotate skills right' : 'Scroll skills right'}
                >
                  Next
                </button>
              </div>
              {viewMode === 'wheel' ? (
                <div
                  className="skills-wheel"
                  style={wheelStyle}
                  aria-label="Skills circle"
                  ref={wheelRef}
                  onPointerDown={handleWheelPointerDown}
                  onPointerMove={handleWheelPointerMove}
                  onPointerUp={endWheelDrag}
                  onPointerLeave={endWheelDrag}
                  onPointerCancel={endWheelDrag}
                >
                  <div className="skills-wheel__ring">
                    {activeSkills.map((skill, index) => {
                      const tone = getTone(skill.name)
                      const style = {
                        '--accent': tone.accent,
                        '--accent-soft': tone.accentSoft,
                        '--i': index,
                      } as CSSProperties

                      return (
                        <div key={skill.name} className="skills-wheel__item" style={style}>
                          <div className="skills-wheel__card">
                            <div className="skill-card glass">
                              <div className="skill-logo">
                                {tone.image ? (
                                  <img src={tone.image} alt={`${skill.name} logo`} />
                                ) : (
                                  <span>{tone.label}</span>
                                )}
                              </div>
                              <div className="skill-meta">
                                <div className="skill-name">{skill.name}</div>
                                {skill.level ? (
                                  <span className="skill-level">{skill.level}</span>
                                ) : null}
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              ) : (
                <div
                  className="skills-slider__track"
                  ref={trackRef}
                  onWheel={handleWheel}
                  onKeyDown={handleKeyDown}
                  tabIndex={0}
                  aria-label={`${activeCategory?.title ?? 'Skills'} slider`}
                >
                  {activeSkills.map((skill) => {
                    const tone = getTone(skill.name)
                    const style = {
                      '--accent': tone.accent,
                      '--accent-soft': tone.accentSoft,
                    } as CSSProperties

                    return (
                      <div key={skill.name} className="skills-slider__card" style={style}>
                        <div className="skill-card glass">
                          <div className="skill-logo">
                            {tone.image ? (
                              <img src={tone.image} alt={`${skill.name} logo`} />
                            ) : (
                              <span>{tone.label}</span>
                            )}
                          </div>
                          <div className="skill-meta">
                            <div className="skill-name">{skill.name}</div>
                            {skill.level ? <span className="skill-level">{skill.level}</span> : null}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </Section>
  )
}
