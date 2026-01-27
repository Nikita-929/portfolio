import React from 'react'
import '../styles/about.css'
import { ABOUT_DATA } from '../data/constants'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">{ABOUT_DATA.title}</h2>

        <div className="about-content">
          <div className="about-text">
            {ABOUT_DATA.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <div className="about-stats">
              {ABOUT_DATA.stats.map((stat, index) => (
                <div key={index} className="stat">
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

        {ABOUT_DATA.highlights && ABOUT_DATA.highlights.length > 0 && (
          <div className="about-highlights">
            {ABOUT_DATA.highlights.map((highlight, index) => (
              <div key={index} className="highlight-card">
                <h3>{highlight.title}</h3>
                <p>{highlight.desc}</p>
                <small>{highlight.sub}</small>
              </div>
            ))}
          </div>
        )}
        </div>
      </div>
    </section>
  )
}
export default About
