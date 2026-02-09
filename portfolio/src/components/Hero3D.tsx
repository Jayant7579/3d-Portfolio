import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { useEffect, useMemo, useRef } from 'react'
import type { Mesh } from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SECTION_IDS = ['skills', 'projects', 'experience', 'achievements', 'contact']

function ScrollDrivenKnot() {
  const meshRef = useRef<Mesh | null>(null)
  const { viewport } = useThree()

  const scrollProgressRef = useRef(0)
  const sectionIndexRef = useRef(0)

  const color = useMemo(() => '#1b1f3b', [])
  const emissive = useMemo(() => '#424b99', [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.6,
        onUpdate: (self: ScrollTrigger) => {
          scrollProgressRef.current = self.progress
        },
      })

      SECTION_IDS.forEach((id, index) => {
        const el = document.getElementById(id)
        if (!el) return

        ScrollTrigger.create({
          trigger: el,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => {
            sectionIndexRef.current = index
          },
          onEnterBack: () => {
            sectionIndexRef.current = index
          },
        })
      })
    })

    return () => ctx.revert()
  }, [])

  useFrame((_state, delta) => {
    const mesh = meshRef.current
    if (!mesh) return

    const p = scrollProgressRef.current
    const sectionIndex = sectionIndexRef.current

    const t = _state.clock.getElapsedTime()
    const baseRotY = p * Math.PI * 6 + t * 0.55
    const baseRotX = 0.7 * Math.sin(p * Math.PI * 2.2) + t * 0.35
    const baseRotZ = 0.6 * Math.cos(p * Math.PI * 1.7) + t * 0.45

    const sectionTwist = sectionIndex * 0.25
    const targetRotX = baseRotX + sectionTwist * 0.15
    const targetRotY = baseRotY + sectionTwist
    const targetRotZ = baseRotZ

    const wave = 0.5 - 0.5 * Math.cos(p * Math.PI * 4)
    const baseScale = Math.min(viewport.width, viewport.height) * 0.36
    const targetScale = baseScale * (1.0 + wave * 0.12)

    const k = Math.min(1, delta * 6)

    mesh.rotation.x += (targetRotX - mesh.rotation.x) * k
    mesh.rotation.y += (targetRotY - mesh.rotation.y) * k
    mesh.rotation.z += (targetRotZ - mesh.rotation.z) * k

    const currentScale = mesh.scale.x || 1
    const nextScale = currentScale + (targetScale - currentScale) * k
    mesh.scale.set(nextScale, nextScale, nextScale)

    mesh.position.set(0, 0, 0)
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} castShadow={false} receiveShadow={false}>
      <torusKnotGeometry args={[1.25, 0.38, 220, 26]} />
      <meshStandardMaterial
        color={color}
        emissive={emissive}
        emissiveIntensity={0.45}
        roughness={0.18}
        metalness={0.9}
      />
    </mesh>
  )
}

export function Hero3D() {
  return (
    <div className="hero3d-canvas-wrapper h-full w-full">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 3.0], fov: 25 }}
        gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.45} />
        <directionalLight position={[4, 3, 2]} intensity={1.0} />
        <pointLight position={[-2, -2, 3]} intensity={0.45} color="#1e3a8a" />
        <Environment preset="city" />
        <ScrollDrivenKnot />
      </Canvas>
    </div>
  )
}
