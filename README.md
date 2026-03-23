# onedata-persona

**OneData Persona** — Customer Insight Frameworks: static HTML for personas, archetypes, and journey mapping.

## Run locally

Open `index.html` in a browser, or serve this directory with any static file server (for example `python3 -m http.server`).

## GitHub Pages (onedata-persona)

1. In the repo on GitHub: **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).
3. Push to `main` (or open **Actions → Deploy GitHub Pages → Run workflow**) to publish.

The workflow is `.github/workflows/deploy-pages.yml`. After the first successful run, the site URL is shown on the workflow run and under Pages settings (typically `https://<org>.github.io/onedata-persona/` or your org’s custom domain).

## Main pages

| File | Purpose |
|------|---------|
| `index.html` | Landing / guide |
| `library.html` | Persona library |
| `archetypes.html`, `archetype.html` | Archetypes |
| `journey-maps.html` | Journey maps |

## Data

- `data.js` — Persona content
- `archetypes.js`, `archetype-data.js` — Archetype content
- `journey-maps.js` — Journey map content

## Merging with the org template

If the GitHub repo was created with a default `README.md` (or `.gitignore`) and a pull request shows merge conflicts, merge `main` from this repository into your branch locally, resolve conflicts by keeping both the org’s required notices (if any) and the sections above, then push.
