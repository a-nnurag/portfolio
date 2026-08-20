import { FiMail, FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi'
import Reveal from './Reveal'
import { profile } from '../data/content'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal className="contact__card">
          <p className="eyebrow">07 · Contact</p>
          <h2 className="section-title">Let's work together</h2>
          <p className="section-lead" style={{ marginBottom: 40 }}>
            I'm open to new opportunities — reach out if you'd like to talk about a role, a project, or just tech.
          </p>

          <div className="contact__actions">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              <FiMail /> {profile.email}
            </a>
            <a className="btn btn-ghost" href={profile.resumeUrl} download>
              <FiDownload /> Resume
            </a>
          </div>

          <div className="contact__social">
            <a href={profile.github} target="_blank" rel="noreferrer">
              <FiGithub /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <FiLinkedin /> LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
