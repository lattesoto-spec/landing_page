# CareMin marketing website: Codex build brief

Last verified: 5 August 2026

## Instructions for the Codex receiving this brief

Build a polished public marketing website for CareMin, an Australian residential aged care care-minutes monitoring and evidence product.

This website must be a completely separate project from the CareMin application. Do not edit, import, or depend on the existing Flask application repository. Create a new repository and a separate Vercel project. The marketing site and product may share brand assets, links, and a domain family, but they must not share source code, dependencies, environment variables, deployment settings, or databases.

Use the latest stable version of the selected web framework. A statically generated site is preferred. Before installing dependencies, verify the current stable framework version from its official documentation.

## Brand clarification

The public product name is **CareMin**. The existing repository and some older planning documents use **Carelog** as an internal project name. Do not display Carelog on the public site unless the owner explicitly changes the brand decision.

Use the supplied CareMin assets:

- `full.png`: complete CareMin wordmark
- `simple.png`: original icon artwork
- `favicon.png`: square, proportion-preserving browser icon

Copy these files into the new site's own public asset directory. Do not reference them from the application repository at runtime.

## Recommended separation

Use this structure:

```text
Carelog/                 existing private product repository
caremin-marketing/       new public marketing repository
```

Recommended deployment:

```text
caremin.com.au           marketing website
www.caremin.com.au       redirects to the marketing website
app.caremin.com.au       existing CareMin application
```

These domains are examples until the owner confirms the real domain. Do not change DNS or deploy to production without confirmation.

The marketing site should have its own:

- Git repository
- Vercel project
- dependency lockfile
- environment variables
- analytics configuration
- contact-form integration
- privacy and terms pages

The only link between the two products should be the **Sign in** link, configured through a public environment variable such as `PUBLIC_APP_URL`.

## Product definition

CareMin helps Australian residential aged care providers monitor care minutes, identify reporting gaps, and keep the evidence behind their calculations in one controlled workspace.

Providers bring in worked-hours and resident data from their existing systems. CareMin normalises the files, separates eligible and unresolved roles, calculates care minutes against facility targets, highlights risks, and retains source information for review.

CareMin is not:

- a rostering platform
- an electronic health record
- a clinical care system
- a payroll replacement
- the Government Provider Management System
- a substitute for an auditor, lawyer, or compliance adviser
- a guarantee of regulatory compliance

It sits between the provider's operational systems and its reporting and review process.

## Regulatory context

Do not refer to a “Care Minutes Reporting Act”. There is no Act by that name.

Use this accurate framing:

> Australian residential aged care providers have care-minute responsibilities under the Aged Care Act 2024 and Aged Care Rules 2025. Providers report relevant labour hours and costs through the Quarterly Financial Report and report RN coverage separately. From the 2025-26 Aged Care Financial Report, providers must also submit an externally audited Care Minutes Performance Statement.

Verified facts that may be used:

- The sector-wide average requirement is 215 minutes of direct care per resident per day, including 44 minutes of RN care.
- Each residential care home has its own care-minute target based on its resident case mix.
- Care minutes include eligible direct care delivered by RNs, ENs, and PCWs or AINs.
- The standard calculation uses direct care hours divided by occupied bed days, multiplied by 60.
- Providers report residential care labour costs and hours at facility level through the Quarterly Financial Report.
- Providers must report RN coverage monthly for each approved residential care home.
- RN absences of 30 minutes or more are reportable.
- The 2025-26 Care Minutes Performance Statement must be externally audited under ASAE 3000.
- The first audited statement is due as part of the 2025-26 Aged Care Financial Report on 31 October 2026.
- Care-minute information can affect Staffing Star Ratings, assurance activity, and applicable care-minutes supplement payments.

Do not turn the sector-wide 215 and 44 minute figures into a claim that every facility has those exact targets. Explain that home-specific targets vary.

## The audience

Primary audience:

