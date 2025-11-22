import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Sparkles } from 'lucide-react'

export default function Hero() {
  const containerRef = useRef(null)

  // Parallax reaction to pointer
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useSpring(useTransform(my, [ -200, 200 ], [ 6, -6 ]), { stiffness: 120, damping: 20 })
  const ry = useSpring(useTransform(mx, [ -200, 200 ], [ -6, 6 ]), { stiffness: 120, damping: 20 })

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const rect = () => el.getBoundingClientRect()

    const onMove = (e) => {
      const r = rect()
      const x = e.clientX - (r.left + r.width / 2)
      const y = e.clientY - (r.top + r.height / 2)
      mx.set(x)
      my.set(y)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [mx, my])

  return (
    <section ref={containerRef} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#0b0f1a]">
      {/* Liquid gradient backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[60vw] h-[60vw] rounded-full blur-3xl opacity-40" style={{
          background: 'radial-gradient(circle at 30% 30%, #6b7cff, transparent 60%)'
        }} />
        <div className="absolute -bottom-40 -right-40 w-[60vw] h-[60vw] rounded-full blur-3xl opacity-40" style={{
          background: 'radial-gradient(circle at 70% 70%, #00e1ff, transparent 60%)'
        }} />
      </div>

      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Noise overlay for cinematic texture */}
      <div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-soft-light" style={{backgroundImage:'url(https://grainy-gradients.vercel.app/noise.svg)'}} />

      {/* Title block with parallax tilt */}
      <motion.div style={{ rotateX: rx, rotateY: ry }} className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 ring-1 ring-white/10 backdrop-blur-md text-cyan-200 mb-6">
          <Sparkles className="w-4 h-4" />
          <span>Immersive Creative Engineer</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight leading-[0.95] bg-gradient-to-br from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent"
        >
          Nayan Mondal
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-lg sm:text-xl text-cyan-100/80 max-w-2xl mx-auto"
        >
          I design and build expressive web experiences—bridging creative direction, performance-minded engineering, and cinematic interaction.
        </motion.p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#projects" className="group relative px-6 py-3 rounded-full text-black font-semibold">
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 blur-md opacity-70 group-hover:opacity-90 transition-opacity" />
            <span className="relative z-10 bg-white/90 rounded-full px-6 py-3">Explore Work</span>
          </a>
          <a href="#contact" className="px-6 py-3 rounded-full text-cyan-200 hover:text-white/90 border border-white/20 backdrop-blur-md">
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Organic blob decor */}
      <svg className="absolute -z-[0] top-20 left-10 w-72 h-72 opacity-40" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6b7cff"/>
            <stop offset="100%" stopColor="#00e1ff"/>
          </linearGradient>
        </defs>
        <path fill="url(#g1)">
          <animate attributeName="d" dur="12s" repeatCount="indefinite" values="
            M47.2,-54.3C61.9,-43.5,74.5,-30.3,79.8,-14.4C85.2,1.6,83.3,21.3,74.2,37.9C65.1,54.5,48.7,68,30.9,72.4C13.1,76.8,-6.1,72.2,-23.9,64.4C-41.7,56.7,-58.1,45.8,-66.5,30.4C-74.9,15,-75.3,-4.1,-67.6,-20.5C-60,-37,-44.4,-50.8,-28.2,-62C-12,-73.2,4.9,-81.8,20.9,-80.2C36.9,-78.6,52.5,-66.2,47.2,-54.3Z;
            M39.8,-52.7C53.2,-44.8,66,-35.1,70.4,-22.4C74.7,-9.7,70.5,6.1,61.9,19.1C53.2,32.1,40.1,42.4,25.5,50.3C10.9,58.3,-5.2,63.9,-20.4,60.6C-35.6,57.3,-49.9,45.2,-60.2,30.2C-70.5,15.1,-76.7,-3.7,-72.4,-19.3C-68.1,-34.9,-53.5,-47.4,-38.7,-55.2C-23.9,-63.1,-12,-66.3,1.1,-67.8C14.2,-69.3,28.4,-69,39.8,-52.7Z;
            M47.2,-54.3C61.9,-43.5,74.5,-30.3,79.8,-14.4C85.2,1.6,83.3,21.3,74.2,37.9C65.1,54.5,48.7,68,30.9,72.4C13.1,76.8,-6.1,72.2,-23.9,64.4C-41.7,56.7,-58.1,45.8,-66.5,30.4C-74.9,15,-75.3,-4.1,-67.6,-20.5C-60,-37,-44.4,-50.8,-28.2,-62C-12,-73.2,4.9,-81.8,20.9,-80.2C36.9,-78.6,52.5,-66.2,47.2,-54.3Z
          "/>
        </path>
      </svg>
    </section>
  )
}
