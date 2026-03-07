# Comprehensive Project Details: Vite to Next.js Migration

This document provides a detailed, file-by-file breakdown of the changes applied to the Grefino landing page during its migration from a Vite/React SPA to the Next.js 16 App Router.

## 1. Project Root & Configuration Defaults

### `package.json`

- **Details**: Swapped Vite dependencies for Next.js 16, React 18, and Tailwind CSS v3 dependencies. Removed Vite build scripts and implemented standard Next.js `dev`, `build`, and `start` scripts.

### `tailwind.config.ts`

- **Details**: Updated the `content` array to scan Next.js specific directories (`src/app/**/*.{ts,tsx}` and `src/components/**/*.{ts,tsx}`). Retained the custom CSS variable theme extending HSL color mappings for perfect compatibility with the `shadcn/ui` aesthetic.

### `postcss.config.mjs`

- **Details**: Configured `tailwindcss` and `autoprefixer` plugins required for standard Tailwind preprocessing in Next.js.

### `components.json`

- **Details**: Updated the `shadcn/ui` registry configuration, setting `"rsc": true` to denote the Next.js React Server Component environment and updating alias paths to utilize `@/`.

### `.vscode/settings.json`

- **Details**: Added workspace settings mapping `*.css` files to `postcss` syntax parsing, actively suppressing erroneous VS Code "Unknown at rule" IDE errors for `@import` and `@apply` Tailwind directives.

---

## 2. Global Styles & Routing (`src/app`)

### `src/app/globals.css`

- **Details**: Migrated all custom CSS variables (like `--brand`, `--primary`) from the legacy Vite `index.css`. Substituted the standard `@tailwind` directives with `@import "tailwindcss/base";` syntax to ensure optimal PostCSS processing and IDE linting compliance.

### `src/app/layout.tsx` (Root Layout)

- **Details**: Completely replaced Vite's root `index.html`.
  - Substituted standard `<link href="...">` webfont calls with Next.js optimized Google Fonts (`next/font/google`), importing `Inter` and `Playfair_Display`.
  - Replaced `<title>` and `<meta>` DOM nodes with the Next.js dynamic `Metadata` semantic export for enhanced SEO.
  - Wrapped children in the custom `<Providers>` component.

### `src/app/providers.tsx`

- **Details**: Created this new boundary as a strict `"use client"` module. Designed to safely initialize global state (like the `QueryClient` via a `useState` hook) and mount context providers (`QueryClientProvider`, `TooltipProvider`, `Toaster`) across the Next.js application without violating Server Component principles.

### `src/app/page.tsx`

- **Details**: Entirely removed `react-router-dom` `BrowserRouter` and `<Outlet />` patterns. Transformed `page.tsx` into an immediate, flattened composition that directly invokes all primary UI sections (`Navbar`, `Hero`, `SystemDetails`, `SpecsTable`, `Gallery`, `Calculator`, `Footer`).

---

## 3. Top-Level Page Components (`src/components`)

### `Navbar.tsx`

- **Details**: Converted legacy HTML anchor tags (`<a>`) to Next.js `<Link>` components for automatic prefetching. Implemented a specific design alteration to drastically enlarge the main Grefino `next/image` logo (scaled up using `w={240} h={64}` properties alongside absolute `h-14 md:h-16 w-auto object-contain` Tailwind classes).

### `Hero.tsx`

- **Details**: Modernized animations and image handling.
  - Replaced manually constructed CSS `background-image: url(...)` styles with the highly optimized `next/image` component leveraging `fill` and `priority` props to combat Cumulative Layout Shift (CLS).
  - Cleaned up repetitive inline `framer-motion` properties (e.g., hardcoded `delay: 0.2` or `delay: 0.4`) by centralizing animation logic into mapped `containerVariants` and `itemVariants`, utilizing `staggerChildren` orchestration.

### `SystemDetails.tsx`

- **Details**: Integrated `id="systems"` directly into the parent `<section>` element. Formatted the repeating benefits grid (iterating over the `benefits` array) and augmented it with staggered `framer-motion` variant animations.

### `SpecsTable.tsx`

- **Details**: Integrated `id="specifications"` directly into the parent `<section>` element. Leveraged granular `shadcn/ui/table` components to render a structured grid representing array-mapped technical properties.

### `Gallery.tsx`

- **Details**: Integrated `id="gallery"` directly into the parent `<section>` element. Refactored all raw `<img>` nodes into optimized `next/image` tags paired with tailored `sizes="(max-width: ..."` attributes for responsive rendering. Overhauled dynamic Tailwinds classes on portfolio filter buttons by piping ternary operations through the `cn()` utility function, yielding significantly cleaner string concatenation.

### `Calculator.tsx`

