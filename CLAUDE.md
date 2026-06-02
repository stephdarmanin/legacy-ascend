# CLAUDE.md — Working in this repo

Loaded automatically at the start of every Claude session in this repository. It exists to
make your work here predictable, on-brand, and safe for an owner (**Steph Darmanin**) who is
new to GitHub and AI tooling. Read it before you act.

Human-friendly version: `README.md`. Owner's to-do list: `OUTSTANDING.md`. Everything Steph
supplied (brief, copy, pricing, brand): the `brief/` folder.

---

## 0. When the owner asks "what's outstanding" (do this first)

If Steph asks anything like *"what's outstanding,"* *"what do I still need to do,"* *"what's
left,"* or *"what do you need from me"* — **read `OUTSTANDING.md` and summarise the unchecked
items** in plain language, grouped by priority. When she provides something (a video, a
testimonial, a link), implement it **and** tick the box in `OUTSTANDING.md` (and update the
"Already done" list if relevant). Treat `OUTSTANDING.md` as the living source of truth for
what's pending.

---

## 1. What this project is

A static marketing site for **Legacy Ascend** (owner: Steph Darmanin, Sydney). Steph is
positioned as a **Performance Coach, Keynote Speaker, and Workshop Facilitator**; her work is
**Executive Coaching**.

- Static HTML, plain CSS, vanilla JS. **No build tool. No framework. No `package.json`.** Do
  not introduce one without explicit approval.
- Hosted as plain static files (Vercel / Netlify / GitHub Pages / Cloudflare Pages).
- Design: Cormorant Garamond + Inter on a teal / cream / brown palette. Premium, authoritative,
  not overtly feminine. Light **and** dark sections.

If tempted to add a framework, bundler, TypeScript, React, Tailwind, or a CMS — **stop and ask
first.** The hand-written static nature is a feature.

---

## 2. Repo layout

```
index.html             ← Home (cinematic hero, problem, packages, corporate, quiz, results, CTA)
packages.html          ← "Work With Me" — 6 offers + full testimonials + full FAQ
breakthrough/accelerator/prosper/evolution.html ← program detail pages
career.html            ← Career coaching (HIDDEN — see §6)
corporate.html         ← Corporate workshops + featured testimonial
speaking.html          ← Keynote speaking (topics, signature talks)
shop.html              ← Shop (digital products)
media.html             ← Press, books, op-eds, podcasts
book.html              ← Booking page (Calendly stub)
quiz.html              ← Standalone quiz page
thanks.html            ← Post-form thank-you
about.html             ← About Steph (accurate bio; not in the top nav by design)
privacy/terms/disclaimer/returns.html ← legal pages

css/style.css          ← Single global stylesheet
js/main.js             ← Nav, mobile toggle, reveal animations, Calendly stub
js/quiz.js             ← Self-contained 4Q lead-capture quiz

assets/images/         ← Photos (incl. steph-headshot-cropped.jpg, product images)
assets/logos/          ← Brand marks (sun, arch, wordmark, icon/favicon)

brief/                 ← Source of truth: brief, copy library, offer suite, brand direction
OUTSTANDING.md         ← Owner's live to-do list
README.md / CLAUDE.md  ← Docs (human / AI)
```

There are **no server-side includes** — the nav and footer are copied into every HTML file. If
you change the nav or footer, change it in **every** page identically. Find them with
`grep -l 'class="nav"' *.html`.

---

## 3. Nav and footer (must be identical across all pages)

**Nav order:** Work With Me · Speaking · Corporate · Shop · Media + a "Book Call — Free" pill.
Set `class="active"` on the current page's link. **Never** add `career.html` to the nav (§6).
The logo mark is rendered **white** via CSS (`.nav-logo-mark { filter: brightness(0) invert(1) }`).

