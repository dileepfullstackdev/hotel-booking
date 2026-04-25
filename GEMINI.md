# Project: Hotel Booking System (Next.js 16/19)

## Architecture & Framework
- **Framework:** Next.js (v16.2.3) with React 19.
- **Router:** App Router.
- **Component Library:** [HeroUI](https://heroui.com) (`@heroui/react`). Use these components for consistency.
- **State Management:** Zustand (`store/useAuthStore.js`).
- **Styling:** Tailwind CSS (v4) with `@tailwindcss/postcss`.

## Development Guidelines
- **Language:** JavaScript/TypeScript (mostly `.jsx` and `.tsx` seen).
- **Client Components:** Use `"use client";` at the top of files that use React hooks or interactive features.
- **Path Aliases:** Use `@/` for imports (configured in `tsconfig.json`).
- **Forms:** Prefer `react-hook-form` for form management.

## Authentication & Authorization
- **State:** Auth state is managed in `useAuthStore`.
- **Route Protection:**
  - Use `ProtectedRoute.jsx` for pages requiring authentication.
  - Use `RoleProtectedRoute.jsx` for role-specific access (e.g., `admin`, `owner`, `user`).
  - Use `PublicRoute.jsx` for guest-only pages (Login, Signup).
- **Navigation:** Use `next/navigation`'s `useRouter` for client-side transitions.

## Folder Structure
- `app/`: Contains the App Router hierarchy.
  - `(auth)/`: Authentication pages.
  - `admin/`: Administrator dashboard and hotel management.
  - `owner/`: Hotel owner dashboard and hotel management.
  - `user/`: Regular user dashboard, bookings, and hotel discovery.
- `components/`: Reusable UI components and route guards.
- `store/`: Zustand stores for global state.

## Coding Standards
- **Imports:** Group imports by library, then components, then local utilities.
- **Naming:** Use PascalCase for components and camelCase for functions/variables.
- **Icons:** Check existing usage before adding new icon libraries.
