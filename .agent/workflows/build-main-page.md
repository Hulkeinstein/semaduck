---
description: Build the Main Page by strictly cloning Diodona Ristorante's structure/style but filling it with Sema Duck Farm content.
---

1.  **Dual-Reference Protocol**:
    *   **Structure & Style Reference**: MUST visually match `https://www.diodona.it/ristorante/`.
    *   **Content Reference**: MUST populate text/images from `docs/content-strategy.md`.

2.  **Design Tokens (Verified)**:
    *   **Background**: `#f7f5f1` (Warm Cream).
    *   **Text/Buttons**: `#00382c` (Deep Forest Green).
    *   **Accent**: `#C5A039` (Gold).
    *   **Typography**:
        *   Headings: `Playfair Display` (Serif).
        *   Body: `Manrope` (Sans-serif).
        *   **Labels**: Script Font with `transform: rotate(-3deg)` (Signature Style).

3.  **Setup Directory**:
    *   Ensure `src/components/sections/main` exists.

4.  **Implement Section: Intro (Heritage)**:
    *   **Reference**: Diodona "Sapori di casa" section.
    *   **Structure**:
        *   Script Label "Heritage of Taste" (rotated -3deg).
        *   H1 Title "Since 1998".
        *   Divider (SVG/Line).
        *   Centered Body Text.
    *   **Content**: From `content-strategy.md` (Intro/Heritage).

5.  **Implement Section: Chef (Master of Fire)**:
    *   **Reference**: Diodona "Il nostro Chef" section.
    *   **Structure**: Asymmetric Layout (Image Left/Right, Text Opposite).
    *   **Style**: Dark Theme (`#1A1A1A`) for contrast (Charcoal theme).
    *   **Content**: From `content-strategy.md` (Master of Fire/Charcoal).

6.  **Implement Section: Ingredients (Fresh & Local)**:
    *   **Reference**: Diodona "Filiere autentiche" / "Corte dei Gelsomini".
    *   **Structure**: Grid of ingredient images with hover details.
    *   **Content**: From `content-strategy.md` (Fresh Duck, Local Veg).

7.  **Implement Section: Menu (Signatures)**:
    *   **Reference**: Diodona "MENU" section.
    *   **Structure**: Clean list or card layout.
    *   **Content**: From `content-strategy.md` (Roast -> Stew -> Porridge).

8.  **Implement Section: Atmosphere (Rustic Retreat)**:
    *   **Reference**: Diodona "Gli ambienti" section.
    *   **Structure**: Full-width slider or masonry gallery with `img-rotate` effect.
    *   **Content**: From `content-strategy.md` (Garden, Family).

9.  **Page Assembly**:
    *   Assemble in `src/app/main/page.tsx` maintaining wide spacing (100px+).

10. **Verification**:
    *   Check: Are labels rotated -3deg?
    *   Check: Is background #f7f5f1?
    *   Check: Is text #00382c?
