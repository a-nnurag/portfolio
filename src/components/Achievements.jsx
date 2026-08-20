import { useState } from 'react'
import { FiAward, FiGithub } from 'react-icons/fi'
import Reveal from './Reveal'
import { achievements, profile } from '../data/content'
import './Achievements.css'

const GH_FALLBACK_STATS = [
  { label: 'Public repos', value: '60+' },
  { label: 'On GitHub since', value: '2023' },
]

export default function Achievements({ theme }) {
  const ghTheme = theme === 'light' ? 'default' : 'dark'
  const [ghCardFailed, setGhCardFailed] = useState(false)

  return (
    <section id="achievements" className="section achievements">
      <div className="container">
        <Reveal>
          <p className="eyebrow">06 · Achievements</p>
          <h2 className="section-title">Beyond the code</h2>
        </Reveal>

        <div className="achievements__grid">
          <Reveal className="achievements__list" delay={0.05}>
            {achievements.map((a) => (
              <div key={a.title} className="achievements__item">
                <span className="achievements__icon"><FiAward /></span>
                <div>
                  <p className="achievements__title">{a.title}</p>
                  <p className="achievements__detail">{a.detail}</p>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal className="achievements__stats" delay={0.15}>
            {ghCardFailed ? (
              <a
                className="achievements__gh-fallback"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                <div className="achievements__gh-fallback-head">
                  <FiGithub size={20} />
                  <span>@{profile.githubUser}</span>
                </div>
                <div className="achievements__gh-fallback-stats">
                  {GH_FALLBACK_STATS.map((s) => (
                    <div key={s.label}>
                      <span className="achievements__gh-fallback-value">{s.value}</span>
                      <span className="mono">{s.label}</span>
                    </div>
                  ))}
                </div>
              </a>
            ) : (
              <img
                className="achievements__gh-card"
                src={`https://github-readme-stats.vercel.app/api?username=${profile.githubUser}&show_icons=true&theme=${ghTheme}&hide_border=true&bg_color=00000000`}
                alt={`GitHub stats for ${profile.githubUser}`}
                loading="lazy"
                onError={() => setGhCardFailed(true)}
              />
            )}
            <div className="achievements__leetcode">
              <span className="mono">LeetCode Rating</span>
              <span className="achievements__leetcode-value">{profile.leetcodeRating}</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
