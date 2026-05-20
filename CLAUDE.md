# CLAUDE.md — Working in this repo

This file is loaded automatically at the start of every Claude session in this repository. It exists to make your work here predictable, on-brand, and safe for an owner (Steph Darmanin) who is new to GitHub and AI tooling. Read it before you act.

If you're a human reading this — the equivalent human-friendly doc is `README.md`. This file is the one Claude uses.

---

## 1. What this project is

A static marketing site for **Legacy Life Coaching** (brand: Legacy Life Coaching; parent identifier: Legacy Ascend). The owner is **Steph Darmanin**, an executive and life coach based in Sydney.

- Static HTML, plain CSS, vanilla JS. **No build tool. No framework. No `package.json`.** Do not introduce one without explicit user approval.
- 14 HTML pages in repo root. One CSS file (`css/style.css`). Two JS files (`js/main.js`, `js/quiz.js`).
- Hosted as plain static files (Vercel / Netlify / GitHub Pages / Cloudflare Pages — all work).
- Branding is Cormorant Garamond + Inter on a teal/cream/brown palette. The design is a deliberate hybrid of two earlier concept files (a dark "Converter" concept C and a light editorial "Editorial" concept B). The user calls this "B+C hybrid."

If you ever feel tempted to add a framework, a bundler, TypeScript, React, Tailwind, or a CMS — **stop and ask first**. The static, hand-written nature of this site is a feature, not a constraint.

---

## 2. Repo layout

```
index.html             ← Home (hero, problem, packages, quiz, testimonials, final CTA)
packages.html          ← Full 6-package grid
breakthrough.html      ← Detail: The Breakthrough ($1,500)
accelerator.html       ← Detail: The Accelerator ($2,500)
prosper.html           ← Detail: Prosper ($3,997, Most Popular)
evolution.html         ← Detail: Evolution ($9,500)
about.html             ← About Steph
corporate.html         ← Corporate workshops
speaking.html          ← Keynote speaking
media.html             ← Media enquiries
career.html            ← Career coaching (HIDDEN — see §6)
book.html              ← Booking page (Calendly stub)
quiz.html              ← Standalone quiz page
thanks.html            ← Post-form thank-you page

css/style.css          ← Global stylesheet, ~1270 lines, organised by component
js/main.js             ← Nav, mobile toggle, IntersectionObserver reveals, Calendly stub
js/quiz.js             ← Self-contained 4Q lead-capture quiz

assets/images/         ← Photos
assets/logos/          ← Brand marks

README.md              ← Human-facing documentation
CLAUDE.md              ← This file
```

---

## 3. Page template (every HTML file follows this skeleton)

Every page in the repo is structured the same way. When adding a new page, **copy an existing one as a starting point** rather than writing from scratch:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>[Page-specific] — Legacy Life Coaching</title>
  <meta name="description" content="..." />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <nav class="nav" id="nav"> ... </nav>

  <!-- page-specific sections -->

  <footer class="footer"> ... </footer>

  <script src="js/main.js"></script>
  <!-- include js/quiz.js ONLY on pages with #quiz-root (currently index.html + quiz.html) -->
  <script>document.getElementById('year').textContent = new Date().getFullYear();</script>
</body>
</html>
```

**Critical:** the nav block and footer block are duplicated across every page (no server-side includes — this is a static site). If you change the nav or footer, you must change it in **every** HTML file. Use `grep -l 'class="nav"' *.html` to find them.

---

## 4. Nav and footer (must be identical across all pages)

### Nav

```html
<nav class="nav" id="nav">
  <a class="nav-logo" href="index.html" aria-label="Legacy Life Coaching home">
    <span class="nav-logo-mark" aria-hidden="true"></span>
    <span class="nav-logo-text">Legacy Life Coaching</span>
  </a>
  <div class="nav-right">
    <ul class="nav-links" id="nav-links">
      <li><a href="packages.html">Work With Me</a></li>
      <li><a href="corporate.html">Corporate</a></li>
      <li><a href="speaking.html">Speaking</a></li>
      <li><a href="media.html">Media</a></li>
    </ul>
    <button class="nav-toggle" type="button" aria-label="Toggle navigation" aria-controls="nav-links" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
    <a href="book.html" class="nav-cta">Book Call — Free</a>
  </div>
