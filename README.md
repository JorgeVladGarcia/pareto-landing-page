# Pareto Talent: Right Hand Program landing page

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
index.html          page markup (8 sections) + qualifier form pop-up
book.html           calendar page for qualified leads
not-a-fit.html      thank-you page for leads below the revenue threshold
css/styles.css      all styles; brand colors and logo paths are CSS variables in :root
js/main.js          scroll reveals, header color tint, interactive Score quiz
assets/logos/       the eight logo marks (transparent PNG)
CLAUDE.md           project context for Claude Code
```

## Not wired up yet
- Every CTA opens the GoHighLevel qualifier form in a pop-up. Set its submit redirects in GoHighLevel to `book.html` (qualified) and `not-a-fit.html` (not qualified).
- `book.html` still needs the calendar embed.
- Placeholder content is flagged on the page; see CLAUDE.md for the open list.
