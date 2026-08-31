# Design QA — Normkontor Enterprise Blueprint

## Scope

- Selected source: founder-selected Option 3, a bright institutional control corridor in which agentic work proceeds through evidence while the final decision remains visibly outside the automated path; local source truth: `/Users/mathiasheinke/.codex/generated_images/01a02f21-1286-77d2-9ce4-f6d17024dc4b/exec-f5f80d65-6224-4c28-a789-865d21b446cf.png`
- Implementation: `site/app/page.tsx`, `site/app/globals.css`
- Visual assets: new `normkontor-control-corridor-hero.png` and `normkontor-pilot-decision-kit.png`, plus the retained `normkontor-ownership-xray.png`
- Runtime state: local Next.js runtime at `http://localhost:3013/`
- Browser: headed Chrome through Playwright
- Capture density: DPR 1, CSS-pixel screenshots
- Primary production comparison viewport: 1536 × 1024 CSS px

The implementation translates the selected corridor metaphor into a purchase-led enterprise page. The semantic HTML headline and CTA stay in the quiet left field, the generated corridor remains a visual owner rather than a text owner, and the narrative leads to a bounded six-week pilot with a documented scale, adapt, or stop decision. Navigation, headline, actions, route labels, and decision boundaries remain accessible HTML.

## Visual evidence

| Surface | Evidence |
| --- | --- |
| Current 16:9 source and rendered hero stage in one image | `output/playwright/normkontor-16x9-hero/source-vs-implementation-final.png` — source and implementation normalized to 1460 × 822 px |
| Current production desktop viewport | `output/playwright/normkontor-16x9-hero/desktop-1536x1024-final.png` |
| Current overlay-boundary viewport | `output/playwright/normkontor-16x9-hero/boundary-1181x900-final.png` |
| Current production compact desktop | `output/playwright/normkontor-16x9-hero/compact-1024x768-final.png` and `compact-901x768-final.png` |
| Current production mobile viewport | `output/playwright/normkontor-16x9-hero/mobile-390x844-final.png` |
| Current production mobile menu | `output/playwright/normkontor-16x9-hero/mobile-menu-390x844-final.png` |
| Historical upright Normenregister source and implementation | `output/playwright/normkontor-normenregister/source-vs-implementation-final.png` — superseded by the selected 16:9 Kontorakte scene |
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
- The full 1672 × 941 desk scene is the only hero-image owner. It preserves the oxblood binding, indexed tabs, exact `NORMKONTOR` cover, brass N seal, red cord, desk perspective, light, texture, and shadow without rebuilding any of them in CSS.
- The four-part status transition remains full width and begins after the 16:9 desktop stage, keeping the selected scene uninterrupted.
- Mobile converts the rail to a native `<details>` menu, stacks the CTAs, moves the complete 16:9 scene into document flow, and renders semantic product statuses.
- The full site uses one coherent light enterprise system rather than independent dark landing-page blocks.
- The desktop navigation rail is now solid navy from viewport top to bottom; no section-colored break remains inside the navigation owner.
- The navy status transition spans the complete viewport width while its content grid still begins after the expanded 205 px rail boundary.
- Generic eyebrow copy was removed from the hero. Remaining section labels are factual archival markers with section code, evidence class, product state, or receipt purpose.
- Motion durations are centralized and approximately 1.8× their former duration: 400 ms rail, 290 ms buttons and rail labels, 250 ms skip link, with reduced-motion protection unchanged.
- Every H1/H2 renders in at most three lines at all measured widths; the hero has three explicit semantic display lines.
- No duplicate rail, fake paper, CSS illustration, new component, client state, or third-party runtime was added. The existing `Home`, global CSS, and `next/image` path remain the native owners.
- At 1536 × 1024 the live stage measures 1460 × 821.7 CSS px, matching the selected source ratio to rounding; the source remains at its native 1672 × 941 pixels without optimization softening its printed labels.
- Authority Shutter appears exactly once after the control path. Its lower 1122 × 696 scene is an exact crop from the selected mock, without rebuilding the shutter, linework, or typography in CSS.
- The Kontorakte scene and Authority Shutter use unoptimized local Next images to preserve rasterized display text; no remote image origin is introduced.
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

### Founder-selected 16:9 Kontorakte background pass

