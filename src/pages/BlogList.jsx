import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiClock, FiLinkedin } from 'react-icons/fi'
import { posts } from '../lib/posts'
import { profile } from '../data/content'
import '../components/BlogSection.css'
import './BlogList.css'

function formatDate(date) {
  if (!date) return ''
  return new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export default function BlogList() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="page blog-list">
      <div className="container">
        <p className="eyebrow">Blog</p>
        <h1 className="section-title">All posts</h1>
        <p className="section-lead">Everything I've written, newest first.</p>

        {posts.length === 0 ? (
          <div className="blog__empty">
            <p>No posts published yet. In the meantime, I've been posting on LinkedIn.</p>
            <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
              <FiLinkedin /> Read my posts on LinkedIn
            </a>
          </div>
        ) : (
          <div className="blog__grid blog-list__grid">
            {posts.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="blog-card">
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
            ))}
          </div>
        )}

        <Link to="/" className="blog-list__back">← Back home</Link>
      </div>
    </main>
  )
}
