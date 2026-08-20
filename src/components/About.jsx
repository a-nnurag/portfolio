import Reveal from './Reveal'
import { profile, education, stats } from '../data/content'
import './About.css'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <Reveal>
          <p className="eyebrow">01 · About</p>
          <h2 className="section-title">A bit about how I got here</h2>
        </Reveal>

        <div className="about__grid">
          <Reveal delay={0.05} className="about__bio">
            <p>{profile.bio}</p>
            <div className="about__education">
              <p className="about__education-school">{education.school}</p>
              <p className="about__education-degree">{education.degree}</p>
              <p className="about__education-meta mono">{education.duration} &middot; {education.gpa}</p>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="about__stats">
            {stats.map((s) => (
              <div key={s.label} className="about__stat">
                <span className="about__stat-value">{s.value}</span>
                <span className="about__stat-label mono">{s.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
