# CareMin styling reference

This document is the visual and editorial reference for CareMin marketing pages. The intended tone
is sober, precise, and operational: professional assurance software for Australian residential aged
care, not a promotional consumer app or a generic SaaS template.

The current implementation lives primarily in `src/styles/global.css`. When this document and the
implementation differ, review the change deliberately and update both.

## Design character

CareMin should feel:

- Controlled and dependable
- Clear enough for operational teams
- Credible to compliance, finance, and assurance professionals
- Calm, factual, and evidence-led
- Modern without appearing fashionable or decorative

The interface should resemble a well-designed working document or professional reporting system.
Hierarchy comes from typography, spacing, alignment, and rules rather than decoration.

## Core principles

### Use restraint

- Use cool neutrals for most surfaces.
- Reserve teal for status, focus, and small functional accents.
- Prefer flat surfaces and thin borders over shadows.
- Keep corners modest and functional.
- Use dark ink for primary actions instead of bright accent colours.
- Keep section transitions quiet; a subtle background change or rule is usually enough.

### Show product truth

- Use genuine CareMin product screens with demonstration data.
- Frame product screenshots like documented system views, not floating browser mockups.
- Use a thin border, a small radius, and only a restrained shadow.
- Give every screenshot a factual caption.
- Do not reconstruct product interfaces for decorative purposes.

### Present evidence as records

- Use tables, ledgers, ordered rows, definition lists, and ruled grids for structured information.
- Use labels and status indicators only when they communicate real state.
- Show traceability as a sequence of records rather than a collection of colourful cards.
- Keep source links visible and plainly labelled.

## Colour system

The canonical colour tokens are defined in `src/styles/global.css`.

| Role             | Token         | Value     | Use                                     |
| ---------------- | ------------- | --------- | --------------------------------------- |
| Primary ink      | `--navy-950`  | `#17232d` | Headlines and strongest text            |
| Action ink       | `--navy-900`  | `#22313d` | Primary buttons and dark controls       |
| Supporting ink   | `--slate-700` | `#465660` | Body text and navigation                |
| Secondary text   | `--slate-600` | `#5d6b73` | Descriptions and captions               |
| Quiet text       | `--slate-500` | `#5f6d75` | Small metadata with accessible contrast |
| Strong rule      | `--slate-300` | `#bcc5c9` | Structural borders                      |
| Standard rule    | `--slate-200` | `#dce1e3` | Dividers and field borders              |
| Soft surface     | `--slate-100` | `#eef1f2` | Notes and restrained highlights         |
| Page surface     | `--surface`   | `#ffffff` | Main background                         |
| Alternate canvas | `--canvas`    | `#f4f5f5` | Alternating sections                    |
| Functional teal  | `--cyan-700`  | `#1c6b6e` | Status, focus, and small accents        |
| Teal tint        | `--cyan-100`  | `#e8f2f1` | Rare functional highlighting            |

Colour guidance:

- Do not use teal as a large decorative fill.
- Do not introduce gradients, glows, neon accents, or colourful background blobs.
- Avoid warm beige or clay as a major page treatment.
- Dark sections should be reserved for decisive areas such as the enquiry section and footer.
- Maintain WCAG AA contrast, including small metadata and disabled-looking text.

## Typography

The site uses the native professional sans-serif stack:

```css
font-family:
  Aptos,
  "Segoe UI",
  -apple-system,
  BlinkMacSystemFont,
  Helvetica,
  Arial,
  sans-serif;
```

Typography rules:

- Headlines use approximately `650` weight rather than extra-bold display weights.
- Use restrained negative tracking: around `-0.04em` for the main heading and `-0.025em` for other
  headings.
- The main heading uses `clamp(2.5rem, 5vw, 4rem)` on larger screens.
- Section headings use `clamp(1.85rem, 3.2vw, 2.7rem)`.
- Body copy uses comfortable line-height and should rarely exceed `1.14rem` in marketing sections.
- Keep headings left-aligned by default.
- Avoid oversized display type, italic emphasis, gradient text, and decorative type treatments.
- Use uppercase overlines sparingly and only for useful context, with small type and wide tracking.

## Layout and spacing

- Maximum content width: `72rem`.
- Default container gutters: `1.5rem` per side on larger screens and `1rem` on mobile.
- Standard section spacing: `clamp(4.75rem, 7vw, 6.75rem)`.
- Use a clear two-column layout when text and a product view support each other.
- Prefer ruled two-column content grids over rows of floating cards.
- Do not centre every section heading.
- Let each section have one primary visual idea.
- Avoid excessive whitespace that makes the page feel theatrical rather than operational.

Current responsive breakpoints:

- `1100px`: tighten navigation and large two-column layouts.
- `920px`: switch primary layouts to one column and enable mobile navigation.
- `680px`: stack content grids, actions, forms, and evidence rows for mobile.
- `380px`: reduce gutters and simplify compact navigation/footer layouts.

## Shape, borders, and depth

Use the shared radius tokens:

