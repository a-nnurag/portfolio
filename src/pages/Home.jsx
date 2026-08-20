import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import BlogSection from '../components/BlogSection'
import Achievements from '../components/Achievements'
import Contact from '../components/Contact'

export default function Home({ theme }) {
  const location = useLocation()

  useEffect(() => {
    const scrollTo = location.state?.scrollTo
    if (scrollTo) {
      const el = document.getElementById(scrollTo)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo(0, 0)
    }
  }, [location.state])

  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <BlogSection />
      <Achievements theme={theme} />
      <Contact />
    </main>
  )
}
