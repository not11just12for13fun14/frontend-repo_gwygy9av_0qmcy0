import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-[#0b0f1a] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(1200px 600px at 10% 10%, rgba(0,225,255,0.06), transparent 60%), radial-gradient(1000px 500px at 90% 80%, rgba(107,124,255,0.06), transparent 60%)'
        }} />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ x: -50, rotate: -2, opacity: 0 }} whileInView={{ x:0, rotate:0, opacity:1 }} viewport={{ once: true, margin: '-100px' }} transition={{ type: 'spring', stiffness: 80, damping: 18 }} className="bg-white/5 backdrop-blur-xl ring-1 ring-white/10 rounded-3xl p-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">About</h2>
          <p className="mt-4 text-cyan-100/80 leading-relaxed">
            Creative frontend engineer crafting immersive interfaces with a performance-first mindset. I blend motion design, WebGL, and modern React to shape stories that move.
          </p>
          <p className="mt-3 text-cyan-100/70">
            Previously built interactive products across fintech and media. Comfortable owning the experience end-to-end—from prototypes to production.
          </p>
        </motion.div>

        <motion.div initial={{ x: 50, rotate: 2, opacity: 0 }} whileInView={{ x:0, rotate:0, opacity:1 }} viewport={{ once: true, margin: '-100px' }} transition={{ type: 'spring', stiffness: 80, damping: 18 }} className="grid grid-cols-2 gap-4">
          {["Motion Systems","R3F / Three.js","Shader Art","Micro-interactions","GSAP / Framer","Performance"].map((s, i) => (
            <motion.div key={s} whileHover={{ scale: 1.03, rotate: i%2?1:-1 }} className="rounded-2xl p-4 bg-gradient-to-br from-white/5 to-white/10 ring-1 ring-white/10 text-cyan-100/90">
              <span className="block text-sm opacity-80">Focus</span>
              <span className="text-lg font-semibold">{s}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
