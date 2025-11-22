import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 bg-[#0b0f1a]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">Let’s build something vivid</h2>
        <p className="mt-4 text-cyan-100/80">Available for select freelance collaborations and roles focused on creative engineering.</p>

        <motion.a
          href="mailto:hello@nayanmondal.dev"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex mt-8 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 text-black font-semibold ring-1 ring-white/10 shadow-[0_0_50px_rgba(0,225,255,0.25)]"
        >
          Contact Me
        </motion.a>
      </div>
    </section>
  )
}
