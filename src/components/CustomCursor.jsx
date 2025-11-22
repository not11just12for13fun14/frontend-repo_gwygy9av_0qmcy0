import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 20 })
  const sy = useSpring(y, { stiffness: 200, damping: 20 })
  const innerRef = useRef(null)

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('pointermove', move)

    // Magnetic elements
    const mags = Array.from(document.querySelectorAll('[data-magnetic]'))
    const enter = (e) => innerRef.current?.classList.add('scale-150')
    const leave = (e) => innerRef.current?.classList.remove('scale-150')
    mags.forEach((el) => {
      el.addEventListener('pointerenter', enter)
      el.addEventListener('pointerleave', leave)
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect()
        const relX = e.clientX - (r.left + r.width / 2)
        const relY = e.clientY - (r.top + r.height / 2)
        el.style.transform = `translate(${relX * 0.05}px, ${relY * 0.05}px)`
      })
    })

    return () => {
      window.removeEventListener('pointermove', move)
      mags.forEach((el) => {
        el.removeEventListener('pointerenter', enter)
        el.removeEventListener('pointerleave', leave)
      })
    }
  }, [x, y])

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] mix-blend-screen">
      <motion.div style={{ translateX: sx, translateY: sy }} className="absolute -translate-x-1/2 -translate-y-1/2">
        <div ref={innerRef} className="w-3 h-3 rounded-full bg-cyan-300/90 transition-transform" />
      </motion.div>
      <motion.div style={{ translateX: sx, translateY: sy }} className="absolute -translate-x-1/2 -translate-y-1/2">
        <div className="w-12 h-12 rounded-full bg-cyan-400/10 blur-xl" />
      </motion.div>
    </div>
  )
}
