# mySalah Web — Project Memory

## Project Overview
- **Next.js 16** (App Router), React 19, Tailwind CSS v4
- Islamic prayer companion app landing website
- Brand color: Olive Green `#808000`
- 2 pages: `/` (landing) and `/privacy`

## Key File Paths
- `src/app/globals.css` — Full design system (CSS custom properties, animations, components)
- `src/app/layout.js` — Inter font, metadata, theme init script, Material Symbols CDN
- `src/app/page.js` — Landing page composition
- `src/app/privacy/page.js` — Privacy policy page
- `src/components/` — All section components
- `public/images/` — Feature thumbnails (99-names, daily-verse, hadiths, tasbih)
- `public/images/mockups/` — 15 app screenshots
- `public/icon.png` — App logo (note: NOT at `/images/icon.png`)

## Architecture
- Theme switching via `data-theme` attribute on `<html>`, stored in `localStorage` as `ms-theme`
- Scroll animations via IntersectionObserver in `AnimationsInit.js` (client component)
- Material Symbols Outlined loaded via Google Fonts CDN in layout `<head>`
- Responsive CSS in globals.css (not styled-jsx — App Router server components can't use it)
- Server components: Features, DeepDives, PrivacyBanner, DownloadCTA, Footer
- Client components: Navbar, Hero, Carousel, AnimationsInit

## Design System
- Light mode: `--background: #FFFFFF`, `--surface: #F5F5F0`
- Dark mode: `--background: #0E1010`, `--surface: #1A1D1A`
- Phone frame: `.phone-frame` + `.frame-inner` CSS classes with CSS notch
- Scroll animations: classes `anim-fade-up`, `anim-from-left`, `anim-from-right` + `data-delay` attr

## Important Notes
- Do NOT use `styled-jsx` in server components (causes build errors)
- Do NOT pass event handlers (onMouseEnter etc.) in server component props
- Image paths: `/images/mockups/filename.png` and `/icon.png`
- `apos;` HTML entities don't work in JS string arrays — use actual apostrophes
- Build command: `npm run build` — currently passes cleanly
