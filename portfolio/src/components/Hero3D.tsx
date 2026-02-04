import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import type { Mesh } from 'three'

function Knot() {
  const ref = useRef<Mesh>(null)

  const color = useMemo(() => {
    // a soft neon violet that plays well with the background
    return '#8b5cf6'
  }, [])

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.x = state.clock.elapsedTime * 0.28
    ref.current.rotation.y = state.clock.elapsedTime * 0.34
  })

  return (
    <Float speed={1.2} floatIntensity={1.1} rotationIntensity={0.65}>
      <mesh ref={ref}>
        <torusKnotGeometry args={[1.05, 0.34, 180, 24]} />
        <meshStandardMaterial color={color} roughness={0.2} metalness={0.85} />
      </mesh>
    </Float>
  )
}

export function Hero3D() {
  return (
    <div className="relative h-[340px] w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-950/30 md:h-[420px]">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0.2, 4.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.55} />
        <directionalLight position={[3, 3, 2]} intensity={1.2} />
        <Knot />
        <Environment preset="city" />
      </Canvas>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
      </div>
    </div>
  )
}

