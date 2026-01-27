import React from 'react'
import '../styles/experience.css'
import { EXPERIENCE_DATA } from '../data/constants'

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>

        <div className="timeline">
          {EXPERIENCE_DATA.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-dot"></div>
              </div>

              <div className="timeline-content">
                <div className="experience-header">
                  <h3 className="job-title">{exp.title}</h3>
                  <p className="company">{exp.company}</p>
                  <p className="period">{exp.period}</p>
                </div>

                <div className="experience-description">
                  {exp.description.map((point, idx) => (
                    <p key={idx} className="description-point">
                      • {point}
                    </p>
                  ))}
                </div>

                <div className="experience-tags">
                  {exp.highlights.map((tag, idx) => (
                    <span key={idx} className="experience-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
