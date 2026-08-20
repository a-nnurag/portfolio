// Loads every markdown post in src/content/blog at build time, parses simple
// YAML-ish frontmatter by hand (no extra dependency needed for this), and
// exposes them sorted newest-first.

const rawPosts = import.meta.glob('../content/blog/*.md', { query: '?raw', import: 'default', eager: true })

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { data: {}, content: raw }

  const [, block, content] = match
  const data = {}

  block.split('\n').forEach((line) => {
    const line2 = line.trim()
    if (!line2) return
    const idx = line2.indexOf(':')
    if (idx === -1) return
    const key = line2.slice(0, idx).trim()
    let value = line2.slice(idx + 1).trim()

    if (value.startsWith('[') && value.endsWith(']')) {
      value = value
        .slice(1, -1)
        .split(',')
        .map((v) => v.trim().replace(/^["']|["']$/g, ''))
        .filter(Boolean)
    } else {
      value = value.replace(/^["']|["']$/g, '')
    }

    data[key] = value
  })

  return { data, content: content.trim() }
}

function slugFromPath(path) {
  return path.split('/').pop().replace(/\.md$/, '')
}

function estimateReadingTime(content) {
  const words = content.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 200))
}

export const posts = Object.entries(rawPosts)
  .map(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw)
    return {
      slug: data.slug || slugFromPath(path),
      title: data.title || 'Untitled post',
      date: data.date || '',
      excerpt: data.excerpt || '',
      cover: data.cover || '',
      tags: Array.isArray(data.tags) ? data.tags : [],
      draft: String(data.draft).toLowerCase() === 'true',
      readingTime: estimateReadingTime(content),
      content,
    }
  })
  .filter((post) => !post.draft)
  .sort((a, b) => new Date(b.date) - new Date(a.date))

export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug)
}
