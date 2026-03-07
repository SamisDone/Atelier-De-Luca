# Project Architectural Details

This document outlines the non-obvious architectural choices and structural patterns implemented in this Next.js 16 project that are essential for understanding the codebase.

## 1. Tailwind CSS v3 Downgrade

- **The Context**: Next.js 16 initializes with Tailwind v4 by default.
- **The Decision**: We intentionally use **Tailwind v3** (`tailwind.config.ts`, `postcss.config.mjs`).
- **The Reason**: The project relies on a deeply customized `shadcn/ui` theme with complex HSL CSS variables (`--brand`, `--primary`). Migrating this theme and 12+ components to the v4 CSS-only variable structure would require a massive rewrite. Sticking with v3 maintains 100% theme compatibility seamlessly.
- **IDE Note**: We use a custom `.vscode/settings.json` to suppress "Unknown at rule" errors for `@import` and `@apply` caused by standard CSS validators.

## 2. Global Providers & Client Boundary (`src/app/providers.tsx`)

- **The Context**: React Context cannot be used directly in Next.js Server Components.
- **The Pattern**: We created `providers.tsx` with the `"use client"` directive to wrap the `QueryClientProvider` and `Toaster`. `layout.tsx` imports this wrapper. This isolates client-side state requirements, allowing the root `layout.tsx` to remain a Server Component.

## 3. URL State Management (`src/components/Calculator.tsx`)

- **The Context**: The installation calculator is deeply interactive.
- **The Pattern**: Instead of storing the form state in an opaque React `useState`, the calculator synchronizes directly with URL Query Parameters via Next.js `useSearchParams` and `useRouter`.
- **The Reason**:
  - **Shareability**: A user can bookmark or share an exact project estimate (e.g., `?area=50&tileSize=800x800`).
  - **Suspense**: Because reading query parameters dynamically opts the page out of static rendering, the core `CalculatorContent` is wrapped in a `<Suspense>` boundary inside `Calculator.tsx`. This protects the static generation of the rest of the landing page.

## 4. Component Colocation (SoC)

- **The Context**: Zod validation schemas are often stored in a generic `/schemas` folder at the root of a project.
- **The Pattern**: The `calculatorSchema.ts` rests directly inside `src/components/` adjacent to `Calculator.tsx`.
- **The Reason**: Code that changes together should live together. The schema is intrinsically tied to the exact shape of the calculator form, so they share the same directory.
