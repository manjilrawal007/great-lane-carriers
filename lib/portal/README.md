# Great Lane Carriers — Driver Portal (Future)

## Overview

The `/portal` route is reserved for an authenticated driver and compliance portal. The current v1 site includes a "Coming Soon" page with email notification signup.

## Planned Routes

| Route | Access | Purpose |
|-------|--------|---------|
| `/portal` | Public | Login / coming soon (current) |
| `/portal/dashboard` | Driver | Overview, active load, announcements |
| `/portal/pay` | Driver | Pay stubs, settlement history |
| `/portal/documents` | Driver | Upload/download compliance docs |
| `/portal/loads` | Driver | Assigned load details |
| `/portal/admin` | Compliance Admin | Document review, driver management |

## Auth Strategy (TBD)

Recommended options:
- **Clerk** — fast setup, good RBAC
- **NextAuth.js** — self-hosted, flexible providers

## Roles

- `driver` — view pay, loads, upload documents
- `dispatch` — read-only driver status (optional)
- `compliance_admin` — review documents, manage expirations
- `admin` — full access

## Middleware

See `middleware.ts` at project root. Matcher is configured for future protected routes under `/portal/dashboard`, `/portal/documents`, and `/portal/pay`.

## Shared Components

Reuse from marketing site:
- `components/ui/*` — form primitives
- `lib/validations/*` — Zod schemas
- Design tokens in `app/globals.css`

## Integration Points

- Document storage: S3 or similar
- Pay data: integration with payroll provider API
- Load data: TMS integration (future)
