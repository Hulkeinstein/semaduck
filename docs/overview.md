# Sema Duck Farm Project Overview

This document provides a high-level overview of the Sema Duck Farm web application project, including its core architecture, design principles, and technical stack.

## 1. Project Definition
- **Goal**: To build a premium, high-converting web application for 'Sema Duck Farm' (세마오리농원), featuring information, storytelling, a gallery, and a real-time reservation system.
- **Core Value**: Providing a sophisticated and trustworthy brand experience through premium UI/UX.

## 2. Core Architecture (3-Layer Agent System)
To ensure reliability and maintainability, the project follows a strict 3-layer architecture:

- **Layer 1: Directives**: Standard Operating Procedures (SOPs) written in Markdown, located in `directives/`.
- **Layer 2: Orchestration**: The `main.py` controller that interprets directives and coordinates execution.
- **Layer 3: Execution**: Deterministic Python scripts located in `execution/` for specific tasks like scraping or data processing.

## 3. Design System & Aesthetics
- **Core Colors**: 
  - Cream (`#FAF9F6`): Primary background for a warm, organic feel.
  - Brown (`#2D2926`): Typography and structural elements for depth.
  - Gold (`#C5A039`): Accent color for premium branding.
- **Typography**: 
  - Display: `Playfair Display` (Serif) for headings and titles.
  - Body: `Manrope` / `Noto Sans KR` (Sans-serif) for readability.
- **Visual Style**: Minimalist, high contrast, subtle micro-animations (Framer Motion), and a maximum border-radius of `2px` for a sharp, clean look.

## 4. Technical Stack
- **Frontend**: Next.js 14 (App Router), TypeScript, CSS Modules.
- **Animation**: Framer Motion.
- **Backend/Database**: Supabase (Auth, Realtime DB, RLS).
- **Icons**: Lucide React.

## 5. Key References
We aim for the visual excellence and premium feel demonstrated by the following sites:

- **Primary Design Reference**: [Diodona](https://www.diodona.it/)
- **Quality Benchmark**: [Rosabella](https://rosabella.restaurant/) (Example of sophisticated restaurant UI)

## 6. Project Structure
- `directives/`: Orchestration SOPs.
- `.agent/`: System rules and workflows for the AI assistant.
- `execution/`: Individual execution tools (Python).
- `src/`: Next.js application source code.
- `docs/`: Technical and governance documentation.
