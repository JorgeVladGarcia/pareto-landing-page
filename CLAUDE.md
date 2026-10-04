# Project context

Landing page for Pareto Talent's Right Hand Program (founder: Kasim Aslam). One action: every CTA opens the qualifier form (GoHighLevel/LeadConnector embed, form id TGYkhzpjc0vR83elIPbZ) in a pop-up. The form qualifies on annual revenue and redirects to `book.html` (calendar, qualified) or `not-a-fit.html` (thank-you, not qualified). Then a booked call to match the founder with a Right Hand, then a sale.

## Page sections (in order)
Hero (Score quiz + form button), Social proof, Problem, How it works, Benefits, The offer, Guarantees, Final CTA (same action as hero).

Other pages: `book.html` (calendar for qualified leads), `not-a-fit.html` (sorry, revenue below threshold). Both are noindex.

## Design
- Inspired by clay.global/work/wealth: flat full-width color blocks, hard edges, bold tight sans headlines, big numbers and quotes in the same sans (medium weight), sharp-cornered tiles, black square-cornered "frame" blocks (no rounding).
- Colors (CSS variables in `css/styles.css`): turquoise #67D5CA, deep green #124441, lime #ECFFAA, black, light grey #F0F1F6.
- Favicon: `assets/favicon.png`, the 05 mark on a turquoise tile so it shows in light and dark browser tabs.
- No visible notes or prototype disclaimers on the pages; open items live in this file only.
- Font: Inter Tight only, via Google Fonts. Newsreader serif was dropped (looked like Times New Roman).
- Logos in `assets/logos/`: 01 bottleneck (problem), 02 right hand (training), 03 filter (fly traps), 04 0.1% (proof, paid trial), 05 standout (brand mark, hero, final CTA), 06 unlock (offer), 07 handoff (ownership), 08 founder-operator (hours back).

## Rules
- After changing `css/styles.css` or `js/main.js`, bump the `?v=` number on their links in all three HTML pages so browsers fetch the new files.
- No prices on the page. No fake urgency or scarcity.
- Do not invent facts. Anything unconfirmed stays flagged.

## Open items
- Testimonials are made-up samples. Replace with real quotes and permission.
- "Founders matched" number is a placeholder. Client logo row removed until real logos exist.
- Verify before launch: 250+ operators, top 0.1% math, pain-stat population (~80/70/40/50%), "10+ hours a week" claim (not on page yet).
- Guarantee fine print (eligibility, replacement window) not written. Founder2Founder now routes to customer support, not Kasim or Ivan.
- Calendar embed not added yet: placeholder in `book.html`.
- Revenue threshold on `not-a-fit.html` is a placeholder `[revenue threshold]`.
- Strict blockers (e.g. Brave Shields aggressive) can block the GoHighLevel form; the pop-up then shows an "Open the form in a new tab" fallback after 4s. A GoHighLevel custom form domain would avoid the block.
- Form redirects (qualified / not qualified) must be set in the form's settings in GoHighLevel, pointing to the live URLs of the two pages.
- Decide who the follow-up emails come from; write the first email ("How many did you check?").
