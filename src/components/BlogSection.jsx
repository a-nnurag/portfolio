import { Link } from 'react-router-dom'
import { FiArrowRight, FiClock, FiLinkedin } from 'react-icons/fi'
import Reveal from './Reveal'
import { posts } from '../lib/posts'
import { profile } from '../data/content'
import './BlogSection.css'

function formatDate(date) {
  if (!date) return ''
  return new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export default function BlogSection() {
  const latest = posts.slice(0, 3)

  return (
    <section id="blog" className="section blog">
      <div className="container">
        <Reveal>
          <p className="eyebrow">05 · Blog</p>
          <h2 className="section-title">Things I've written</h2>
          <p className="section-lead">
            Notes on what I build and what I learn along the way.
          </p>
        </Reveal>

        {latest.length === 0 ? (
          <Reveal delay={0.05} className="blog__empty">
            <p>I'm just getting started writing here. In the meantime, I've been posting on LinkedIn.</p>
            <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
              <FiLinkedin /> Read my posts on LinkedIn
            </a>
          </Reveal>
        ) : (
          <>
            <div className="blog__grid">
              {latest.map((post, i) => (
                <Reveal key={post.slug} delay={i * 0.08}>
                  <Link to={`/blog/${post.slug}`} className="blog-card">
                    {post.cover && (
                      <div className="blog-card__cover">
                        <img src={post.cover} alt="" loading="lazy" />
                      </div>
                    )}
                    <div className="blog-card__body">
                      <p className="blog-card__meta mono">
                        {formatDate(post.date)} · <FiClock size={12} /> {post.readingTime} min read
                      </p>
                      <h3>{post.title}</h3>
                      <p className="blog-card__excerpt">{post.excerpt}</p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.2}>
              <Link to="/blog" className="blog__view-all">
                View all posts <FiArrowRight />
              </Link>
            </Reveal>
          </>
        )}
      </div>
    </section>
  )
}