**Footer** (every page) contains, in order: wordmark "Legacy Ascend"; social row (LinkedIn,
Instagram, YouTube); contact (email only — **no phone number anywhere on the site**); legal row
(Privacy / Terms / Disclaimer — **plus Returns on `shop.html` only**); meta line
`© <year> Legacy Ascend · Powered by MindMaker AI`. Do **not** reintroduce the phone number or
the old "Prices valid through June 30, 2026" footer line.

The `<head>` of every page includes the favicon + Open Graph block (icon =
`assets/logos/legacy-ascend-icon.jpg`).

---

## 4. Brand voice — non-negotiable

Direct, dry, confident. Short sentences, then a longer one. Em-dashes used sparingly. Specific
numbers over hype. Italic-brown emphasis on ONE word per heading via `<em>`.

**Banned:** "unlock your potential", "transformative journey", "authentic self", "level up",
"thrive", "manifest", "high-vibe", "elevate", "amazing", "incredible", "game-changer". No emojis.
No "$50 discovery call" (Discovery is **Free**). No "AU$" — write `$X,XXX` or `$X,XXX AUD`.

Test: read it out loud. If it sounds like a 2019 LinkedIn coach, rewrite. If it sounds like a
confident peer with no time for fluff, ship it.

---

## 5. Pricing & links — every place a number/link appears

The **single source of truth** is `brief/offer-suite-and-links.md`. When changing a price,
update **all** of these and verify with grep before declaring done.

| Item | Price | Files |
|---|---|---|
| Discovery Call | Free | `index.html`*, `packages.html`, `book.html`, `js/quiz.js` |
| Activation Hour | $150 | `packages.html`, `js/quiz.js` |
| The Breakthrough | $1,500 | `packages.html`, `breakthrough.html`, `js/quiz.js` |
| The Accelerator | $2,500 | `index.html`, `packages.html`, `accelerator.html`, `js/quiz.js` |
| Prosper | $3,997 | `index.html`, `packages.html`, `prosper.html`, `js/quiz.js` |
| Evolution | $9,500 | `index.html`, `packages.html`, `evolution.html`, `js/quiz.js` |
| LinkedIn Authority Reset | $500 | `career.html`, `js/quiz.js` |
| The Executive Track | $800 | `career.html`, `js/quiz.js` |
| The Executive Edge | $1,400 | `career.html`, `js/quiz.js` |
| Public Speaking Workshop | $3,000 (AUD) | `index.html`, `corporate.html` |
| 2026 Success Roadmap | $27 | `shop.html` |

**Durations on package cards are stated in months** (Accelerator 2 months, Prosper 3 months,
Evolution 6 months). Stripe checkout links live on the program detail pages ("Start Now") and
career page ("Start Today"); Calendly links on Discovery/Activation/LinkedIn. All exact URLs are
in `brief/offer-suite-and-links.md`.

---

## 6. The hidden `career.html`

Lists three career packages (LinkedIn Authority Reset $500, The Executive Track $800, **The
Executive Edge** $1,400). **Deliberately hidden**: possible LHH conflict of interest + avoid
overwhelming new visitors. Mechanics: `<meta name="robots" content="noindex, nofollow">`; not in
the nav; linked only from the "Looking for career coaching?" line at the bottom of `packages.html`.
If asked to surface it in the nav — **pause and confirm.**

---

## 7. Stats — current values

Home hero + About page use: **200+ private clients · 7 countries served · 4 weeks to first
measurable shift.** About page also: **20+ years · 4 #1 bestsellers.** If you see `100+`, `4
countries`, `8 wks`, or `3 wks` in a result, those are old and should be corrected unless the
owner asks to revert.

---

## 8. The hero (`index.html`)

Concept C: a **full-bleed dark cinematic hero** (`.hero-cinematic`) — teal gradient + faint white
sun watermark + centered copy. It is built to take a looping background `<video>` (commented out
until `assets/video/hero.mp4` is supplied — see OUTSTANDING.md). This layout also fixed the old
"big gap in the middle on large screens" bug, which was caused by the previous two-column hero
having no max-width. **Don't** reintroduce an uncapped two-column hero.

---

## 9. The quiz (`js/quiz.js`)

Self-contained vanilla JS; mounts into `#quiz-root` on `index.html` and `quiz.html`. 4 questions,
A/B/C/D. Result = most-common letter; **ties resolve to the higher-priced rec** (priority
`['C','B','A','D']`) — a deliberate commercial choice; don't change without confirming. To wire a
real form backend, replace the `mailto:` in `submitEmail()` with a `fetch()` and keep the
localStorage fallback. Steph may later align the 4 personas to her 4 ICPs — that's a copy edit in
the `QUESTIONS`/`RESULTS` objects.

