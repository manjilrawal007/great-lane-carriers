# Great Lane Carriers

Marketing website for **Great Lane Carriers**, operated by **Grewal Trucking Inc.**

Built with Next.js App Router, TypeScript, Tailwind CSS v4, and Resend for form delivery.

**Images:** JPEG files under `public/images/` are temporary stock placeholders — not company fleet photos. See [`public/images/README.md`](public/images/README.md) before launch.

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server |
| `npm run lint` | Run ESLint |
| `npm run build` | Production build (same as Vercel) |
| `npm run start` | Serve production build locally |

## Environment variables

Copy `.env.example` to `.env.local` for local development. **Do not commit `.env.local`.**

| Variable | Required on Vercel | Description |
|----------|-------------------|-------------|
| `NEXT_PUBLIC_SITE_URL` | **Yes** | Public site URL for SEO, sitemap, Open Graph, and JSON-LD (e.g. `https://greatlanecarriers.com`) |
| `RESEND_API_KEY` | For working forms | Resend API key |
| `FORM_FROM_EMAIL` | For working forms | Verified sender (e.g. `Great Lane Carriers <noreply@yourdomain.com>`) |
| `FORM_TO_EMAIL` | For working forms | Inbox for quotes, callbacks, contact, portal notify |
| `FORM_RECRUITING_EMAIL` | For driver applications | Inbox for `/api/apply` |

### Form behavior

- **Development** (no Resend config): submissions log to the server console; UI may show success.
- **Production / Vercel Preview** (no Resend config): API returns an error; UI shows a message with the company phone number — **no fake success**.

Display contact info (phone, emails, address) is edited in `content/site-content.ts`, not env vars.

## Pages

- `/` — Home
- `/for-shippers` — Shipper & broker information
- `/for-drivers` — Driver recruiting
- `/safety-compliance` — Safety program
- `/fleet-equipment` — Fleet showcase
- `/about` — Company story
- `/contact` — Contact forms
- `/privacy` — Privacy & applicant data
- `/portal` — Driver portal (coming soon)

## Deploy (Vercel)

1. Push this repo to GitHub (see commands below).
2. Import the repository in [Vercel](https://vercel.com).
3. Set environment variables (at minimum `NEXT_PUBLIC_SITE_URL`; add Resend vars when forms should deliver email).
4. Deploy — Vercel runs `npm run build` by default.

## Content

Edit company info, copy, and stats in `content/site-content.ts`.
