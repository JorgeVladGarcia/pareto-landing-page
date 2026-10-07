# Project context

Lead-magnet opt-in page for Pareto Talent's Right Hand Program (founders: Kasim Aslam and Ivan Bunin). The page sells one free download, **The Founder's Not-To-Do List**: 50 tasks to hand off in 30 days and get your week back (a 9-page fillable PDF). The opt-in form also qualifies the lead. Qualified founders go to `book.html` to book a Matching Call. Everyone else goes to `thank-you.html`. Only qualified leads get the list (email + download on `book.html`). Everyone else gets a thank-you page, no list.

Static HTML/CSS/JS on GitHub Pages, no build step. Live at https://jorgevladgarcia.github.io/pareto-landing-page/

## Page map
- `index.html`: the opt-in page (five sections, below).
- `book.html`: qualified leads. Compact top (H1, offer, download card) so the calendar is visible right away, then the GoHighLevel booking widget (calendar `qUd4DKftRhP8VgIBWojp`, inside `.cal-in`), what happens next, prep note, Matching Guarantee, mini proof row. noindex.
- `thank-you.html`: not-qualified leads. Friendly thank-you only: no list, no download, no email. Never says why they didn't qualify (no revenue or profitability mention, never "sorry"). Invites them to come back and fill in the form again later. noindex.
- `not-a-fit.html`: meta-refresh redirect to `thank-you.html`, kept so old GoHighLevel settings still land. noindex.
- `docs/form-setup.md`: the GoHighLevel form spec (fields, qualification rule, redirects, tags, delivery email).
- `assets/lead-magnet/`: the PDF, `cover.png` (page 1, hero mockup and og:image), `week-1-preview.png` (page 3).

## index.html sections (in order)
Header (brand, nav What's inside · Who it's for · Proof, "Get the list" button). Then:
1. Hero `#hero`: copy + auto cross-fading image carousel (6 JPEGs in `assets/lead-magnet/carousel/`, every 5s, pauses on hover, no controls), stat chips (4 weeks · 50 tasks · 1 test on day 30).
2. What's inside `#inside`: four week cards, Week 1 preview, "Also inside" list.
3. Who it's for `#for`: for you / not for you.
4. Proof `#proof`: eight stat tiles, origin strip, three testimonials.
5. CTA with the form `#get`: pitch + inline GoHighLevel form.

## Form rule
The CTA buttons (header "Get the list", hero "Get the free list", "Send me the list") open the form in a pop-up `<dialog>`; the same form also sits inline in `#get`. Without `<dialog>` support they scroll to `#get`. The form is the GoHighLevel/LeadConnector embed, form id `4AVSDnVleyoS9zJp5oya`, script `form_embed.js`, two iframes at 759px, ids `inline-…` and `popup-…` (`height` and `data-height` must match on both). If the iframe hasn't posted a message from its origin after 4s, the page shows "Open the form in a new tab". Qualified = role Founder/CEO or Co-founder AND revenue $100K+ AND profitable "Yes". Full spec in `docs/form-setup.md`; page copy must match it.

## Theme
Matches paretotalent.com (meta theme-color #10B981) and the lead-magnet PDF. Dark theme only. All tokens in `:root` in `css/styles.css`:
- `--bg` #0B1119 page, `--bg-deep` #05090D alternating sections/footer/form panel, `--surface` #111A24 cards
- `--line` rgba(52,211,153,.22) borders, `--emerald` #10B981 buttons, `--mint` #34D399 eyebrows/numbers/checks, `--mint-hover` #48D7A3
- `--fg` #FFFFFF headlines, `--muted` rgba(255,255,255,.68) body, `--glow` 0 0 40px rgba(16,185,129,.25)
- Fonts (Google Fonts): Plus Jakarta Sans 700/800 for headings (letter-spacing about -0.03em), DM Sans 400/500/700 for body.
- Rounded cards (14px) with 1px mint borders, pill buttons (emerald, dark text #05090D), small uppercase mint eyebrows.
- Only logo used: `assets/logos/05-standout.png` as the header mark, inverted to white. The other marks stay in the folder, unused. Favicon: `assets/favicon.png`.

## Rules
- After changing `css/styles.css` or `js/main.js`, bump the `?v=` number on their links in every HTML page (currently `v=6`).
- No prices or placement fee. No fake urgency or scarcity. Don't invent facts.
- Approved numbers only (public on paretotalent.com, the source of truth): 100+ founders served · 93% still together at 12 months · 1 in 1,000 applicants make it through (top 1%) · 24 hrs to your first three matches · 4.9★ on Google · 650+ pre-vetted candidates · 40+ hrs of training before placement · $1M+ in year one with zero paid ads. Plus the list's own facts (50 tasks, 4 weeks, 30 days, 9 pages, week task counts 13/12/12/13) and the $100K ICP threshold.
- Never use hours-saved figures, pain-stat percentages, ROI multiples, or any selectivity figure other than "top 1%" / "1 in 1,000".
- Testimonials are verbatim from paretotalent.com/wall-of-love: name + context only, no photos, no invented companies.
- Keep scroll reveals (`.rv`), `prefers-reduced-motion` handling, 16px+ side gutters, no horizontal scroll at 360px.

## Open items
- Confirm theme tokens against the live paretotalent.com CSS (taken from the meta theme color and the PDF).
- Get written permission to reuse the three testimonials (public on the wall of love, but reuse permission isn't on file).
- Configure the GoHighLevel fields, conditional redirects, tags and delivery email per `docs/form-setup.md`. If fields change, update the iframe height (759px) to match.
- Carousel originals (PNG) are kept in `assets/lead-magnet/carousel/_originals/`, git-ignored. Re-export at 880px wide JPEG if images change.
- Style the form's submit button in GoHighLevel per `docs/form-setup.md` (it can't be styled from this repo).
- Decide who sends the follow-up emails.
- The live form (checked 2026-10-07) differs from `docs/form-setup.md`: it has First/Last name, required Phone, Email, "Is your revenue?" and "What's slipping the most right now?", but no role question, no profitability question and no consent checkbox, and a blue "Submit" button. The qualification rule needs role and profitability, so add those fields or change the rule.
- "1 in 1,000" works out to a tenth of a percent, not 1%. Both phrasings are on paretotalent.com and were kept as approved, but they don't agree. Confirm which one the site means.
- Strict blockers (e.g. Brave Shields aggressive) can block the GoHighLevel form. A GoHighLevel custom form domain would avoid that.
