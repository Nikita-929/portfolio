import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import '../styles/overview.css'
import { RESUME_URL, OVERVIEW_DATA } from '../data/constants'

function Overview() {
  return (
    <section id="overview" className="overview">
      <div className="overview-content">
        <div className="overview-text">
          <h1 className="overview-title">
            {OVERVIEW_DATA.greeting} <span className="highlight">{OVERVIEW_DATA.name}</span>
          </h1>
          <p className="overview-subtitle">
            {OVERVIEW_DATA.subtitle}
          </p>
          <p className="overview-description">
            {OVERVIEW_DATA.description}
          </p>

          <div className="overview-buttons">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {OVERVIEW_DATA.resumeButton}
            </a>
          </div>

          <div className="overview-social">
            <a
              href={OVERVIEW_DATA.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href={OVERVIEW_DATA.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href={`mailto:${OVERVIEW_DATA.social.email}`}
              className="social-icon"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="overview-visual">
          <div className="floating-card">
            <div className="card-content">
              <p className="card-label">{OVERVIEW_DATA.availability.label}</p>
              <p className="card-highlight">{OVERVIEW_DATA.availability.role}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Overview
