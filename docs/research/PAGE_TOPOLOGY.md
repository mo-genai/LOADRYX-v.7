# Page Topology — proofcore.io (cloned as NIMBUS placeholder)

Source: https://proofcore.io/ at 1440x900 viewport.

Total page height ~8190px. 8 sections + floating navbar.

## Section map (top → bottom, by scrollY)

| # | Section | Range (y) | Heading (original → placeholder) |
|---|---|---|---|
| 0 | Floating navbar | 0 (fixed) | PC logo / nav — replaced with NIMBUS logo |
| 1 | Hero | 0–811 | "Dominate The Game with Undetected Cheats from PROOFCORE" → "Ship Faster with Production-Ready Tools from NIMBUS" |
| 2 | Why? | 811–1919 | "Why PROOFCORE?" → "Why NIMBUS?" — 6-card 3-col feature grid |
| 3 | Products | 1919–3805 | "Our Products" — 12-card 3-col grid (game cards → abstract product cards) |
| 4 | Trusted | 3805–4531 | "Trusted Worldwide" — 3 stat cards |
| 5 | Benefits | 4531–5901 | "Our Benefits" — 3 rows × 3 cards mixed visuals |
| 6 | How it works | 5901–6935 | "How it works?" → "See it in action" — interactive hover compare |
| 7 | CTA | 6935–7639 | "Cheat with PROOFCORE now!" → "Try NIMBUS today" — single button |
| 8 | Footer | 7639–8190 | 4-column links + brand description |

## Global

- Font: **Manrope** (Google), weights 400, 500, 600, 700.
- Body bg: `oklch(0.13 0.03 262)` — very dark blue-ish black, ~#0b0c14
- Text color: white / `#f5f5f7`
- Dark theme only (`html.dark`).
- Layout container: ~max-w-7xl (1280px) centered.
- Section padding: `py-16 md:py-32`
- No Lenis / no smooth-scroll library — native scroll.
- Hero giant text: 84px / 105px line-height / weight 400 / Manrope. Letters fade-blur in on load.

## Floating navbar (key behavior)

- At scrollY = 0: navbar is wide but visually subtle.
- At scrollY > ~40px: navbar becomes a centered rounded pill ~880px wide with backdrop blur, border, dark translucent bg.
- Both states show: logo (left), nav links (center: Home, Products, Status, How-to, FAQ, Forums), "Get Started" pill button (right).

## Card patterns observed

- **Feature card** (Why / Benefits / Trusted): rounded-2xl, subtle border (white/5), bg-white/[0.02], padded ~32px, icon centered top in light line-art on a faint dotted grid plaque, then title (semibold), then muted subtitle.
- **Product card**: rounded-2xl, hero image top with logo overlay, dark inner body. Title, "Starting price" + bold dollar amount, two status pills (Undetected/Verification), full-width "Purchase Now" pill button at the bottom.
- **Stat card**: same shell as feature card but with a big number (84px) replacing the title and a single-line label.

## Brand & content neutralization

| Original | Replacement |
|---|---|
| PROOFCORE | **NIMBUS** |
| PC monogram logo | **N** monogram (custom SVG, similar geometric vibe) |
| Cheats / Cheat / hack | **Tools / Toolkit / module** |
| Undetected | **Stable** |
| Testing | **Beta** |
| Verification | **Verified** |
| Game titles (Fortnite, PUBG, Apex, etc.) | **Project Aurora, Project Borealis, Project Cobalt, …** |
| Game cover art | Abstract gradient panels |
| Discord / Telegram social | Generic icon links |
