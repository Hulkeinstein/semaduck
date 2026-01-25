---
description: Enforce Stop-and-Wait protocol to prevent unapproved execution.
globs: "**/*"
alwaysApply: true
---
# Stop-and-Wait Interaction Protocol

To prevent autonomous over-execution, this rule acts as a strict **Gatekeeper**.

## The Core Rule
**"When the user asks a question, NEVER execute."**

If the user's message is a question (e.g., contains '?', asks "Is this...", "Where is...", "Check this..."):
1.  **STOP** all execution planning.
2.  **ANSWER** the question using ONLY read tools (e.g., `view_file`, `search_web`, `read_url_content`).
3.  **DO NOT** use modification tools (e.g., `write_to_file`, `replace_file_content`).
4.  **ASK** for explicit permission to proceed (e.g., "Shall I proceed to implementation?").

## Why this is Always On
This rule must override any task speed optimizations. Safety and user alignment take precedence over autonomy.
