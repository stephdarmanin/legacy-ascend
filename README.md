# Legacy Life Coaching

The marketing site for **Steph Darmanin** (Legacy Life Coaching / parent brand: Legacy Ascend) — executive and life coaching for professionals who want more than a title change.

Live URL: _to be added once deployed_

---

## What this repo is

A **static multi-page HTML site**. No build tool. No framework. No `package.json`. You can open `index.html` directly in a browser and it works. That's intentional — it keeps the site fast, cheap to host, and impossible to "break" through a botched build.

If you're new to all this, the only thing you need to know is:

1. Pages are `.html` files in the root of the repo.
2. Shared styles live in `css/style.css`.
3. Tiny bits of interactivity (mobile nav, lead-capture quiz) live in `js/main.js` and `js/quiz.js`.
4. Photos and logos live under `assets/`.
5. To change something, the easiest path is to **ask Claude** — see [Working with Claude](#working-with-claude) below.

---

## Repository map

```
/
├── index.html              ← Home (hero, problem, packages, quiz, testimonials, CTA)
├── packages.html           ← Full 6-package grid
├── breakthrough.html       ← Package detail: The Breakthrough ($1,500)
├── accelerator.html        ← Package detail: The Accelerator ($2,500)
├── prosper.html            ← Package detail: Prosper ($3,997, Most Popular)
├── evolution.html          ← Package detail: Evolution ($9,500)
├── about.html              ← About Steph
├── corporate.html          ← Corporate workshops
├── speaking.html           ← Keynote speaking
├── media.html              ← Press / media enquiries
├── career.html             ← Career coaching (HIDDEN — see notes below)
├── book.html               ← Booking page (Calendly stub)
├── quiz.html               ← Standalone quiz page
├── thanks.html             ← Post-form thank-you page
│
├── css/
│   └── style.css           ← Single global stylesheet (~1270 lines)
│
├── js/
│   ├── main.js             ← Nav, mobile toggle, reveal animations, Calendly hook
│   └── quiz.js             ← Self-contained quiz state machine
│
├── assets/
│   ├── images/             ← Photos (hero portrait, about portrait, future additions)
│   └── logos/              ← Brand marks (sun, arch, wordmark)
│
├── README.md               ← This file. For humans.
└── CLAUDE.md               ← Instructions for any AI agent working on this repo.
```

### Page navigation structure

The main nav shows: **Work With Me · Corporate · Speaking · Media** + a **Book Call — Free** pill.

- "Work With Me" → `packages.html`.
- The four package detail pages (breakthrough/accelerator/prosper/evolution) are reached via the cards on `packages.html` and `index.html`, not from the top nav.
- `career.html` is **deliberately hidden** from the main nav. It carries `<meta name="robots" content="noindex, nofollow">` so Steph can share the URL on socials without it surfacing in search. The only on-site link to it is a small "Looking for career coaching? →" line at the bottom of `packages.html`. **Do not link it from the main nav.**

---

## Running the site locally

You don't need anything installed beyond Python (which ships with macOS/Linux). Pick whichever is easier:

**Easiest — just open the file**
```
Double-click index.html.
```
This works for browsing, but the quiz and some animations behave best when served over HTTP (next option).

**Better — serve over HTTP**
```bash
# In the project root:
python3 -m http.server 8000
# Then open http://localhost:8000 in a browser.
```

Stop the server with `Ctrl+C`.

---

## Deploying

The site is plain static files. Any of these work with zero configuration:

- **Vercel** — `vercel` from the repo root, or connect the GitHub repo via vercel.com.
- **Netlify** — drag-and-drop the project folder onto netlify.com, or connect the repo.
- **GitHub Pages** — Settings → Pages → Deploy from a branch → `main` / `(root)`.
- **Cloudflare Pages** — connect the repo. Framework preset: "None". Output directory: `/`.

There is **no build step**. Whatever is in the repo is what ships.

---

## Brand voice (please read before editing copy)

Steph's voice is direct, dry, confident. It is NOT the standard coaching-website fluff. When you (or an AI) write copy for this site, follow these rules:

- **Short sentences.** Then a longer one. Then short again.
- **Use em-dashes** for asides — like this — sparingly.
- **No platitudes.** Banned phrases: "unlock your potential", "transformative journey", "authentic self", "level up", "thrive", "manifest", "high-vibe", "showing up as your best self", "let's chat", "elevate".
- **Confident, not braggy.** "I've coached 200+ professionals across four continents" — fine. "I'm one of the world's leading coaches!" — never.
- **Italics + brown** is reserved for emphasis on the most important word in a heading (rendered via `<em>` inside `<h1>`/`<h2>`). One per heading, ideally.
- **No emojis.** Anywhere.
- **AUD prices** stated as `$1,500 AUD` or just `$1,500` in price displays. Never strip the dollar sign. Never write "AU$".
- Discovery calls are **Free**. The site never mentions a $50 charge. (An earlier mockup had this; it's been deliberately removed everywhere.)

If you're not sure whether a phrase sounds like Steph, ask: "Would Steph send this in a text to a peer?" If no, rewrite.

---

## Source of truth — pricing & packages

If pricing changes, these are **every place** a price appears:

| Package | Pages it appears on |
|---|---|
| Discovery Call (Free) | `index.html` (CTA copy), `packages.html`, `book.html`, `quiz.js` |
| Activation Hour ($150) | `packages.html`, `quiz.js` |
| The Breakthrough ($1,500) | `index.html` (no preview), `packages.html`, `breakthrough.html`, `quiz.js` |
| The Accelerator ($2,500) | `index.html` (preview card), `packages.html`, `accelerator.html`, `quiz.js` |
| Prosper ($3,997) | `index.html` (preview card), `packages.html`, `prosper.html`, `quiz.js` |
| Evolution ($9,500) | `index.html` (preview card), `packages.html`, `evolution.html`, `quiz.js` |
| LinkedIn Authority Reset ($500) | `career.html`, `quiz.js` |
| The Executive Track ($750) | `career.html`, `quiz.js` |
| Executive Track Advanced ($1,200) | `career.html`, `quiz.js` |
| Public Speaking Workshop ($3,000) | `corporate.html` |

A footer line on the home page and packages page reads "Prices valid through June 30, 2026." Update this date alongside any price change.

---

## Wiring the Calendly booking link

When Steph has the real Calendly URL:

1. Open `book.html`.
2. Find the booking button:
   ```html
   <a href="#" class="btn-primary on-light" data-calendly-url="">Open Booking Calendar →</a>
   ```
3. Paste the URL into `data-calendly-url="https://calendly.com/..."` AND change `href="#"` to the same URL.
4. (Optional, polished) Replace the button with the official Calendly inline embed snippet — paste their script in `<head>` and their div in place of the button.

Until step 3 is done, clicking the button shows a friendly "please email" alert (the fallback is in `js/main.js`).

---

## Adding or replacing an image

All photos go in `assets/images/`. Logos go in `assets/logos/`. Filenames the site currently references:

**Required (drop these in):**
- `assets/images/hero-steph-navy-suit.png` — home page hero portrait
- `assets/images/about-steph-red-suit.png` — about page portrait

**Already committed:**
- `assets/logos/legacy-ascend-sun.png` — sun/moon mark, used in nav
- `assets/logos/legacy-ascend-arch.png` — arch graphic, used as a decorative divider on the home page
- `assets/logos/legacy-ascend-wordmark.png` — full wordmark (available but not yet wired — nav uses Cormorant text)

To add a new image: drop the file in the folder, then reference it as `assets/images/your-file.png` from the HTML.

To swap an image: overwrite the file with the same name. No code change needed.

---

## Quiz mechanics

The 4-question quiz on the home page (and `quiz.html`) is fully self-contained in `js/quiz.js`. It works like this:

- 4 questions, each with 4 answers labelled A/B/C/D.
- The most common letter selected determines the result.
- **Ties resolve to the higher-priced recommendation** (priority order C → B → A → D) — a deliberate commercial choice.
- Result types: A = Strategic Executive, B = Reinventor, C = Quiet High Achiever, D = Builder.
- Each result recommends one of the packages and links to that detail page.
- The email capture sends a `mailto:` to `hello@stephdarmanin.com` with the quiz answers in the body, and also stashes the lead in `localStorage` under `legacy_quiz_leads` as a backup.

To swap to a real form backend (Formspree, Mailchimp, ConvertKit, Notion, Google Sheet, etc.), the only file you need to change is `js/quiz.js` — replace the `submitEmail()` method's `mailto:` line with a `fetch()` to the form endpoint.

---

## Working with Claude

If you're using Claude Code (the CLI) or claude.ai/code (the web app), it has access to this repo and reads `CLAUDE.md` automatically on every session. That file contains detailed conventions so the AI doesn't accidentally break the brand voice, the pricing, or the navigation hierarchy.

**Useful prompts:**

- "Update the price of Prosper to $4,200 in every place it appears."
- "Add a fourth testimonial from [name] on the home page."
- "Swap the home page hero photo for the new file I just dropped in `assets/images/`."
- "Connect the booking button to this Calendly URL: https://calendly.com/..."
- "Add a new section to the about page covering Steph's media appearances."
- "Make a new package detail page for The Foundation — duration 4 weeks, price $1,000."

**Less useful prompts (these get vague results — be specific instead):**

- ~"Make the site better."~ → Tell Claude what's wrong or what's missing.
- ~"Redesign the home page."~ → Describe the change you want, ideally with the section or element name.
- ~"Add a blog."~ → A blog needs real decisions (CMS? Markdown files? How many posts to start? Categories?). Talk through the scope first.

**Before merging a change Claude proposes:**

1. Read the PR description.
2. Check the modified files actually do what the description says.
3. Run the site locally (`python3 -m http.server 8000`) and click through.
4. Particularly verify: hero stats still say `200+ / 4 / 3 wks`, all "Book Call" CTAs say "Free", career.html is NOT in the main nav.

---

## Tech & design system

- **Fonts**: Cormorant Garamond (headings, prices, large numbers), Inter (body, UI, labels). Loaded from Google Fonts in every HTML head.
- **Colours** (CSS custom properties in `:root` of `css/style.css`):
  - `--teal: #1a4a5a` · `--teal-deep: #123642` · `--teal-darker: #0d2a33`
  - `--cream: #F5F0E8` · `--cream-warm: #EFE8DC`
  - `--brown: #8B5E3C` · `--brown-bright: #a36f45` · `--brown-dark: #6d4a2f`
- **Buttons**: `.btn-primary` (cream-on-teal pill), `.btn-outline` (transparent with brown border). Add `.on-light` for light backgrounds or `.on-dark` to keep visibility on dark sections.
- **Section labels**: `.section-label` (the brown pill above section headings).
- **Animations**: `.reveal` class fades + lifts elements into view via `IntersectionObserver` in `js/main.js`.
- **Mobile**: nav collapses to a hamburger under 900px. Cards stack. Hero goes single-column.

---

## Contact

- hello@stephdarmanin.com
- +61 412 355 531
- Brand: Legacy Life Coaching (parent: Legacy Ascend)