- Source visual truth: `output/playwright/normkontor-16x9-hero/source-selected-16x9.png`, 1672 × 941 px. Required content is the physical 3A Kontorakte on a warm ivory desk, exact `NORMKONTOR` cover text, tabs 01–05, and one brass N seal. No loose tag, `PRÜFSIEGEL`, `EVIDENZ VOR FREIGABE`, `NORMENREGISTER`, or `NORMREGISTER` appears.
- Implementation evidence: `desktop-1536x1024-final.png`, `desktop-hero-stage-final.png`, `compact-1024x768-final.png`, `compact-901x768-final.png`, `mobile-390x844-final.png`, and `mobile-menu-390x844-final.png` under `output/playwright/normkontor-16x9-hero/`.
- Density normalization: source 1672 × 941 and rendered stage 1460 × 822 were normalized to 1460 × 822 at DPR 1. The combined comparison `source-vs-implementation-final.png` is 2920 × 822 and places both artifacts in one visual input.
- Full-view evidence: the rendered background retains the source crop, perspective, light, desk edge, dossier scale, cover typography, tab sequence, seal, and shadows. Semantic HTML occupies only the intended negative space on the left; the physical dossier remains unobscured on the right.
- Focused comparison was not required: `3A`, `NORMKONTOR`, tab numbers, the N seal, headline, lede, and both CTAs are legible in the normalized combined image. Mobile was checked separately because its responsive structure intentionally stacks copy and image.
- Fonts and typography: the existing Cormorant Garamond and IBM Plex Sans owners remain unchanged; the H1 keeps three explicit lines on desktop and mobile, with no truncation or rasterized replacement.
- Spacing and layout rhythm: desktop copy measures 581.7 × 456.1 px inside the quiet left field; the scene measures 1460 × 821.7 px and the status owner begins at y=821.7. Mobile uses a 390 × 219.5 px 16:9 image block after the semantic copy.
- Colors and tokens: existing navy, oxblood, and paper tokens remain unchanged. No whitening overlay, gradient, fake paper, or CSS-drawn seal was added; readability comes from the selected source's quiet ivory field.
- Image quality and asset fidelity: the browser loads the native 1672 × 941 local PNG through the existing unoptimized `next/image` owner. No remote origin, image approximation, crop drift, or extra visual asset exists.
- Copy and content: the HTML value proposition and CTAs remain unchanged. The raster itself now says only `3A` and `NORMKONTOR`; rejected seal explanations and the incorrect register names are absent.
- Interaction and accessibility: rail `76 → 205 → 76` px; primary CTA reaches `#kontakt`; all internal targets resolve; mobile menu opens; horizontal overflow is 0 px on desktop and mobile; browser console reports 0 errors and 0 warnings.
- Comparison iteration 1 found one P2 at the compact desktop boundary: `object-fit: cover` cropped the right side of the dossier at 1024 px and materially at 901 px. The existing 901–1180 px responsive owner now stacks the semantic copy and complete 16:9 scene while retaining the fixed collapsible rail; no new component or state was introduced.
- Post-fix evidence: `compact-1024x768-final.png` and `compact-901x768-final.png` show the uncropped source at its exact ratio, with no text collision or horizontal overflow.
- Comparison iteration 2 found one P2 at 1181 px, immediately above the compact breakpoint: the 760 px minimum stage height caused the centered cover crop to trim the dossier's right edge and tabs. The existing image owner now uses the selected scene's 60% horizontal focal point; exact-ratio desktop, compact, and mobile states remain unchanged.
- Post-fix evidence: `boundary-1181x900-final.png` shows the complete right edge and all tabs, with clear separation from the copy and zero horizontal overflow. Final result: P0 none, P1 none, P2 none, P3 none.
- Release boundary: this passes the local source, production-render, and visual gates only. It does not authorize deployment, publication, domain replacement, or release.

### Normkontor Standard Groundbase copy pass

