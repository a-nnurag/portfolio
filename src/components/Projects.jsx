import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiChevronDown, FiGithub } from 'react-icons/fi'
import Reveal from './Reveal'
import { projects } from '../data/content'
import './Projects.css'

function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false)

  return (
    <Reveal delay={(index % 2) * 0.08} className="project-card-wrap">
      <div className={`project-card ${open ? 'project-card--open' : ''}`}>
        <button className="project-card__header" onClick={() => setOpen((o) => !o)}>
          <div>
            <h3>{project.title}</h3>
            <p className="project-card__tagline">{project.tagline}</p>
          </div>
          <motion.span
            className="project-card__chevron"
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <FiChevronDown size={20} />
          </motion.span>
        </button>

        <div className="project-card__stack">
          {project.stack.map((t) => (
            <span key={t} className="pill">{t}</span>
          ))}
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              className="project-card__body"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="project-card__body-inner">
                <div className="project-card__block">
                  <h4>Problem</h4>
                  <p>{project.problem}</p>
                </div>
                <div className="project-card__block">
                  <h4>Approach</h4>
                  <ul>
                    {project.approach.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
                <div className="project-card__block">
                  <h4>Impact</h4>
                  <p>{project.impact}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <a
          className="project-card__link"
          href={project.github}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          <FiGithub /> View source
        </a>
      </div>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <Reveal>
          <p className="eyebrow">03 · Projects</p>
          <h2 className="section-title">Things I've built</h2>
          <p className="section-lead">
            Case studies, not a screenshot gallery — click a project to see the problem, approach, and impact.
          </p>
        </Reveal>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
