# Firebase

## Purpose

This module initializes the browser-safe Firebase Web SDK from public environment variables.

## Boundary

`client.ts` may be used by browser code. Firebase Web App configuration identifies the project but is not a privileged server credential. Firebase Admin credentials must remain server-only and must never use `PUBLIC_*` variables.

## Files

- `client.ts`: creates or reuses the single Firebase app instance.
- `auth.client.ts`: initializes Firebase Auth and exposes direct client authentication operations.
- `../../../.env.example`: lists the required public configuration variables.

## Current scope

The core Firebase app and client-side Authentication are initialized. Enabled providers are Email/Password and Google.

Authentication establishes Firebase identity only. Email verification can be requested, but verified-user privileges are not enforced here. There is no application user record, role, capability flag, or server-side trust based on browser auth state.

Firestore, Storage, Admin SDK, Security Rules, schemas, server token validation, and emulators are not configured yet.

## Open questions

- Whether to use the Firebase Emulator Suite.
- When the server-side Admin SDK boundary is needed.
