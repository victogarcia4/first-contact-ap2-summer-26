# First Contact — A&P II · Summer 2026 (6W2) 🧬

An animated, single-page welcome site for **BIOL 2402 · Human Anatomy & Physiology II**
at **Lone Star College – North Harris**. Built to greet students before day one:
course kickoff, what's in D2L, the 6-week roadmap, grading, and an embedded intro
video with sound.

Black canvas · Space Mono type · full-screen background video · scroll animations —
a modern, Gen-Z-friendly first impression.

> **Repo:** https://github.com/victogarcia4/first-contact-ap2-summer-26

---

## ✨ Features

- **Hero** with full-screen looping background video and animated "scramble-in" title.
- **Watch the intro** — a dedicated video player *with sound* (play/pause, volume, scrubber).
- **Course at a glance** — animated count-up metrics.
- **What's in D2L** — material cards (lab manual, Notebook LM, LockDown Browser, STAR Bundle, textbook, gear).
- **Zoom kickoff** — Thursday, July 16 · 7:30 AM CST (optional, highly recommended).
- **6-week roadmap** — timeline of chapters, exams and lab practicals.
- **Grading & key dates** — animated progress bars + a "don't get dropped" warning.
- **Footer** — instructor contact + OTS tech support.
- Fully responsive, keyboard-friendly, and respects `prefers-reduced-motion`.

## 🛠 Tech stack

React · TypeScript · Vite · Tailwind CSS · Framer Motion.

## 🚀 Quick start

```bash
npm install
npm run dev        # http://localhost:5173
```

Production build:

```bash
npm run build      # outputs to /dist
npm run preview    # preview the built site
```

## 🎬 Add the intro video (required)

Place your video in **`public/assets/intro.mp4`**. It powers the hero/kickoff
background loops (muted, per browser autoplay rules) and the "Watch the intro"
player (with sound). Optional: add `public/assets/hero-poster.jpg` as a still frame.

> Keep the file reasonably small for the web. GitHub rejects files over 100 MB —
> if yours is larger, compress it (see `public/assets/README.txt`) or use Git LFS.
> If you'd rather not commit the video at all, host it externally and update the
> `<source src>` in `src/sections/Hero.tsx`, `Kickoff.tsx` and `IntroPlayer.tsx`.

## ☁️ Deploy

Config for both hosts is included and both auto-detect Vite.

- **Netlify** — drag the built `dist/` folder onto https://app.netlify.com/drop,
  or connect the repo (`netlify.toml` sets build `npm run build`, publish `dist`).
- **Vercel** — import the repo at https://vercel.com/new (`vercel.json` sets
  framework `vite`, output `dist`). Or run `vercel` with the CLI.

## ✏️ Editing

All copy, dates, links and grade weights live in one file: **`src/data.ts`**.

| Change…                     | Edit                                   |
| --------------------------- | -------------------------------------- |
| Dates, links, grades, copy  | `src/data.ts`                          |
| Colors / fonts              | `tailwind.config.js`, `src/index.css`  |
| Section order               | `src/App.tsx`                          |
| A section's layout          | `src/sections/<Name>.tsx`              |

## 📁 Structure

```
public/
  favicon.svg
  assets/            ← intro.mp4 (+ optional hero-poster.jpg)
src/
  main.tsx  App.tsx  index.css  data.ts
  components/        Navbar, Logo, ScrambleText, CountUp, Reveal
  sections/          Hero, Ticker, Welcome, IntroPlayer, Metrics,
                     Materials, Kickoff, Roadmap, Grading, Footer
preview.html         ← standalone no-build preview (double-click to open)
```

## 📋 Course info

- **Course:** BIOL 2402 · Human Anatomy & Physiology II · Section 1505
- **Term:** Summer 2026, Session 6W2 · starts **July 16, 2026**
- **Instructor:** Dr. Victor Garcia Martinez · Victor.H.GarciaMartinez@lonestar.edu
- **Institution:** Lone Star College – North Harris

---

<sub>© 2026 Lone Star College – North Harris. Course content subject to change — always check D2L.</sub>
