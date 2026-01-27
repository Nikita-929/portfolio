import React, { useState } from 'react'
import '../styles/skills.css'
import { SKILLS_DATA } from '../data/constants'

function Skills() {
  const [activeCategory, setActiveCategory] = useState('backend')

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>

        {/* Category Toggle */}
        <div className="skills-toggle">
          {Object.entries(SKILLS_DATA.categories).map(([key, data]) => (
            <button
              key={key}
              className={`toggle-btn ${activeCategory === key ? 'active' : ''}`}
              onClick={() => setActiveCategory(key)}
            >
              <span className="toggle-icon">{data.icon}</span>
              {data.title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-display">
          <div className="active-category">
            <h3>{SKILLS_DATA.categories[activeCategory].title}</h3>
            <div className="skills-grid">
              {SKILLS_DATA.categories[activeCategory].skills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* All Skills Cloud */}
        <div className="skills-cloud">
          <h3>Complete Skill Set</h3>
          <div className="skill-badges">
            {SKILLS_DATA.flatList.map((skill, index) => (
              <span key={index} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
