# Design QA — Normkontor Enterprise Blueprint

## Scope

- Selected source: founder-selected Normenregister hero revision with HTML copy left, the physical register right, and the existing live navigation rail at far left; local source truth: `output/playwright/normkontor-normenregister/source-selected.png`
- Implementation: `site/app/page.tsx`, `site/app/globals.css`
- Visual assets: `normkontor-normenregister-book.png`, `normkontor-authority-shutter.png`, plus four transparent `normkontor-status-*.png` source-icon crops
- Runtime state: optimized Next.js production runtime at `http://127.0.0.1:3013/`
- Browser: headed Chrome through Playwright
- Capture density: DPR 1, CSS-pixel screenshots
- Primary production comparison viewport: 1536 × 1024 CSS px

The implementation recreates the selected institutional hero with semantic HTML copy and actions, a real transparent Normenregister raster, the existing collapsible navy rail, and the existing full-width product-status transition below the first viewport. The physical register remains one image owner; navigation, headline, actions, and product status remain accessible HTML.

## Visual evidence

| Surface | Evidence |
| --- | --- |
| Current Normenregister source and production implementation in one image | `output/playwright/normkontor-normenregister/source-vs-implementation-final.png` — 1536 × 1024 source left, same-size production implementation right |
| Current production desktop hero, rail collapsed | `output/playwright/normkontor-normenregister/implementation-desktop-final-collapsed.png` |
| Current production desktop hero, rail expanded | `output/playwright/normkontor-normenregister/implementation-desktop-final-expanded.png` |
| Current production mobile hero | `output/playwright/normkontor-normenregister/implementation-mobile-390-final.png` |
| Current production mobile menu | `output/playwright/normkontor-normenregister/implementation-mobile-menu-final.png` |
| Historical X-Ray hero source and implementation | `output/playwright/normkontor-xray-hero/source-vs-production.png` — superseded by the Normenregister selection |
| Historical whitening-strength comparison | `output/playwright/normkontor-xray-hero/whitening-strength-comparison.png` — superseded by the Normenregister selection |
| Authority Shutter source and production implementation in one image | `output/playwright/normkontor-option-1/production-compare-authority-source-implementation.png` — normalized 1440 × 1024 source left, production implementation right |
| Historical production desktop X-Ray hero | `output/playwright/normkontor-xray-hero/production-desktop-final.png` |
| Current production desktop Authority Shutter | `output/playwright/normkontor-option-1/production-desktop-authority.png` |
| Current production mobile hero copy | `output/playwright/normkontor-xray-hero/production-mobile-top.png` |
| Historical production mobile X-Ray art | `output/playwright/normkontor-xray-hero/production-mobile-art.png` |
| Historical production mobile X-Ray caption | `output/playwright/normkontor-xray-hero/production-mobile-caption.png` |
| Current production mobile menu | `output/playwright/normkontor-xray-hero/production-mobile-menu.png` |
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

