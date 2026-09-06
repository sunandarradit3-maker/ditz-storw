'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float, MeshTransmissionMaterial, OrbitControls, Sphere, TorusKnot } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import type { Mesh } from 'three'
import './styles.css'

function Core() {
  const mesh = useRef<Mesh>(null)
  useFrame((_, delta) => { if (mesh.current) { mesh.current.rotation.y += delta * 0.12; mesh.current.rotation.x = Math.sin(Date.now() * 0.0003) * 0.12 } })
  return <group>
    <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.35}>
      <TorusKnot ref={mesh} args={[1.5, 0.28, 192, 32]} scale={1.15}>
        <MeshTransmissionMaterial backside samples={8} thickness={0.36} chromaticAberration={0.03} anisotropy={0.5} roughness={0.12} metalness={0.45} transmission={0.82} ior={1.45} color="#d8e2e8" />
      </TorusKnot>
      <Sphere args={[2.15, 64, 64]} scale={0.99}>
        <meshStandardMaterial color="#071014" metalness={0.75} roughness={0.23} transparent opacity={0.42} wireframe />
      </Sphere>
    </Float>
  </group>
}

function Scene() {
  return <Canvas dpr={[1, 1.6]} camera={{ position: [0, 0, 7.5], fov: 42 }} gl={{ antialias: true }}>
    <Suspense fallback={null}>
      <ambientLight intensity={0.2} />
      <pointLight position={[3, 4, 5]} intensity={16} distance={12} />
      <pointLight position={[-4, -3, 2]} intensity={8} distance={10} />
      <Core />
      <Environment preset="city" />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.28} maxPolarAngle={Math.PI * 0.62} minPolarAngle={Math.PI * 0.38} />
    </Suspense>
  </Canvas>
}

const services = [
  ['01', 'Cyber Security', 'Security architecture, hardening, defensive engineering, monitoring and resilient digital infrastructure.'],
  ['02', 'Web Engineering', 'High-performance platforms, enterprise portals and immersive web experiences engineered for scale.'],
  ['03', 'Application Engineering', 'Secure applications with disciplined architecture, observability and maintainable systems.'],
  ['04', 'AI & Automation', 'Intelligent workflows that connect data, software and operations without sacrificing control.']
]

export default function Home() {
  return <main>
    <div className="noise" />
    <header className="nav"><a className="brand" href="#top">DiTz<span>Store</span></a><nav><a href="#capabilities">Capabilities</a><a href="#work">Work</a><a href="#contact">Contact</a></nav><a className="nav-cta" href="#contact">Start a project <span>↗</span></a></header>
    <section id="top" className="hero">
      <div className="hero-copy"><p className="eyebrow">DIGITAL DEFENSE × ENGINEERING</p><h1>Build what<br/><em>should endure.</em></h1><p className="lead">DiTz Store engineers secure digital experiences, applications and infrastructure for brands that expect more from technology.</p><div className="actions"><a className="button solid" href="#contact">Enter DiTz Store <span>↗</span></a><a className="button ghost" href="#capabilities">Explore capabilities</a></div></div>
      <div className="scene"><Scene /><div className="scene-label"><span>CORE SYSTEM / ONLINE</span><span>01.0 — DTX</span></div></div>
      <div className="scroll-hint">SCROLL TO EXPLORE <span>↓</span></div>
    </section>
    <section className="statement"><p className="eyebrow">THE STANDARD</p><h2>Not another digital studio.<br/><span>A technical partner for consequential systems.</span></h2></section>
    <section id="capabilities" className="capabilities"><div className="section-head"><div><p className="eyebrow">CAPABILITIES</p><h2>Security is not a feature.<br/>It is the foundation.</h2></div><p className="section-note">From the first architectural decision to the final production signal, every layer is considered.</p></div><div className="service-grid">{services.map(([n,t,d]) => <article key={n} className="service"><span>{n}</span><h3>{t}</h3><p>{d}</p><a href="#contact">DISCUSS →</a></article>)}</div></section>
    <section id="work" className="manifesto"><div className="manifesto-top"><p className="eyebrow">ENGINEERING PHILOSOPHY</p><span>DTZ / 2026</span></div><blockquote>“Complexity should exist<br/><em>behind the interface.</em>”</blockquote><div className="manifesto-bottom"><p>We combine product thinking, software engineering and security discipline to turn ambitious ideas into systems people can trust.</p><span>01 — 04</span></div></section>
    <section id="contact" className="contact"><div><p className="eyebrow">BEGIN A CONVERSATION</p><h2>Have something<br/><em>important to build?</em></h2></div><a className="contact-card" href="https://ditz-store-portofolio-c1qe.vercel.app/" target="_blank" rel="noreferrer"><span>VISIT THE CURRENT PORTFOLIO</span><strong>ditz-store-portofolio-c1qe.vercel.app ↗</strong></a></section>
    <footer><span>© 2026 DiTz Store</span><span>CYBER SECURITY / WEB / APP ENGINEERING</span><span>INDONESIA → WORLDWIDE</span></footer>
  </main>
}
