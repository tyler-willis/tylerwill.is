import { AnimatePresence } from 'motion/react'
import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Experience } from './pages/Experience'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Projects } from './pages/Projects'

export default function App() {
  const location = useLocation()

  // SPAs keep the scroll position between routes by default; reset it like a normal site.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#content"
        className="btn bg-surface sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50"
      >
        Skip to content
      </a>
      <Navbar />
      <div id="content" className="flex-1">
        {/* Keying Routes by path lets AnimatePresence play the old page's exit
            animation before the new one enters. */}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  )
}
