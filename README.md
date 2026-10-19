# Portfolio monorepo

A Next.js App Router app with a shared React UI package and shared TypeScript configuration. The home page is intentionally blank and white.

## Structure

```text
apps/
  web/                         Next.js portfolio app
    src/app/page.tsx           Home page
    src/app/layout.tsx         Root layout and metadata
    src/app/globals.css        Global styles
packages/
  ui/src/index.tsx             Shared React components
  typescript-config/base.json  Shared TypeScript configuration
```

## Getting started

Requires Node.js 20.9 or newer and npm. Run these commands from the repository root:

```sh
npm install
npm run dev
```

Open http://localhost:3000.

On Windows PowerShell, use `npm.cmd` in place of `npm` if execution policy blocks `npm.ps1`.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build |
| `npm run typecheck` | Check types across the app and UI package |

## Shared components

Add reusable components to `packages/ui/src/index.tsx`, then import them into the app:

```tsx
import { Button } from "@portfolio/ui";
```

The UI package exports TypeScript source directly; Next.js compiles it through `transpilePackages`. Add `"use client"` in individual component modules when they need hooks, browser APIs, or event handlers.

Dependencies are managed with npm workspaces and a single root lockfile.

Framework references: [Next.js installation](https://nextjs.org/docs/app/getting-started/installation) and [workspace package transpilation](https://nextjs.org/docs/app/api-reference/config/next-config-js/transpilePackages).
