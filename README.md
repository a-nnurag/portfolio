# Anurag Chaurasia — Portfolio

Built with React + Vite, Framer Motion for animation, and a light/dark ("bright/black") theme toggle.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

Output goes to `dist/`.

## Editing content

Almost everything text-based lives in one file: [`src/data/content.js`](src/data/content.js) —
profile info, education, experience, skills, projects, and achievements. Edit that file and every
section updates automatically.

- **Resume**: replace [`public/AnuragChaurasia_Resume.pdf`](public/AnuragChaurasia_Resume.pdf) with
  a new file of the same name, or update `profile.resumeUrl` in `content.js` if you rename it.
- **Projects**: each entry in the `projects` array becomes an expandable case-study card
  (problem / approach / impact). Add or remove entries freely.
- **GitHub stats card**: the Achievements section embeds a live stats card from
  `github-readme-stats.vercel.app`. That's a free community-run service and occasionally goes down
  (503) — when it does, the site automatically falls back to a small static stats card instead of a
  broken image, so nothing looks broken to a visitor.
- **LeetCode link**: currently shown as a rating badge only (no link, since I didn't have your exact
  profile URL). Add one in `content.js` if you want it clickable.

## Writing a blog post

There are two ways to publish a post — same underlying files, use whichever's convenient:

**Option A — the editor at `/admin`** (recommended): a real writing page with image upload, built on
[Sveltia CMS](https://github.com/sveltia/sveltia-cms). Needs a one-time setup (GitHub OAuth + a free
Cloudflare relay) before it works — see **[CMS_SETUP.md](CMS_SETUP.md)** for the full walkthrough.
Once set up, publishing there commits directly to your repo and your site redeploys automatically.

**Option B — by hand**: posts are plain Markdown files in [`src/content/blog/`](src/content/blog/),
no setup required.

1. Copy [`src/content/blog/_TEMPLATE.md.txt`](src/content/blog/_TEMPLATE.md.txt) to
   `src/content/blog/your-post-slug.md` (the filename becomes the URL, e.g. `/blog/your-post-slug`).
2. Fill in the frontmatter at the top (`title`, `date`, `excerpt`, optional `cover` and `tags`).
3. Write the post body in Markdown below the `---`.
4. For images: drop the file in `public/blog/images/your-post-slug/` and reference it as
   `![caption](/blog/images/your-post-slug/filename.jpg)`. The same path works for a `cover:` image.
5. Commit and push — it appears automatically on the homepage Blog section (latest 3) and on `/blog`
   (all posts), newest first by `date`. Set `draft: true` in the frontmatter to keep a post out of
   both listings while you're still writing it.

No post files yet = the Blog section shows a "read my LinkedIn posts" fallback instead of an empty
gallery.

## Deploying

Any static host works — the app builds to plain HTML/CSS/JS in `dist/`. Because this site uses
client-side routing (`/blog`, `/blog/:slug`), the host needs to serve `index.html` for unknown paths
too — that's already configured for these:

- **Vercel**: `vercel` (auto-detects Vite; `vercel.json` already has the SPA rewrite)
- **Netlify**: drag-and-drop the `dist/` folder, or connect the repo (`public/_redirects` already
  handles the SPA fallback)
- **GitHub Pages**: needs one extra manual step since it has no server-side rewrites — build, then
  follow the [spa-github-pages](https://github.com/rafgraph/spa-github-pages) 404.html trick, or
  simplest of all, deploy to Vercel/Netlify instead (both are free and zero-config here).

## Notes

- Theme preference is saved to `localStorage` and defaults to the visitor's OS light/dark setting.
- Animations respect `prefers-reduced-motion`.
