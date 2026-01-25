# Rule: Code Conventions

## 1. Tech Stack
- **Framework**: Next.js (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: CSS Modules (Vanilla CSS preferred, no Tailwind unless requested)
- **Components**: Functional components (Server Components by default)

## 2. Naming Conventions
- **Components**: PascalCase (e.g., `HeroSection.tsx`)
- **Styles**: camelCase in CSS Modules (e.g., `.containerInner`)
- **Variables**: camelCase

## 3. Directory Structure
- `src/components/layout`: Global layout parts.
- `src/components/sections`: Page-specific sections.
- `src/lib`: Utilities and API clients.
- `src/app`: Routing and layout.
