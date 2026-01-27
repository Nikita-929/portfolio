import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa'
import '../styles/contact.css'
import { CONTACT_DATA, RESUME_URL } from '../data/constants'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">{CONTACT_DATA.title}</h2>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect!</h3>
            <p>
              {CONTACT_DATA.description}
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <p className="contact-label">Email</p>
                  <a href={`mailto:${CONTACT_DATA.email}`}>
                    {CONTACT_DATA.email}
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div>
                  <p className="contact-label">Phone</p>
                  <a href={`tel:${CONTACT_DATA.phone}`}>{CONTACT_DATA.phone}</a>
                </div>
              </div>

              <div className="contact-item">
                <FaLinkedin className="contact-icon" />
                <div>
                  <p className="contact-label">LinkedIn</p>
                  <a
                    href={CONTACT_DATA.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {CONTACT_DATA.linkedinLabel}
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <FaGithub className="contact-icon" />
                <div>
                  <p className="contact-label">GitHub</p>
                  <a
                    href={CONTACT_DATA.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {CONTACT_DATA.githubLabel}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-cta">
            <h3>Quick Actions</h3>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              📥 View Resume
            </a>
          </div>
        </div>

        <div className="contact-footer">
          <p>{CONTACT_DATA.copyright}</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
