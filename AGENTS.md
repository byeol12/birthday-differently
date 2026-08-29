# Project Guide

## Overview

This is a single-page birthday action list: a personal page shared with friends that redirects the energy of buying gifts toward nonprofit donations and free acts of care.

## Architecture

- `src/routes/__root.tsx` defines the document shell and social metadata.
- `src/routes/index.tsx` contains the complete landing page, action data, and native share/copy interactions.
- `src/styles.css` contains the visual system, responsive layouts, paper texture, and motion preferences.
- `public/` contains static files served as-is.
- `vite.config.ts` configures the TanStack Start Vite plugins; the build output is a platform-agnostic fetch handler with no deployment-specific adapter.
- `server.mjs` runs the production build as a plain Node HTTP server via `srvx`.

## Technology

- TanStack Start and TanStack Router
- React 19 and TypeScript
- Tailwind CSS 4 via Vite, with custom CSS for the page art direction
- Lucide React icons

## Conventions

- Keep routes in `src/routes/` and use TanStack file-based routing.
- Use PascalCase for React components and camelCase for functions and variables.
- Keep the nonprofit action content in the `actions` array in `src/routes/index.tsx`.
- Use CSS custom properties from `:root` when extending the palette.
- Preserve keyboard focus states and the `prefers-reduced-motion` behavior.
- External nonprofit links open in a new tab and must include `rel="noreferrer"`.

## Design Notes

The page uses an editorial, handmade-paper direction rather than conventional fundraising UI. There are intentionally no donation totals, progress bars, accounts, or collected user data. Every contribution happens directly on the selected organization’s website.

## Local Development

Install dependencies with `npm install`, then run `npm run dev`. The production output is generated with `npm run build` and served with `npm start` (plain Node, via `server.mjs`).
