# mySalah — MVP Website & Privacy Policy Guide

> **CRITICAL DESIGN MANDATE**: The website UI must NOT look like a generic AI-generated landing page. No cookie-cutter hero sections with gradient blobs, no "Built with AI" aesthetic, no stock illustration vibes. The design must feel **hand-crafted, premium, and intentional** — like a studio-quality product page for a spiritual app. Think Apple product pages meets Islamic geometric art. Every pixel must feel deliberate. If it looks like it could have come from a template or a "generate me a landing page" prompt, it has failed.

---

## Table of Contents

1. [Project Context](#1-project-context)
2. [Website Architecture](#2-website-architecture)
3. [Design System](#3-design-system)
4. [Page-by-Page Specification](#4-page-by-page-specification)
5. [Mockup & Screenshot Strategy](#5-mockup--screenshot-strategy)
6. [Animation Specification](#6-animation-specification)
7. [Privacy Policy (Full Text)](#7-privacy-policy-full-text)
8. [Responsive Breakpoints](#8-responsive-breakpoints)
9. [Dark/Light Mode Implementation](#9-darklight-mode-implementation)
10. [Typography System](#10-typography-system)
11. [Component Library](#11-component-library)
12. [Assets & Resources](#12-assets--resources)
13. [Deployment Notes](#13-deployment-notes)

---

## 1. Project Context

### What is mySalah?

**mySalah** is an Islamic prayer companion app built with React Native / Expo (TypeScript). It helps Muslims track their five daily prayers, maintain streaks, earn achievements, explore Quranic verses, Hadiths, 99 Names of Allah, find nearby mosques, and use a Qibla compass.

### Core Value Proposition (use this language on the website)

- **Track all 5 daily prayers** with one tap — know if you prayed on time, late, or missed
- **Build sacred streaks** — consecutive days of perfect prayer, with milestones at 7, 30, 90, 365 days
- **Earn 30 achievements** across 6 tiers (Bronze → Diamond) — gamified spiritual growth
- **Deep analytics** — weekly/monthly charts, prayer-specific breakdown, 30-day heatmap, grades (A+ to F)
- **Daily Quran verse & Hadiths** — fresh spiritual content every day in English, Urdu & Arabic
- **99 Names of Allah** — swipeable card deck with meanings in English & Urdu
- **Custom Dhikr counter** — create personal remembrance counters with circular progress
- **Qibla compass** — real-time heading with haptic alignment feedback
- **Nearby mosques** — interactive map with walking routes and navigation
- **Fully offline** after first setup — no account, no cloud, no tracking
- **Dark & light mode** — system-aware theming

### Key Differentiators (highlight on website)

1. **Zero accounts, zero cloud** — all data stays on device
2. **Achievement system** — 30 unlockable achievements make consistency rewarding
3. **Not just tracking** — a complete spiritual companion (verse, hadith, dhikr, names, qibla, mosques)
4. **Premium feel** — haptic feedback, spring animations, Islamic geometric ornaments

### Platform Availability

- iOS (primary)
- Android (planned / in progress)

---

## 2. Website Architecture

### Pages

| Route | Page | Purpose |
|-------|------|---------|
| `/` | Landing / Home | Hero, features, mockups, download CTA |
| `/privacy` | Privacy Policy | Legal compliance, trust building |

### Tech Recommendation

Use a modern static-site framework: **Next.js (App Router)**, **Astro**, or plain **HTML/CSS/JS**. The site is just 2 pages — keep it fast.

---

## 3. Design System

### 3.1 Color Palette

The website must use the **exact same palette** as the app. This creates visual continuity between the website and the product.

#### Brand Color

| Name | Hex | Usage |
|------|-----|-------|
| **Olive Green** (Primary) | `#808000` | Buttons, links, accents, CTAs, active states |
| **Olive Green 20%** | `#80800033` | Subtle backgrounds, hover states |
| **Olive Green 10%** | `#8080001A` | Faint tints, card accents |

#### Light Mode

| Token | Hex | Usage |
|-------|-----|-------|
| `--text` | `#11181C` | Primary body text |
| `--subtext` | `#687076` | Secondary text, captions |
| `--background` | `#FFFFFF` | Page background |
| `--surface` | `#F5F5F0` | Card backgrounds, sections |
| `--card` | `#FFFFFF` | Elevated cards |
| `--border` | `#E0E0D8` | Card borders, dividers |
| `--success` | `#4CAF50` | Positive states |
| `--error` | `#F44336` | Negative states |
| `--warning` | `#FF9800` | Caution states |

#### Dark Mode

| Token | Hex | Usage |
|-------|-----|-------|
| `--text` | `#ECEDEE` | Primary body text |
| `--subtext` | `#9BA1A6` | Secondary text, captions |
| `--background` | `#0E1010` | Page background |
| `--surface` | `#1A1D1A` | Card backgrounds, sections |
| `--card` | `#1E221E` | Elevated cards |
| `--border` | `#2A2D2A` | Card borders, dividers |
| `--success` | `#66BB6A` | Positive states |
| `--error` | `#EF5350` | Negative states |
| `--warning` | `#FFA726` | Caution states |

#### Achievement Tier Colors (used for achievement showcase section)

| Tier | Hex | Glow/Shadow |
|------|-----|-------------|
| Bronze | `#CD7F32` | `rgba(205,127,50,0.3)` |
| Silver | `#C0C0C0` | `rgba(192,192,192,0.3)` |
| Gold | `#FFD700` | `rgba(255,215,0,0.3)` |
| Platinum | `#E5E4E2` | `rgba(229,228,226,0.3)` |
| Diamond | `#B9F2FF` | `rgba(185,242,255,0.3)` |
| Special | `#9370DB` | `rgba(147,112,219,0.3)` |

#### Parchment Palette (for verse/hadith card mockup areas)

| Token | Light | Dark |
|-------|-------|------|
| Card BG | `#FAF3E1` | `#17150C` |
| Border | `#DEC98E` | `#2E2915` |
| Arabic text | `#1A1400` | `#EDE0C0` |
| English text | `#5A4B28` | `#8A7D5A` |
| Label | `#8B6914` | `#8A7840` |
| Bismillah | `#9A7A18` | `#C4A84A` |

### 3.2 Spacing Scale

Use a **4px base unit**:

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 4px | Tight gaps |
| `--space-2` | 8px | Icon gaps, inline spacing |
| `--space-3` | 12px | Card internal padding (compact) |
| `--space-4` | 16px | Standard padding, section gaps |
| `--space-5` | 20px | Card padding |
| `--space-6` | 24px | Section padding |
| `--space-8` | 32px | Large section gaps |
| `--space-10` | 40px | Hero vertical spacing |
| `--space-12` | 48px | Section vertical separation |
| `--space-16` | 64px | Major section breaks |
| `--space-20` | 80px | Hero top/bottom padding |
| `--space-24` | 96px | Full section vertical padding |

### 3.3 Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 8px | Small pills, badges |
| `--radius-md` | 12px | Buttons, inputs |
| `--radius-lg` | 16px | Cards |
| `--radius-xl` | 24px | Feature cards, mockup frames |
| `--radius-full` | 9999px | Circular elements, pill buttons |

### 3.4 Shadows

**Light Mode:**
```css
--shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
--shadow-md: 0 4px 12px rgba(0,0,0,0.08);
--shadow-lg: 0 8px 30px rgba(0,0,0,0.12);
--shadow-glow: 0 0 40px rgba(128,128,0,0.15);
```

**Dark Mode:**
```css
--shadow-sm: 0 1px 2px rgba(0,0,0,0.2);
--shadow-md: 0 4px 12px rgba(0,0,0,0.3);
--shadow-lg: 0 8px 30px rgba(0,0,0,0.4);
--shadow-glow: 0 0 40px rgba(128,128,0,0.2);
```

---

## 4. Page-by-Page Specification

### 4.1 Landing Page (`/`)

The landing page is a **single long-scroll page** with distinct sections. Each section must feel like a cinematic reveal as the user scrolls.

---

#### SECTION 1: Navigation Bar (sticky)

**Layout:** Horizontal bar, fixed to top on scroll.

| Element | Details |
|---------|---------|
| **Logo** | Website icon (`public/images/icon.png`) + "mySalah" text in primary font, `font-weight: 700` |
| **Nav Links** | "Features", "Screenshots", "Privacy" — smooth-scroll anchors (Features & Screenshots are on this page, Privacy links to `/privacy`) |
| **Theme Toggle** | Sun/moon icon button — toggles dark/light mode |
| **CTA Button** | "Download" or "Get the App" — Olive Green background, white text, `border-radius: 9999px` |

**Behavior:**
- Transparent background at top of page, solid `--background` with `backdrop-filter: blur(12px)` on scroll
- Shrinks slightly on scroll (logo smaller, less padding)
- Mobile: hamburger menu with slide-in drawer

---

#### SECTION 2: Hero

**This is the most critical section. It must not look generic.**

**Layout concept:** Split layout — left side has text content, right side has a phone mockup floating at an angle with the app's home screen visible. The phone should have a subtle shadow and slight 3D perspective tilt.

**Left Content:**
- **Eyebrow text** (above headline): "Islamic Prayer Companion" — uppercase, `letter-spacing: 3px`, `font-size: 12px`, color `--subtext`
- **Headline**: "Your prayers,\nperfectly tracked." — `font-size: 56px` desktop / `40px` mobile, `font-weight: 800`, `line-height: 1.1`, color `--text`. The word "perfectly" should be in Olive Green.
- **Subheadline**: "Track all five daily prayers, build sacred streaks, earn achievements, and deepen your connection — all in one beautiful, offline-first app." — `font-size: 18px`, `line-height: 1.7`, color `--subtext`, `max-width: 480px`
- **CTA Row:** Two buttons side by side:
  - Primary: "Download for iOS" — Olive Green bg, white text, rounded pill, with Apple icon
  - Secondary: "See Features" — transparent bg, Olive Green border, Olive Green text, rounded pill
- **Trust indicator** (below buttons): Small text: "No account needed. No data collected. Completely free." with a lock icon. Color `--subtext`.

**Right Content (Phone Mockup):**
- Display a real screenshot of the home screen inside a phone frame
- Phone frame: use a CSS-drawn iPhone frame (rounded rect with notch) or a minimal device mockup PNG
- Tilt: `transform: perspective(1200px) rotateY(-8deg) rotateX(4deg)`
- Shadow: large diffused shadow underneath
- The screenshot should be `home-screen.png` showing prayer times, streak card, and the greeting

**Background:**
- Subtle geometric Islamic pattern (8-pointed star, very low opacity 3-5%) tiling behind the hero — NOT a gradient blob. Use SVG for the pattern.
- Optional: a very faint radial gradient of Olive Green emanating from the phone mockup area

---

#### SECTION 3: Feature Highlights (Quick Grid)

**Layout:** Centered headline + 3-column grid (2-col on tablet, 1-col on mobile)

**Headline:** "Everything you need for your spiritual journey" — centered, `font-size: 36px`, `font-weight: 700`
**Subtext:** "Built for Muslims who want consistency, clarity, and connection." — centered, `font-size: 16px`, color `--subtext`

**Feature Cards (6 cards):**

Each card:
- Icon (Material Icon name from the app) rendered at 32px in Olive Green
- Title: `font-size: 18px`, `font-weight: 700`
- Description: `font-size: 14px`, `line-height: 1.6`, color `--subtext`
- Card: `--card` background, `--border` border, `border-radius: 16px`, padding `24px`
- On hover: slight upward translate (`translateY(-4px)`) + shadow increase, `transition: 0.3s ease`

| # | Icon | Title | Description |
|---|------|-------|-------------|
| 1 | `access-time` | Prayer Tracking | Track all five daily prayers with a single tap. Know instantly if you prayed on time, late, or missed — with smart locking to prevent accidental changes. |
| 2 | `local-fire-department` | Sacred Streaks | Build consecutive days of perfect prayer. Hit milestones at 7, 30, 90, and 365 days. Your streak is your spiritual momentum. |
| 3 | `emoji-events` | 30 Achievements | Earn Bronze to Diamond tier achievements across 6 categories. Hidden achievements reveal themselves when unlocked. Gamified growth that keeps you motivated. |
| 4 | `bar-chart` | Deep Analytics | Weekly and monthly charts, prayer-specific breakdowns, 30-day heatmaps, and letter grades (A+ to F). Understand your patterns like never before. |
| 5 | `auto-stories` | Daily Inspiration | Fresh Quranic verse and authenticated Hadiths every day — in English, Urdu, and Arabic. Plus the 99 Names of Allah in a swipeable card deck. |
| 6 | `explore` | Qibla & Mosques | Real-time Qibla compass with haptic alignment feedback. Find nearby mosques on an interactive map with walking routes and navigation. |

---

#### SECTION 4: App Showcase (Screenshot Carousel)

**Purpose:** Show the actual app in action with real screenshots.

**Layout:** Horizontally scrollable row of phone mockups, each showing a different screen. Center the active one, scale down the side ones.

**Screens to showcase (in order, using actual filenames from `public/images/mockups/`):**

1. **Home Screen** — `home-screen.png` — Prayer times list with streak card and greeting
2. **Analytics (Daily Completion)** — `salahDailyCompletion.png` — Bar chart with daily completion
3. **Analytics (Performance)** — `prayerPerformance.png` — Prayer performance breakdown
4. **Analytics (Overview)** — `analytic-screen.png` — Grade card, metrics grid
5. **Achievements** — `achievements.png` — Achievement grid with progress rings and tier badges
6. **Daily Verse** — `dailyVerse-screen.png` — Parchment-style card with Arabic and English text
7. **Daily Hadiths** — `dailyHadiths-screen.png` — Authenticated hadith cards
8. **Share Hadith** — `shareHadhit.png` — Hadith export/share preview
9. **Qibla Compass** — `qiblaFinder-screen.png` — Rotating dial with Kaaba marker
10. **Nearby Mosques** — `mosqueFinder-screen.png` — Map view with mosque markers and route
11. **Dhikr Counter** — `dhikar-counter-screen.png` — Circular progress ring with large count
12. **My Dhikr List** — `mydhikar-screen.png` — Dhikr list overview
13. **New Dhikr** — `new-dhikar-screen.png` — Create dhikr form
14. **99 Names of Allah** — `99Names-screen.png` — Swipeable card with Arabic name and meaning
15. **Settings** — `settings-screen.png` — App settings

**Interaction:**
- Auto-scroll every 4 seconds
- Manual swipe/drag
- Dot indicators below
- Each mockup has a label below it: screen name
- Active mockup: `scale(1)`, side mockups: `scale(0.85)`, `opacity: 0.6`

**Phone Frame:**
- Consistent device frame around all screenshots
- Subtle shadow beneath each phone

**Section Background:**
- Slightly tinted surface color (`--surface`)
- Geometric pattern border (top and bottom) — thin line of repeating Islamic motif

---

#### SECTION 5: Feature Deep Dives

**Layout:** Alternating left-right sections. Each section pairs a phone mockup on one side with detailed text on the other. Alternate which side the phone is on.

**Deep Dive 1: Prayer Tracking**
- **Phone Side:** `home-screen.png` — showing prayer cards with status badges
- **Text Side:**
  - Title: "Track every prayer, every day"
  - Bullet points:
    - "One-tap prayer logging with automatic time detection"
    - "Smart status system: Current, Next, Upcoming, Missed"
    - "Locking prevents accidental changes once the next prayer starts"
    - "Prayer windows from Fajr through Isha — based on your city"
  - Small detail: "Powered by Aladhan API — accurate times for 22+ cities worldwide"

**Deep Dive 2: Streaks & Achievements**
- **Phone Side:** `achievements.png` — showing unlocked achievements with tier colors
- **Text Side:**
  - Title: "Turn consistency into visible progress"
  - Bullet points:
    - "30 achievements across Bronze, Silver, Gold, Platinum, Diamond, and Special tiers"
    - "Streak milestones: 7-day, 30-day, 90-day, 365-day marks with celebrations"
    - "Hidden achievements that reveal themselves when unlocked"
    - "Points system — track your total score as you grow"
  - Achievement tier visual: Row of 6 small colored circles (Bronze → Special) with tier names

**Deep Dive 3: Analytics**
- **Phone Side:** `analytic-screen.png` or `prayerPerformance.png` — showing grade card, bar chart, and performance breakdown
- **Text Side:**
  - Title: "Understand your prayer patterns"
  - Bullet points:
    - "Letter grades from A+ to F based on your completion rate"
    - "Weekly and monthly bar charts — tap any day for details"
    - "Prayer-specific completion rates with 7-day color-coded history"
    - "30-day heatmap showing your consistency at a glance"
    - "Trend tracking — see if you're improving or declining"

**Deep Dive 4: Spiritual Content**
- **Phone Side:** `dailyVerse-screen.png` — showing the parchment card
- **Text Side:**
  - Title: "Daily spiritual nourishment"
  - Bullet points:
    - "A new Quranic verse every day — Arabic with English and Urdu translations"
    - "Authenticated Hadiths refreshed daily with narrator and source details"
    - "99 Names of Allah in a beautiful swipeable card deck"
    - "Custom Dhikr counter — create your own remembrance with target goals"
    - "Share verses and hadiths as beautiful images"

**Deep Dive 5: Qibla & Mosques**
- **Phone Side:** `qiblaFinder-screen.png` or `mosqueFinder-screen.png`
- **Text Side:**
  - Title: "Find your direction, find your community"
  - Bullet points:
    - "Real-time Qibla compass using device sensors"
    - "Haptic feedback when you're aligned with Makkah"
    - "Interactive map showing nearby mosques"
    - "Walking routes and one-tap navigation to any mosque"

---

#### SECTION 6: Privacy & Trust Banner

**Layout:** Full-width banner with centered content. Distinguished background (Olive Green at 5% opacity or `--surface`).

**Content:**
- Icon: Lock or Shield icon (large, 48px, Olive Green)
- Headline: "Your data stays with you. Always."
- Body: "mySalah requires no account, no sign-up, no email. All your prayer records, streaks, and achievements are stored locally on your device. We don't collect, transmit, or store any personal data. Period."
- Link: "Read our Privacy Policy →" — links to `/privacy`

---

#### SECTION 7: Download / CTA

**Layout:** Centered, generous vertical padding.

**Content:**
- Headline: "Begin your journey today" — large, bold
- Subtext: "Free. Private. Beautiful." — `--subtext`
- Download button: Large pill button, Olive Green, "Download for iOS" with Apple icon
- Below: "Android coming soon" in small text, `--subtext`
- Optional: App Store badge (official Apple badge)

---

#### SECTION 8: Footer

**Layout:** Dark strip (`--surface` or slightly darker).

**Content:**
- Left: "mySalah" logo + tagline: "Your Islamic prayer companion"
- Center: Links: "Features" · "Privacy Policy" · "Contact"
- Right: Social icons (if any) or just the year "© 2026 mySalah"
- Bottom fine print: "Made with ❤️ for the Muslim Ummah"

---

### 4.2 Privacy Policy Page (`/privacy`)

**Layout:**
- Same nav bar as landing page
- Clean, readable single-column layout
- Max width: 720px, centered
- Standard article typography

**Header:**
- Title: "Privacy Policy"
- Last updated date: "Last updated: March 2026"
- Subtitle: "Your privacy is our priority. mySalah is built with privacy by design."

**Content:** See [Section 7](#7-privacy-policy-full-text) for full text.

**Footer:** Same as landing page.

---

## 5. Mockup & Screenshot Strategy

### Screenshot Source

All screenshots are already available in `public/images/mockups/` in the website project. These are ready to use — no additional screenshots needed.

### Available Mockup Files

```
public/images/mockups/
├── 99Names-screen.png          ← 99 Names of Allah swipe deck
├── achievements.png            ← Achievements screen with tier badges
├── analytic-screen.png         ← Analytics overview (grade, metrics)
├── dailyHadiths-screen.png     ← Daily Hadiths cards
├── dailyVerse-screen.png       ← Daily Verse parchment card
├── dhikar-counter-screen.png   ← Dhikr counter with progress ring
├── home-screen.png             ← Home screen (prayer times, streak, greeting)
├── mosqueFinder-screen.png     ← Nearby mosques map with markers & route
├── mydhikar-screen.png         ← My Dhikr list
├── new-dhikar-screen.png       ← Create new dhikr form
├── prayerPerformance.png       ← Prayer-specific performance breakdown
├── qiblaFinder-screen.png      ← Qibla compass with heading
├── salahDailyCompletion.png    ← Daily completion bar chart
├── settings-screen.png         ← Settings screen
└── shareHadhit.png             ← Hadith share/export preview
```

### Other Images in `public/images/`

```
public/images/
├── 99-names.png          ← 99 Names quick-access thumbnail/icon
├── daily-verse.png       ← Daily Verse quick-access thumbnail/icon
├── hadiths.png           ← Hadiths quick-access thumbnail/icon
├── tasbih.png            ← Tasbih/Dhikr quick-access thumbnail/icon
└── icon.png              ← Website logo (use for nav bar & favicon)
```

### Recommended Usage per Section

| Website Section | Mockup File(s) |
|----------------|----------------|
| Hero (phone mockup) | `home-screen.png` |
| Carousel / Screenshot showcase | All 15 mockup files in order listed above |
| Deep Dive: Prayer Tracking | `home-screen.png` |
| Deep Dive: Streaks & Achievements | `achievements.png` |
| Deep Dive: Analytics | `analytic-screen.png`, `prayerPerformance.png`, `salahDailyCompletion.png` |
| Deep Dive: Spiritual Content | `dailyVerse-screen.png`, `dailyHadiths-screen.png`, `99Names-screen.png` |
| Deep Dive: Qibla & Mosques | `qiblaFinder-screen.png`, `mosqueFinder-screen.png` |
| Deep Dive: Dhikr | `dhikar-counter-screen.png`, `mydhikar-screen.png` |

### Phone Frame Treatment

**Do NOT use a pre-made mockup generator.** Instead, use CSS to create the phone frame:

```css
.phone-frame {
  position: relative;
  width: 280px;
  border-radius: 40px;
  overflow: hidden;
  border: 7px solid var(--phone-bezel); /* #1a1a1a for dark frame, #e5e5e5 for light */
  box-shadow: var(--shadow-lg);
}

.phone-frame img {
  width: 100%;
  display: block;
}

/* Notch (optional, for realism) */
.phone-frame::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 28px;
  background: var(--phone-bezel);
  border-radius: 0 0 16px 16px;
  z-index: 2;
}
```

### Theme-Aware Mockups

The current screenshots are single-theme. They work well in both light and dark website modes since they're displayed inside phone frames. The phone frame bezel color (`--phone-bezel`) and surrounding shadow adapt to the website theme, which provides enough visual distinction.

If dark-mode app screenshots are added later, name them with a `-dark` suffix (e.g., `home-screen-dark.png`) and swap `src` based on theme.

---

## 6. Animation Specification

### 6.1 Scroll-Triggered Animations

Use **Intersection Observer** (native JS) or a library like **Framer Motion** / **GSAP ScrollTrigger**.

**Every section should animate in on scroll.** But subtly — no wild effects.

| Element | Animation | Duration | Easing |
|---------|-----------|----------|--------|
| Section headings | Fade up (0 → 1 opacity, 20px → 0 translateY) | 600ms | `cubic-bezier(0.4, 0, 0.2, 1)` |
| Feature cards | Staggered fade up (each card 100ms delayed) | 500ms | same |
| Phone mockups | Slide in from the side they're on (left or right) + fade | 700ms | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Stats/numbers | Count-up animation (0 → target) | 1200ms | ease-out |
| Bullet points | Fade in + indent from left (10px) | 400ms | staggered 80ms each |

### 6.2 Micro-Interactions

| Element | Interaction | Effect |
|---------|------------|--------|
| Feature cards | Hover | `translateY(-4px)`, shadow increase, `0.25s ease` |
| Buttons (primary) | Hover | Brighten background 10%, subtle glow |
| Buttons (secondary) | Hover | Fill with Olive Green at 10% opacity |
| Nav links | Hover | Olive Green underline slides in from left |
| Phone mockups | Hover | Slight scale up (`1.02`), shadow increase |
| Theme toggle | Click | Rotate icon 180° with spring easing |
| Download button | Hover | Subtle pulse glow (box-shadow animation) |
| Carousel dots | Active | Scale up (1 → 1.4), fill with Olive Green |

### 6.3 Hero Animations (on page load)

Staggered entrance — each element appears sequentially:

1. **0ms**: Eyebrow text fades in
2. **150ms**: Headline slides up + fades in
3. **300ms**: Subheadline slides up + fades in
4. **450ms**: CTA buttons slide up + fades in
5. **600ms**: Trust indicator fades in
6. **400ms**: Phone mockup slides in from right + rotates into position (`0.8s`, spring easing)

### 6.4 Background Animations

- **Islamic geometric pattern** in hero: very slow rotation (`animation: rotate 120s linear infinite`) at 2-3% opacity. Barely perceptible — adds life without distraction.
- **Olive Green glow** behind phone in hero: slow pulse (`animation: glow-pulse 4s ease-in-out infinite`) — opacity oscillates between 0.08 and 0.15.

### 6.5 Page Transition

If using a framework that supports it (Next.js App Router with Framer Motion):
- Cross-fade between landing page and privacy page
- Duration: 300ms

---

## 7. Privacy Policy (Full Text)

Below is the complete privacy policy text to be rendered on the `/privacy` page.

---

### Privacy Policy

**Effective Date:** March 2026
**Last Updated:** March 2026

#### Introduction

mySalah ("the App") is an Islamic prayer tracking application. This Privacy Policy explains how the App handles your information. The short version: **we don't collect any.**

#### Information We Do NOT Collect

mySalah is designed with privacy as a fundamental principle. The App:

- Does **not** require account creation, registration, or sign-in
- Does **not** collect, store, or transmit your personal information to any server
- Does **not** use analytics or tracking SDKs (no Google Analytics, no Firebase Analytics, no Mixpanel, etc.)
- Does **not** share data with third parties
- Does **not** use cookies or similar tracking technologies
- Does **not** collect usage statistics, crash reports, or telemetry

#### Data Stored on Your Device

All App data is stored **locally on your device** using the operating system's built-in storage (AsyncStorage). This includes:

- **Prayer Records:** Which prayers you marked as prayed, timestamps, and on-time status
- **Streak Data:** Your current and longest streak counts
- **Achievement Progress:** Which achievements you've unlocked and when
- **Preferences:** Your selected city, theme preference (light/dark/system), and notification settings
- **Cached Content:** Daily Quranic verse, daily Hadiths, and 99 Names of Allah (cached to reduce API calls)
- **Dhikr Data:** Your custom dhikr names, descriptions, targets, and daily counts

This data:
- Is stored **only** on your device
- Is **never** transmitted to our servers (we don't have servers)
- Is **never** shared with any third party
- Can be deleted at any time by uninstalling the App or clearing App data

#### Network Requests

The App makes the following network requests to provide its functionality:

| Service | Purpose | Data Sent | Provider |
|---------|---------|-----------|----------|
| Prayer Times API | Fetch accurate prayer times | City name and country (from your selected location — not GPS) | [Aladhan](https://aladhan.com) |
| Qibla API | Calculate Qibla direction | Device GPS coordinates (used momentarily, not stored remotely) | [Aladhan](https://aladhan.com) |
| Daily Verse API | Fetch a Quranic verse | None (random verse selection) | Third-party Islamic API |
| Daily Hadith API | Fetch authenticated Hadiths | None (random hadith selection) | Third-party Islamic API |
| Names of Allah API | Fetch 99 Names data | None | Third-party Islamic API |
| Nearby Mosques | Find mosques near you | GPS coordinates (used momentarily for the API query) | OpenStreetMap (Overpass API) |
| Walking Routes | Calculate routes to mosques | Start and end coordinates | OSRM (Open Source Routing Machine) |
| Map Tiles | Display the map | Standard map tile requests | CartoDB / OpenStreetMap |

**Important:** These network requests are made directly from your device to the respective third-party APIs. We do not operate a backend server or proxy. We do not intercept, log, or store any of these requests.

#### Location Data

- The App uses your **device's GPS** only when you actively use the Qibla Compass or Nearby Mosques features
- GPS data is used **momentarily** for the specific function (calculating Qibla direction, finding nearby mosques) and is **not stored** persistently by the App (beyond the current session)
- For prayer times, the App uses your **selected city** (chosen during onboarding from a list of 22 cities), **not** your GPS coordinates
- The App does **not** track your location in the background
- Location data is **never** transmitted to our servers

#### Notifications

- The App may send **local notifications** (prayer reminders, streak alerts, achievement unlocks) if you enable them in Settings
- These notifications are generated and scheduled **entirely on your device**
- No push notification service or external server is involved
- Notification preferences are stored locally and can be disabled at any time

#### Children's Privacy

The App does not knowingly collect any information from anyone, including children under 13. Since no data is collected from any user, COPPA compliance is inherent in the App's design.

#### Data Retention

Since all data is stored locally on your device:
- **You control retention:** Data persists until you uninstall the App or clear its data
- **We retain nothing:** We have no servers, no databases, and no data stores

#### Changes to This Policy

We may update this Privacy Policy from time to time. Changes will be reflected in the "Last Updated" date at the top of this page. Since the App collects no data, material changes are unlikely.

#### Your Rights

Since we collect no personal data, traditional data rights (access, deletion, portability) are not applicable in the conventional sense. However:
- You can **delete all App data** at any time by uninstalling the App
- You can **deny location permission** — the App will still function for prayer tracking, analytics, and achievements (Qibla and Mosques features require location)
- You can **disable notifications** at any time in the App's Settings or your device's system settings

#### Contact

If you have questions or concerns about this Privacy Policy, please contact:

**Email:** [your-email@example.com]

---

## 8. Responsive Breakpoints

| Breakpoint | Name | Layout Notes |
|------------|------|-------------|
| ≥ 1200px | Desktop | Full layout, 3-col feature grid, side-by-side deep dives |
| 960–1199px | Small Desktop | Slightly narrower max-width, same layout |
| 768–959px | Tablet | 2-col feature grid, deep dive mockups stack above text |
| < 768px | Mobile | 1-col everything, hamburger nav, full-width mockups |

**Max Content Width:** `1120px` (centered with auto margins)

**Mobile-Specific:**
- Hero phone mockup moves below text (stacks vertically)
- Feature grid becomes 1-column
- Deep dive sections stack (mockup above, text below)
- Screenshot carousel becomes swipeable with touch
- Nav collapses to hamburger
- Font sizes reduce: headlines 32px, body 15px

---

## 9. Dark/Light Mode Implementation

### Detection

```js
// Check system preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Store user override in localStorage
const userPref = localStorage.getItem('theme'); // 'light' | 'dark' | null (system)
```

### CSS Custom Properties

Apply theme via a `data-theme` attribute on `<html>`:

```css
:root, [data-theme="light"] {
  --text: #11181C;
  --subtext: #687076;
  --background: #FFFFFF;
  --surface: #F5F5F0;
  --card: #FFFFFF;
  --border: #E0E0D8;
  --primary: #808000;
  --phone-bezel: #e5e5e5;
}

[data-theme="dark"] {
  --text: #ECEDEE;
  --subtext: #9BA1A6;
  --background: #0E1010;
  --surface: #1A1D1A;
  --card: #1E221E;
  --border: #2A2D2A;
  --primary: #808000; /* same in both modes */
  --phone-bezel: #1a1a1a;
}
```

### Theme Toggle Behavior

1. Default to system preference
2. User toggle overrides system
3. Persist choice in `localStorage`
4. Toggle button: Sun icon (in dark mode) / Moon icon (in light mode)
5. Smooth transition: `transition: background-color 0.3s ease, color 0.3s ease` on `body`

### Screenshot Paths

All mockup images are referenced from `/images/mockups/`. Example usage:

```html
<img src="/images/mockups/home-screen.png" alt="mySalah Home Screen" />
<img src="/images/mockups/achievements.png" alt="mySalah Achievements" />
```

Website logo:
```html
<img src="/images/icon.png" alt="mySalah" class="nav-logo" />
```

Quick-access thumbnails (can be used as small feature icons on the website):
```html
<img src="/images/daily-verse.png" alt="Daily Verse" />
<img src="/images/hadiths.png" alt="Daily Hadiths" />
<img src="/images/99-names.png" alt="99 Names of Allah" />
<img src="/images/tasbih.png" alt="Dhikr" />
```

---

## 10. Typography System

### Font Selection

**Do NOT use the system font.** Select premium, carefully paired fonts:

**Recommended Pairing:**

| Role | Font | Weight | Fallback |
|------|------|--------|----------|
| Headings | **Inter** or **Satoshi** | 700, 800 | system-ui, sans-serif |
| Body | **Inter** or **Satoshi** | 400, 500 | system-ui, sans-serif |
| Monospace (code, numbers) | **JetBrains Mono** | 400 | monospace |
| Arabic text (if shown on site) | **Amiri** or **Noto Naskh Arabic** | 400, 700 | serif |

**Alternative Pairing (more editorial):**

| Role | Font |
|------|------|
| Headings | **Cabinet Grotesk** (or **Clash Display**) |
| Body | **General Sans** (or **Switzer**) |

Load from Google Fonts or self-host for performance.

### Type Scale

| Token | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| `--text-xs` | 11px | 500 | 1.4 | Fine print, badges |
| `--text-sm` | 13px | 500 | 1.5 | Captions, labels |
| `--text-base` | 15px | 400 | 1.7 | Body text |
| `--text-md` | 16px | 500 | 1.6 | Slightly emphasized body |
| `--text-lg` | 18px | 600 | 1.5 | Card titles, sub-features |
| `--text-xl` | 22px | 700 | 1.3 | Section subtitles |
| `--text-2xl` | 28px | 700 | 1.2 | Section headings |
| `--text-3xl` | 36px | 700 | 1.15 | Major section headings |
| `--text-4xl` | 48px | 800 | 1.1 | Hero headline (mobile) |
| `--text-5xl` | 56px | 800 | 1.05 | Hero headline (desktop) |

---

## 11. Component Library

### 11.1 Button Component

**Primary Button:**
```css
.btn-primary {
  background: #808000;
  color: #FFFFFF;
  font-weight: 700;
  font-size: 15px;
  padding: 12px 28px;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  transition: all 0.25s ease;
}
.btn-primary:hover {
  background: #6d6d00;
  box-shadow: 0 0 20px rgba(128,128,0,0.25);
}
```

**Secondary Button:**
```css
.btn-secondary {
  background: transparent;
  color: #808000;
  font-weight: 700;
  font-size: 15px;
  padding: 12px 28px;
  border-radius: 9999px;
  border: 2px solid #808000;
  cursor: pointer;
  transition: all 0.25s ease;
}
.btn-secondary:hover {
  background: rgba(128,128,0,0.08);
}
```

### 11.2 Feature Card Component

```css
.feature-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 24px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}
.feature-card .icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(128,128,0,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  color: #808000;
  font-size: 24px;
}
```

### 11.3 Phone Mockup Component

```css
.phone-mockup {
  position: relative;
  width: 280px;
  flex-shrink: 0;
}
.phone-mockup .frame {
  border-radius: 40px;
  overflow: hidden;
  border: 8px solid var(--phone-bezel);
  box-shadow: var(--shadow-lg);
}
.phone-mockup .frame img {
  width: 100%;
  display: block;
}
/* 3D tilt variant */
.phone-mockup.tilted {
  transform: perspective(1200px) rotateY(-8deg) rotateX(4deg);
}
```

### 11.4 Section Divider (Islamic Geometric)

Between sections, use a subtle geometric divider:

```css
.section-divider {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 32px 0;
}
.section-divider .line {
  flex: 1;
  height: 1px;
  background: var(--border);
}
.section-divider .gem {
  width: 8px;
  height: 8px;
  background: #808000;
  transform: rotate(45deg);
  border-radius: 2px;
  opacity: 0.5;
}
```

This mirrors the divider pattern used inside the app's verse and hadith cards.

### 11.5 Achievement Tier Badge

```css
.tier-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
.tier-badge.bronze { background: rgba(205,127,50,0.15); color: #CD7F32; }
.tier-badge.silver { background: rgba(192,192,192,0.15); color: #8a8a8a; }
.tier-badge.gold { background: rgba(255,215,0,0.15); color: #b8960f; }
.tier-badge.platinum { background: rgba(229,228,226,0.2); color: #8a8a8a; }
.tier-badge.diamond { background: rgba(185,242,255,0.15); color: #3da8c4; }
.tier-badge.special { background: rgba(147,112,219,0.15); color: #9370DB; }
```

---

## 12. Assets & Resources

### Website Logo

| File | Usage |
|------|-------|
| `public/images/icon.png` | **Website logo** — use in nav bar and as favicon source |

### Mockup Screenshots (15 screens)

All in `public/images/mockups/`:

| File | Screen | Suggested Usage |
|------|--------|----------------|
| `home-screen.png` | Home | Hero mockup, prayer tracking deep dive |
| `analytic-screen.png` | Analytics Overview | Analytics deep dive |
| `salahDailyCompletion.png` | Daily Completion Chart | Analytics deep dive (secondary) |
| `prayerPerformance.png` | Prayer Performance | Analytics deep dive (secondary) |
| `achievements.png` | Achievements | Achievements deep dive |
| `dailyVerse-screen.png` | Daily Verse | Spiritual content deep dive |
| `dailyHadiths-screen.png` | Daily Hadiths | Spiritual content deep dive |
| `shareHadhit.png` | Hadith Share | Spiritual content deep dive (export feature) |
| `99Names-screen.png` | 99 Names of Allah | Spiritual content deep dive |
| `dhikar-counter-screen.png` | Dhikr Counter | Dhikr feature showcase |
| `mydhikar-screen.png` | My Dhikr List | Dhikr feature showcase |
| `new-dhikar-screen.png` | New Dhikr Form | Dhikr feature showcase |
| `qiblaFinder-screen.png` | Qibla Compass | Qibla & Mosques deep dive |
| `mosqueFinder-screen.png` | Nearby Mosques Map | Qibla & Mosques deep dive |
| `settings-screen.png` | Settings | Settings showcase |

### Feature Thumbnail Icons

Available in `public/images/` — these are the same icons used in the app's quick-access grid. Can be used as small feature icons/illustrations on the website:

| File | What it is |
|------|-----------|
| `public/images/daily-verse.png` | Daily Verse feature icon |
| `public/images/99-names.png` | 99 Names of Allah feature icon |
| `public/images/tasbih.png` | Tasbih/Dhikr feature icon |
| `public/images/hadiths.png` | Hadiths feature icon |

### Islamic Geometric Pattern SVG

Create or source an SVG of an **8-pointed star (octagram)** pattern for the hero background. The app uses this same pattern (defined in `daily-verse.tsx` and `daily-hadith.tsx` as SVG polygons):

```
Outer star points: 55,0 20.3,8.4 38.9,38.9 8.4,20.3 0,55 -8.4,20.3 -38.9,38.9 -20.3,8.4 -55,0 -20.3,-8.4 -38.9,-38.9 -8.4,-20.3 0,-55 8.4,-20.3 38.9,-38.9 20.3,-8.4
Inner star points: 32,0 11.8,4.9 22.6,22.6 4.9,11.8 0,32 -4.9,11.8 -22.6,22.6 -11.8,4.9 -32,0 -11.8,-4.9 -22.6,-22.6 -4.9,-11.8 0,-32 4.9,-11.8 22.6,-22.6 11.8,-4.9
```

Use these exact coordinates to create a tiling SVG pattern for the website, maintaining visual DNA between app and web.

### Favicon

Use `public/images/icon.png` resized to 32×32 and 16×16. Generate a `/favicon.ico` and `/apple-touch-icon.png` from it.

---

## 13. Deployment Notes

### Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | ≥ 95 |
| First Contentful Paint | < 1.2s |
| Largest Contentful Paint | < 2.0s |
| Total Blocking Time | < 100ms |
| Cumulative Layout Shift | < 0.05 |

### SEO

- **Title tag:** "mySalah — Islamic Prayer Tracking App"
- **Meta description:** "Track your five daily prayers, build sacred streaks, earn achievements, and deepen your spiritual practice. Free, private, and offline-first."
- **OG Image:** Create a 1200×630 image showing the app icon + phone mockup + tagline
- **Keywords:** salah tracker, prayer tracker, islamic app, namaz tracker, prayer times, qibla compass, dhikr counter

### Hosting

Static site — host on **Vercel**, **Netlify**, or **Cloudflare Pages**. All free tier.

### Image Optimization

- Convert all screenshots to **WebP** (with PNG fallback)
- Use responsive `srcset` for different viewport sizes
- Lazy-load all images below the fold
- Phone mockup images should be max 600px wide (they display at 280px CSS)

---

## Design Quality Checklist

Before shipping, verify every item:

- [ ] **No generic AI aesthetic** — the site looks hand-crafted and unique
- [ ] **Color consistency** — all colors match the app's exact hex codes
- [ ] **Dark mode complete** — every element styled for both themes, including mockup images
- [ ] **Animations smooth** — 60fps, no janky scroll triggers, no animation on reduced-motion preference
- [ ] **Mobile polished** — not just "responsive" but genuinely good on small screens
- [ ] **Typography hierarchy** — clear visual hierarchy, no two adjacent elements same size/weight
- [ ] **Mockups crisp** — screenshots are high-res, phone frames look realistic
- [ ] **Islamic pattern present** — subtle geometric motifs connect to the app's identity
- [ ] **CTAs clear** — download button visible without scrolling on desktop
- [ ] **Privacy page thorough** — no missing sections, professional language
- [ ] **Performance** — Lighthouse 95+, images optimized, fonts loaded efficiently
- [ ] **Accessibility** — proper heading structure, alt text on images, sufficient contrast, focus states
- [ ] **Favicon** — custom favicon from app icon, not default
- [ ] **OG tags** — proper social sharing preview
- [ ] **No placeholder content** — every piece of text is final, no "Lorem ipsum"

---

## Summary of Critical Instructions

1. **Design must be premium and distinctive** — not a template, not generic AI output
2. **Use the exact app color palette** — Olive Green `#808000` primary, full light/dark token sets
3. **Show real screenshots** in phone frames that swap with theme
4. **Islamic geometric patterns** (from the app's SVG) as subtle background accents
5. **Smooth, purposeful animations** — scroll-triggered, staggered, spring-eased
6. **Privacy policy is comprehensive** — covers the zero-data-collection architecture
7. **Dark/light mode is complete** — every single element, including images
8. **Mobile-first responsive** — genuinely polished on all breakpoints
9. **Performance is non-negotiable** — Lighthouse 95+, optimized images, fast fonts
