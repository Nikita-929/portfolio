import React from 'react'
import '../styles/certifications.css'
import { CERTIFICATE_URL, CERTIFICATIONS_DATA } from '../data/constants'

function Certifications() {
  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>

        <div className="certifications-grid">
          {CERTIFICATIONS_DATA.map((cert, index) => (
            <div key={index} className="certification-card">
              <div className="cert-icon">{cert.icon}</div>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">by {cert.issuer}</p>
              <p className="cert-description">{cert.description}</p>
              <a
                href={CERTIFICATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
