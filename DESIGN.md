---
name: CareMin
description: Care-minute monitoring and evidence for Australian aged-care providers, set as a wayfinding program.
colors:
  ink: "#0e2b35"
  ink-raised: "#173a45"
  ink-text: "#c3d6d8"
  footer-ink: "#0a222a"
  brand-aqua: "#5fd8d5"
  brand-aqua-hover: "#7fe2df"
  aqua-field: "#ddf3f1"
  brand-aqua-soft: "#e6f8f7"
  teal: "#1f6f73"
  mineral: "#f2f5f4"
  eucalyptus: "#e3ece9"
  surface: "#ffffff"
  line: "#cfdcd9"
  line-strong: "#a9bebb"
  muted: "#4a5f66"
  body-ink: "#1c3842"
  alert-red: "#a23b3b"
  alert-red-soft: "#fce9e9"
typography:
  display:
    fontFamily: "Atkinson Hyperlegible Next Variable, Segoe UI, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif"
    fontSize: "clamp(2.6rem, 5.4vw, 4.5rem)"
    fontWeight: 780
    lineHeight: 1.02
    letterSpacing: "-0.032em"
  headline:
    fontFamily: "Atkinson Hyperlegible Next Variable, Segoe UI, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.95rem, 3.3vw, 2.9rem)"
    fontWeight: 720
    lineHeight: 1.12
    letterSpacing: "-0.022em"
  figure:
    fontFamily: "Atkinson Hyperlegible Next Variable, Segoe UI, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif"
    fontSize: "clamp(2.75rem, 5vw, 3.75rem)"
    fontWeight: 760
    lineHeight: 1
    letterSpacing: "-0.035em"
    fontFeature: "tnum"
  title:
    fontFamily: "Atkinson Hyperlegible Next Variable, Segoe UI, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 720
    lineHeight: 1.12
    letterSpacing: "-0.012em"
  lede:
    fontFamily: "Atkinson Hyperlegible Next Variable, Segoe UI, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.1rem, 1.6vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Atkinson Hyperlegible Next Variable, Segoe UI, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Atkinson Hyperlegible Next Variable, Segoe UI, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 700
    lineHeight: 1.4
  caption:
    fontFamily: "Atkinson Hyperlegible Next Variable, Segoe UI, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif"
    fontSize: "0.86rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: "0.5rem"
  md: "0.75rem"
  plaque: "1rem"
  pill: "999px"
spacing:
  section: "clamp(5rem, 8vw, 7.5rem)"
  section-mobile: "4rem"
  intro-gap: "clamp(2.75rem, 5vw, 4rem)"
  column-gap: "clamp(2.5rem, 6vw, 6rem)"
  row: "1.75rem"
  container: "74rem"
  gutter: "1.5rem"
components:
  button-primary:
    backgroundColor: "{colors.brand-aqua}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.5rem"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "{colors.brand-aqua-hover}"
    textColor: "{colors.ink}"
  button-large:
    backgroundColor: "{colors.brand-aqua}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.75rem"
    height: "3.5rem"
  button-quiet:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.body-ink}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.5rem"
    height: "3.25rem"
  button-quiet-hover:
    backgroundColor: "{colors.eucalyptus}"
    textColor: "{colors.ink}"
  nav-link:
    textColor: "{colors.muted}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 0.8rem"
  nav-link-hover:
    backgroundColor: "{colors.mineral}"
    textColor: "{colors.ink}"
  input-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.7rem 0.9rem"
    height: "3.1rem"
  plaque-bar:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    padding: "0.65rem 0.9rem"
  sign-icon:
    backgroundColor: "{colors.eucalyptus}"
    textColor: "{colors.teal}"
    rounded: "{rounded.md}"
    size: "2.75rem"
  sign-icon-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.brand-aqua}"
    rounded: "{rounded.md}"
    size: "2.75rem"
  door-sign:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "0.5rem 0.9rem 0.5rem 0.5rem"
    height: "3.6rem"
  guide-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.body-ink}"
    rounded: "{rounded.plaque}"
    padding: "1.5rem 1.5rem 3.75rem"
  route-marker:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.brand-aqua}"
    size: "3.75rem"
---

# Design System: CareMin

