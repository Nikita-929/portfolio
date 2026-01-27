import React from 'react'
import '../styles/achievements.css'
import { ACHIEVEMENTS_DATA } from '../data/constants'

function Achievements() {
  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <h2 className="section-title">Achievements & Recognition</h2>

        <div className="achievements-grid">
          {ACHIEVEMENTS_DATA.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-icon">{achievement.icon}</div>
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-description">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
