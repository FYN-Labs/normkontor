# Design QA — Normkontor Living Receipt

## Scope

- Selected source reference: `output/playwright/living-receipt/source-reference.png`
- Implementation: `site/app/page.tsx`, `site/app/globals.css`
- Runtime state: optimized production build served locally at `http://localhost:3011/`
- Browser: headed Chromium through Playwright
- Capture density: DPR 1, CSS-pixel screenshots
- Primary source viewport: 1487 × 1058 CSS px

The selected source is a hero concept. The implementation preserves that visual thesis while extending it into a complete, truthful product site with navigation, status rail, 3A doctrine, control path, portfolio, review architecture, governance, rollout, contact, and evidence references.

## Visual evidence

| Surface | Evidence |
| --- | --- |
| Source and implementation in one image | `output/playwright/living-receipt/desktop-comparison-final-production.png` — source left, implementation right |
| Full desktop section sweep | `output/playwright/living-receipt/desktop-sections-final-production-grid.png` |
| Desktop hero | `output/playwright/living-receipt/desktop-top-1487x1058-final-production.png` |
| Mobile hero | `output/playwright/living-receipt/mobile-top-390x844-final-production.png` |
| Mobile Review anchor | `output/playwright/living-receipt/mobile-review-anchor-final-production.png` |
| 400% equivalent / narrow menu | `output/playwright/living-receipt/zoom400-menu-open-final-production.png` |
| Responsive boundary | `output/playwright/living-receipt/breakpoint-901x768-final-production.png`, `output/playwright/living-receipt/breakpoint-900x768-final-production.png` |

The screenshots under `output/` are local QA artifacts and are intentionally excluded from the published source package.

## Required fidelity surfaces

- Three-line desktop hero statement, left-weighted against the evidence-receipt image.
- Black, ivory, brass, and oxblood palette with restrained hairlines and document-led typography.
- Sans-serif explanatory copy beneath the serif display headline.
- Primary oxblood CTA and secondary rule-style CTA, both with trailing arrow affordances.
- Evidence note and four-part product-status rail retained at the hero boundary.
- Mobile-first reflow with full-width controls, readable line lengths, and the image moving below the copy.
- Full-site sections retain one coherent editorial system rather than becoming independent landing-page blocks.

## Comparison history

### Iteration 1

- P1: desktop headline wrapped to five lines instead of the source's three.
- P1: hero lede used the display serif rather than the source's sans-serif hierarchy.
- P2: desktop CTA proportions and secondary treatment were too generic.
- P2: the sticky mobile header left an expanded native menu over an anchor target.

Resolution: rebalanced the hero grid and type scale, restored sans-serif supporting copy, matched the CTA geometry, and made the mobile header participate in document flow so native anchor navigation remains unobscured without adding client state.

### Iteration 2

- The hero reached the intended three-line desktop composition.
- Independent review found the trailing CTA arrows missing.
- A circular `N` seen in development screenshots was identified as the Next.js development indicator, not a product element.

Resolution: added the two arrow affordances at the existing button owner and repeated the visual matrix against the optimized production server, where the development indicator is absent.

### Final production pass

- P0: none.
- P1: none.
- P2: none.
- Independent visual review: PASS.

## Responsive and interaction verification

- 1487 × 1058: source-comparison hero, three-line headline, both CTA arrows, no horizontal overflow.
- 1366 × 768, 1024 × 768, 901 × 768, 900 × 768: responsive transition verified with no horizontal overflow or development overlay.
- 390 × 844: mobile hero and full-width CTA stack verified.
- 320 × 256: menu remains operable with internal vertical scrolling (`clientHeight: 160`, `scrollHeight: 292`, `overflow-y: auto`) and no horizontal overflow.
- Mobile Review navigation settles with the target at approximately 24 CSS px from the viewport top; the non-sticky mobile header is outside the viewport and does not obscure content.
- Hero primary CTA resolves to `#kontakt`; the target is unobscured.
- Native 3A disclosure toggles open successfully.
- First keyboard Tab exposes the skip link; Enter focuses `main-content`.
- Browser console warnings/errors: 0.
- Resource origins: only `http://localhost:3011`.
- Cookies, local storage, and session storage: empty in the inspected session.

## Capture note

Playwright `fullPage` stitching was not used as fidelity evidence because viewport-relative `svh` sections can produce misleading stitched captures. Exact viewport captures and deterministic anchor-region captures are the visual source of truth for this QA.

final result: passed
