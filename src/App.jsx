import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white selection:bg-cyan-400/30 selection:text-white">
      <CustomCursor />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="relative bg-[#070b13] py-10 text-center text-cyan-100/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-2">© {new Date().getFullYear()} Nayan Mondal</div>
          <div className="text-xs">Crafted with motion, performance, and care.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
