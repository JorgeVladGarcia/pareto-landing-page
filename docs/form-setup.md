# GoHighLevel form setup: The Founder's Not-To-Do List

The form is built and edited in GoHighLevel, not in this repo. The page embeds it twice in `index.html`: inline in the `#get` section (iframe id `inline-4AVSDnVleyoS9zJp5oya`) and in the pop-up opened by the CTA buttons (iframe id `popup-4AVSDnVleyoS9zJp5oya`, lazy-loaded) (form id `4AVSDnVleyoS9zJp5oya`, script `https://link.msgsndr.com/js/form_embed.js`). Configure it exactly as below. The page copy assumes this spec.

## Fields (in order)

1. **First name** (required)
2. **Email** (required)
3. **Phone** (optional). Label: "Phone, if you'd like a text reminder for your call"
4. **What's your role in the business?** (required, single choice)
   - Founder / CEO, I make the hiring decisions
   - Co-founder or partner, we decide together
   - I work for the founder and I'm researching for them
   - Other
5. **What's your annual revenue?** (required, single choice)
   - Under $100K
   - $100K – $250K
   - $250K – $1M
   - $1M – $5M
   - $5M+
6. **Is the business profitable today?** (required, single choice)
   - Yes
   - Breaking even
   - Not yet
7. **What's slipping most right now?** (required, single choice). Not a filter. Used for the call prep note and email segmentation. The options map to the list's four weeks.
   - Inbox, calendar and admin (Week 1)
   - Follow-ups and promises (Week 2)
   - Processes that live in my head (Week 3)
   - Projects and deals with no owner (Week 4)
8. **Consent checkbox:** "Send me the list and occasional emails from Pareto Talent. Unsubscribe anytime."

**Submit button:** Send me the list

## Qualification rule

Matches the ICP: $100K+ annual revenue, profitable, founder makes the hiring decision.

- **Qualified** = role is "Founder / CEO" or "Co-founder or partner"
  AND revenue is $100K or more (any option except "Under $100K")
  AND profitable = "Yes".
- **Not qualified** = anything else. "Breaking even" counts as not qualified, since profitability is required.

## Redirects

Set in GoHighLevel: form settings → on submit → conditional redirect, or a workflow with if/else.

| Result | Redirect to |
|---|---|
| Qualified | https://jorgevladgarcia.github.io/pareto-landing-page/book.html |
| Not qualified | https://jorgevladgarcia.github.io/pareto-landing-page/thank-you.html |

`not-a-fit.html` still exists and redirects to `thank-you.html`, so an old setting pointing there still lands correctly.

## Tags and delivery email

- Tag every contact `lm-not-to-do-list`, plus `qualified` or `nurture` according to the rule above.
- **Qualified only:** send the delivery email with the PDF link, so the list arrives even if they close the tab:
  https://jorgevladgarcia.github.io/pareto-landing-page/assets/lead-magnet/the-founders-not-to-do-list.pdf
- **Not qualified:** no delivery email and no list. They land on `thank-you.html`, a friendly thank-you that invites them to come back later. It doesn't offer the list or say why they didn't qualify.
- Save the "What's slipping most" answer to the contact so it can feed the Matching Call prep note and email segments.

## Submit button style

The form renders inside a GoHighLevel iframe on another domain, so the page's CSS can't reach it. Set it in the form builder (Styles / Submit button):

| Setting | Value |
|---|---|
| Background | `#10B981` (emerald) |
| Text color | `#05090D` (ink) |
| Font | DM Sans, bold (700); fall back to the closest available |
| Border radius | max (pill), e.g. 999px |
| Width | full width |

If the builder's Custom CSS box is available, this adds the hover color the builder can't set:

```css
button[type="submit"]{background:#10B981!important;color:#05090D!important;border-radius:999px!important;font-weight:700!important;border:0!important}
button[type="submit"]:hover{background:#48D7A3!important}
```

## Embed height

The iframe on the page is `height:759px` with `data-height="759"` (the height GoHighLevel set for "FP | Jorge Garcia | Form"). If the finished form is taller or shorter, update both values on both iframes in `index.html`.
