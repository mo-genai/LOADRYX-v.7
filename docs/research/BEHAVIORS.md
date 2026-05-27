# Behavior Notes — proofcore.io

## Hero load animation
- Title is split into characters; each `<span>` has `animate-fade-in-blur` with a staggered delay. Letters fade in from blurred to sharp.
- We'll approximate with a single `animate-fade-in` on the line + a small `blur` start state in CSS keyframes.

## Floating navbar
- At top (scrollY = 0): full-width transparent or barely visible.
- After scrolling: navbar collapses into a centered rounded-pill with:
  - max-width ~880px
  - backdrop-blur (~12px)
  - bg rgba(15,15,20, 0.6)
  - border: 1px solid rgba(255,255,255,0.08)
  - shadow: subtle
- Transition: ~300ms ease.
- Implementation: track `scrollY` via React state + scroll listener, toggle a `floating` className.

## Hover compare image
- "How it works" has a full-width image, mouse position drives a vertical reveal line that splits "before / after". Native HTML + CSS clip-path or width based on mouseX is enough.

## Card hover
- Subtle border lightening + slight upward translate. Not critical.

## Pricing pill button (primary)
- White-ish bg `#e9e8eb`, dark text, rounded-full, ~12px x 28px padding.
- Hover: brightens / slight scale.

## Background dotted pattern
- The hero has a subtle dotted grid overlay. CSS-only via `background-image: radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)` with `background-size: 24px 24px`.

## Stat numbers
- Plain text — no count-up animation observed in static screenshot. Skip count animation.
