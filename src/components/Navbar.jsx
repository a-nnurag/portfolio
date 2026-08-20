import { useEffect, useState } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { FiSun, FiMoon, FiMenu, FiX, FiDownload } from 'react-icons/fi'
import { useActiveSection } from '../hooks/useActiveSection'
import { profile } from '../data/content'
import './Navbar.css'

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'blog', label: 'Blog' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'
  const active = useActiveSection(NAV_ITEMS.map((item) => item.id))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (id) => {
    setMenuOpen(false)
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/', { state: { scrollTo: id } })
    }
  }

  const handleLogoClick = (e) => {
    e.preventDefault()
    setMenuOpen(false)
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
    }
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo mono" onClick={handleLogoClick}>
          {profile.initials}<span className="navbar__logo-dot">.</span>
        </Link>

        <nav className="navbar__links navbar__links--desktop">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className={`navbar__link ${isHome && active === item.id ? 'navbar__link--active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="navbar__actions">
          <a href={profile.resumeUrl} download className="btn btn-ghost navbar__resume">
            <FiDownload /> Resume
          </a>
          <button
            className="theme-toggle"
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            <span className={`theme-toggle__track ${theme === 'light' ? 'theme-toggle__track--light' : ''}`}>
              <span className="theme-toggle__thumb">
                {theme === 'dark' ? <FiMoon size={12} /> : <FiSun size={12} />}
              </span>
            </span>
          </button>
          <button className="navbar__burger" aria-label="Toggle menu" onClick={() => setMenuOpen((o) => !o)}>
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="navbar__links navbar__links--mobile">
          {NAV_ITEMS.map((item) => (
            <button key={item.id} className="navbar__link" onClick={() => handleNavClick(item.id)}>
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  )
}
