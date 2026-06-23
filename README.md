# Sithuwillata Athwalak

Homepage UI for a Sri Lankan child-education charity — _“From Small Acts of Kindness to Brighter Futures.”_

Built with **React + Vite + TypeScript + Tailwind CSS + Framer Motion + GSAP**. Layout/feel inspired by newstoryhomes.org, fully rebranded with the charity's yellow + charcoal logo system.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
```

## Brand colours (from the logo)

| Token                | Hex       | Use                       |
| -------------------- | --------- | ------------------------- |
| `brand-yellow`       | `#F4B400` | Primary / CTAs            |
| `brand-charcoal`     | `#4A4A48` | Text, dark sections       |
| `brand-cream`        | `#FFF8E5` | Soft warm page background |
| `brand-white`        | `#FFFFFF` | Cards                     |

## Things to swap with your real assets

1. **Hero video** — `src/components/Hero.tsx` → `HERO_VIDEO_SRC` (currently a free placeholder clip). Drop your own footage in `/public` and point to `/hero.mp4`. Comments in the file list good free sources.
2. **Logo** — `src/components/Logo.tsx` renders an SVG re-creation of the two-hands mark. To use your exact PNG, save it to `public/logo.png` and follow the comment block at the top of that file.
3. **Section images** — every `<img>` uses a free Unsplash placeholder; replace the URLs with your own photos of school visits, donation drives, and students.

## Section structure

Navbar (transparent → solid, "Get Involved" mega menu) · Hero (video) · Supported By strip · Core Process (3 steps) · Impact Model (2 columns) · Featured Story · Impact Numbers (GSAP count-up) · Partner With Us (3 CTAs) · Newsletter · Footer.

> Homepage UI only. No backend / database wired up yet (the newsletter form just shows a thank-you state locally).
