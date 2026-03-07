# Migration Technical Details: Vite to Next.js

This document provides a comprehensive, file-by-file breakdown of the logic and architectural choices made during the migration of the Grefino landing page from a Vite SPA to a Next.js App Router project.

## 1. Configuration & Root Level Changes

### `tailwind.config.ts` & `postcss.config.mjs`

- **Logic**: The original project used Tailwind v3 with specific brand color variables (`--brand`, `--brand-secondary`, etc.). The Next.js template initialized with Tailwind v4, which drastically changes variable management and drops PostCSS dependency. We intentionally **downgraded to Tailwind v3** to preserve perfect compatibility with the existing `shadcn/ui` components and the complex custom color palette without needing a massive CSS rewrite.
- **Changes**: Configured PostCSS with `tailwindcss` and `autoprefixer`. Updated the `content` array in `tailwind.config.ts` to scan Next.js specific directories (`src/app/**/*.{ts,tsx}`, `src/components/**/*.{ts,tsx}`).

### `components.json`

- **Logic**: Tells the `shadcn/ui` CLI how to format components.
- **Changes**: Updated `"rsc": true` to signify that this is a Next.js environment utilizing React Server Components (though interactive elements still opt into the client boundary).

### `.vscode/settings.json`

- **Logic**: Suppresses false-positive IDE warnings.
- **Changes**: Mapped `*.css` files to the `postcss` language identifier and disabled default CSS validation to prevent editors from throwing errors on Tailwind directives like `@import "tailwindcss/base";`.

---

## 2. Core Application Structure (`src/app`)

### `layout.tsx` (Root Layout)

- **Logic**: Serves as the HTML shell for every page in the application.
- **Changes**:
  - Integrated `next/font/google` for optimized loading of custom fonts (`Inter` and `Playfair_Display`).
  - Substituted the Vite `index.html` head tags with Next.js dynamic `Metadata` exports.
  - Wrapped the children in a `<Providers>` component.

### `providers.tsx`

- **Logic**: State management and context providers (like React Query or Toasters) often rely on React Context, which requires a client environment.
- **Changes**: Created a dedicated Client Component (`"use client"`) wrapper to house `QueryClientProvider`, `TooltipProvider`, `Toaster`, and `Sonner` to keep the root `layout.tsx` clean and server-compatible.

### `globals.css`

- **Logic**: Global stylesheets and CSS variable definitions.
- **Changes**: Ported all `--primary`, `--brand`, and `--sidebar` CSS variables over from the Vite `index.css`. Switched `@tailwind` directives to `@import` syntax to ensure seamless compilation and IDE compatibility in the Next.js ecosystem.

### `page.tsx`

- **Logic**: The main landing page.
- **Changes**: Stripped out React Router (`react-router-dom`) usage entirely. Instead of rendering `<Outlet />`, this file directly composes the structural sections (`<Navbar />`, `<Hero />`, `<SystemDetails />`, etc.).

---

## 3. Component Architecture (`src/components`)

We applied stringent **Component Colocation** and **DRY** (Don't Repeat Yourself) principles throughout the `components` directory.

### `Navbar.tsx`

- **Logic**: Top navigation bar with smooth scrolling links to page sections.
- **Changes**: Replaced standard `<a>` anchor tags with Next.js `<Link>` components for optimized, pre-fetched routing. Increased the logo size explicitly per user request using Next.js `Image` properties.

### `Hero.tsx`

- **Logic**: Initial landing section with a background image and staggered text animations.
- **Changes**:
  - Refactored away from raw CSS `background-image` towards the optimized `next/image` component using `fill` and `priority` props to prevent Cumulative Layout Shift (CLS).
  - Abstracted hardcoded `framer-motion` delays into streamlined `containerVariants` and `itemVariants` utilizing `staggerChildren` for cleaner animation state management.

### `SystemDetails.tsx`, `SpecsTable.tsx`, `Gallery.tsx`

- **Logic**: Informational sections presenting the product benefits, specifications, and portfolio of previous installations.
- **Changes**:
  - Applied the `cn()` utility in `Gallery.tsx` for cleaner conditional Tailwind class merging.
  - Consolidated repetitive JSX into `Array.map()` loops based on data constants (e.g., `projects`, `benefits`, `specs`).
  - Added semantic `id="systems"`, `id="gallery"`, etc., directly onto the `<section>` wrappers to support deep-linking from the Navbar, eliminating the need for wrapper `<div>`s in `page.tsx`.
  - Migrated `<img>` tags in `Gallery.tsx` to `next/image` with dynamic `sizes` props for optimal responsive loading across devices.

### `Calculator.tsx` & `calculatorSchema.ts`

- **Logic**: A complex, interactive form estimating necessary tiles and pedestals based on area, tile size, and pedestal height.
- **Colocation**: Moved `calculatorSchema.ts` (Zod schema) directly into the `src/components/` directory adjacent to `Calculator.tsx` (Separation of Concerns and Colocation best practices).
- **URL State Management**: Completely overhauled the component state. Instead of saving user inputs in opaque React `useState`, the calculator synchronizes entirely with the URL `useSearchParams`. This means if a user selects an 800x800 tile and an area of 50m², the URL updates to `?area=50&tileSize=800x800`. This adheres strictly to Next.js state management best practices and enables the user to bookmark or share exact calculator configurations via hyperlink.
- **Suspense Boundary**: Wrapped the core calculator engine inside a React `<Suspense>` boundary to safely handle asynchronous URL parsing without de-optimizing the entire page's Server-Side Rendering (SSR).

### `ui/*` (shadcn/ui directory)

- **Logic**: Reusable, primitive UI blocks.
- **Changes**: Migrated exactly the 12 components required by the app (Button, Form, Select, Slider, etc.). Removed 37 unused components to reduce bundle sprawl. Standardized cross-component interactions.

---

## 4. Hooks & Lib (`src/hooks`, `src/lib`)

### `use-toast.ts` & `use-mobile.tsx`

- **Logic**: Utility hooks for triggering toast notifications and detecting mobile viewports.
- **Changes**: Ported directly from the Vite source. Confirmed compatibility with React Server Components paradigm by ensuring they are only called within components declaring `"use client"`.

### `utils.ts`

- **Logic**: Contains the `cn()` function combining `clsx` and `tailwind-merge`.
- **Changes**: Maintained as the primary utility for safely merging dynamic Tailwind classes without specificity conflicts.

---

## Summary of Architectural Best Practices Achieved

1.  **KISS (Keep It Simple, Stupid)**: Removed redundant React Router wiring and simplified the render tree in `page.tsx`.
2.  **DRY (Don't Repeat Yourself)**: Leveraged array mapping for UI lists and the `cn()` utility for conditional classes.
3.  **YAGNI (You Ain't Gonna Need It)**: aggressively purged 37 unused shadcn/ui components and deleted the legacy Vite source folder structure to keep the new codebase ultra-lean.
4.  **SoC (Separation of Concerns)**: Colocated Zod validation logic right alongside the UI code that consumes it.
5.  **State Management**: Promoted application state (Calculator configurations) to the URL layer for transparency, shareability, and Next.js compliance.
