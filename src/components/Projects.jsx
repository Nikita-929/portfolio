import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa'
import '../styles/projects.css'
import { PROJECTS_DATA } from '../data/constants'

function ProjectCard({ project, openModal }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [project.images.length])

  const nextImage = (e) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = (e) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))
  }

  return (
    <div className="project-card">
      <div className="project-image-container">
        <img
          src={project.images[currentImageIndex]}
          alt={`${project.title} - Preview ${currentImageIndex + 1}`}
          className="project-img"
          onClick={() => openModal(project, currentImageIndex)}
        />
        
        <button className="carousel-btn prev" onClick={prevImage} aria-label="Previous Image">
          <FaChevronLeft />
        </button>
        <button className="carousel-btn next" onClick={nextImage} aria-label="Next Image">
          <FaChevronRight />
        </button>

        <div className="carousel-dots">
          {project.images.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === currentImageIndex ? 'active' : ''}`}
            ></span>
          ))}
        </div>
      </div>

      <div className="project-details">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="tech-stack">
          {project.tech.map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        <ul className="project-features">
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <div className="project-buttons">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-github"
          >
            <FaGithub /> GitHub
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-live"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function Projects() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    project: null,
    imageIndex: 0
  })

  const openModal = (project, index) => {
    setModalState({
      isOpen: true,
      project,
      imageIndex: index
    })
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModalState({
      isOpen: false,
      project: null,
      imageIndex: 0
    })
    document.body.style.overflow = 'unset'
  }

  const nextModalImage = (e) => {
    e.stopPropagation()
    if (modalState.project) {
      setModalState(prev => ({
        ...prev,
        imageIndex: (prev.imageIndex + 1) % prev.project.images.length
      }))
    }
  }

  const prevModalImage = (e) => {
    e.stopPropagation()
    if (modalState.project) {
      setModalState(prev => ({
        ...prev,
        imageIndex: prev.imageIndex === 0 ? prev.project.images.length - 1 : prev.imageIndex - 1
      }))
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!modalState.isOpen) return
      
      if (e.key === 'ArrowRight') {
        nextModalImage(e)
      } else if (e.key === 'ArrowLeft') {
        prevModalImage(e)
      } else if (e.key === 'Escape') {
        closeModal()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [modalState.isOpen, modalState.project])

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {PROJECTS_DATA.map((project) => (
            <ProjectCard key={project.id} project={project} openModal={openModal} />
          ))}
        </div>
      </div>

      {modalState.isOpen && modalState.project && createPortal(
        <div className="image-modal-overlay" onClick={closeModal}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={modalState.project.images[modalState.imageIndex]} 
              alt={`${modalState.project.title} - Preview ${modalState.imageIndex + 1}`} 
            />
          </div>
          
          <button className="modal-close-btn" onClick={closeModal} aria-label="Close Modal">
            <FaTimes />
          </button>
          
          <button className="modal-nav-btn prev" onClick={prevModalImage} aria-label="Previous Image">
            <FaChevronLeft />
          </button>

          <button className="modal-nav-btn next" onClick={nextModalImage} aria-label="Next Image">
            <FaChevronRight />
          </button>
        </div>,
        document.body
      )}
    </section>
  )
}

export default Projects
