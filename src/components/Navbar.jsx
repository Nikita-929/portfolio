import React, { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { FaSun, FaMoon } from 'react-icons/fa'
import '../styles/navbar.css'

function Navbar({ isDarkMode, onToggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('overview')

  const sections = ['overview', 'about', 'skills', 'projects', 'experience', 'certifications', 'achievements', 'contact']

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      for (let section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const elementTop = element.offsetTop
          const elementBottom = elementTop + element.offsetHeight

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">NM</span>
        </div>

        <button
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul id="primary-navigation" className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {sections.map((section) => (
            <li key={section} className="nav-item">
              <ScrollLink
                to={section}
                spy={true}
                smooth={true}
                duration={500}
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </ScrollLink>
            </li>
          ))}
        </ul>

        <button
          className="theme-toggle"
          onClick={onToggleDarkMode}
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
