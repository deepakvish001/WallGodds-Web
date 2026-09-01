<div align="center">

<h1>🖼️ PixelHaven</h1>

<p><strong>An open wallpaper discovery experience for desktop, tablet, and mobile screens.</strong></p>

![React 19](https://img.shields.io/badge/React_19-20232A?style=for-the-badge) ![Vite 7](https://img.shields.io/badge/Vite_7-20232A?style=for-the-badge) ![React Router](https://img.shields.io/badge/React_Router-20232A?style=for-the-badge) ![Vercel Analytics](https://img.shields.io/badge/Vercel_Analytics-20232A?style=for-the-badge)

<p>
  <a href="#features">Features</a> •
  <a href="#technology-stack">Technology</a> •
  <a href="#local-setup">Setup</a> •
  <a href="#contributing">Contributing</a>
</p>

</div>

---

## Overview

PixelHaven is an open wallpaper discovery experience for people who enjoy personalising phones, tablets, and desktop screens. The frontend is a React and Vite application with routed pages, responsive layouts, contribution-friendly assets, and lightweight performance analytics.

## Features

- Browse wallpaper collections and individual assets
- Responsive experience for mobile, tablet, and desktop
- Client-side routing with React Router
- Reusable React components and form handling
- Vercel Analytics and Speed Insights integration
- Community contribution and design documentation
- Static wallpaper assets stored in the repository

## Technology stack

| Area | Technology |
| --- | --- |
| UI | React 19 |
| Build | Vite 7 |
| Routing | React Router 7 |
| Forms | React Hook Form |
| Icons | React Icons |
| Analytics | Vercel Analytics and Speed Insights |
| Quality | ESLint |

## Repository structure

```text
Frontend/
├── src/             # React application
├── public/          # Public assets
├── index.html       # Browser entry
└── package.json     # Frontend scripts and dependencies
Wallpapers/          # Wallpaper assets
DESIGN.md            # Design contribution notes
CONTRIBUTING.md      # Contribution workflow
```

## Prerequisites

- Git
- Node.js 20 or newer
- npm 10 or newer

## Local setup

```bash
git clone https://github.com/deepakvish001/WallGodds-Web.git PixelHaven
cd PixelHaven
cd Frontend
npm install
npm run dev
```

Open the local URL printed by Vite.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview the production build |

## Production build

```bash
cd Frontend
npm run build
npm run preview
```

Deploy the generated `Frontend/dist` directory to a static host. Configure fallback routing when direct navigation to client-side routes is supported.

## Adding wallpapers

1. Use an appropriately licensed, high-quality image.
2. Optimise file size without visible quality loss.
3. Place the asset in the relevant `Wallpapers/` collection.
4. Add accurate title, category, resolution, and attribution metadata where the UI expects it.
5. Verify responsive rendering and keyboard navigation.
6. Do not upload copyrighted work without permission.

## Contributing

Read `CONTRIBUTING.md`, create a focused branch, and include screenshots for visible changes. Run lint and a production build before opening a pull request.