</nav>
```

Add `class="active"` to the matching nav link on each page (e.g., `<a href="corporate.html" class="active">Corporate</a>` on `corporate.html`).

**Never** add `career.html` to the main nav. It is intentionally hidden (see §6).

### Footer

```html
<footer class="footer">
  <div class="footer-wordmark">Legacy Life Coaching</div>
  <div class="footer-contact">
    <a href="mailto:hello@stephdarmanin.com">hello@stephdarmanin.com</a>
    <a href="tel:+61412355531">+61 412 355 531</a>
  </div>
  <div class="footer-meta">
    © <span id="year">2026</span> Legacy Ascend &nbsp;·&nbsp; Prices valid through June 30, 2026 &nbsp;·&nbsp; Powered by Mindmaker AI
  </div>
</footer>
```

The `<span id="year">` is populated by an inline script at the bottom of every page. Don't remove that script.

---

## 5. Brand voice — non-negotiable

The voice is direct, dry, confident. Below are the rules. Apply them to every new piece of copy, and rewrite anything that violates them.

### Yes
- Short sentences. Then a longer one. Then short again.
- Em-dashes for asides — used sparingly.
- Specific numbers: "200+ professionals", "8 weeks", "$2,500 AUD".
- Confident, not braggy: "I've spent over 20 years coaching professionals across Australia, Canada, Europe, and the UK."
- Italicized brown emphasis on ONE word per heading via `<em>` (e.g. `<h2>You are performing. <em>But you are not living.</em></h2>`).

### No
- Banned phrases: "unlock your potential", "transformative journey", "authentic self", "level up", "thrive", "manifest", "high-vibe", "showing up as your best self", "let's chat", "elevate", "amazing", "incredible", "game-changer", "next-level", "step into your power".
- No exclamation marks in body copy. (Headings: only if Steph would actually shout it.)
- No emojis. Anywhere.
- No "AU$". Always `$X,XXX AUD` or just `$X,XXX`.
- No "$50 discovery call". Discovery calls are **Free**. This was changed from an earlier mockup.
- No marketing-speak superlatives. Specificity beats hype every time.

### Test for whether copy sounds like Steph
Read it out loud. If it sounds like a LinkedIn coach posting in 2019, rewrite. If it sounds like a text from a confident peer who doesn't have time for fluff, ship it.

---

## 6. The hidden `career.html` page

`career.html` lists three career-coaching packages (LinkedIn Authority Reset, Executive Track, Executive Track Advanced). It is **deliberately hidden** because:

1. There's a potential conflict of interest with Steph's LHH (career transition) work.
2. Steph doesn't want visitors overwhelmed with too many package options on first visit.

She uses it as a direct link to send to leads and post on socials.

Mechanics:
- Page has `<meta name="robots" content="noindex, nofollow" />`.
- **Not** linked from the main nav.
- Linked from exactly one place on the site: the small "Looking for career coaching? →" text link at the bottom of `packages.html`.

If asked to "add career coaching to the nav" or "promote career.html more prominently" — **pause and confirm with the user**. Surfacing it is reversing a deliberate decision; don't do it without explicit instruction.

---

## 7. Pricing — every place each number appears

When the user asks to change a price, update **all** of these and verify with grep before declaring done. Use:

```bash
grep -rn 'PRICE_STRING' --include='*.html' --include='*.js'
```

| Package | Files |
|---|---|
| Discovery Call — Free | `index.html`, `packages.html`, `book.html`, `js/quiz.js` |
| Activation Hour — $150 | `packages.html`, `js/quiz.js` |
| The Breakthrough — $1,500 | `packages.html`, `breakthrough.html`, `js/quiz.js` |
| The Accelerator — $2,500 | `index.html` (preview card), `packages.html`, `accelerator.html`, `js/quiz.js` |
| Prosper — $3,997 | `index.html` (preview card), `packages.html`, `prosper.html`, `js/quiz.js` |
| Evolution — $9,500 | `index.html` (preview card), `packages.html`, `evolution.html`, `js/quiz.js` |
| LinkedIn Authority Reset — $500 | `career.html`, `js/quiz.js` |
| The Executive Track — $750 | `career.html`, `js/quiz.js` |
| Executive Track Advanced — $1,200 | `career.html`, `js/quiz.js` |
| Public Speaking Workshop — $3,000 | `corporate.html` |

The "Prices valid through June 30, 2026" line lives in the footer of every page and in the `packages-note` line on `packages.html`. If you update prices, also confirm the validity date is still correct.

---

## 8. Stats — current values

Three numbers appear in the home page hero stats bar and the about page stats row. They were updated from earlier mock-up values:

| Metric | Value (current) | Old (do not revert) |
|---|---|---|
| Private clients | **200+** | 100+ |
| Countries served | **4** | 4 |
| First measurable shift | **3 wks** | 8 wks |
| About: years | **20+** | — |
| About: continents | **4** | — |
| About: credential | **LHH program specialist** | — |

If you ever see "100+" or "8 wks" in a search result, those are **wrong** and should be corrected unless the user explicitly asked to revert.

---

## 9. The quiz (`js/quiz.js`)

Self-contained, vanilla JS. Mounts into `<div id="quiz-root"></div>` on `index.html` and `quiz.html`.

- 4 questions, A/B/C/D answers each.
- Result is determined by `mode(answers)` — most-common letter wins.
- **Ties resolve to the higher-priced recommendation** via priority `['C', 'B', 'A', 'D']`. This is a deliberate commercial decision. Do not change it without confirming with the user.
- Result map:
  - **A → The Strategic Executive** → recommends Executive Track (`career.html`)
  - **B → The Reinventor** → recommends The Breakthrough (`breakthrough.html`)
  - **C → The Quiet High Achiever** → recommends Prosper or The Accelerator (`prosper.html`)
  - **D → The Builder** → recommends Discovery Call or Activation Hour (`book.html`)
- Email capture: `mailto:hello@stephdarmanin.com` + `localStorage` fallback under key `legacy_quiz_leads`.

If asked to wire a real form backend (Formspree, ConvertKit, Mailchimp, a custom Sheet/Notion endpoint, etc.):

1. Replace the `mailto:` line in `submitEmail()` with a `fetch()` to the endpoint.
2. Keep the localStorage stash as a fallback.
3. Show the thank-you message regardless of success/failure (Steph will follow up manually if delivery fails).

---

## 10. The Calendly stub (`book.html` + `js/main.js`)

The booking button on `book.html` is currently a styled stub:

```html
<a href="#" class="btn-primary on-light" data-calendly-url="">Open Booking Calendar →</a>
```

`js/main.js` watches for `[data-calendly-url]` clicks. If empty, it shows an alert pointing the user to email. To wire the real Calendly:

1. Set both `href` and `data-calendly-url` to the Calendly URL.
2. Optionally replace the button with Calendly's inline embed snippet (script in `<head>`, div in place of button).

If the user pastes a Calendly URL and asks "connect this", do **step 1** at minimum. Offer the inline embed as a nicer option but don't do it unprompted.

---

## 11. Assets

```
assets/images/
  hero-steph-navy-suit.png    ← home hero portrait (referenced by index.html)
  about-steph-red-suit.png    ← about page portrait (referenced by about.html)