- Source visual truth: the pre-change production captures `output/playwright/normkontor-groundbase/00-current-hero.png`, `01-current-3a-section.png`, and `01-current-open-source-section.png` at `1536 × 1024`, DPR 1.
- Implementation evidence: `10-final-hero.png`, `11-final-3a-section.png`, `12-final-review-section.png`, `13-final-groundbase-section.png`, `14-final-mobile-hero.png`, and `15-final-mobile-groundbase.png` in the same folder.
- Full-view comparisons: `20-hero-before-after.png`, `21-3a-before-after.png`, and `22-groundbase-before-after.png`, each `3072 × 1024`, place source left and revised implementation right in one input.
- Existing owners reused: hero copy, `#3a`, product ledger, review block, open-source block, source list, metadata object, global CSS, and the existing responsive breakpoints. No new section, route, component, dependency, asset, client state, runtime, form, analytics, or tracking owner was added.
- Groundbase hierarchy is now explicit: Normkontor Standard Kernel `1.0.0` is the governance boundary; 3A COD3X `0.4.0` is the two-skill method beneath it; the on-page evidence card separates source/package/static-contract evidence from runtime, compliance, and release truth.
- Public-boundary remediation in the rendered page: the direct enterprise-architecture link, MCP/gateway copy, tenant/routing topology, and install-now presentation were removed. The planned Review area retains only its customer-facing result boundary and routes to a conversation, not an internal architecture document.
- Independent P0 re-review found that even an exact Kernel-file link amplified the still-unsanitized public commit tree. Every Normkontor repository/SHA CTA was therefore withheld; the page now routes only to its own Source-Candidate and release-boundary explanations until an allowlist-clean public commit exists.
- P2 iteration 1: the first revised desktop capture wrapped both the Review and Groundbase headlines to four lines. Resolution: shortened the Review statement and reduced only the existing open-source headline scale. Final measurement at `1536 × 1024` is three lines for each; every other visible H2 is at most three lines and the H1 keeps three unwrapped semantic spans.
- P2 iteration 2: the first `390 × 844` Groundbase receipt let long values crowd their field labels. Resolution: added a `16px` gap and right alignment at the existing receipt-row owner. Final mobile capture has no collision and no horizontal overflow.
- Final runtime evidence: no link contains `/docs/enterprise/`, `FYN-Labs/normkontor`, PR `#1`, or candidate SHA `3ce0fa2`; no rendered `MCP-Endpunkt`, `Policy gateway`, or `Customer Policy Gateway`; every internal anchor resolves; rail remains `76 → 205 → 76`; console reports 0 errors and 0 warnings.
- Focused crops were not required because all changed labels, headings, evidence rows, CTA copy, and mobile wrapping are legible in the equal-size full-view and mobile captures.
- Visual and interaction result: P0 none, P1 none, P2 none, P3 none.
- Release boundary: this QA proves the local website implementation only. It does not clear the separate public-repository split, PR merge, deployment, domain replacement, or publication gates.

### Founder-selected Option 3 sales-system pass

- Source visual truth: `/Users/mathiasheinke/.codex/generated_images/01a02f21-1286-77d2-9ce4-f6d17024dc4b/exec-f5f80d65-6224-4c28-a789-865d21b446cf.png`, 1536 × 1024 px.
- Implementation evidence: `output/playwright/normkontor-v3/09-desktop-final-1536x1024.png`, 1536 × 1024 px at DPR 1 and a 1536 × 1024 CSS-pixel viewport.
- Full-view comparison: `output/playwright/normkontor-v3/12-reference-vs-implementation.png` places the exact selected source and the rendered implementation together. The comparison covers the complete hero, rail, corridor, decision boundary, headline, CTA, and first-section transition; no focused desktop crop was required.
- Supporting responsive evidence: `output/playwright/normkontor-v3/10-boundary-final-1181x900.png`, `11-mobile-final-390x844.png`, `07-mobile-menu-open.png`, and `13-desktop-full-final.png`.
- State under review: default desktop with the rail collapsed, 1181 px boundary, 390 px mobile, native mobile menu open, and the complete desktop page.

#### Required fidelity surfaces

- Typography: retained Cormorant Garamond and IBM Plex Sans; the H1 has exactly three semantic display lines, while downstream headings are capped at three lines without clipping or line clamping.
- Spacing and hierarchy: the quiet copy field leads to one primary CTA; the corridor occupies the right-hand proof field; the first content transition introduces the purchase problem before doctrine or product internals.
- Color: warm paper, navy, oxblood, and restrained brass carry the existing Normkontor identity without a dark consumer-SaaS treatment.
- Image fidelity: the generated corridor is a local 1672 × 941 RGB PNG with left negative space, evidence progression, an N-marked boundary, and a separate human decision desk. Route labels remain HTML so they stay responsive and legible.
- Copy: the hero now sells controlled adoption, not a rulebook. The primary offer is one team, one workflow, six weeks, ending in a documented scale, adapt, or stop decision. Standard, Academy, Governance, and Review follow as proof, enablement, control, and roadmap layers.
- Interaction: the left rail remains one owner, expands on hover or keyboard focus, and collapses automatically when focus/pointer leaves. The mobile menu uses native disclosure behavior. The primary CTA reaches `#kontakt`.
- Responsive behavior: document width equals viewport width at 1536 and 390 px; no horizontal overflow was found. The hero stacks at narrow widths, and the corridor remains meaningful without relying on baked text.
- Accessibility: semantic landmarks and anchors remain HTML, focus states are visible, reduced-motion overrides are present, and the final browser session reports zero console errors and zero warnings.
- Meaningful visual interruptions: the control corridor explains the operating boundary; the pilot decision kit shows tangible six-week outputs; the retained ownership X-ray makes duplicate ownership visible; the evidence receipt exposes the release decision contract. None is decorative filler.