| Token         | Value     |
| ------------- | --------- |
| `--radius-sm` | `0.25rem` |
| `--radius-md` | `0.4rem`  |
| `--radius-lg` | `0.55rem` |
| `--radius-xl` | `0.75rem` |

Rules:

- Ordinary content should not need a rounded container.
- Forms, product screens, menus, and functional controls may use a small radius.
- Use `1px` neutral borders to define structure.
- Avoid pills unless the element is genuinely a compact status or filter.
- Avoid large floating shadows. Product screenshots may use a subtle shadow to separate them from
  the page.
- Buttons must not glow, bounce, or translate on hover.

## Components

### Header

- Use a solid white background with a persistent bottom rule.
- A very small shadow may appear after scrolling.
- Navigation text is quiet and compact.
- Hover states may darken or underline; avoid bright colour changes.
- The primary header action uses dark ink and a small radius.

### Buttons

- Primary buttons use `--navy-900` with white text.
- Hover uses `--navy-950` without movement or added shadow.
- Secondary buttons use a white background and neutral border.
- Labels should describe the action plainly, for example `Arrange a walkthrough` or `Sign in`.
- Avoid oversized buttons, gradient fills, glow effects, and icon clutter.

### Product screenshots

- Use the real product screenshot at a useful, legible crop.
- Use a thin neutral frame and restrained shadow.
- The frame label is small, uppercase, and left-aligned.
- Do not use decorative browser traffic-light dots.
- Captions should state what is shown and whether demonstration data is used.

### Content grids

- Use top and bottom rules to create rhythm.
- Icons are small, monochrome, and secondary to the heading.
- Numbering may use a monospace face as quiet metadata.
- Items should share alignment, but not look like separate floating cards.
- Bullets should use small square neutral marks rather than bright dots or checkmarks.

### Evidence lineage

- Present traceability as a ledger of ordered rows.
- Each row contains a sequence number, record name, and short description.
- A current or selected row may use a subtle tinted background and a narrow teal inset rule.
- Do not turn each record into a rounded card.
- Do not use decorative connecting arrows when order is already clear.

### Forms

- Use a white surface, neutral border, small radius, and no large shadow.
- Labels stay visible above fields.
- Inputs use plain white backgrounds and strong, accessible borders.
- Supporting text should be concise and readable.
- Required consent must remain explicit.
- The submit action uses the standard dark primary button.

### FAQ

- Use ruled rows rather than accordion cards.
- Questions are left-aligned.
- Use a simple plus/minus indicator without a surrounding decorative circle.

### Footer

- Use a dark, quiet background.
- Keep navigation compact and factual.
- Avoid marketing badges, social-proof strips, and decorative calls to action.

## Editorial tone

Copy is part of the visual character. Write as if the reader is assessing a professional system,
not browsing an aspirational lifestyle product.

Prefer:

- Controlled record
- Reviewable result
- Source evidence
- Reporting period
- Classification decision
- Calculation version
- Structured import
- Facility-specific target
- Retained supporting record

Avoid:

- Smart, magical, effortless, or revolutionary
- Full story, whole picture, bring into focus, or unlock
- With confidence when the sentence can state the actual control or result
- Vague claims that could describe any software product
- Repeated claims about being seamless, connected, or all-in-one
- Artificial urgency or exaggerated transformation

Headlines should state a capability or control directly. Examples:

- `Care-minute reporting with a reviewable record.`
- `A controlled record from import to output.`
- `Trace every result to its source.`
- `Aligned to care-minute reporting and review.`

## Avoiding generic AI/SaaS styling

Do not add:

- Gradient hero backgrounds
- Glowing teal buttons
- Floating rounded cards with large shadows
- Decorative glassmorphism
- Large pill-shaped labels above every heading
- Centred headline-plus-three-card patterns repeated down the page
- Fake dashboards or invented statistics
- Random sparkles, grids, or abstract background shapes
- Excessive icon boxes
- Marketing metaphors in place of concrete product behaviour

When a page feels too plain, first improve alignment, hierarchy, spacing, or the quality of the
product evidence. Do not solve it by adding decoration.

## Accessibility and quality checks

Every styling change should preserve:

- WCAG AA text contrast
- Visible keyboard focus
- Semantic headings and landmarks
- Accessible form labels and consent controls
- A usable mobile navigation menu
- No horizontal overflow at `320px`
- Reduced-motion behaviour

Before merging or deploying a material visual change, run:

```bash
npm run format:check
npm run lint
npm run typecheck
npm run build
npm run test:a11y
npm run screenshots
```

Review the generated desktop, tablet, and mobile images in `screenshots/` rather than relying only
on a wide desktop browser window.

## Review checklist

Before adding a new section or page, ask:

1. Does this look like professional reporting software rather than a generic SaaS landing page?
2. Is the section communicating a concrete capability, control, or source of evidence?
3. Can borders, alignment, and typography do the work instead of a card or decorative effect?
4. Is teal being used functionally and sparingly?
5. Is the copy factual and specific to CareMin?
6. Does the layout remain clear on mobile?
7. Have contrast and keyboard behaviour been verified?