- **Details**: The Calculator underwent the most significant structural refactoring. Integrated `id="calculator"`.
  - **Component Colocation**: Migrated `calculatorSchema.ts` (the Zod definition file) out of a detached root directory directly into `src/components/` side-by-side with the form it structurally defines.
  - **URL State Initialization**: Decoupled persistent configuration logic from opaque, local `useState` bindings. The calculator now strictly queries React Hook Form `defaultValues` from Next.js URL query parameters (`searchParams.get()`).
  - **URL State Persistence**: Form submissions now serialize data and immediately push stringified keys and values into the browser's URL using Next.js `useRouter` (`router.replace`), permitting exact estimations to be fully shareable via URL copy-paste.
  - **Suspense Isolation**: Given that URL parameter sniffing breaks root-level Static Generation, the calculator logic (`CalculatorContent`) is wrapped in a discrete Next.js `<Suspense>` layer right inside the component default export module.
  - **DRY Select Mapping**: Abstracted scattered `<SelectItem>` tags belonging to the pedestal height dropdowns into structured iteration logic mapping over a `pedestalHeightOptions` array.

### `Footer.tsx`

- **Details**: Retained its simplified static JSX layout, rendering standard timestamped company copyright information.

---

## 4. Shared Utilities & UI Library (`src/components/ui/`, `src/lib/`, `src/hooks/`)

### `src/components/ui/*`

- **Details**: Completed an aggressive component purge. The Vite source repository consisted of over 49 disparate `shadcn/ui` elements. Meticulously scanned local component dependencies and formally deleted 37 unutilized UI blocks (Pagination, Sheet, Sidebar, Carousel, etc.). Only the 12 explicitly required components (Forms, Inputs, Selects, Buttons, Sliders, Tables, etc.) currently reside here. Included minor TypeScript patches (using permissive typing properties) primarily aimed at resolving legacy internal typing definitions for the Recharts library (`chart.tsx`).

### `src/lib/utils.ts`

- **Details**: Ported the standard, foundational `cn` function leveraging `clsx` and `tailwind-merge` implementations for safe overriding of conflicting Tailwind utility classes inside dynamic UI scenarios.

### `src/hooks/use-toast.ts` & `src/hooks/use-mobile.tsx`

- **Details**: Transferred specific context-aware hooks straight out of Vite. Verified that all instances strictly execute inside files marked unambiguously as `"use client"` Next.js Client Components.

---

## 5. Architectural Best Practices Implemented

### Component Colocation (Separation of Concerns)

- **Location**: `src/components/calculatorSchema.ts` and `src/components/Calculator.tsx`
- **Details**: Moved the Zod validation schema out of a detached root directory directly into the `src/components/` directory next to the form it defines. This enforces the rule that code which changes together should live together.

### URL State Management (Shareability & Predictability)

- **Location**: `src/components/Calculator.tsx`
- **Details**: Replaced opaque, local React `useState` with synchronized URL query parameters (`useSearchParams` and `router.replace`). This makes specific calculator configurations fully bookmarkable and shareable via hyperlink.

### Suspense Boundary Isolation (Rendering Optimization)

- **Location**: `src/components/Calculator.tsx`
- **Details**: Wrapped the `CalculatorContent` (which reads from URL parameters) inside a React `<Suspense>` boundary. Because reading query parameters dynamically opts the page out of static rendering, isolating this dynamic client rendering protects the static generation of the rest of the landing page.

### DRY (Don't Repeat Yourself) Principles

- **Location**: `src/components/Calculator.tsx` and `src/components/Gallery.tsx`
- **Details**:
  - **Array Mapping**: Abstracted scattered `<SelectItem>` tags in the calculator dropdowns into structured iteration logic mapping over a reusable `pedestalHeightOptions` array.
  - **Dynamic Class Merging**: Overhauled dynamic Tailwind classes on the portfolio filter buttons in the gallery by piping ternary logic through the `cn()` utility function. This eliminates messy string concatenation templates.

### Advanced Image Optimization (Core Web Vitals)

- **Location**: `src/components/Hero.tsx` and `src/components/Gallery.tsx`
- **Details**: Refactored all raw `<img>` nodes and CSS `background-image` declarations into native Next.js `<Image>` components. Leveraged `fill`, `priority`, and dynamic `sizes` attributes for responsive rendering and to ensure zero Cumulative Layout Shift (CLS).

### Framer Motion Variant Abstraction (Animation Centralization)

- **Location**: `src/components/Hero.tsx` and `src/components/SystemDetails.tsx`
- **Details**: Eliminated repetitive inline `framer-motion` properties (e.g., manually hardcoded `delay` numeric values) by centralizing the animation orchestration logic into strict `containerVariants` and `itemVariants`, utilizing `staggerChildren` for a cleaner, heavily maintainable declarative animation approach.