#### Comparison history

- Iteration 1: the headline wrapped to four lines, the hero art dominated the copy and cropped the decision desk, below-fold lazy images appeared blank in the first full-page capture, and intrinsic image sizing caused development-console warnings.
- Repair: shortened the statement to three semantic lines, contained the corridor in the right proof field, set critical visuals to eager loading, preserved intrinsic aspect ratios with automatic height, and pre-scrolled lazy sections before the full-page capture.
- Post-fix evidence: `09-desktop-final-1536x1024.png`, `10-boundary-final-1181x900.png`, `11-mobile-final-390x844.png`, and `13-desktop-full-final.png`.
- P0: none.
- P1: none.
- P2: none.
- P3: at the 1181 px boundary the separate human desk is partially cropped and copy density is slightly higher than the ideation source; the decision boundary remains legible and the issue does not affect comprehension or operation.
- Simplicity check: reused `Home`, global CSS, `next/image`, existing fonts, the existing rail, and the ownership X-ray. No component tree, client state, dependency, CMS, analytics layer, form backend, router, policy owner, or runtime was added. The two new raster assets are the minimum new visual material needed for the selected sales concept and pilot proof.
- Release boundary: this passes local implementation, source comparison, responsive, and interaction QA only. It does not authorize commit, merge, deployment, publication, domain replacement, or a customer claim.

### Sales-positive copy pass

- Founder direction: remove internal status, non-availability, defensive legal framing, and “what we cannot do” language from the visible sales journey.
- Native owner reused: all changes remain in `site/app/page.tsx`, `site/app/layout.tsx`, and the existing CSS owner. No route, component, dependency, state, runtime, or claim source was added.
- Removed from the visible page: the planned-runtime roadmap, the product-truth/non-availability ledger, and their now-unused CSS.
- Reframed around customer outcomes: six-week pilot, operating model, evidence dossier, 90-day scaling plan, internal capability, route evidence, and one repeated CTA: `Pilotgespräch anfragen`.
- Claim discipline remains positive and bounded: no invented customer, productivity, certification, residency, or compliance claim was introduced; the independent-product trademark note remains in the footer.
- Desktop evidence: `output/playwright/normkontor-sales-positive/desktop-final-1536x1024.png` and `desktop-full-loaded-final.png` at 1536 × 1024 CSS px, DPR 1.
- Mobile evidence: `output/playwright/normkontor-sales-positive/mobile-final-390x844.png` at 390 × 844 CSS px, DPR 1.
- Runtime checks at both widths: document width equals viewport width, H1 remains three semantic lines, no H2 exceeds three lines, removed roadmap/truth sections are absent, targeted negative status phrases are absent, and the browser console reports zero errors and zero warnings.
- First mobile pass found two headings at four or five lines. They were shortened to `Agentenarbeit wird steuerbar.` and `Offener Standard. Klarer Betrieb.`; the final mobile pass reports no overlong heading.
- P0: none.
- P1: none.
- P2: none after the mobile headline repair.
- P3: none.

### Clean Ownership X-Ray integration

