import './Loader.css'

type LoaderPhase = 'loading' | 'fading' | 'ready'

type LoaderProps = {
  phase: LoaderPhase
  name: string
}

const renderCubeTiles = () =>
  Array.from({ length: 9 }, (_, index) => <span key={index} className="cube-tile" />)

export function Loader({ phase, name }: LoaderProps) {
  if (phase === 'ready') return null

  return (
    <div
      className={`loader-screen${phase === 'fading' ? ' loader-screen--fade' : ''}`}
      aria-label="Loading"
    >
      <div className="loader-content" role="presentation">
        <div className="cube-loader" aria-hidden="true">
          <span className="cube-shadow" />
          <div className="cube">
            <div className="cube-face cube-face--front cube-face--blue">{renderCubeTiles()}</div>
            <div className="cube-face cube-face--back cube-face--green">{renderCubeTiles()}</div>
            <div className="cube-face cube-face--right cube-face--red">{renderCubeTiles()}</div>
            <div className="cube-face cube-face--left cube-face--orange">{renderCubeTiles()}</div>
            <div className="cube-face cube-face--top cube-face--yellow">{renderCubeTiles()}</div>
            <div className="cube-face cube-face--bottom cube-face--white">{renderCubeTiles()}</div>
          </div>
        </div>
        <div className="loader-text">
          <span className="loader-title">
            Loading<span className="loader-dots" aria-hidden="true">...</span>
          </span>
          <span className="loader-subtitle">{name}</span>
        </div>
      </div>
    </div>
  )
}