- The existing rail remains the single navigation owner: 76 px at rest and 205 px on hover or keyboard focus. The source's static rail is not duplicated.
- Resting desktop rail is 76 px wide; moving the pointer away collapses it automatically.
- `:focus-within` expands the same rail for keyboard users without adding client state.
- Three-line desktop hero statement, short oxblood rule, two-line supporting copy, and outlined/filled CTA pair follow the selected source.
- The transparent physical Normenregister is the only hero-image owner and preserves the oxblood binding, indexed tabs, brass N seal, red cord, and printed evidence docket.
- The four-part status transition remains full width but begins after the first desktop viewport, keeping the selected hero composition uninterrupted.
- Mobile converts the rail to a native `<details>` menu, stacks the CTAs, moves the Normenregister into document flow, and renders semantic product statuses.
- The full site uses one coherent light enterprise system rather than independent dark landing-page blocks.
- The desktop navigation rail is now solid navy from viewport top to bottom; no section-colored break remains inside the navigation owner.
- The navy status transition spans the complete viewport width while its content grid still begins after the expanded 205 px rail boundary.
- Generic eyebrow copy was removed from the hero. Remaining section labels are factual archival markers with section code, evidence class, product state, or receipt purpose.
- Motion durations are centralized and approximately 1.8× their former duration: 400 ms rail, 290 ms buttons and rail labels, 250 ms skip link, with reduced-motion protection unchanged.
- Every H1/H2 renders in at most three lines at all measured widths; the hero has three explicit semantic display lines.
- No duplicate rail, fake paper, CSS illustration, new component, client state, or third-party runtime was added. The existing `Home`, global CSS, and `next/image` path remain the native owners.
- The desktop hero consumes one complete viewport before the status transition; the physical register is delivered at its native 768 × 1024 pixels without optimization softening its printed labels.
- Authority Shutter appears exactly once after the control path. Its lower 1122 × 696 scene is an exact crop from the selected mock, without rebuilding the shutter, linework, or typography in CSS.
- The Normenregister and Authority Shutter use unoptimized local Next images to preserve rasterized display text; no remote image origin is introduced.
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

### Founder X-Ray hero-background trial

- Founder direction: use the supplied 1487 × 1058 Ownership X-Ray as the hero background and whiten the left text region enough to retain legibility.
- Reuse proof: the existing 1382 × 1058 public asset is pixel-identical to an exact `x=105` crop of the supplied source. The removed strip is only the baked navy rail; the live CSS rail remains the single navigation owner.
- The standalone Ownership interruptor was deleted instead of duplicating the same visual. Exactly one X-Ray remains in the hero and exactly one Authority Shutter remains after the control path.
- Three whitening strengths were captured in one comparison: 74%, 82%, and 90%. The live trial uses the balanced 82% ivory field with an 860 px text owner and a soft same-color edge.
- P2: the first full-background crop placed the second line of `EIN PROBLEM. EIN OWNER.` behind the status strip. Resolution: let the background overlap the status owner by 80 px; the complete statement is now visible above it.
- P2: preloading the decorative background produced a mobile unused-preload warning. Resolution: removed `preload`; the final fresh Production session reports 0 console errors and 0 warnings on desktop and mobile.
- Mobile keeps the full source ratio at 390 × 299 below the hero copy, followed immediately by a visible 350 × 59 HTML caption. The initial reviewer concern that this caption was clipped was disproved by computed Production runtime evidence (`display:grid`, `position:static`, `clip:auto`, `clip-path:none`).
- Full-view comparison: `source-vs-production.png`; focused evidence was required only for the mobile caption and is recorded in `production-mobile-caption.png`.
- Independent final visual review: PASS; no remaining P0/P1/P2 findings.
- Independent final 3A simplicity and ownership review: PASS after removing three redundant CSS declarations and correcting one stale QA label.
- P0: none.
- P1: none.
- P2: none.
- P3: whitening strength remains a founder-tunable preference; the live 82% value is not a release decision.

### Founder-selected Normenregister hero pass

