---
description: How to verify if the implemented UI complies with the project design system (UI Verification)
---

1. Color Verification: Check if Cream, Brown, and Gold color codes defined in `.agent/rules/design-system.md` are correctly applied as CSS variables.
2. Fine-tuning: Scan source code to ensure `border-radius` does not exceed `2px` and there is no unnecessary rounding.
3. Accessibility Check: Verify accessibility attributes of `lucide-react` icons and the usage of semantic HTML tags (`header`, `main`, `section`).
4. Interaction Test: Confirm that `Framer Motion` or CSS `:hover` effects are appropriately applied to all buttons and links.
