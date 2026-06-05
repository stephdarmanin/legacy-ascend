# What's Outstanding

This is your live to-do list for the website. It's the things **only you can provide or
decide** — Claude can't invent a real testimonial, a checkout link, or a video for you.

**How to use it:** open Claude Code in this folder and say
*"What's outstanding for me to do?"* — Claude will read this file and walk you through it.
When something is done, tell Claude *"mark the hero video as done"* and it will tick it off.

Each item says **what's needed**, **why**, and **what Claude will do** once you hand it over.

---

## 🔴 Important (the site works without these, but they're the obvious gaps)

- [ ] **Hero background video.** *Needed:* a slow, cinematic looping video file.
  *Why:* the homepage hero is designed for one (Concept C); right now a teal gradient +
  faint sun stand in. *Hand over:* drop the file at `assets/video/hero.mp4` and tell Claude
  "turn on the hero video." (The Envato clips you liked need a paid licence first.)

- [x] **Confirm the hero look.** ✅ Done — the **cropped headshot** now sits framed beside the
  copy in the homepage hero, on the cinematic teal background + sun watermark. (The brief asked
  to "replace the banner photo with the cropped headshot"; this delivers that, while the optional
  background-video slot stays ready for when `hero.mp4` is supplied.)

- [ ] **Speaking enquiry Google Form.** *Needed:* the form's URL. *Why:* the brief says the
  Speaking page should link to a Google Form; for now its button opens an email. *Hand
  over:* paste the link and say "wire the Speaking page to this form."

- [ ] **Corporate & speaking testimonials.** *Needed:* the **William Lewis** (Aurora Energy
  Research) quote, plus the 11 corporate + 4 speaking testimonials. *Why:* those sections of
  your testimonials doc were empty, so the Corporate and Speaking pages currently show
  labelled placeholders. *Hand over:* paste them and say "drop these into the corporate and
  speaking pages." (We don't invent quotes for real, named people.)

- [ ] **Shop checkout links + final copy.** *Needed:* the Stripe link for the **2026 Success
  Roadmap ($27)**, the download links for the 3 free audios, and final product descriptions.
  *Why:* the Shop buttons currently open an email enquiry as a stand-in. *Hand over:* paste
  links + copy.

- [ ] **Connect the booking button on the Book page.** *Needed:* your real Calendly URL.
  *Why:* `book.html`'s button is a stub. *Hand over:* paste the URL and say "connect the
  booking button."

## 🟡 Should do before a wide launch

- [ ] **Rebrand the legal pages.** The Privacy Policy, Terms, Disclaimer, and Returns pages
  still say "Legacy Life Coaching & Consulting" and reference stephdarmanin.com (you said to
  upload the current versions for now). When you're ready, say "rebrand the legal pages to
  Legacy Ascend" and confirm the correct legal entity name + domain.

- [ ] **Confirm the Stripe & Calendly links are live.** The checkout/booking links (in
  `brief/offer-suite-and-links.md`) use a `legacylifecoaching` slug. Click each one and
  confirm it's active and points to the right product/price under the Legacy Ascend brand.

- [ ] **Book cover images (Media page).** *Needed:* the 4 book cover images. *Why:* the Media
  page shows logo placeholders for the covers. *Hand over:* drop them in `assets/images/` and
  say "add the real book covers."

- [ ] **Press coverage link (FOX).** *Needed:* the FOX feature URL (the brief said "see
  attached zip file," which wasn't included). *Why:* the Media "Press Coverage" column has a
  placeholder. *Hand over:* paste the link(s).

- [ ] **Discovery Call duration: 30 or 45 minutes?** The homepage brief says 30 minutes; the
  Full Offer Suite says 45. The site currently says **30 min**. Confirm which is right.

## 🟢 Nice to have / polish

- [ ] **Video testimonials.** Ben and Chinda have video testimonials — share the files/links
  to embed two on the Work With Me page (the brief asked if this was possible: yes).
- [ ] **Social share image.** `og:image` currently points to the icon with a relative path.
  Once the site is live on a domain, we should set it to a full `https://…` URL so link
  previews work on LinkedIn/etc.
- [ ] **Favicon polish.** The favicon uses your icon JPG. A transparent PNG/ICO would look
  slightly crisper in browser tabs (optional).
- [ ] **Quiz personas.** When ready, align the 4 quiz questions/results to your 4 ICPs
  (corporate leader, business owner/CEO, the Everyman, the Job Seeker). Say "let's update the
  quiz" and we'll go through it together.
- [ ] **About page in the nav?** The About page is live and accurate but isn't in the top
  menu (the brief's nav didn't include it). Say the word to add it.
- [ ] **Deploy.** When you're happy, the site can go live on Vercel / Netlify / Cloudflare
  Pages / GitHub Pages with zero configuration (see README → Deploying).

---

### ✅ Already done in this build
Rebrand to Legacy Ascend · new nav + Shop page · cinematic hero (fixes the full-screen
gap) · new hero copy, stats & personas · months not weeks on packages · brown frame on
Breakthrough · Start Now → Stripe on all programs · career pricing & "Executive Edge"
rename · corporate workshop section · footer socials + legal links · phone number removed
everywhere · Shop page · Privacy/Terms/Disclaimer/Returns pages · Media books + op-eds +
podcasts · Speaking topics & signature talks · About page rewritten to your real bio ·
favicon + social tags · all new image assets added · cropped headshot framed in the homepage hero.
