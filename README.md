# BudAI — Personal Services Website

A React + Vite site for BudAI: personal training, Python & math tutoring, AI consulting,
custom automations, book publishing help, and coaching. Built to be hosted **free on
GitHub Pages** (GitHub Pages only serves static files — no backend needed or supported).

## Run locally

```bash
npm install
npm run dev        # dev server at http://localhost:5173
npm run build      # production build into dist/
npm run preview    # preview the production build
```

## One-time setup steps

### 1. Publish to GitHub Pages

1. Create a new repository on GitHub (any name works, e.g. `budai-website`).
2. Push this project to it:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
4. Done — every push to `main` auto-builds and deploys via
   `.github/workflows/deploy.yml`. Your site will be at
   `https://YOUR_USERNAME.github.io/YOUR_REPO/`.

### 2. Make the contact form work (Formspree)

The inquiry form on the Contact page emails submissions to you via
[Formspree](https://formspree.io) (free tier: 50 submissions/month).

1. Sign up free at formspree.io with `mikehj122498@gmail.com`.
2. Click **New Form**, name it anything (e.g. "BudAI Inquiries").
3. Copy the form's ID from the endpoint it shows you
   (`https://formspree.io/f/abcd1234` → the ID is `abcd1234`).
4. In `src/pages/Contact.jsx`, replace `YOUR_FORM_ID` with that ID.
5. Push the change — form submissions now arrive in your Gmail inbox, including
   which service the person is asking about.

Until this is done, the form shows a friendly error directing people to email you
directly, and the email/phone buttons always work regardless.

## Where things live

- `src/data/services.js` — **all services, contact info, guarantee text, and book info.**
  To add or edit a service, edit this one file; the Services page and the contact
  form dropdown update automatically.
- `src/pages/` — Home, Services, Contact pages
- `src/components/` — Navbar, Footer, ServiceAccordion, GuaranteeBanner
- `src/index.css` — theme (colors are CSS variables at the top)
- `src/assets/` — your photo and the book cover
