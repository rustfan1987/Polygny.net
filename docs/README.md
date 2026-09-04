# Documentation

This directory contains the authoritative planning and governance documentation for the Polygyny.net project.

The purpose of these documents is to keep product decisions, architecture, permissions, governance, and implementation scope explicit so development can proceed slice by slice without silent requirement invention, unnecessary scope expansion, or known throwaway architecture.

## Authority Model

Documents in this directory do not all have the same role.

Project-wide documents in `docs/` govern the product across all phases unless a later approved decision explicitly changes them.

Phase-specific documents govern only the phase they belong to and must remain consistent with the applicable project-wide documents.

When implementation begins, acceptance criteria define whether a phase or slice is complete. A feature being partially functional does not override documented requirements.

If two documents appear to conflict, do not choose one silently. Record the conflict and resolve it explicitly before implementation continues.

If required behavior is not documented, it is unresolved. Missing requirements are not permission to invent behavior.

## Documentation Map

### `PROJECT_VISION.md`

Defines the permanent north star for the project.

Use this document to understand what Polygyny.net is intended to become, who it is intended to serve, what problems it exists to solve, and the long-term direction of the platform.

This document should describe purpose and direction, not implementation details.

### `PRODUCT_RULES.md`

Contains locked product principles and non-negotiable behavioral rules that apply across phases.

Use this document when deciding whether a proposed feature, workflow, or implementation behavior is compatible with previously established product decisions.

### `SYSTEM_ARCHITECTURE.md`

Defines project-wide architectural doctrine and technical boundaries.

This document governs high-level system responsibilities, canonical versus derived data, permanent service boundaries, reliability principles, and the rule against knowingly temporary architecture.

Phase-specific implementation details belong in the appropriate phase folder.

### `IDENTITY_PRIVACY_PERMISSIONS.md`

Defines the project-wide identity, privacy, authorization, administrative-access, and consent model.

Use this document whenever a feature involves account identity, public identity, private data, roles, permissions, sensitive data access, user consent, moderation access, or related security boundaries.

### `CONTENT_GOVERNANCE.md`

Defines project-wide rules for content ownership, contributor privileges, editorial authority, collaborative knowledge, revisions, distribution, and related governance.

Use this document for questions involving articles, wiki contributions, authorship, editing, publication rights, revision history, content removal, or contributor-owned material.

### `BUSINESS_GOVERNANCE.md`

Defines project-wide business and institutional governance principles.

Use this document for monetization, contributor relationships, commercial participation, institutional authority, ownership boundaries, and the separation between payment and editorial or platform control.

### `DEVELOPMENT_RULES.md`

Defines the rules for implementation work.

This document governs how Codex and future development work should proceed, including vertical-slice development, bounded changes, specification precedence, testing expectations, prohibition on invented behavior, prohibition on silent scope expansion, and prohibition on knowingly disposable architecture.

### `DECISIONS.md`

Contains the chronological decision record for major locked product or architectural decisions.

Each entry should preserve the decision, its rationale, the date it became locked, and the documents or systems affected.

This file exists to prevent repeatedly reopening already settled decisions without an explicit reason.

### `UNRESOLVED.md`

Contains open questions, specification gaps, and conflicts that have not yet been decided.

Anything required for implementation but not established elsewhere should be recorded here rather than guessed.

An unresolved item is not implementation authorization.

### `BACKLOG.md`

Contains ideas and future functionality that are explicitly outside the active phase.

Backlog items are preserved so they are not lost, but their presence here does not authorize implementation.

## Phase Documentation

Phase-specific documentation lives in subfolders under `docs/`.

The currently established phase folder is:

`docs/phase-1/`

Phase One has been defined at a high level as the first real product slice centered on the public content platform, including the article, translation, indexing, account, administrative, and related foundations already established in planning.

The complete Phase One specification has not yet been written into the repository and remains unresolved until separately approved and documented.

No later phase structure is currently authoritative.

## Precedence

When determining what governs a piece of work, use this order:

1. Explicitly approved current user instruction.
2. Applicable project-wide documentation in `docs/`.
3. Applicable phase-specific documentation.
4. Locked entries in `DECISIONS.md`.
5. Acceptance criteria for the active phase or slice.
6. Existing implementation, only where it does not conflict with the documentation above.

Existing code is not automatically authoritative when it conflicts with an approved specification.

## Change Discipline

Documentation changes should be bounded to the requirement being addressed.

Do not reorganize unrelated documents, rename established concepts, introduce new product behavior, or infer future-phase requirements without explicit approval.

When a new major decision is approved, update the relevant authoritative document and record the decision in `DECISIONS.md` where appropriate.

When a requirement is discovered but not resolved, add it to `UNRESOLVED.md`.

When an idea is valid but outside the active phase, add it to `BACKLOG.md`.

## Current Status

The documentation foundation is being established before broader implementation proceeds.

The repository currently has an empty `docs/` directory.

The exact contents of the individual project-wide documents and the complete Phase One specification are not yet authoritative until they are separately created and approved.
