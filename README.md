# Pareto Talent: The Founder's Not-To-Do List landing page

Static landing page (HTML, CSS, JS). No build step.

## Run locally
- VS Code: install the "Live Server" extension, right-click `index.html`, choose "Open with Live Server".
- Or in a terminal: `python3 -m http.server 8000`, then open http://localhost:8000

## Publish with GitHub Pages
1. Create an empty GitHub repo and push this folder (commands below).
2. On GitHub: Settings, Pages, Source "Deploy from a branch", Branch `main`, folder `/ (root)`, Save.
3. After about a minute the site is live at `https://<your-username>.github.io/<repo-name>/`.

```bash
git init
git add .
git commit -m "Initial landing page"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

Every push to `main` redeploys the site.

## Structure
```
index.html          opt-in page for The Founder's Not-To-Do List (5 sections) + GoHighLevel form (pop-up and inline)
book.html           qualified leads: download + Matching Call calendar
thank-you.html      everyone else: friendly thank-you, no list
not-a-fit.html      redirect to thank-you.html (keeps old form settings working)
css/styles.css      all styles; theme colors and fonts are CSS variables in :root
js/main.js          scroll reveals, form pop-up, hero carousel, blocked-form fallback
assets/lead-magnet/ the PDF, its cover and the Week 1 page preview
assets/logos/       logo marks (only 05-standout is used, as the header mark)
docs/form-setup.md  GoHighLevel form fields, qualification rule, redirects, tags
CLAUDE.md           project context and open items for Claude Code
```

## Not wired up yet
- Configure the GoHighLevel form per `docs/form-setup.md`: qualified leads redirect to `book.html`, everyone else to `thank-you.html`, and qualified leads get the delivery email.
- See CLAUDE.md for the full open list.
