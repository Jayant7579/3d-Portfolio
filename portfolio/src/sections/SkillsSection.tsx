import { useLayoutEffect, useRef } from 'react'
import type { CSSProperties, PointerEvent as ReactPointerEvent, WheelEvent as ReactWheelEvent } from 'react'
import gsap from 'gsap'
import { Section } from '../components/Section'
import { skills } from '../content/skills'
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
  const ringRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])
  const spinRef = useRef<gsap.core.Tween | null>(null)
  const dragActiveRef = useRef(false)
  const dragStartXRef = useRef(0)
  const dragStartRotationRef = useRef(0)
  const dragWidthRef = useRef(1)
  const resumeTimeoutRef = useRef<number | null>(null)
  const rafRef = useRef<number | null>(null)
  const pendingRotationRef = useRef(0)

  useLayoutEffect(() => {
    const ring = ringRef.current
    const cards = cardsRef.current.filter(Boolean)
    if (!ring || cards.length === 0) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))

    const layoutCards = () => {
      const total = cards.length
      const angleStep = 360 / total
      const cardWidth = cards[0]?.offsetWidth ?? 200
      const baseRadius = (cardWidth / 2) / Math.tan(Math.PI / total)
      const radius = clamp(baseRadius + 40, 230, 420)

      gsap.set(ring, { transformStyle: 'preserve-3d', rotationY: 0, force3D: true })

      cards.forEach((card, index) => {
        gsap.set(card, {
          xPercent: -50,
          yPercent: -50,
          rotationY: index * angleStep,
          z: radius,
          force3D: true,
        })
      })
    }

    const ctx = gsap.context(() => {
      layoutCards()
      window.addEventListener('resize', layoutCards)

      if (!prefersReducedMotion) {
        spinRef.current = gsap.to(ring, {
          rotationY: '+=360',
          duration: 60,
          repeat: -1,
          ease: 'none',
        })

        const enableCardMotion = cards.length <= 18
        if (enableCardMotion) {
          cards.forEach((card, index) => {
            gsap.to(card, {
              y: `+=${6 + (index % 3) * 2}`,
              duration: 4.2 + (index % 5) * 0.45,
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
            })

            gsap.to(card, {
              rotationX: gsap.utils.random(-6, 6),
              rotationZ: gsap.utils.random(-4, 4),
              duration: 5 + (index % 4) * 0.5,
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
            })
          })
        }
      }
    }, ring)

    return () => {
      window.removeEventListener('resize', layoutCards)
      if (resumeTimeoutRef.current) {
        window.clearTimeout(resumeTimeoutRef.current)
      }
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current)
      }
      spinRef.current = null
      ctx.revert()
    }
  }, [])

  const setCardRef = (index: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[index] = el
  }

  const clearResume = () => {
    if (resumeTimeoutRef.current) {
      window.clearTimeout(resumeTimeoutRef.current)
      resumeTimeoutRef.current = null
    }
  }

  const scheduleResume = (delay = 900) => {
    clearResume()
    resumeTimeoutRef.current = window.setTimeout(() => {
      spinRef.current?.resume()
    }, delay)
  }

  const getRotation = () => {
    const ring = ringRef.current
    if (!ring) return 0
    const rotation = gsap.getProperty(ring, 'rotationY')
    return typeof rotation === 'number' ? rotation : Number(rotation) || 0
  }

  const setRotation = (rotation: number) => {
    const ring = ringRef.current
    if (!ring) return
    gsap.set(ring, { rotationY: rotation })
  }

  const scheduleRotation = (rotation: number) => {
    pendingRotationRef.current = rotation
    if (rafRef.current !== null) return
    rafRef.current = window.requestAnimationFrame(() => {
      rafRef.current = null
      setRotation(pendingRotationRef.current)
    })
  }

  const rotateBy = (direction: 1 | -1) => {
    const ring = ringRef.current
    const total = cardsRef.current.length
    if (!ring || total === 0) return
    const step = 360 / total
    const spin = spinRef.current
    clearResume()
    spin?.pause()
    gsap.to(ring, {
      rotationY: `${direction === 1 ? '+=' : '-='}${step}`,
      duration: 0.7,
      ease: 'power3.out',
      onComplete: () => spin?.resume(),
    })
  }

  const pauseSpin = () => {
    clearResume()
    spinRef.current?.pause()
  }

  const resumeSpin = () => {
    clearResume()
    spinRef.current?.resume()
  }

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return
    const ring = ringRef.current
    if (!ring) return
    pauseSpin()
    dragActiveRef.current = true
    dragStartXRef.current = event.clientX
    dragStartRotationRef.current = getRotation()
    dragWidthRef.current = event.currentTarget.getBoundingClientRect().width || 1
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragActiveRef.current) return
    const deltaX = event.clientX - dragStartXRef.current
    const rotation = dragStartRotationRef.current + (deltaX / dragWidthRef.current) * 180
    scheduleRotation(rotation)
  }

  const endDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragActiveRef.current) return
    dragActiveRef.current = false
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
    scheduleResume(900)
  }

  const handleWheel = (event: ReactWheelEvent<HTMLDivElement>) => {
    const ring = ringRef.current
    if (!ring) return
    pauseSpin()
    const delta = event.deltaY + event.deltaX
    scheduleRotation(getRotation() + delta * 0.18)
    scheduleResume(900)
    event.preventDefault()
  }

  return (
    <Section id="skills" title="Skills" subtitle="Tools I use to ship reliable, polished work.">
      <div className="skills-carousel" onMouseEnter={pauseSpin} onMouseLeave={resumeSpin}>
        <div className="skills-carousel__controls">
          <button
            type="button"
            className="skills-carousel__btn"
            onClick={() => rotateBy(-1)}
            aria-label="Rotate skills left"
          >
            Prev
          </button>
          <div className="skills-carousel__hint">Hover to pause / Drag or scroll to rotate</div>
          <button
            type="button"
            className="skills-carousel__btn"
            onClick={() => rotateBy(1)}
            aria-label="Rotate skills right"
          >
            Next
          </button>
        </div>
        <div
          className="skills-carousel__stage"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onPointerCancel={endDrag}
          onWheel={handleWheel}
        >
          <div className="skills-carousel__glow" aria-hidden="true" />
          <div className="skills-carousel__ring" ref={ringRef}>
            {skills.map((skill, index) => {
              const tone = getTone(skill.name)
              const style = {
                '--accent': tone.accent,
                '--accent-soft': tone.accentSoft,
              } as CSSProperties

              return (
                <div
                  key={skill.name}
                  className="skills-carousel__card"
                  ref={setCardRef(index)}
                  style={style}
                >
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
        </div>
      </div>
    </Section>
  )
}
