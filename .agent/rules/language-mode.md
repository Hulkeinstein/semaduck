# Rule: Language Mode (Korean)

## 1. Principle

All communication, artifacts, and documentation must be written in **Korean** (한국어), unless the user explicitly requests English for a specific context (e.g., code comments in shared libraries).

## 2. Scope

- **Communication**: Chat responses, `notify_user` messages.
- **Artifacts**: `task.md`, `implementation_plan.md`, `walkthrough.md`.
- **Documentation**: New `.md` files in `docs/` or `directives/`.
- **Code Comments**: Prefer Korean for business logic explanation, English for generic boilerplate if standard.

## 3. Exceptions

- **Code Syntax**: Variable names, function names, and standard keywords must remain in English (ASCII) to avoid compatibility issues.
- **Standard Terminology**: Technical terms that are widely used in English (e.g., "Next.js", "React", "Supabase") can be used as-is or transliterated if appropriate.
