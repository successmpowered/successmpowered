# 07 — Conversion Improvements

The current site has one conversion mechanism: a contact form. That's a conversion funnel with one stage and no nurture — meaning ~99% of qualified visitors leave with no capture and no follow-up path.

This document specifies how to convert more of the right visitors, filter out the wrong ones, and build the quiet machinery of a serious B2B consultancy funnel.

---

## The conversion model

Leadership and culture work has a long buying cycle — 3 to 18 months from first interest to signed engagement. The site needs to support visitors at every stage of that cycle, not only at the moment of decision.

**Three-tier commitment ladder:**

| Tier | Commitment level | Mechanism | What they get |
|---|---|---|---|
| **Read** | Low — browsing | Articles, case studies, approach page | Value, free, no capture required |
| **Subscribe** | Light — email only | Newsletter signup | Monthly thoughtful email, stays in orbit |
| **Convert** | High — serious intent | "Start a conversation" qualifying form | Direct partner conversation within 2 business days |

Every page on the site should offer the *next-step-down* if the visitor isn't ready for the primary CTA.

---

## Primary CTA strategy

### One primary CTA across the site: *Start a conversation*
This replaces the current mix of *Book a Consultation / Contact Us / Get in Touch / Enquire Now*. Settle on one phrase and use it everywhere for the primary action.

### Why "Start a conversation"?
- **Low pressure.** "Book a consultation" signals "I am about to be sold to." "Start a conversation" signals equal footing.
- **Accurate to what happens.** The first interaction is actually a conversation, not a formal consultation.
- **Senior-buyer appropriate.** A CHRO is not filling in a form to "book a call" like they're ordering a car service. They're starting a relationship.

### Button styling
- Solid colour button in the clay/rust accent.
- Generous padding.
- Arrow glyph included: **Start a conversation →**
- Same treatment in every instance across the site. Consistency matters.

### Button placement rules
- Appears in the top nav, persistent.
- Appears at the end of every primary page.
- Appears one additional time on long pages (after the value-building sections).
- Never more than twice on any one page. Scarcity = gravity.

---

## Secondary CTA layer — the "not ready yet" paths

Every primary page should end with a trio of softer options for visitors who aren't ready to enquire:

- **Read our writing →** (to `/insights`)
- **Subscribe to our newsletter →** (inline form, not a separate page)
- **See our client work →** (to `/case-studies`)

These three cover the three main reasons someone isn't yet ready: they want more information, they want to stay in touch passively, they want more proof.

---

## The qualifying intake form

Replace the generic contact form with a structured qualifier. This is the single highest-leverage conversion improvement.

### Why qualify?
- **Saves partner time.** A 30-minute conversation with a wrong-fit enquiry costs the firm far more than the friction of three extra form fields costs the enquirer.
- **Signals seriousness.** Good buyers expect to be asked qualifying questions — it reassures them you're not desperate.
- **Enables better follow-up.** You know the context before the call, so you can prepare properly.
- **Filters out the wrong-fit.** Someone who won't fill in a 90-second form was probably not a fit anyway.

### Form fields — in order