- Source visual truth: `/Users/mathiasheinke/.codex/generated_images/01a02f21-1286-77d2-9ce4-f6d17024dc4b/exec-fc911902-1800-4775-98a4-71b9ebdfceef.png`, 1487 × 1058 px.
- Project asset: `site/public/brand/normkontor-ownership-xray.png`, an exact 105 px left crop of the source, 1382 × 1058 px, SHA-256 `9491612db75cbe6266f54ff8f35d66461d38b3fff02772e522b2d906eac7095c`.
- The crop removes only the baked navy navigation rail because the live page already owns the accessible, collapsible rail. The edited lower-right paper field remains clear; the native-path route, mechanism, labels, textures, and linework are retained.
- Existing image owner reused without source-code changes: `site/app/page.tsx` still references `/brand/normkontor-ownership-xray.png` at its existing intrinsic 1382 × 1058 dimensions.
- Desktop evidence: `output/playwright/normkontor-xray-clean/desktop-section-1536.png` and `desktop-full-1536.png` at a 1536 × 1024 CSS viewport, DPR 1.
- Mobile evidence: `output/playwright/normkontor-xray-clean/mobile-section-390.png` at 390 × 844 CSS px, DPR 1.
- Runtime: native asset reports 1382 × 1058 px, document width equals viewport width at both tested sizes, and the browser console reports zero errors and zero warnings.
- Fonts, spacing, colors, copy, and interaction remain unchanged. Image fidelity is improved by removing duplicate rasterized copy while retaining the semantic HTML caption as the single message owner.
- Full-view comparison was sufficient because the entire edited region, source labels, central mechanism, live HTML caption, and responsive crop are legible in the section captures. No additional focused crop was required.
- P0: none.
- P1: none.
- P2: none.
- P3: on mobile the intentionally portrait crop trims the left edges of the two diagnostic labels, consistent with the existing responsive composition; the HTML caption carries the complete message.

## Responsive and interaction verification

- 1536 × 1024 state: uninterrupted 1460 × 821.7 px 16:9 stage, three-line semantic headline, utility links, complete physical Kontorakte, and no horizontal overflow. The full-width status transition begins at y=821.7.
- 1181 × 900 overlay boundary: the 60% source focal point preserves the complete dossier edge and tabs without colliding with the copy; console and horizontal overflow remain clean.
- 1024 × 768 and 901 × 768: the existing compact-desktop breakpoint stacks copy and the complete 16:9 scene, preserving the fixed collapsible rail without cropping the dossier or creating horizontal overflow.
- Pointer-away state: rail returns to 76 px with no content reflow.
- Current pointer verification: rail expands from 76 px to 205 px on hover and returns to 76 px after pointer exit.
- Full-width transition verification: status rail reports `x: 0` and exact viewport width at 1487, 1280, 1180, 1024, 901, 900, 390 and 320 px.
- Headline verification: maximum measured H1/H2 line count is 3 at each of those eight widths; no heading exceeded the gate.
- Horizontal-overflow verification: 0 px at each of those eight widths.
- Motion verification: desktop rail computed transition duration is 0.4 s; button and rail-label transition token is 0.29 s; reduced-motion override remains 0.01 ms.
- Stable rail geometry verification: collapsed and expanded states both retain `brandFlexDirection: row`, brand/image x/y, `navTop: 178`, and `navMarginTop: 88px`; only rail width and label opacity change.
- Keyboard state: second Tab focuses `Normkontor Startseite`; `:focus-within` expands the rail to 205 px and uses an ivory focus ring on navy.
- 390 × 844: mobile hero and full-width CTA stack verified; the 16:9 scene measures 390 × 219.5 px, the source image loads at its native 1672 × 941 size, and the native menu opens without brand distortion or horizontal overflow.
- 320 × 256: menu remains internally scrollable (`clientHeight: 137`, `scrollHeight: 292`, `overflow-y: auto`); a clipped next row and gold bottom edge expose the continuation without horizontal overflow.
- Review anchor settles at 94 CSS px from the viewport top; content remains unobscured.
- Every internal link resolves to an existing target; the primary hero CTA was clicked and reached `#kontakt`.
- Native doctrine disclosure toggles successfully.
- Reduced-motion CSS disables smooth scrolling, animation duration, transition duration, and button hover movement.
- Browser console warnings/errors: 0 on desktop, mobile, and open-menu states.
- DOM ownership proof: exactly one 16:9 Kontorakte hero asset, zero X-Ray hero/transcript nodes, and exactly one retained Authority Shutter.
- Resource origins: only `http://127.0.0.1:3013`.
- Cookies, local storage, and session storage: empty in the inspected session.

## Source and package gates

- ESLint: passed.
- Next.js production build: passed.
- Repository tests: 9/9 passed.
- Groundbase PR source/package tests: 15/15 passed; GitHub PR checks: 4/4 passed. These do not clear the separate public-tree allowlist or release gates.
- Dependency audit: 0 vulnerabilities.
- `git diff --check`: passed.
- Pre-change GitNexus impact for `Home`: exact match, zero direct callers, zero affected processes/modules, low risk.
- Current GitNexus change detection: 21 indexed symbols across four source/document files, zero affected processes, low risk; the two new raster assets are outside the code graph.

final result: passed
