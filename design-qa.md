# Design QA — Normkontor Enterprise Blueprint

## Scope

- Selected source: Enterprise Blueprint, direction 2
- Implementation: `site/app/page.tsx`, `site/app/globals.css`
- Visual assets: `site/public/brand/normkontor-enterprise-control-path.png` plus four transparent `normkontor-status-*.png` source-icon crops
- Runtime state: optimized production build served locally at `http://localhost:3012/`
- Browser: headed Chrome through Playwright
- Capture density: DPR 1, CSS-pixel screenshots
- Primary source viewport: 1487 × 1058 CSS px

The implementation preserves the selected institutional blueprint: an ivory document field, deep-navy navigation rail, oxblood actions, serif editorial hierarchy, a visible control path, and a four-part status strip. The full page remains semantic HTML. The control path and four status icons are decorative source crops; every status label and qualifier has one visible HTML owner.

## Visual evidence

| Surface | Evidence |
| --- | --- |
| Source and implementation in one image | `output/playwright/enterprise-polish/reference-vs-implementation.png` — 1487 × 1058 source left, implementation right |
| Desktop, rail expanded | `output/playwright/enterprise-blueprint/desktop-expanded-final.png` |
| Desktop, rail collapsed | `output/playwright/enterprise-blueprint/desktop-collapsed-final.png` |
| Desktop, keyboard-expanded rail | `output/playwright/enterprise-blueprint/desktop-keyboard-focus-final.png` |
| Current desktop hero | `output/playwright/enterprise-polish/desktop-1487x1058-viewport.png` |
| Current full desktop section sweep | `output/playwright/enterprise-polish/desktop-1487-full.png` |
| Current 1024 px tablet/desktop sweep | `output/playwright/enterprise-polish/tablet-1024-full.png` |
| Current mobile hero | `output/playwright/enterprise-polish/mobile-390-viewport.png` |
| Current mobile sweep | `output/playwright/enterprise-polish/mobile-390-full.png` |
| Current archival section marker | `output/playwright/enterprise-polish/marker-3a-viewport.png` |
| Current stable collapsed rail | `output/playwright/enterprise-polish/motion-collapsed-final.png` |
| Current stable expanded rail | `output/playwright/enterprise-polish/motion-expanded-final.png` |
| Mobile menu | `output/playwright/enterprise-blueprint/mobile-390-menu-open-final.png` |
| Narrow / 400%-equivalent menu | `output/playwright/enterprise-blueprint/mobile-320x256-menu-final.png` |

The screenshots under `output/` are local QA artifacts and are intentionally excluded from the public source package.

## Required fidelity surfaces

- Expanded desktop rail is 205 px wide and matches the selected source composition.
- Resting desktop rail is 76 px wide; moving the pointer away collapses it automatically.
- `:focus-within` expands the same rail for keyboard users without adding client state.
- Three-line desktop hero statement, source-matched line rule, two-line supporting copy, and exact CTA geometry.
- Right-side control-path panel and four-part status strip retain the selected grid, navy, ivory, and oxblood visual language.
- The next section begins at the same hero boundary and continues the institutional editorial system.
- Mobile converts the rail to a native `<details>` menu, stacks the CTAs, moves the control-path image into document flow, and renders semantic product statuses.
- The full site uses one coherent light enterprise system rather than independent dark landing-page blocks.
- The desktop navigation rail is now solid navy from viewport top to bottom; no section-colored break remains inside the navigation owner.
- The navy status transition spans the complete viewport width while its content grid still begins after the expanded 205 px rail boundary.
- Generic eyebrow copy was removed from the hero. Remaining section labels are factual archival markers with section code, evidence class, product state, or receipt purpose.
- Motion durations are centralized and approximately 1.8× their former duration: 400 ms rail, 290 ms buttons and rail labels, 250 ms skip link, with reduced-motion protection unchanged.
- Every H1/H2 renders in at most three lines at all measured widths; the hero has three explicit semantic display lines.

## Comparison history

### Iteration 1

- P1: the larger source-matched headline initially wrapped to four lines.
- P1: the expanded rail wordmark and evidence note did not align with the source grid.
- P2: the next-section heading used the inherited oversized display rule.

Resolution: preserved a 720 px hero owner, aligned the rail logo/navigation/truth note to the 205 px source rail, matched the hero's line breaks and dividers, and applied the smaller institutional heading at the owning section.

