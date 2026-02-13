# ECA Landing Page — Design Reference (Echelon Style)

Source: https://echelon.framer.ai/

---

## Color Palette

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `--bg-primary` | `#FFFFFF` | `rgb(255,255,255)` | Page background |
| `--bg-footer` | `#0F0F11` | `rgb(15,15,17)` | Footer, dark sections |
| `--text-primary` | `#1E1E1E` | `rgb(30,30,30)` | Headings, body text |
| `--text-muted-hero` | `rgba(63,71,96,0.5)` | — | Hero first-line faded text |
| `--text-muted` | `#818293` | `rgb(129,130,147)` | Descriptions, secondary text |
| `--text-dark` | `#1A1A1F` | `rgb(26,26,31)` | FAQ subtitles, strong body |
| `--accent-teal` | `#698D9C` | `rgb(105,141,156)` | Section labels (uppercase) |
| `--text-white` | `#FFFFFF` | `rgb(255,255,255)` | Footer text, dark-bg text |
| `--nav-gradient-start` | `#FFFFFF` | — | Nav pill gradient top |
| `--nav-gradient-end` | `#D6DEE6` | `rgb(214,222,230)` | Nav pill gradient bottom |
| `--card-bg` | `#FFFFFF` | — | Card backgrounds |
| `--card-border` | `#E5E5E5` | — | Subtle card borders |

## Typography

Font family: **Inter** (all weights)

| Element | Size | Weight | Line-Height | Letter-Spacing | Color |
|---------|------|--------|-------------|----------------|-------|
| H1 (Hero) | 78px | 400 | 78px (1.0) | -5.46px | `#1E1E1E` |
| H1 first line | 78px | 400 | 78px | -5.46px | `rgba(63,71,96,0.5)` |
| H2 (Section) | 32px | 500 | 38.4px (1.2) | -1.6px | `#1E1E1E` |
| H3 (Sub/Quote) | 28px | 500 | 33.6px (1.2) | -1.4px | `#1E1E1E` |
| H6 (Card title) | 18px | 500 | 21.6px (1.2) | -0.54px | `#1E1E1E` |
| Nav links | 14px | 400 | 19.6px (1.4) | 0.28px | `#1E1E1E` |
| Section label | 12px | 500 | — | 0.6px | `#698D9C` (uppercase) |
| Feature title | 16px | 500 | — | -0.48px | `#1E1E1E` |
| Feature desc | 12px | 400 | — | — | `#818293` |
| FAQ question | 16px | 500 | — | -0.48px | `#1E1E1E` |
| Footer heading | 12px | 400 | — | — | `#FFFFFF` |
| Footer meta | 12px | 400 | — | — | `#818293` |
| Body/paragraph | 16px | 400 | 24px (1.5) | — | `#818293` |

Key pattern: **Tight negative letter-spacing** on headings, slight positive on nav links.

## Layout

| Token | Value |
|-------|-------|
| Page max-width | 1440px |
| Content max-width | 1100px |
| Hero heading max-width | 900px |
| Nav height | 74px |
| Section vertical padding | 80–120px |
| Card gap | 0px (feature grid), 16–20px (bento) |
| FAQ item width | 1100px |
| CTA section height | ~630px |

## Navigation

- **Position:** Fixed top, z-index 10
- **Height:** 74px
- **Style:** Pill-shaped inner container with rounded corners (border-radius ~40px)
- **Background:** White-to-light-gray gradient `linear-gradient(#FFF 0%, #D6DEE6 100%)`
- **Links:** 14px, weight 400, letter-spacing 0.28px, no underline
- **CTA button:** Pill-shaped "Get Started" on the right
- **On scroll:** Subtle backdrop-blur, maintains pill shape
- **Logo:** Left side, text-based

## Buttons

- **Shape:** Pill (border-radius ~999px / full)
- **Background:** Dark (`#1E1E1E` or near-black)
- **Text:** White, 14–16px, weight 500
- **Padding:** ~12px 24px
- **Hover animation:** Dual-text slide effect (two h6 elements stacked, one slides in on hover)
- **Variants:** Primary (dark fill), Ghost (transparent, text only)

## Cards

### Feature Carousel Cards
- Background: `#FFFFFF`
- Border-radius: `12px`
- Padding: `20px`
- Height: `410px`
- Width: `339–352px`
- Overflow: clip
- Shadow: subtle or none
- Layout: flex column, justify space-between

### Feature Grid Cards
- Padding: `20px`
- Gap: `16px` (internal)
- Height: `250px`
- Layout: flex column, justify flex-end
- Border: subtle 1px light gray or none
- Grid: 3 columns, ~366px each

### Bento Cards (Compliance section)
- Border-radius: `12px`
- Background: white or very light gray
- Padding: `20px`
- Mixed sizes (2-col layout: left column has 2 stacked cards, right has 1 tall card)
- Clean separation via gap, minimal borders

## Sections Flow

1. **Nav** — Fixed pill-shaped bar
2. **Hero** — Large H1 (78px), faded first line, subtitle, CTA button, product screenshot below
3. **Logo Marquee** — Horizontal scroll, fade edges, gap 100px, height 150px, logos ~90px
4. **"Centralized & Unified Performance"** — Letter-animated H2, paragraph, horizontal scrolling feature cards
5. **"Features & Benefits"** — Uppercase teal label, H3 heading, 3-col grid of feature cards (6 total)
6. **Testimonial** — Uppercase teal "TESTIMONIAL" label, large quote (H3), avatar + name + title
7. **"Compliance built for AI agents"** — Letter-animated H2, bento grid cards
8. **FAQ** — Letter-animated H2, accordion items (padding 30px 20px, cursor pointer, gap 22px)
9. **CTA** — Letter-animated H2, subtitle, "Sign up" pill button, ~630px tall
10. **Footer** — Dark bg `#0F0F11`, white text, muted gray links, 3-column layout, bottom bar with copyright

## Animations

| Animation | Description |
|-----------|-------------|
| Letter-by-letter reveal | H2 headings: each character in individual `<div>`, animates on scroll |
| Scroll fade-in | Feature grid cards start at `opacity: 0`, fade in on scroll |
| Button hover slide | Dual text elements — one slides out, other slides in |
| Marquee | Continuous horizontal scroll with gradient fade edges |
| Smooth scroll | All anchor links use smooth scrolling |

## Key Design Principles

1. **Light, minimal aesthetic** — White backgrounds, near-black text, no heavy gradients
2. **High contrast** — `#1E1E1E` on `#FFFFFF` for readability
3. **Muted secondary text** — `#818293` for descriptions, never competing with headings
4. **Teal accent sparingly** — `#698D9C` only for uppercase section labels
5. **Spacing over borders** — Sections separated by generous padding, not divider lines
6. **Dark footer as anchor** — `#0F0F11` footer grounds the page
7. **Typography-driven** — Large headings with tight letter-spacing create visual hierarchy
8. **Pill shapes** — Nav bar and buttons use full-rounded pill shapes
9. **No dark mode toggle** — Single cohesive light theme
10. **Animated headings** — Letter-spaced reveal animations add polish without clutter

## Mapping to ECA Sections

| Echelon Section | ECA Equivalent |
|----------------|----------------|
| Nav (pill) | Header |
| Hero (78px H1 + screenshot) | Hero |
| Logo Marquee | *New — partner/tech logos* |
| Centralized + Cards | Features (horizontal scroll cards) |
| Features Grid | Features (3-col grid) |
| Testimonial | *New — testimonial section* |
| Compliance Bento | TechStack or Comparison (bento layout) |
| FAQ | FAQ |
| CTA | Contact |
| Dark Footer | Footer |
