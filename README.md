# CareMin marketing website

Public marketing website for CareMin, built as a fully separate static project from the private
CareMin application.

Astro 7.1 was selected after checking the [official Astro 7.1 release](https://astro.build/blog/astro-710/)
on 5 August 2026. The installed release is recorded in `package-lock.json`.

## Local setup

Requirements:

- Node.js 22.22.3 or later
- npm 10 or later

Install and run:

```bash
npm ci
cp .env.example .env
npm run dev
```

The site is available at `http://localhost:4321` by default.

## Configuration

All public destinations and launch details live in `.env`. Start with `.env.example`.

| Variable                       | Status                  | Purpose                                                                      |
| ------------------------------ | ----------------------- | ---------------------------------------------------------------------------- |
| `PUBLIC_SITE_URL`              | Required for production | Final marketing origin used by canonical links, sitemap, and form return URL |
| `PUBLIC_APP_URL`               | Configured              | Product Sign in destination, currently `https://caremin-six.vercel.app`      |
| `PUBLIC_CONTACT_EMAIL`         | Configured              | Walkthrough and contact email, currently `lattesoto@gmail.com`               |
| `PUBLIC_CONTACT_FORM_ENDPOINT` | Optional                | Static form endpoint, defaults to FormSubmit for the contact email           |
| `PUBLIC_PLAUSIBLE_DOMAIN`      | Optional                | Enables Plausible only when explicitly set                                   |
| `PUBLIC_PLAUSIBLE_SCRIPT_URL`  | Optional                | Plausible script location                                                    |
| `PUBLIC_LEGAL_NAME`            | Required before launch  | Legal entity for final privacy and terms content                             |
| `PUBLIC_ABN`                   | Optional                | ABN if the owner decides to publish it                                       |

A Vercel production build fails when `PUBLIC_SITE_URL` is missing. This prevents localhost or a
preview URL from being published as the canonical marketing domain.

### Enquiry form activation

The walkthrough form posts directly to FormSubmit and includes its honeypot plus default anti-spam
challenge. FormSubmit sends an activation email to `lattesoto@gmail.com` after the first live
submission. Confirm that activation email before announcing the form. The form requests business
contact details only and tells visitors not to enter resident, health, payroll, or other sensitive
data.

If a different form provider or CRM is selected, update `PUBLIC_CONTACT_FORM_ENDPOINT` and the draft
privacy notice before launch.

## Quality checks

```bash
npm run format:check
npm run lint
npm run typecheck
npm run build
npm run audit:prod
npm run test:a11y
```

Run all non-browser checks with:

```bash
npm run check
```

Install the Playwright browser once before accessibility tests or screenshots:

```bash
npx playwright install chromium
```

Generate the mobile, tablet, and desktop review images with:

```bash
npm run screenshots
```

Outputs are written to `screenshots/`.

The final local production audit is saved in `reports/lighthouse.report.html` and
`reports/lighthouse.report.json`. It scored 98 Performance and 100 for Accessibility, Best
Practices, and SEO. Results will vary slightly by machine and should be rerun against the final
deployed domain.

## Vercel deployment

This repository is ready for its own Vercel project. Do not attach it to the private product project
or copy product secrets into it.

1. Import this repository as a new Vercel project.
2. Keep the detected framework as Astro and build command as `npm run build`.
3. Add the public variables above for Preview and Production as appropriate.
4. Review and replace the privacy and terms placeholders.
5. Confirm the FormSubmit activation email and complete a test enquiry.
6. Run `npm run check` and `npm run test:a11y` before promotion.
7. Add the final domain only after the owner confirms it.

No DNS changes or production deployment are included in this repository handoff.

## Project structure

```text
public/brand/          approved local CareMin assets
src/components/       header, footer, icons, and brand component
src/config/site.ts    central destinations and public configuration
src/layouts/          metadata and page shell
src/pages/            landing, legal placeholders, 404, robots, and sitemap
src/styles/           responsive design system
tests/                accessibility and screenshot checks
screenshots/          generated visual review images
reports/              saved Lighthouse production audit
```

## Launch items still requiring owner or professional input

- Final marketing domain
- Company legal name and any published ABN
- Professional privacy and terms review
- FormSubmit activation or replacement form provider
- Optional analytics decision
- Final review of dated regulatory content against the linked government sources
