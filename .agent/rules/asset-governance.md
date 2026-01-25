# Rule: Unified Asset Governance

This project separates Antigravity system constraints from `main.py` orchestration logic to ensure maximum reliability and clarity.

## 1. Directory Roles
The agent must strictly follow the following directory roles when creating or modifying files:

- **`.agent/` (Antigravity Control Layer)**: 
    - Contains **Rules** and **Workflows** that the Antigravity agent (you) must follow during the development and decision-making process.
- **`directives/` (main.py Orchestration Layer)**: 
    - Contains **SOPs** (Standard Operating Procedures) that the `main.py` orchestrator loads to control execution tools.

## 2. Bilingual Reporting Policy
- **User Reporting (Korean)**: All chat interactions, `notify_user` messages, and user-facing artifacts (`implementation_plan.md`, `walkthrough.md`, `task.md`) must be in **Korean**.
- **System Instructions (English)**: All rules, workflows, and directives used by Antigravity or `main.py` must be in **English** for optimal reasoning and system performance.

## 3. Self-Correction & Prevention
- **Duplication Check**: Before creating a file, verify if a similar file exists in `directives/` or `.agent/` to prevent fragmentation.
- **Artifact Verification**: Before saving user-facing artifacts, verify they comply with the Korean language policy.
- **Context Integrity**: Ensure new instructions do not conflict with existing governance principles or add unnecessary complexity.

## 4. Reference Map
- **Rules**: `design-system.md`, `code-conventions.md`.
- **Workflows**: `self-annealing.md`, `ui-verification.md`.
- **SOPs (for main.py)**: `main-build.md`, `scraper.md`, `reservation-system.md`.