---

## 10. The Calendly stub (`book.html`)

The booking button is `data-calendly-url=""` (empty) → `js/main.js` shows an email fallback. To
connect: set both `href` and `data-calendly-url` to the real Calendly URL. (Note: the Work With Me
cards already link Discovery/Activation directly to Calendly.)

---

## 11. Assets

```
assets/images/
  steph-headshot-cropped.jpg          ← About page portrait (the 2026 cropped headshot)
  product-success-roadmap-landscape.jpg / -portrait.jpg ← Shop feature product
  hero-steph-navy-suit.png / about-steph-red-suit.png / steph-photo-*.jpg ← older photos
assets/logos/
  legacy-ascend-sun.png               ← sun mark (nav + hero watermark, rendered white via CSS)
  legacy-ascend-icon.jpg              ← square icon: favicon + social share image
  legacy-ascend-arch.png / -wordmark.png ← available, not currently wired
```
`<img>` tags keep an `onerror` fallback that hides broken images. Don't remove it while binaries
are still being finalised. New images go in `assets/images/`, referenced relatively.

---

## 12. CSS / JS conventions

- One stylesheet, organised by component with `/* ==== */` headers. 2026 additions are in a
  clearly-labelled block at the bottom. Reuse existing classes and `var(--teal-deep)` etc.; never
  hard-code hex. Breakpoints: 1100 / 900 / 480.
- Vanilla JS only, wrapped in an IIFE. No jQuery, no libraries, no bundler. Feature-detect new APIs.

---

## 13. Legal pages

`privacy/terms/disclaimer/returns.html` carry the **current** copy, which still says "Legacy Life
Coaching & Consulting" and references stephdarmanin.com. Steph approved uploading these as-is
temporarily; each page shows a small banner saying so. When she's ready, rebrand them (it's an
OUTSTANDING item). They are `noindex`.

---

## 14. Before declaring a task done — checklist
1. ✅ All affected HTML updated (use `grep -l`).
2. ✅ Pricing changes applied to **every** file in §5; verified with grep.
3. ✅ Nav/footer changed identically in **every** page.
4. ✅ Brand voice (§4) followed.
5. ✅ No phone number (`grep -rn 'tel:'`), no "Legacy Life Coaching" outside the legal pages’
   intentional copy, no "$50".
6. ✅ `career.html` still `noindex` and not in the nav.
7. ✅ If you completed an OUTSTANDING item, tick it in `OUTSTANDING.md`.

---

## 15. Git workflow
- Default branch: `main`. Work on a feature branch (`claude/<short-description>`).
- Always create new commits; never amend/force-push unless asked.
- Don't push to `main` directly. Don't open a PR unless asked.
- Use the `gh` CLI or GitHub MCP tools for GitHub actions, whichever is available.

---

## 16. Ask before doing
Confirm with the owner before: adding `career.html` to the nav or removing its `noindex`;
changing the quiz tie-break; introducing any tooling/framework; removing the `onerror` image
fallback; putting a price back on the discovery call; lowering the 200+/7/4-wks stats; restructuring
the package lineup; adding tracking/analytics; renaming files linked from other pages; reintroducing
the phone number. When in doubt, use `AskUserQuestion`.

- Owner: Steph Darmanin · hello@stephdarmanin.com · Brand: Legacy Ascend · Repo: krishanraja/legacy-ascend