- facility managers
- Directors of Nursing
- clinical managers
- compliance officers
- finance and operations leaders
- executives of small and mid-sized residential aged care providers

The best initial customer is a provider operating roughly 1 to 10 homes that currently relies on spreadsheets and exports from several systems.

The audience understands aged care operations but should not need technical knowledge. They are busy, cautious about compliance claims, and tired of generic software marketing.

## The problem to explain

The landing page should clearly explain this sequence:

1. Relevant information is spread across roster, payroll, agency, resident, and reporting systems.
2. The reported figure depends on the correct worked hours, eligible roles, reporting period, and occupied bed-day denominator.
3. Quarterly reporting can hide a developing shortfall until there is little time to change staffing.
4. Reviews and audits require more than a final number. Providers need to show where it came from.
5. Manual spreadsheets make corrections, repeat imports, role decisions, and evidence lineage difficult to control.

Avoid fear-based claims. The point is operational clarity and traceability, not threatening the buyer with penalties.

## Current product capabilities

These capabilities exist and can be described carefully:

- Import roster, worked-hours, and resident files in common structured formats.
- Keep imports separated by organisation and facility.
- Review file quality warnings before relying on results.
- Classify eligible RN, EN, PCW, and AIN care time.
- Exclude ambiguous roles until an authorised user reviews them.
- Calculate daily and quarter-to-date care minutes per occupied bed day.
- Compare total and nursing care results with facility targets.
- Identify RN coverage gaps using the 30-minute reporting threshold.
- Show daily trends, current-quarter position, shortfalls, and data-age warnings.
- Model basic staffing and occupancy scenarios.
- Retain source files, import receipts, original row references, and calculation versions.
- Produce reviewable CSV, Excel, and PDF outputs.
- Support multiple facilities and role-based provider access.
- Give the platform operator a separate customer-account administration console.

Use “helps prepare”, “supports review”, and “provides evidence for” where appropriate. Do not use “automatically submits”, “guarantees compliance”, or “approved by the government”.

## Claims that must not appear

The following are not implemented or are not safe to claim:

- Direct submission to GPMS
- A guaranteed GPMS-ready file
- Guaranteed compliance with the Act or Rules
- Complete payroll reconciliation
- Complete labour-cost preparation for the audited performance statement
- Complete Services Australia claims-day reconciliation
- A complete resident-day ledger covering all leave and program exclusions
- Automatic separation of every split shift or hybrid role
- Live connections to every rostering, payroll, or clinical platform
- Email, SMS, Teams, or Slack notifications
- SSO, MFA, or enterprise identity-provider support
- Self-service password reset
- Regulator approval, certification, endorsement, or partnership
- Existing customer counts, testimonials, savings figures, or accuracy percentages without evidence

Do not call the product “AI-powered”. The method used to interpret unfamiliar file layouts is an implementation detail and should not be part of customer-facing copy.

## Messaging strategy

The site should communicate three ideas in this order:

1. **Know the current position.** See care-minute performance before the quarter closes.
2. **Understand the calculation.** See which hours, roles, days, and targets produced the result.
3. **Keep the supporting record.** Retain source files and calculation lineage for internal review and external audit preparation.

Recommended one-line description:

> Care-minute monitoring and evidence for Australian residential aged care.

Recommended supporting statement:

> Bring worked hours, occupied bed days, eligibility decisions, and reporting evidence into one controlled workspace.

Primary CTA:

> Request a walkthrough

Secondary CTA:

> Sign in

Do not advertise a free trial, pricing plan, or instant account creation unless those flows actually exist before launch.

## Page structure and draft copy

Build a single focused home page with the following sections.

### 1. Header

Content:

- CareMin full logo
- How it works
- Capabilities
- Reporting context
- FAQ
- Sign in
- Request a walkthrough

The header should become compact on mobile. Keep the primary CTA visible without crowding the navigation.

### 2. Hero

Eyebrow:

> Care minutes for residential aged care

