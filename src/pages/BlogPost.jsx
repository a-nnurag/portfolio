import { useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { FiArrowLeft, FiClock } from 'react-icons/fi'
import { getPostBySlug } from '../lib/posts'
import Markdown from '../components/Markdown'
import './BlogPost.css'

function formatDate(date) {
  if (!date) return ''
  return new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  return (
    <main className="page blog-post">
      <div className="container blog-post__container">
        <Link to="/blog" className="blog-post__back"><FiArrowLeft /> All posts</Link>

        <p className="blog-post__meta mono">
          {formatDate(post.date)} · <FiClock size={13} /> {post.readingTime} min read
        </p>
        <h1 className="blog-post__title">{post.title}</h1>

        {post.tags.length > 0 && (
          <div className="blog-post__tags">
            {post.tags.map((tag) => (
              <span key={tag} className="pill">{tag}</span>
            ))}
          </div>
        )}

        {post.cover && (
          <div className="blog-post__cover">
            <img src={post.cover} alt="" />
          </div>
        )}

        <Markdown>{post.content}</Markdown>
      </div>
    </main>
  )
}
