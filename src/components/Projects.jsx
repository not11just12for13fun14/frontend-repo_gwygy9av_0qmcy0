import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const projects = [
  { title: 'Neon Banking Dashboard', desc: 'Realtime motion and data viz', img: 'https://images.unsplash.com/photo-1557264337-e8a93017fe92?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Media Storytelling', desc: 'Scroll-synced immersive narrative', img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Interactive Studio Site', desc: 'R3F particles and liquid hover', img: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop' },
]

export default function Projects() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-15%'])

  useEffect(() => {}, [])

  return (
    <section id="projects" ref={ref} className="relative py-28 bg-[#0b0f1a]">
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute left-0 top-10 w-40 h-40 rounded-full bg-cyan-400/10 blur-3xl"/>
        <div className="absolute right-10 bottom-10 w-56 h-56 rounded-full bg-indigo-500/10 blur-3xl"/>
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Selected Projects</h2>
          <p className="text-cyan-100/70 max-w-sm">A rotating set of prototypes and shipped work exploring motion systems, interaction metaphors, and expressive UI.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a key={p.title} href="#" target="_blank" rel="noreferrer"
              className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5"
              initial={{ borderRadius: 20 }}
              whileHover={{ borderRadius: 28 }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60 z-10" />
              <motion.img src={p.img} alt="" className="w-full h-72 object-cover" initial={{ filter: 'saturate(0.9) contrast(1.1)' }} whileHover={{ scale: 1.08, filter: 'saturate(1.1) contrast(1.2)' }} transition={{ type:'spring', stiffness:120, damping:18 }} />
              <motion.div className="relative z-20 p-4">
                <div className="text-cyan-200/80 text-sm">Concept</div>
                <div className="text-white text-lg font-semibold tracking-tight">{p.title}</div>
                <div className="text-cyan-100/70 text-sm">{p.desc}</div>
              </motion.div>
              <motion.div className="absolute -inset-20 bg-[radial-gradient(40%_40%_at_50%_50%,rgba(0,225,255,0.25),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
