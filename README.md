# Legacy Ascend — Steph Darmanin's website

This is the website for **Steph Darmanin** — Performance Coach, Keynote Speaker, and
Workshop Facilitator. (Brand: **Legacy Ascend**.)

You do **not** need to know how to code to run this website. This page is written for you.

---

## The one thing to know

To change anything on the site, open this folder in **Claude Code** and ask in plain
English. That's it. Claude reads the instructions in `CLAUDE.md` automatically and knows
how everything here works.

**Start here — try asking:**

> **"What's outstanding for me to do?"**

Claude will read `OUTSTANDING.md` and walk you through the short list of things only you
can provide (a video, a testimonial, a checkout link, etc.).

**Other things you can just ask for:**
- "Change the price of Prosper to $4,200 everywhere it appears."
- "Add this testimonial from [name] to the Work With Me page: …"
- "Swap the homepage hero photo for the new file I just dropped in `assets/images`."
- "Connect the booking button to this Calendly link: …"
- "Add the William Lewis testimonial to the Corporate page: …"
- "Update the Speaking page to link to this Google Form: …"

If you're not sure how to phrase something, just describe what you want in your own words.
You can't break anything that can't be undone — every change is saved in version history.

---

## What's in here (the plain-English map)

| Thing | What it is |
|---|---|
| `index.html` | The home page |
| `packages.html` | "Work With Me" — all coaching packages + full testimonials + FAQs |
| `breakthrough/accelerator/prosper/evolution.html` | The four individual program pages |
| `career.html` | Career coaching (hidden — see note below) |
| `corporate.html` | Corporate workshops |
| `speaking.html` | Keynote speaking |
| `shop.html` | Shop — digital products |
| `media.html` | Press, books, op-eds, podcasts |
| `book.html` | Book a discovery call |
| `quiz.html` | The "Find Your Fit" quiz |
| `privacy / terms / disclaimer / returns .html` | Legal pages |
| `about.html` | About Steph |
| `assets/` | All photos and logos |
| `brief/` | **Your source of truth** — the full brief, all your copy, pricing, and brand notes |
| `OUTSTANDING.md` | Your live to-do list |
| `CLAUDE.md` | Instructions Claude reads automatically |

### The `brief/` folder is your content library
Everything Steph supplied lives here so any future edit has a reliable source:
- `brief/website-brief.md` — the full feedback brief, point by point.
- `brief/offer-suite-and-links.md` — every price and checkout/booking link (the "money file").
- `brief/copy-library.md` — About Steph, testimonials, FAQs, ICPs, client outcomes.
- `brief/brand-direction.md` — colours, fonts, moodboard, hero-video ideas, social links.

### A note on the hidden career page
`career.html` is **deliberately hidden** from the top menu (there may be a conflict of
interest, and Steph doesn't want first-time visitors overwhelmed with options). It's
reachable only via the small "Looking for career coaching?" link at the bottom of the Work
With Me page, and it's set to stay out of Google. Don't add it to the menu without asking.

---

## How to look at the site on your computer

**Easiest:** double-click `index.html` — it opens in your browser.

**Better (the quiz and animations behave best this way):** in this folder, run
`python3 -m http.server 8000`, then open `http://localhost:8000` in your browser. Stop it
with `Ctrl + C`. (Or just ask Claude: *"show me the site."*)

---

## How to put the site live

These are all free and need no setup — Claude can walk you through any of them:
- **Vercel** · **Netlify** · **Cloudflare Pages** · **GitHub Pages**

There is no "build step" — whatever is in this folder is exactly what goes live.

---

## A few facts about the site (for the curious)
- It's plain HTML/CSS/JavaScript — fast, cheap to host, and very hard to break.
- Brand: deep teal + cream + gold; Cormorant Garamond (headings) + Inter (body).
- Phone number is intentionally not on the site — **email only** (hello@stephdarmanin.com).
- The legal pages currently use the older "Legacy Life Coaching & Consulting" wording and
  will be rebranded to Legacy Ascend later (it's on your outstanding list).

Questions about the build itself: **hello@stephdarmanin.com**.
