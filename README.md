# tylerwill.is

My personal portfolio site: **[tylerwill.is](https://tylerwill.is)**

It started as a React front end. It's growing into a full **MERN** app (MongoDB, Express, React, Node) with its own API for projects and contact messages.

## Stack

| | |
|---|---|
| **UI** | React 19, TypeScript, React Router |
| **Styling** | Tailwind CSS v4 with CSS-variable design tokens for light/dark themes |
| **Animation** | Motion (respects `prefers-reduced-motion`) |
| **Tooling** | Vite, oxlint, Prettier |
| **Hosting** | Vercel |

## Structure

```
client/            React front end
  src/data/        Site content as typed data (projects, experience, settings)
  src/components/  Shared UI: navbar, page wrapper, theme toggle, etc.
  src/pages/       One component per route
server/            (coming soon) Express + MongoDB API
```

Content lives in `src/data/` instead of being hard-coded in components. When the API lands, those files become MongoDB models and the pages fetch from the API, with minimal component changes.

## Running locally

Requires Node.js 24+.

```bash
cd client
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build
npm run lint
```

## Details worth a look

- **No theme flash:** an inline script applies the saved or OS theme before first paint.
- **Seamless marquee** on the About page: a duplicated list translated by exactly 50%, with a CSS mask fading the edges. It falls back to a normal scrollable list for reduced-motion users.
- **Accessibility:** skip link, visible focus styles, `aria-live` on the rotating tagline, and semantic landmarks.
- There's an easter egg. 🙂‍↕️
