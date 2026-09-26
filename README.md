# Brampton Mayor

Campaign website for Nathaniel “Nate” Peart — **Vite**, **React 19**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**.

## Quick start (development)

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

- Output folder: **`dist/`** — deploy this to your static host.
- `npm run lint` — optional check before release.

## Pre-launch checklist

1. Edit **`config/campaign.ts`**: donation URL, social links, disclaimer, `canonicalBase`, email/phone.
2. Update **`public/sitemap.xml`** and **`index.html`** canonical URL if the domain changes.
3. Replace placeholder **Privacy Policy** link when ready.
4. Run `npm run build` and test `npm run preview` on phone and desktop.

## Deploy

| Platform | Notes |
|----------|--------|
| **Netlify** | Uses `netlify.toml` + `public/_redirects` (SPA fallback). |
| **Vercel** | Uses `vercel.json` rewrites. |
| **Cloudflare Pages** | Build: `npm run build`, output: `dist`, add SPA rule `/* → /index.html`. |
| **Any static host** | Upload `dist/`; configure **all routes → `index.html`** for React Router. |

## Configuration

See `config/campaign.ts` for site name, candidate copy, images, and donation link.

## Contact form & email (SMTP)

Submissions POST to `/api/contact` and are sent via Gmail SMTP (server-side only).

1. Copy `.env.example` to `.env` and set `SMTP_USER`, `SMTP_PASS` (Gmail app password), and `MAIL_TO`.
2. Local dev: `npm run dev` — Vite serves the API route in development.
3. Test SMTP: `npm run test:smtp`
4. **Vercel / Netlify:** add the same variables in the host dashboard (do not commit `.env`).

## Stack

React Router · React Hook Form · Zod · Lucide icons