Headline:

> See where your care minutes stand before the quarter closes.

Body:

> CareMin brings worked hours, occupied bed days, role eligibility, and source evidence into one place. Monitor facility performance, investigate gaps, and prepare a clearer reporting record.

Actions:

- Request a walkthrough
- Sign in

Hero visual:

Create a product-led composition using a browser frame or restrained dashboard preview. Show a facility's quarter-to-date total, RN position, one trend chart, and an evidence-status panel. Use sample data and label it clearly as sample data. Do not invent a customer name or testimonial.

### 3. Regulatory context strip

Use three factual items:

- 215 sector-wide average care minutes
- 44 sector-wide average RN minutes
- Facility-specific targets and occupied bed-day reporting

Add a short note:

> Targets vary by home. Providers remain responsible for confirming the targets and source data used in their submissions.

### 4. Problem section

Heading:

> The final number is only part of the work.

Body:

> Care-minute reporting depends on the right worked hours, eligible occupations, reporting period, and occupied bed days. When those inputs live in separate exports and spreadsheets, it becomes difficult to see the current position or explain how a result was produced.

Use four concise problem cards:

1. Data spread across systems
2. Role and activity eligibility decisions
3. Shortfalls discovered late
4. Evidence assembled after the fact

### 5. How it works

Heading:

> From source files to a reviewable care-minute position.

Use four steps:

1. **Import**: Add worked-hours and resident data from existing systems.
2. **Review**: Resolve data-quality warnings and ambiguous role classifications.
3. **Monitor**: Compare daily and quarter-to-date results with each facility's targets.
4. **Evidence**: Keep source files, import records, row references, and calculation versions together.

Do not imply that every unfamiliar file will import perfectly without review.

### 6. Product capabilities

Heading:

> One workspace for monitoring, review, and evidence.

Feature groups:

**Care-minute position**

- daily and quarter-to-date results
- total, RN, and EN contribution views
- home-specific targets
- data-age and shortfall warnings

**RN coverage**

- continuous coverage checks
- gaps of 30 minutes or more
- monthly review support

**Data review**

- structured file imports
- role eligibility queue
- excluded and unresolved rows shown separately
- import quality warnings

**Evidence and outputs**

- retained source files
- import and calculation records
- CSV, Excel, and PDF outputs
- calculation version and original row references

**Operational planning**

- staffing scenarios
- occupancy changes
- facility-level views
- multiple facilities per provider

### 7. Evidence section

Heading:

> Keep the calculation and its source record together.

Body:

> A care-minute result should be explainable. CareMin records the file, import, original row, eligibility decision, and calculation version behind the figures so teams can review changes and prepare supporting information.

Visual:

Show a simple lineage flow:

```text
Source file -> Import receipt -> Normalised row -> Eligibility decision -> Calculation -> Output
```

This can be a native HTML and CSS diagram. Do not use a generated illustration when a clear interface-style visual will do.

### 8. Reporting context

Heading:

> Built around the way care minutes are reviewed and reported.

Body:

> Providers continue to report labour hours and costs through the Quarterly Financial Report and RN coverage through monthly reporting. From the 2025-26 Aged Care Financial Report, providers must also submit an externally audited Care Minutes Performance Statement. CareMin helps organise and review care-minute inputs and evidence. It does not submit reports to government systems or replace professional assurance.

Include links to official government guidance, opening in a new tab.

### 9. Audience section

Heading:

> Designed for the people responsible for the result.

Use roles rather than invented logos:

- Facility managers monitoring daily performance
- Directors of Nursing reviewing RN coverage and staffing risk
- Compliance teams preparing evidence
- Operations leaders comparing facilities
- Finance teams reconciling reporting inputs

### 10. FAQ

Include these questions and concise answers:

**Does CareMin submit reports to GPMS?**

No. CareMin supports monitoring, review, and evidence preparation. The provider remains responsible for checking and submitting information through the required government channels.

