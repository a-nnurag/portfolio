import Reveal from './Reveal'
import { skills } from '../data/content'
import './Skills.css'

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <Reveal>
          <p className="eyebrow">04 · Skills</p>
          <h2 className="section-title">Tools I reach for</h2>
        </Reveal>

        <div className="skills__grid">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.06} className="skills__group">
              <h3 className="mono">{group.category}</h3>
              <div className="skills__tags">
                {group.items.map((item) => (
                  <span key={item} className="pill">{item}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