## Overview

**Creative North Star: "The Wayfinding Program"**

The site is a well-signed building. Each section is a zone with one primary sign, the visitor follows a visible route from source file to reported result, and product screens are mounted like plaques on the wall. Deep signage ink carries the high-contrast zones (hero, evidence, contact, footer); mineral white, eucalyptus, and a pale aqua field carry the rest. CareMin aqua is the route colour: it marks the primary action, the route stations, and the current step, and almost nothing else.

Type does the signing. One family, Atkinson Hyperlegible Next, runs heavy and tight for signs and regular for reading. Density is calm: generous section padding, ruled lists instead of card grids for ordinary content, and rounded plaques reserved for the things a visitor handles or inspects (product screens, the capability directory, the FAQ, the form, guide destinations).

Product truth comes first. Real CareMin screens with demonstration data are the main imagery, each captioned as such. No invented interfaces, no decorative filler, and copy that names concrete behaviour rather than generic software claims.

**Key Characteristics:**
- Colour-coded zones alternating white, aqua field, eucalyptus, and ink; never two ink zones adjacent.
- One aqua primary sign per zone; teal for links and secondary marks on light grounds.
- A single hyperlegible family, weight 720 to 780 for signs, 400 for text.
- Plaques: 1rem-rounded panels with a satin edge and an ink title bar.
- The route: a 6px line with circular ink station markers, drawn once on load.

## Colors

A cool signage palette: blue-green ink, mineral neutrals, and one luminous aqua that means "this way".

### Primary
- **Signage Ink** (ink): the ground of the hero, evidence, and contact zones, plaque title bars, door signs, route markers, and every heading on a light ground.
- **CareMin Aqua** (brand-aqua): the primary button, route station glyphs, the current lineage step, focus rings on ink, text selection. Its scarcity is the wayfinding signal.
- **Aqua Glow** (brand-aqua-hover): hover state of the primary button only.

### Secondary
- **Wayfinding Teal** (teal): links on light grounds, the drawn route line, sign-icon glyphs, ring bullets in the directory, focus rings on light grounds, form focus border.
- **Aqua Field** (aqua-field): the zone background behind the route section. Its muted text pairs at #3f565c for contrast.
- **Aqua Wash** (brand-aqua-soft): background of regulatory and privacy notes on resource pages, always with a 3px aqua left rule.

### Neutral
- **Raised Ink** (ink-raised): panels sitting on an ink zone, such as the lineage panel.
- **Ink Reading Text** (ink-text): body and lede text on ink zones.
- **Footer Ink** (footer-ink): the footer ground, one step deeper than Signage Ink so the footer reads as the building's base.
- **Mineral White** (mineral): context strip, page heroes on secondary pages, hover fills for nav links, FAQ rows, and source rows.
- **Eucalyptus** (eucalyptus): secondary zone background, sign-icon plates, inline notes, FAQ toggles.
- **Surface White** (surface): default zone, plaques, cards, form.
- **Rule** (line) and **Strong Rule** (line-strong): 1px dividers between list rows; strong rule for input borders and register tables.
- **Muted Slate** (muted): supporting paragraphs and ledes on light grounds.
- **Body Ink** (body-ink): default body text colour.
- **Alert Red** (alert-red, alert-red-soft): calculator validation errors only.

### Named Rules
**The One Route Colour Rule.** Aqua appears only where it directs: the primary action, the route, the current step, focus on ink. It is never used as a decorative fill or a heading colour.

**The Zone Rhythm Rule.** Each section takes one zone colour (white, aqua field, eucalyptus, or ink) and changes zone at the section boundary; the colour change is the section divider, not a border or ornament.

## Typography

**Display Font:** Atkinson Hyperlegible Next Variable (with Segoe UI, system sans fallback), self-hosted via @fontsource-variable.
**Body Font:** the same family.

**Character:** A legibility face built for low-vision readers, pushed to heavy weights and tight tracking so headlines read as signs, and left at regular weight for comfortable reading. One family keeps the program coherent.