**Does every home use a target of 215 minutes and 44 RN minutes?**

No. Those are sector-wide averages. Each home has targets that reflect its resident case mix.

**Which staff can contribute to care minutes?**

Eligible direct care may be delivered by registered nurses, enrolled nurses, and personal care workers or assistants in nursing, subject to the applicable rules and reporting guidance. CareMin keeps unresolved roles out of calculated results until reviewed.

**Can we use our existing exports?**

CareMin accepts common structured file formats and is designed to work with exports from existing systems. File quality and field availability still determine what can be calculated reliably.

**Does CareMin replace our auditor?**

No. CareMin helps maintain a reviewable record. It does not provide an audit opinion or replace a registered company auditor.

**Is CareMin a rostering or payroll system?**

No. It works alongside existing operational systems.

### 11. Final CTA

Heading:

> Review your care-minute process with CareMin.

Body:

> See how CareMin imports facility data, surfaces unresolved items, calculates the current position, and keeps the supporting record together.

Button:

> Request a walkthrough

Do not use countdown timers, fake urgency, popups, or an unverified customer count.

### 12. Footer

Include:

- CareMin logo
- Australian residential aged care focus
- Product sign-in link
- Privacy
- Terms
- Contact
- Regulatory disclaimer
- Copyright with the current year generated at build time

Disclaimer draft:

> CareMin is a monitoring and evidence-management tool. It does not provide legal, accounting, audit, or regulatory advice. Providers are responsible for verifying their data, targets, calculations, and submissions against current requirements.

## Voice and copy rules

The writing must be direct, specific, and calm.

Required:

- Australian English
- “organisation”, not “organization”, in public copy
- “care minutes”, “worked hours”, and “occupied bed days” used precisely
- short paragraphs
- factual headings
- claims linked to primary sources where appropriate

Never use:

- em dashes or en dashes
- “What if...”
- “Every number has evidence”
- “revolutionary”
- “game-changing”
- “cutting-edge”
- “unlock”
- “empower”
- “seamless”
- “effortless”
- “single source of truth”
- “compliance made simple”
- “peace of mind”
- “AI-powered”
- dramatic rhetorical questions
- vague claims such as “save countless hours”

Do not use stock phrases such as “Focus on what matters most” or “Built for the future of care”.

## Visual direction

The marketing site should feel related to the application without duplicating its interface.

Direction:

- restrained Australian healthcare and compliance aesthetic
- navy, slate, white, and the existing cyan brand glow
- strong information hierarchy
- generous spacing
- precise data visualisation details
- real interface-style product previews
- subtle motion only where it explains hierarchy or interaction
- no generic photos of smiling nurses and residents in the hero
- no glassmorphism-heavy startup template
- no oversized gradient headline
- no decorative 3D objects
- no carousel

Use the full logo without clipping its glow or final letter. Use the square favicon asset for browser icons. Always preserve image aspect ratios.

The website must work at 320px width and scale cleanly through tablet and desktop. Product preview text must remain legible or collapse into a simplified mobile composition.

## Technical requirements

- Static generation wherever possible
- TypeScript if the framework supports it
- Semantic HTML landmarks
- WCAG 2.2 AA colour contrast and keyboard access
- Visible focus states
- Respect `prefers-reduced-motion`
- Responsive images with explicit dimensions to avoid layout shift
- No autoplay video
- No essential text baked into images
- Lighthouse targets of at least 95 for Performance, Accessibility, Best Practices, and SEO on the production home page
- Open Graph and social metadata
- `robots.txt` and `sitemap.xml`
- canonical URLs
- structured data for `SoftwareApplication` only where every field is truthful
- privacy-friendly analytics, disabled until configured
- no customer or health data collected by the marketing site
- contact form protected against spam if one is implemented
- dependency audit with no unresolved high-severity production vulnerabilities

Do not put application secrets, database URLs, or private product API credentials into this repository.

