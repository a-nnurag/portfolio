# Setting up the blog editor (`/admin`)

Your site now has a real writing page at `/admin` — a proper editor with image upload, powered by
[Sveltia CMS](https://github.com/sveltia/sveltia-cms). There's no database and nothing extra to run:
when you click "Publish," it commits a markdown file (and any images you added) straight to your
GitHub repo, which triggers a normal redeploy. Your site is usually live with the new post within
30–60 seconds.

Because it writes to your GitHub repo, this needs one-time setup that only you can do (it requires
your own GitHub/Vercel/Cloudflare accounts). None of it needs touching again after today.

## 1. Push this project to GitHub

If you haven't already:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
```

Create a new repo at [github.com/new](https://github.com/new) (call it whatever you like, e.g.
`portfolio`), then:

```bash
git remote add origin https://github.com/a-nnurag/YOUR-REPO-NAME.git
git push -u origin main
```

## 2. Deploy to Vercel

- [vercel.com](https://vercel.com) → New Project → import the GitHub repo you just created → Deploy
  (it auto-detects Vite, no config needed).
- Note the URL Vercel gives you, e.g. `https://your-portfolio.vercel.app`.

## 3. Deploy the OAuth relay (one-time, free)

The editor needs a tiny middleman to let GitHub confirm "yes, this is really the repo owner" —
Sveltia provides an official one that runs free on Cloudflare's free tier.

- Go to [github.com/sveltia/sveltia-cms-auth](https://github.com/sveltia/sveltia-cms-auth) and use
  its "Deploy to Cloudflare Workers" button (needs a free Cloudflare account).
- After it deploys, copy the Worker URL, e.g. `https://sveltia-cms-auth.YOUR-NAME.workers.dev`.

## 4. Create a GitHub OAuth App

- Go to [github.com/settings/developers](https://github.com/settings/developers) → **OAuth Apps** →
  **New OAuth App**.
- **Application name**: anything, e.g. "Portfolio CMS"
- **Homepage URL**: your Vercel URL from step 2
- **Authorization callback URL**: `<your worker URL from step 3>/callback`
- Register the app, then click **Generate a new client secret**. Copy both the **Client ID** and
  **Client Secret** — you'll need them in the next step.

## 5. Add the OAuth credentials to the Worker

- In the Cloudflare dashboard: **Workers & Pages** → your worker → **Settings** → **Variables**.
- Add:
  - `GITHUB_CLIENT_ID` = the Client ID from step 4
  - `GITHUB_CLIENT_SECRET` = the Client Secret from step 4 (encrypt it)
  - `ALLOWED_DOMAINS` = your Vercel domain, e.g. `your-portfolio.vercel.app` (recommended — restricts
    the relay to only your own site)

## 6. Point this repo's config at your real values

Edit [`public/admin/config.yml`](public/admin/config.yml):

```yaml
backend:
  name: github
  repo: a-nnurag/YOUR-REPO-NAME # from step 1
  branch: main
  base_url: https://sveltia-cms-auth.YOUR-NAME.workers.dev # from step 3
```

Commit and push — Vercel redeploys automatically.

## 7. Write your first post

Visit `https://your-portfolio.vercel.app/admin`, click **Log in with GitHub**, authorize the app,
and you'll see the "Blog Posts" collection with a **New Blog Posts** button. Fill in the title,
date, excerpt, drag in a cover image, write the body, hit **Publish** — it commits directly to your
repo and your site redeploys with the new post live.

**Note**: because it's GitHub OAuth tied to your repo, only accounts with push access to your repo
(i.e., you) can actually publish — this is safe even though your repo can be public.

---

**Note**: `/admin` only works on the deployed site (or `npm run preview` after `npm run build`) —
`npm run dev`'s dev server always shows the homepage at that URL instead, since its routing takes
priority over the static admin page in development mode. This doesn't affect the real site.

You can still add posts the old way too (copying
[`src/content/blog/_TEMPLATE.md.txt`](src/content/blog/_TEMPLATE.md.txt) and committing by hand) —
the editor and manual files both write to the exact same `src/content/blog/` folder, so they're
fully interchangeable.