- Founder direction: keep the full-height collapsible rail at far left, move semantic headline/copy/actions to the left content field, and place the physical paper Normenregister with N seal on the right.
- Native owner reused: the existing `Home` hero, global hero CSS, `next/image`, rail interaction, responsive stack, and product-status transition. No new component, dependency, client state, runtime, analytics, or form was introduced.
- Source truth is `1536 × 1024`; the final production capture uses the same viewport and DPR 1. `source-vs-implementation-final.png` combines both at `3072 × 1024` for one comparison input.
- Asset fidelity: the selected register was isolated as one transparent `768 × 1024` PNG. It retains the physical spine, page tabs, printed docket, brass N seal, red cord, texture, and shadow instead of rebuilding them with CSS or SVG.
- First comparison P2: the copy sat 53 px too far right, the register was about 3% undersized, and the CTA row sat above the source rhythm. Resolution: reused the earlier two-column owner, aligned the copy 12 px beyond the expanded rail, enlarged the intrinsic image frame, and matched the selected CTA geometry.
- Second comparison P2: the display line-height compressed the three-line statement and left the rule, lede, and CTAs about 27 px high. Resolution: changed only the hero display line-height to 1.08. The final full-view comparison aligns the headline, rule, lede, actions, register bounds, and utility navigation.
- Independent review P2: CSS-generated middle dots entered the accessible names of the utility links. Resolution: replaced generated `content` with visual `border-left` separators; link names now contain only their visible destination labels.
- The static source rail is intentionally not copied: the already-approved live rail remains `76 → 205 → 76` px and therefore preserves automatic collapse plus keyboard `:focus-within` behavior.
- Focused crop was not required: at the equal-size desktop comparison, headline, utility navigation, CTA borders, binding, tabs, docket copy, seal, and register edges are all legible. Mobile and menu states are covered by separate captures.
- Final production browser session: 0 console errors and 0 warnings; primary CTA reaches `#kontakt`; every internal anchor resolves; horizontal overflow is 0 px.
- P0: none.
- P1: none.
- P2: none after two visual iterations and the independent accessibility cleanup.
- P3: the interactive rail necessarily differs in width and label scale from the static generated mock; this is an accepted product behavior, not a fidelity defect.

## Responsive and interaction verification

- 1536 × 1024 state: uninterrupted selected hero for the first viewport, three-line semantic headline, utility links, complete physical register, and no horizontal overflow. The full-width status transition begins below it.
- Pointer-away state: rail returns to 76 px with no content reflow.
- Current pointer verification: rail expands from 76 px to 205 px on hover and returns to 76 px after pointer exit.
- Full-width transition verification: status rail reports `x: 0` and exact viewport width at 1487, 1280, 1180, 1024, 901, 900, 390 and 320 px.
- Headline verification: maximum measured H1/H2 line count is 3 at each of those eight widths; no heading exceeded the gate.
- Horizontal-overflow verification: 0 px at each of those eight widths.
- Motion verification: desktop rail computed transition duration is 0.4 s; button and rail-label transition token is 0.29 s; reduced-motion override remains 0.01 ms.
- Stable rail geometry verification: collapsed and expanded states both retain `brandFlexDirection: row`, brand/image x/y, `navTop: 178`, and `navMarginTop: 88px`; only rail width and label opacity change.
- Keyboard state: second Tab focuses `Normkontor Startseite`; `:focus-within` expands the rail to 205 px and uses an ivory focus ring on navy.
- 390 × 844: mobile hero and full-width CTA stack verified; the register frame equals the 390 px viewport width, the source image loads at its native 768 × 1024 size, and the native menu opens without brand distortion or horizontal overflow.
- 320 × 256: menu remains internally scrollable (`clientHeight: 137`, `scrollHeight: 292`, `overflow-y: auto`); a clipped next row and gold bottom edge expose the continuation without horizontal overflow.
- Review anchor settles at 94 CSS px from the viewport top; content remains unobscured.
- Every internal link resolves to an existing target; the primary hero CTA was clicked and reached `#kontakt`.
- Native doctrine disclosure toggles successfully.
- Reduced-motion CSS disables smooth scrolling, animation duration, transition duration, and button hover movement.
- Browser console warnings/errors: 0 on desktop, mobile, and open-menu states.
- DOM ownership proof: exactly one Normenregister hero asset, zero X-Ray hero/transcript nodes, and exactly one retained Authority Shutter.
- Resource origins: only `http://127.0.0.1:3013`.
- Cookies, local storage, and session storage: empty in the inspected session.

## Source and package gates

- ESLint: passed.
- Next.js production build: passed.
- Repository tests: 9/9 passed.
- Dependency audit: 0 vulnerabilities.
- `git diff --check`: passed.
- Pre-change GitNexus impact for `Home`: exact match, zero direct callers, zero affected processes/modules, low risk.
- Current GitNexus change detection: nine symbols across three files, zero affected processes, low risk.

final result: passed