## Contact and CTA implementation

The owner still needs to provide:

- production marketing domain
- product sign-in URL
- contact email
- company legal name
- ABN, if it will be shown
- privacy policy content
- terms content
- form destination or CRM
- analytics preference

Until provided, keep these values in one clearly documented configuration file or public environment variables. Do not silently invent them. A local development placeholder must be visibly marked and must not ship to production.

## SEO guidance

Suggested title:

> CareMin | Care-minute monitoring for Australian aged care

Suggested meta description:

> Monitor residential aged care minutes, review RN coverage and role eligibility, and keep source evidence and calculation records together.

Primary search intent:

- aged care care minutes software
- residential aged care care minutes reporting
- care minutes compliance monitoring
- RN coverage reporting aged care
- Care Minutes Performance Statement preparation

Write for humans first. Do not repeat keywords unnaturally.

## Primary sources

Use these sources for regulatory claims. Do not replace them with blogs or competitor pages.

- [Care minutes in residential aged care](https://www.health.gov.au/our-work/care-minutes-registered-nurses-aged-care/care-minutes)
- [Quarterly Financial Report](https://www.health.gov.au/topics/aged-care/providing-aged-care-services/reporting/quarterly-financial-report)
- [Quarterly Financial Report labour costs and hours guidance](https://www.health.gov.au/resources/videos/quarterly-financial-report-qfr-residential-care-labour-costs-hours-reporting-guidance-video)
- [24/7 registered nurse reporting](https://www.health.gov.au/our-work/care-minutes-registered-nurses-aged-care/24-7-rns/reporting)
- [Care Minutes Performance Statement](https://www.health.gov.au/our-work/care-minutes-registered-nurses-aged-care/care-minutes/care-minutes-performance-statement)
- [Care Minutes Performance Statement guidance](https://www.health.gov.au/resources/collections/care-minutes-performance-statement-guidance)
- [Care minutes and RN reporting assurance activities](https://www.health.gov.au/our-work/care-minutes-registered-nurses-aged-care/care-minutes/247-registered-nurse-and-care-minutes-reporting-assurance-activities)
- [Aged Care Rules 2025, latest text](https://www.legislation.gov.au/F2025L01173/latest/text)
- [Aged Care Amendment (Care Minutes) Rules 2025](https://www.legislation.gov.au/F2025L01555/asmade/2025-12-12/text/original/epub/OEBPS/document_1/document_1.html)

Regulatory content can change. Recheck all dated figures, deadlines, and obligations against the current version of these official pages before publishing.

## Pages to create

Required:

- `/` landing page
- `/privacy` privacy placeholder clearly marked for legal review
- `/terms` terms placeholder clearly marked for legal review
- custom 404 page

Optional only if there is enough real content:

- `/care-minutes` educational page based on official sources
- `/security` factual security overview

Do not create an empty blog, fake case studies, a pricing page without pricing, or dozens of shallow SEO pages.

## Deliverables

The finished handoff must include:

1. A separate, runnable repository.
2. A concise README with local setup and deployment instructions.
3. A responsive landing page implementing the structure above.
4. Local copies of the three approved brand assets.
5. Configurable app and contact links.
6. Privacy and terms placeholders marked for professional review.
7. Automated checks for formatting, linting, types, and production build.
8. Accessibility checks for the primary navigation, forms, and interactive elements.
9. A final production build with no errors.
10. Screenshots at mobile, tablet, and desktop widths for visual review.

## Definition of done

The work is complete when:

- it is located outside the CareMin application repository
- it runs locally from a clean dependency install
- it builds successfully for Vercel
- the full logo is not clipped
- the favicon remains square and is not stretched
- all CTAs point to configured destinations
- no unsupported product claims appear
- no rejected marketing phrases or long dashes appear
- all regulatory claims are linked to current primary sources
- keyboard navigation and mobile layouts have been checked
- the implementation contains no application secrets or dependency on the Flask product

