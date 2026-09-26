# SubZero Sparks — Team Portfolio

A plain React 19 + Vite + Tailwind CSS v4 single-page portfolio site. No other frameworks required.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually http://localhost:5173).

## Deploy on Vercel

1. Push this folder to a GitHub repository.
2. Go to https://vercel.com/new and import that repository.
3. Vercel auto-detects Vite — leave all settings as-is and click **Deploy**.

That's it. Every future push to GitHub redeploys the site automatically.

## Editing the site

Everything you might want to change lives in one file: **`src/config/site.ts`** —
team name, tagline, intro paragraph, the three solution cards (title, write-up,
portfolio link) and the contact email.

To swap the team photo or the logo, replace `src/assets/team-photo.jpg` or
`src/assets/logo.png` with your own file (keep the same name).
