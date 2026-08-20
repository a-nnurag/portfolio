import Reveal from './Reveal'
import { experience } from '../data/content'
import './Experience.css'

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <Reveal>
          <p className="eyebrow">02 · Experience</p>
          <h2 className="section-title">Where I've worked</h2>
        </Reveal>

        <div className="experience__list">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.08} className="experience__item">
              <div className="experience__marker">
                <span className="experience__dot" />
                {i !== experience.length - 1 && <span className="experience__line" />}
              </div>
              <div className="experience__content">
                <div className="experience__head">
                  <h3>{job.role}</h3>
                  <span className="experience__duration mono">{job.duration}</span>
                </div>
                <p className="experience__company">{job.company}</p>
                <ul>
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