1. **Your name** (text, required)
2. **Your role** (text, required — "e.g. CEO, Head of HR, Chief of Staff")
3. **Your organisation** (text, required)
4. **Organisation size** (dropdown: Under 50 / 50–250 / 250–1000 / 1000–5000 / 5000+ / I'm enquiring as an individual)
5. **Country / region** (text or dropdown)
6. **What's on your mind?** (open textarea, required — placeholder: *"A few lines is fine. What's the situation, challenge, or opportunity you'd like to talk about?"*)
7. **When would you like to talk?** (dropdown: This week / Next 2 weeks / Within the month / Exploring, no rush)
8. **How did you hear about us?** (optional — dropdown: Referral / LinkedIn / Search / Existing client / Event / Other)

### Form design
- Multi-step optional but not necessary — a single well-spaced form works fine.
- No anti-spam theatre (captcha, "click this box"). Use invisible recaptcha or honeypot.
- Submission loading state with clear feedback.
- Success state: named partner assurance (*"Christopher or Aditi will read this personally and come back to you within two working days."*)

---

## Trust signals — what needs to be visible

Trust is built over the whole site, not on one "trust badges" row. Audit every page for the following signals.

### Signals every premium consultancy site should carry

| Signal | Where to put it | Status today |
|---|---|---|
| Named clients (logos) | Hero strip or just under hero | Missing — top priority |
| Case studies with real outcomes | Dedicated section + homepage feature | Missing — top priority |
| Testimonials with full names, titles, company | Scattered through page, aligned to relevant service | Partial — exists but thin |
| Founder photography and bios | About + team page | Partial — bios thin |
| Accreditations (ICF, EMCC, CIPD, etc.) | Footer strip, about page | Unclear — currently claims "accreditation partnerships" with no specifics |
| Speaking / writing / media mentions | About + insights | Missing |
| Client industries and geographies | Homepage or case studies | Missing |
| Named associate faculty | Team page | Missing — addressed in `09-team-restructure.md` |
| Response-time promise | Contact confirmation | Missing |
| Confidentiality language | Services pages + contact | Partial |

---

## Lead magnets (optional, high-leverage)

At least one well-crafted lead magnet dramatically increases newsletter signups and gives partners a natural reason to follow up. Three candidates:

### Lead magnet 1 — *The Leadership Capacity Audit*
A short (8–10 question) diagnostic for senior leaders or HR heads. Output: a customised 2-page reflection / summary. Lives as `/tools/capacity-audit` behind an email wall.

**Why it works:** High perceived value, instantly useful, gives Success Empowered a clear reason to reach out with tailored follow-up.

### Lead magnet 2 — *The 12 Questions Every Leader Should Be Able to Answer*
A polished PDF (or interactive card deck on the site) of diagnostic questions leaders can use on themselves. Downloads require email.

**Why it works:** Content marketing with shareability, doubles as a coaching conversation starter.

### Lead magnet 3 — *An Honest Culture Assessment*
A more in-depth diagnostic for HR leaders / COOs. Produces a culture-health snapshot. Positioned explicitly as "a starting point — not a substitute for real culture work."

**Why it works:** Targets enterprise buyer, creates a consultative opening, can be the first deliverable in a larger engagement.

**Recommendation:** Start with Lead magnet 2 (lowest production cost, high shareability). Add 1 or 3 when the newsletter list reaches ~500.

---

## Newsletter strategy

A newsletter is not a nice-to-have. It is the single most durable asset this business can build.

### Positioning
*"One considered email a month on leadership, culture, and the human work of running organisations."*

### Cadence
Monthly. Not weekly. Premium buyers forgive infrequency; they punish noise.

### Content
- One original reflective piece, 800–1,200 words.
- A short "what we're seeing" paragraph — observations from recent client work (anonymised).
- A short recommended read — an article, book, or video.
- No promotions. No product pushes. One subtle line at the bottom: *"If you're exploring leadership or culture work, start a conversation."*

### Signup placements
- Dedicated inline block at the bottom of every article.
- Inline block in the footer.
- A modest popup triggered by exit-intent on Insights pages only (not on every page — annoying is expensive).
- One prominent signup prompt on the Insights hub page.

---

## Enquiry flow — what happens after someone submits

The post-submit experience is often where firms lose warm leads. Design it deliberately.

### Within 0 seconds — confirmation
On-screen thank-you message. Named partner assurance. Response-time promise. Alternative contact method visible.

### Within minutes — automated email
A brief, human email from the firm (not a generic autoresponder). *"Thanks for getting in touch — we've received your message and one of us will come back to you personally within two working days. In the meantime, if it's useful, here are three pieces of our writing you might find relevant."*

### Within 2 working days — personal reply
A genuine reply from a partner. Not a sales development rep, not a scheduling assistant. The whole premium positioning depends on this.

### First call
30 minutes, with a partner. Honest, relaxed, listening-first. If there's a fit, a second conversation is proposed. If not, the partner says so and leaves the enquirer with something useful — an article, a referral, a piece of advice.

---

## Analytics and measurement

The current site (as far as can be observed) has no public-facing analytics discipline. Set up:

- **GA4** (or preferred privacy-respecting alternative — Plausible, Fathom) — basic traffic, sources, page performance.
- **Goal tracking** — enquiry form submissions, newsletter signups, case study views, services page depth.
- **Simple monthly review** — what's working, what isn't, what content is earning.

Don't over-instrument. A handful of clear numbers reviewed monthly beats a dashboard no one opens.

---

## Expected conversion economics (rough directional modelling)

Assumptions for a mid-point scenario post-redesign:

| Metric | Current (estimated) | Target (post-redesign, 6 months) |
|---|---|---|
| Monthly organic visitors | 300–500 | 1,500–2,500 |
| Visitor-to-newsletter conversion | ~0% (no newsletter) | 2.5–4% |
| Visitor-to-enquiry conversion | ~0.2% | 1–1.5% |
| Enquiry-to-fit conversion (qualifying filter works) | Unknown | 40–55% |
| Fit-conversation-to-engagement | 15–25% | 20–30% |

These numbers are indicative, not promises. The shape matters more than the digits: more visitors, better-qualified enquiries, a durable newsletter audience.

---

## Priority order for implementation

1. **Purge template remnants and broken CTAs** (week 1 — can be done before any redesign).
2. **Replace contact form with qualifying intake** (week 1–2).
3. **Settle on single primary CTA phrase and deploy sitewide** (week 2).
4. **Build one case study and publish it** (month 1–2).
5. **Launch newsletter with 3 substantive articles** (month 1–3).
6. **Add lead magnet #2** (month 3–4).
7. **Instrument analytics properly** (week 1 of new build).
