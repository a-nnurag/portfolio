# Setting up the blog editor (`/admin`)

Your site now has a real writing page at `/admin` — a proper editor with image upload, powered by
[Sveltia CMS](https://github.com/sveltia/sveltia-cms). There's no database and nothing extra to run:
when you click "Publish," it commits a markdown file (and any images you added) straight to your
GitHub repo, which triggers a normal redeploy. Your site is usually live with the new post within
30–60 seconds.

Because it writes to your GitHub repo, this needs one-time setup that only you can do (it requires
your own GitHub and Netlify accounts). None of it needs touching again after today.

Your repo is already pushed to [github.com/a-nnurag/portfolio](https://github.com/a-nnurag/portfolio),
so you're starting from step 1 below.

## 1. Deploy to Netlify

- [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import an existing project** →
  connect GitHub → pick the `portfolio` repo → Deploy (it auto-detects Vite, no config needed;
  `public/_redirects` already handles routing for `/blog` and `/admin`).
- Note the URL Netlify gives you, e.g. `https://your-portfolio.netlify.app` (you can rename this or
  add a custom domain later in **Site configuration → Domain management**).

## 2. Create a GitHub OAuth App

- Go to [github.com/settings/developers](https://github.com/settings/developers) → **OAuth Apps** →
  **New OAuth App**.
- **Application name**: anything, e.g. "Portfolio CMS"
- **Homepage URL**: your Netlify URL from step 1
- **Authorization callback URL**: `https://api.netlify.com/auth/done` (exactly this — it's Netlify's
  own URL, not your site's)
- Click **Register application**, then click **Generate a new client secret**. Keep this tab open —
  you need both the **Client ID** and **Client Secret** in the next step.

## 3. Connect that OAuth App to Netlify

- In your Netlify site: **Project configuration → Access & security → OAuth**.
- Under **Authentication Providers**, click **Install provider**, choose **GitHub**, and paste in the
  Client ID and Client Secret from step 2. Save.

That's it — no separate relay or worker to deploy. Netlify handles the "Log in with GitHub" popup
itself from here on.

## 4. Write your first post

Visit `https://your-portfolio.netlify.app/admin`, click **Log in with GitHub**, authorize the app,
and you'll see the "Blog Posts" collection with a **New Blog Posts** button. Fill in the title,
date, excerpt, drag in a cover image, write the body, hit **Publish** — it commits directly to your
repo and your site redeploys with the new post live.

**Note**: because it's GitHub OAuth tied to your repo, only accounts with push access to your repo
(i.e., you) can actually publish — this is safe even though your repo is public.

---

**Note**: `/admin` only works on the deployed site (or `npm run preview` after `npm run build`) —
`npm run dev`'s dev server always shows the homepage at that URL instead, since its routing takes
priority over the static admin page in development mode. This doesn't affect the real site.

You can still add posts the old way too (copying
[`src/content/blog/_TEMPLATE.md.txt`](src/content/blog/_TEMPLATE.md.txt) and committing by hand) —
the editor and manual files both write to the exact same `src/content/blog/` folder, so they're
fully interchangeable.

## If you switch hosts later

`public/admin/config.yml`'s `base_url: https://api.netlify.com` only works while the site is hosted
on Netlify. If you move to Vercel, GitHub Pages, or anywhere else, you'll need the Cloudflare Worker
relay approach instead — see [github.com/sveltia/sveltia-cms-auth](https://github.com/sveltia/sveltia-cms-auth)
and swap `base_url` to the Worker URL it gives you (same OAuth App from step 2 above, just change its
callback URL to `<worker-url>/callback`).
