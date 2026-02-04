# 3D Interactive Portfolio (React + Three.js)

An interactive, modern portfolio with a lightweight 3D hero scene, smooth motion, and content-driven sections:

- Hero + **3D Canvas** (React Three Fiber + Drei)
- About / Skills / Projects / Experience / Achievements / Contact
- **Single source of truth** for your content in `src/content/profile.ts`
- Contact form supports **EmailJS** (optional) and falls back to `mailto:`

## Quick start

From `d:\3d-Portfolio\portfolio`:

```bash
npm install
npm run dev
```

## Customize your content

Edit:

- `src/content/profile.ts` — name, title, bio, socials, skills, projects, experience, achievements, contact info

## Enable contact form delivery (optional)

Create `portfolio/.env`:

```bash
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

If you don’t set these, the form opens your email client instead.

## Build

```bash
npm run build
npm run preview
```