assets/logos/
  legacy-ascend-sun.png       ← nav mark (referenced by css/style.css .nav-logo-mark)
  legacy-ascend-arch.png      ← decorative section divider on index.html
  legacy-ascend-wordmark.png  ← full wordmark (available; nav uses Cormorant text)
```

Image-referencing `<img>` tags use an `onerror` fallback to hide the broken image and show a styled placeholder — so missing files won't break the page layout. **Do not remove the onerror fallback** until every binary is committed and confirmed.

If asked to add a new image: drop the file in `assets/images/` and reference it as `assets/images/<filename>` from the HTML. Don't use absolute URLs.

---

## 12. CSS conventions

`css/style.css` is organized by component with clear section comments (`/* ============ NAV ============ */`). When adding styles:

1. **Check first** — the design system is rich. The component you need probably already exists. Common ones: `.btn-primary`, `.btn-outline`, `.section-label`, `.section-heading`, `.card`, `.problem-card`, `.testimonial-row`, `.corp-feature`, `.hero-proof`, `.reveal`.
2. **Use existing variables** — `var(--teal-deep)`, `var(--cream)`, `var(--brown)`, etc. Never hard-code hex.
3. **Mobile breakpoints**: 1100px (general tablet/laptop tightening), 900px (cards stack, nav becomes hamburger), 480px (button full-width). All three are at the bottom of `style.css`.
4. **No inline styles** for anything reusable. Single-use spacing tweaks via inline `style=""` are fine.

---

## 13. JS conventions

- Vanilla JS only. No frameworks. No bundler.
- Wrap module-level code in an IIFE (`(function () { ... })();`) — already done in both files.
- Use `document.querySelector(All)` and `addEventListener`. No jQuery, no helper libs.
- Feature-detect (`if ('IntersectionObserver' in window)`) before using newer APIs.

---

## 14. When the user asks for changes — checklist

Before declaring a task done:

1. ✅ All affected HTML files updated (use `grep -l` to find them).
2. ✅ If pricing changed, every file in §7 is updated.
3. ✅ If nav/footer changed, **every** HTML file is updated identically.
4. ✅ Brand voice rules (§5) followed in any new copy.
5. ✅ Run `python3 -m http.server` and click through the affected page in a browser.
6. ✅ No "$50" anywhere (`grep -rn '\$50[^0-9]' --include='*.html' --include='*.js'`).
7. ✅ No "Apply for" CTA copy on package preview cards (`grep -rni 'apply for' --include='*.html'`).
8. ✅ `career.html` still has `noindex` and is not in any main nav.

If the user has subscribed to PR activity, after pushing, wait for events to arrive — don't poll, don't sleep.

---

## 15. Git workflow

- Default branch: `main`.
- Active development branch (set by harness instructions when applicable): `claude/build-website-from-concepts-HNly1`. Subsequent feature branches should use a descriptive name like `claude/<short-description>`.
- **Always create new commits.** Never amend or force-push unless the user explicitly asks.
- **Never push to `main` directly.** Always work on a feature branch and open a PR.
- **Do not open a PR unless explicitly asked.** Push the branch; let the user request the PR.
- Use the GitHub MCP tools (`mcp__github__*`) for any GitHub interaction (PRs, comments, reviews). The `gh` CLI is not available in this environment.

---

## 16. Things to ask before doing

These actions are easy to do but hard to undo. **Confirm with the user first** before:

- Adding `career.html` to the main nav, or removing its `noindex`.
- Changing the quiz tie-breaking logic.
- Introducing a build tool, framework, package manager, or any tooling beyond plain HTML/CSS/JS.
- Removing the onerror fallback on `<img>` tags.
- Changing the "Free" discovery-call copy back to a price.
- Reducing the "200+ / 4 / 3 wks" hero stats.
- Restructuring the package lineup (removing The Breakthrough; changing Prosper's "Most Popular" status; reordering pricing tiers).
- Adding tracking pixels, third-party scripts, or analytics (Steph hasn't signed off on a vendor yet).
- Renaming files that are linked from other pages.

When in doubt, use `AskUserQuestion` instead of guessing.

---

## 17. Contact and ownership

- **Owner**: Steph Darmanin (Sydney, Australia)
- **Email**: hello@stephdarmanin.com
- **Phone**: +61 412 355 531
- **Brand**: Legacy Life Coaching (parent: Legacy Ascend)
- **GitHub**: krishanraja/legacy-ascend (managing the technical side)

The site is intended to be maintained primarily through AI-assisted edits — so keep your work readable, your commits descriptive, and your PR descriptions complete.
