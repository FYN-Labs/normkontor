# Design QA — Normkontor Enterprise Blueprint

## Scope

- Selected source: Enterprise Blueprint, direction 2, with the original bright Control Path V1 hero and founder-selected Ownership/Authority interruptors
- Implementation: `site/app/page.tsx`, `site/app/globals.css`
- Visual assets: `normkontor-enterprise-control-path.png`, `normkontor-ownership-xray.png`, `normkontor-authority-shutter.png`, plus four transparent `normkontor-status-*.png` source-icon crops
- Runtime state: optimized Next.js production runtime at `http://127.0.0.1:3013/`
- Browser: headed Chrome through Playwright
- Capture density: DPR 1, CSS-pixel screenshots
- Primary production comparison viewport: 1487 × 1058 CSS px

The implementation preserves the selected institutional blueprint: an ivory document field, deep-navy navigation rail, oxblood actions, serif editorial hierarchy, a visible control path, and a four-part status strip. The full page remains semantic HTML. The control path and four status icons are decorative source crops; every status label and qualifier has one visible HTML owner.

## Visual evidence

| Surface | Evidence |
| --- | --- |
| Current V1 hero source and production implementation in one image | `output/playwright/normkontor-option-1/production-compare-v1-restored-header.png` — 1487 × 1058 source left, production implementation right |
| Ownership X-Ray source and production implementation in one image | `output/playwright/normkontor-option-1/production-compare-ownership-source-implementation.png` — normalized 1440 × 1024 source left, production implementation right |
| Authority Shutter source and production implementation in one image | `output/playwright/normkontor-option-1/production-compare-authority-source-implementation.png` — normalized 1440 × 1024 source left, production implementation right |
| Current production desktop V1 hero | `output/playwright/normkontor-option-1/production-v1-restored-desktop-1487x1058.png` |
| Current production desktop Ownership X-Ray | `output/playwright/normkontor-option-1/production-desktop-ownership.png` |
| Current production desktop Authority Shutter | `output/playwright/normkontor-option-1/production-desktop-authority.png` |
| Current production mobile V1 hero | `output/playwright/normkontor-option-1/production-v1-restored-mobile-390x844.png` |
| Current production mobile menu | `output/playwright/normkontor-option-1/production-v1-restored-mobile-menu.png` |
| Current production mobile Ownership X-Ray | `output/playwright/normkontor-option-1/production-mobile-ownership.png` |
| Current production mobile Authority Shutter | `output/playwright/normkontor-option-1/production-mobile-authority.png` |
| Source and implementation in one image | `output/playwright/enterprise-polish/reference-vs-implementation.png` — 1487 × 1058 source left, implementation right |
| Desktop, rail expanded | `output/playwright/enterprise-blueprint/desktop-expanded-final.png` |
| Desktop, rail collapsed | `output/playwright/enterprise-blueprint/desktop-collapsed-final.png` |
| Desktop, keyboard-expanded rail | `output/playwright/enterprise-blueprint/desktop-keyboard-focus-final.png` |
| Approved V1 source truth | `output/playwright/enterprise-polish/desktop-1487x1058-viewport.png` |
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
- The original 470 × 733 Control Path V1 image is restored at its native right-side owner; the three-line HTML headline again uses the source-matched 80 px desktop ceiling.
- Ownership X-Ray is the single selected new section: its baked duplicate rail was removed by an exact 105 px source crop so the live 76 px navigation remains the only rail owner.
- Authority Shutter appears exactly once after the control path. Its lower 1122 × 696 scene is an exact crop from the selected mock, without rebuilding the shutter, linework, or typography in CSS.
- Both text-bearing interruptors use intrinsic dimensions and unoptimized source bytes to preserve glyph sharpness. The V1 hero is a static decorative source asset and is not preloaded.
- Interruptor motion is limited to a 30-second 1.015 scale drift. Reduced Motion disables the interruptor animation and smooth scrolling.

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

### Founder-selected option 1 pass

- Source truth for retained interruptors: Ownership X-Ray crop `1382 × 1058`, Authority Shutter crop `1122 × 696`.
- A generated brass-frame hero was evaluated in this pass and later rejected by the founder. It is no longer referenced or present in the current source package.
- P2: both generated section mockups carried context that would duplicate an existing owner: a second navy rail on Ownership X-Ray and the old hero above Authority Shutter. Resolution: exact deterministic source crops at `x=105` and `y=706`; no visual content was reconstructed in DOM or CSS. Post-fix evidence: the two section comparison images.
- P2: default optimized delivery softened rasterized display text in the large interruptors. Resolution: keep explicit intrinsic dimensions and use `unoptimized` only for the two text-bearing below-fold images.
- Desktop rail remains the existing native owner and measures `76 → 205 → 76` px under pointer entry and exit.
- Mobile measures `390:390` for document width versus viewport width; the native menu opens and closes successfully.
- Reduced-motion runtime proof: computed hero animation plus root scroll behavior equals `none:auto`.
- First independent visual gate P1: the Next.js development indicator duplicated the N brand in development captures. Resolution: all frozen evidence now comes from the optimized production runtime, where the indicator is absent.
- First independent visual gate P1: baked labels in the two wide source images were too small at 390 px. Resolution: each image remains uncropped and intact, while a visible HTML figcaption carries the operative meaning at a readable mobile size; desktop keeps the same caption semantically available without duplicating the composition.
- Fresh production-gate browser session: 0 console errors and 0 warnings after both interruptors loaded.
- Independent production visual re-review: PASS; no remaining P0/P1/P2 findings.
- Independent 3A COD3X final-delta review: PASS; no remaining P0/P1/P2 findings and no added runtime, state, authority, or third interruptor.
- P0: none.
- P1: none.
- P2: none.
- P3: none.

### Founder V1 header rollback pass

- Founder direction: return only the header to the earlier bright Enterprise V1; keep Ownership X-Ray and Authority Shutter unchanged.
- Native owner reused: restored the existing 470 × 733 `normkontor-enterprise-control-path.png` asset and its prior `Home`/CSS placement from commit `5d90b2c`; removed the rejected hero raster and its animation/layout overrides.
- Full-view comparison: `production-compare-v1-restored-header.png` places the 1487 × 1058 approved V1 source and current production implementation in one image. No focused crop was needed because headline, CTA geometry, control-path labels, status strip and next-section boundary are all legible at this size.
- Mobile evidence: `production-v1-restored-mobile-390x844.png` and `production-v1-restored-mobile-menu.png`; document width equals viewport width and the native menu opens without layout drift.
- Runtime evidence: rail `76 → 205 → 76`, Reduced Motion `none:none:auto`, console 0 errors and 0 warnings.
- Independent visual delta review: PASS; no P0/P1/P2 findings.
- First independent 3A delta review: REVISE only because this QA document still named the discarded hero asset. The stale reference and discarded-state evidence were removed before the final delta review.
- Independent 3A final-delta review after remediation: PASS; no P0/P1/P2 findings.
- P0: none.
- P1: none after documentation remediation.
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
- Resource origins: only `http://127.0.0.1:3013`.
- Cookies, local storage, and session storage: empty in the inspected session.

## Source and package gates

- ESLint: passed.
- Next.js production build: passed.
- Repository tests: 9/9 passed.
- Dependency audit: 0 vulnerabilities.
- `git diff --check`: passed.
- GitNexus change detection: two symbols, zero affected processes, low risk; the shared index reports the isolated worktree as ahead of its indexed sibling.
- Current GitNexus change detection: eight symbols across three files, zero affected processes, low risk.

final result: passed