### Hierarchy
- **Display** (780, clamp(2.6rem, 5.4vw, 4.5rem), 1.02): the hero headline only, max 18ch, white on ink. Mobile clamp(2.25rem, 10vw, 3.1rem).
- **Headline** (720, clamp(1.95rem, 3.3vw, 2.9rem), 1.12): one per section, balanced wrapping. Contact heading runs larger at clamp(2.1rem, 3.8vw, 3.25rem).
- **Figure** (760, clamp(2.75rem, 5vw, 3.75rem), 1, tabular numerals): sourced statistics in the context strip.
- **Title** (720, 1.2rem, 1.12): item headings; route stations step up to 1.5rem, directory rows to 1.3rem.
- **Lede** (400, clamp(1.1rem, 1.6vw, 1.25rem), 1.55): section intros, in Muted Slate, intro block max 44rem.
- **Body** (400, 1.0625rem, 1.6): running text; prose max 72ch.
- **Label** (700, 0.95rem): form labels, footer column labels, FAQ questions run at 1.12rem 700. Nav links are 600.
- **Caption** (400, 0.86rem): plaque captions in slate (#5b6f75).

### Named Rules
**The Sign Weight Rule.** Anything that names a place (headings, door signs, plaque bars, route stations) is set 680 or heavier with negative tracking; anything that explains is 400. Nothing sits in between for emphasis except inline strong at 700.

**The Sentence Case Rule.** Headings, labels, and signs are sentence case. Short uppercase room codes on door signs are the only capitalised device.

## Layout

A centred container of 74rem with 1.5rem side insets (1rem under 680px, 0.75rem under 380px). Sections pad clamp(5rem, 8vw, 7.5rem) vertically, 4rem on mobile. Section intros sit left-aligned, max 44rem, with clamp(2.75rem, 5vw, 4rem) below.

Two-column compositions use asymmetric 5:7 or 4:7 splits (hero, split heading plus list, contact) and 7:5 or 6:5 for screen-led sections, with column gaps of clamp(2.5rem, 6vw, 6rem). A split heading may stick at 7rem from the top on desktop. Ordinary content is ruled lists: rows separated by 1px rules with 1.1 to 1.75rem block padding, not boxed cards.

Breakpoints: 1100px (guides drop to two columns, teams to three), 920px (all splits collapse to one column, nav becomes a dropdown, route becomes a 2x2 grid without the line), 680px (single column everywhere, full-width buttons, route becomes a vertical line with markers on the left).

## Elevation & Depth

Depth is mostly tonal: zone colour changes and raised ink panels. Shadows are soft, ink-tinted, and long, used to mount plaques on the wall rather than to float UI.

### Shadow Vocabulary
- **Plaque mount** (`box-shadow: 0 1px 0 rgba(255,255,255,0.6) inset, 0 18px 40px -18px rgba(14,43,53,0.32)`): directory and FAQ plaques on light zones.
- **Lift** (`box-shadow: 0 14px 34px -12px rgba(14,43,53,0.22)`): product plaques on light zones, guide card hover, the mobile nav dropdown.
- **Ink mount** (`box-shadow: 0 30px 60px -24px rgba(0,0,0,0.55)` with a 1px 8% white ring; `0 40px 80px -40px rgba(0,0,0,0.6)` for the form): plaques and panels sitting on ink.
- **Scrolled header** (`box-shadow: 0 6px 20px -14px rgba(14,43,53,0.35)`): header once the page scrolls.

### Named Rules
**The Mounted Plaque Rule.** Only plaques cast shadows at rest. Ruled lists, notes, and icon plates are flat. Guide cards are flat until hover.

## Shapes

Gently rounded panels (1rem) for plaques, the directory, FAQ, form, and guide cards; 0.75rem for sign plates, door signs, notes, and hover rows; 0.5rem for inputs. Actions and nav links are full pills. Circles are reserved for route markers, the FAQ toggle, go-arrows, and directory ring bullets. The plaque surface carries a satin edge, a 160deg gradient from white to #e4ecea, and its title bar takes the inner radius (1rem minus 0.4rem) on top corners only.

## Components

### Buttons
Confident pills that read as the one sign to follow.
- **Shape:** full pill (999px), min height 3.25rem; large variant 3.5rem at 1.05rem.
- **Primary:** aqua fill with ink text, weight 720, padding 0.8rem 1.5rem.
- **Hover / Focus:** fill lightens to Aqua Glow over 180ms; active presses down 1px; focus is a 2px ink outline at 3px offset.
- **Quiet:** white with a Strong Rule border and Body Ink text; hover fills eucalyptus with an ink border. Used on secondary pages.
- **Text link action:** on ink, the sign-in link is white 650 with an aqua arrow mark (inline SVG) that slides 3px on hover.

### Cards / Containers
- **Plaque:** 0.5rem padded satin frame, ink title bar (0.92rem, 680, white) with a 3px aqua ring mark, product screen beneath, caption below stating demonstration data.
- **Directory and FAQ plaques:** white, 1rem radius, Plaque mount shadow, rows divided by 1px rules.
- **Guide card:** white, 1px rule border, 1rem radius, 12.5rem min height; hover turns the border teal, adds Lift, rises 2px, and the go-circle flips from eucalyptus/teal to ink/aqua. The index link is a full-width ink variant.
- **Note:** eucalyptus fill, 0.75rem radius, 1.1rem 1.25rem padding, slate text.

### Inputs / Fields
- **Style:** white, 1px Strong Rule border, 0.5rem radius, min height 3.1rem; labels 0.95rem 700 in ink above.
- **Hover:** border darkens to #5b6f75.
- **Focus:** teal border plus a 3px teal halo at 22% opacity; no outline.
- **Select:** custom teal chevron. Checkbox uses teal accent colour.

### Navigation
Sticky white header at 96% opacity with a light blur, 4.75rem tall; a rule and soft shadow appear once scrolled. Nav links are 0.95rem 600 slate pills that fill mineral on hover. Under 920px a bordered hamburger opens a white 0.8rem-rounded dropdown with Lift, links stacked, actions below a rule. Footer sits on Footer Ink with white 720 column labels and links in Ink Reading Text that turn aqua on hover.

### The Route (signature)
Four stations in a row joined by a 6px rounded line. The grey base line is overdrawn in teal from Import to Export once on load (900ms, cubic-bezier(0.16, 1, 0.3, 1)), and each 3.75rem ink marker with an aqua glyph lights in sequence at 150ms steps. Reduced motion shows the finished state. On mobile the line runs vertically down the marker column.

### Sign plates and door signs
- **Sign icon:** 2.75rem plate, 0.75rem radius, eucalyptus with teal glyph; ink with aqua glyph inside the directory; aqua with ink glyph on the ink zone. Glyphs are inline SVG.
- **Door sign:** ink plate with a 2.3rem aqua room-code tile (two-letter uppercase code) and the team name in white 1rem.

### Lineage panel
Raised Ink panel with a 1px 16% aqua-tint border. A 4px vertical track fills aqua to the current station; nodes are 2.2rem circles, the current node aqua with an aqua-tint row highlight, other rows tint on hover.

## Do's and Don'ts

### Do:
- **Do** use genuine CareMin screens with demonstration data, mounted as plaques and captioned "Real product screen using demonstration data" or equivalent.
- **Do** give each section one zone colour and one primary sign; keep supporting items quieter.
- **Do** style links with colour and weight (teal 650 on light, aqua on ink), changing colour on hover.
- **Do** set lists of ordinary content as ruled rows rather than boxed cards.
- **Do** keep page copy as approved by the owner; visual work never rewrites it.
- **Do** write concrete product behaviour and outcomes.
- **Do** self-host every font and image; the CSP allows nothing else.

### Don't:
- **Don't** underline links or use underlines as decoration.
- **Don't** use em dashes in any written copy.
- **Don't** add gradient blobs, mesh glows, decorative grid backgrounds, or floating shapes. Gradients are limited to the plaque satin edge, the faint 6% aqua wash at the top of the hero, and the lineage progress track.
- **Don't** italicise fragments inside headings or paragraphs for emphasis.
- **Don't** put an eyebrow, kicker, badge, or category tag above a heading; a label needs a real navigation or status purpose.
- **Don't** use aqua as a heading colour, large decorative fill, or on more than one action per zone.
- **Don't** fabricate customer logos, testimonials, or metrics; backing is Monash University and Fastrack only.
- **Don't** use typed glyphs (arrows, letters) as icons; use inline SVG.
