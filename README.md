# Birthday, Differently

A warm, shareable birthday page for asking close friends to support good work instead of buying a gift. Visitors can choose from several nonprofit actions, find no-cost ways to help, and share the page with others.

## Built With

- [TanStack Start](https://tanstack.com/start)
- React 19 and TypeScript
- Tailwind CSS 4 and custom CSS
- Lucide icons

## Run Locally

```bash
npm install
npm run dev
```

The local Vite server starts on port 3000.

## Production Build

```bash
npm run build
npm start
```

`npm run build` outputs a platform-agnostic server bundle to `dist/server`, and `npm start` runs it as a plain Node HTTP server (via `srvx`) on `PORT` (default 3000).

## Customize

Edit the introductory and closing copy in `src/routes/index.tsx`. The nonprofit cards are driven by the `actions` array near the top of that file, so organizations, descriptions, colors, and links can be changed in one place.

The page does not process donations or collect personal data. Each action sends visitors to the relevant organization’s own website.