### Iteration 2

- P1: opening the mobile menu triggered the desktop `:focus-within` column treatment on the wordmark.
- P2: desktop image preloading produced a mobile unused-preload console warning.

Resolution: reset the brand to a row inside the mobile breakpoint and let Next.js load the decorative control-path image normally. The production console is now clean.

### Independent gate remediation

- P1: the first desktop status strip duplicated content between a text-bearing background image and transparent HTML.
- P1: the red global focus ring measured about 2.5:1 against the navy rail.
- P2: two inherited raster assets and their rollout-image CSS were no longer referenced.
- P2: a 320 × 256 menu did not visibly suggest that more destinations were available.

Resolution: replaced the text-bearing strip with four transparent source-icon crops and visible HTML, added an ivory dark-surface focus ring, removed 4.9 MB of unused raster assets plus dead CSS, and made the next narrow-menu row visibly clipped above a gold continuation edge.

### Final production pass

- P0: none.
- P1: none.
- P2: none.
- Independent visual review: PASS after remediation.
- Independent 3A COD3X simplicity and ownership review: PASS after remediation.
- Source and implementation were judged together in one 2974 × 1058 comparison image.

### Founder enterprise-polish pass

- User-directed deviation: removed the generic `Normkontor Living Receipt` hero eyebrow.
- User-directed deviation: made the rail continuous top-to-bottom and the navy section transition full-viewport width.
- Replaced generic kicker styling with square archival document markers carrying concrete Normkontor section, status, claim, or receipt semantics.
- Shortened long display copy instead of hiding it with line clamping; no heading content is visually truncated.
- Added a tablet/compact-desktop single-column document layout from 901–1180 px to keep headings controlled and remove the former 1024 px contact-grid overflow.
- Removed the instantaneous brand direction and navigation-offset jumps from the expanding rail; only width plus opacity/transform now animate, so layout geometry stays stable through the 400 ms transition.
- Deleted the fully hidden opening kicker and its CSS hide rule instead of retaining a dead DOM/CSS owner.
- P0: none.
- P1: none.
- P2: none.
- P3: none.

## Responsive and interaction verification

- 1487 × 1058 expanded state: rail 205 px, three-line hero, source-aligned control path and status strip, no horizontal overflow.
- Pointer-away state: rail returns to 76 px with no content reflow.
- Current pointer verification: rail expands from 76 px to 205 px on hover and returns to 76 px after pointer exit.
- Full-width transition verification: status rail reports `x: 0` and exact viewport width at 1487, 1280, 1180, 1024, 901, 900, 390 and 320 px.
- Headline verification: maximum measured H1/H2 line count is 3 at each of those eight widths; no heading exceeded the gate.
- Horizontal-overflow verification: 0 px at each of those eight widths.
- Motion verification: desktop rail computed transition duration is 0.4 s; button and rail-label transition token is 0.29 s; reduced-motion override remains 0.01 ms.
- Stable rail geometry verification: collapsed and expanded states both retain `brandFlexDirection: row`, brand/image x/y, `navTop: 178`, and `navMarginTop: 88px`; only rail width and label opacity change.
- Keyboard state: second Tab focuses `Normkontor Startseite`; `:focus-within` expands the rail to 205 px and uses an ivory focus ring on navy.
- 390 × 844: mobile hero and full-width CTA stack verified; native menu opens without brand distortion or horizontal overflow.
- 320 × 256: menu remains internally scrollable (`clientHeight: 137`, `scrollHeight: 292`, `overflow-y: auto`); a clipped next row and gold bottom edge expose the continuation without horizontal overflow.
- Review anchor settles at 94 CSS px from the viewport top; content remains unobscured.
- All 20 internal links resolve to existing targets.
- Native doctrine disclosure toggles successfully.
- Reduced-motion CSS disables smooth scrolling, animation duration, transition duration, and button hover movement.
- Browser console warnings/errors: 0.
- Resource origins: only `http://localhost:3012`.
- Cookies, local storage, and session storage: empty in the inspected session.

## Source and package gates

- ESLint: passed.
- Next.js production build: passed.
- Repository tests: 9/9 passed.
- Dependency audit: 0 vulnerabilities.
- `git diff --check`: passed.
- GitNexus change detection: two symbols, zero affected processes, low risk; the shared index reports the isolated worktree as ahead of its indexed sibling.

final result: passed
