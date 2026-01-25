# Governance Review & Improvement Proposal: semaduck

This document analyzes the current governance structure of the Sema Duck Farm project and proposes refinements based on the latest agentic alignment best practices.

## 1. Analysis of Current State
The project has a robust foundation with:
- **Bilingual Strategy**: Korean for communication, English for logic.
- **Layered Architecture**: Clear separation of `.agent/` and `directives/`.
- **Self-Annealing**: A functional loop for error correction and intelligence accumulation.

## 2. Identified Gaps (Critical)
Based on recent "Over-Execution" incidents (Jumping-ahead errors), the following gaps were found:
- **Lack of Conceptual Gates**: No explicit requirement to halt and verify the "Dream" or "Concept" with the user before starting a production phase.
- **Context Bloat**: `self-annealing.md` updates instructions but does not specify how to prune obsolete or conflicting rules, leading to "Instruction Decay."
- **PVE Loop Informalization**: The Plan-Validate-Execute loop is implied but not codified as the mandatory behavioral standard.

## 3. Proposed Improvements

### A. Implementing 'Conceptual Approval Gates'
**Update `asset-governance.md` or `self-annealing.md`**:
- Before moving from **Setup/Design** to **Frontend/Execution**, the agent MUST pause and present a high-level summary of the implementation strategy.
- **Rule**: "Do not modify `src/` files until the user explicitly approves the proposed design/logic outline in the chat."

### B. Formalizing the PVE (Plan-Validate-Execute) Loop
**Codify in `asset-governance.md`**:
1. **Plan**: Write the intent in the `task.md` or implementation plan.
2. **Validate**: Perform a safety/compliance check against `rules/`.
3. **Execute**: Only then, perform the tool calls.

### C. Instruction Pruning (Anti-Conflict)
**Update `self-annealing.md` Step 4**:
- "When updating `directives/` or `rules/`, verify if the new instruction conflicts with existing ones. **Delete or merge** obsolete rules to maintain a lean context window."

### D. Safety: 'The Uncertainty Protocol'
**Add to `.agent/rules/asset-governance.md`**:
- "If the agent is less than 90% sure about a design choice (e.g., color nuance, UX flow), it MUST notify the user with 2-3 options rather than making a default choice."

## 4. Next Steps
- Apply these refinements to `.agent/rules/asset-governance.md` and `.agent/workflows/` upon approval.
