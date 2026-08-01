# CLAUDE.md — Kanvtech Solutions Website

This file gives Claude Code the full context for this project. Read it before making any change.

---

## 1. What this project is

A new marketing website for **Kanvtech Solutions Private Limited**, a Mumbai-based IT solutions company. It is being built by a freelance web developer (brand: **TechSpeeX**) for the client.

- **Stack:** Static website built from the **Techwind** HTML + Tailwind CSS template.
- **Current focus:** The **home page only**. Its individual sections were hand-picked from different Techwind demos and assembled into one long landing page. We are refining section content first; final UI polish comes last.
- **Nature:** Static HTML/CSS/JS. No build step, no backend, no CMS.

## 2. The client & the business

- **Company:** Kanvtech Solutions Private Limited (refer to as "Kanvtech").
- **Location:** B-810, 8th Floor, Northern Supremus, Bharucha Road, Off S.V. Road, Dahisar (East), Mumbai – 400068.
- **Contact:** connect@kanvtech.com · +91 70459 98877 · WhatsApp https://wa.me/917045998877
- **Positioning:** A **complete IT solutions company** — "one partner for everything your business runs on." They serve other businesses (B2B), across all industries.
- **What they offer:** HR software, payroll, Tally software/services, cloud servers, custom software & app development, asset management, business analytics, biometric devices.
- **Goal of the site:** Lead generation. A visitor should understand the business **at first glance**, then enquire.

## 3. CRITICAL business rules (do not violate)

- **Kanvtech is an AUTHORISED SPINE PARTNER.** This is a trust signal — use it on Spine pages/sections.
- **Kanvtech is NOT a Tally partner.** For anything Tally, wording must be "we provide / set up / support / customize Tally" — **NEVER** "authorised Tally partner" or anything implying official Tally partnership. This has legal/commercial implications for the client.
- **Do NOT claim Tally's or Spine's own corporate stats** (e.g. "2.5 million businesses") as Kanvtech's.
- Trademarks (Tally, TallyPrime, Spine) belong to their respective owners.

## 4. Core offerings (naming — client prefers "Solutions")

**Software:** Spine Payroll ⭐, Spine HR Suite ⭐, Spine Asset, Tally Prime, Tally Prime Server
**Services:** Tally Software Services (TSS), Tally Services, Tally on Cloud
**Solutions:** App Development ⭐, Custom Software Solutions ⭐, Cloud Server ⭐, Tally Customization, Tally Add-On (TDL)
**New (build last):** Business Analytics, Biometric Device

- ⭐ = **the 5 core offerings** to highlight on the home page.
- **Spine Payroll + Spine HR are the hotlist** — the client explicitly wants **Spine highlighted on the front page**. Give the Spine spotlight visual prominence.

## 5. Design direction

- **Feel:** Clean, elegant, minimal, light. Inspired by clean SaaS layouts (reference: stratus.themovation.com). Plenty of whitespace, short copy, one message per section.
- **Brand colors (from the Kanvtech logo — cyan/blue + coral):**
  - Primary blue: `#1466C7`  ·  Lighter cyan: `#1E9FE8`
  - Accent coral: `#F26A3D` (use sparingly — one highlight/underline/hover)
  - Headings near-black `#0B1220`; body slate `#55606E`; base white `#FFFFFF`
- **Avoid (these make it look AI-generated / off-brand):** dark theme, glassmorphism, glow/neon, **purple** (Techwind's default accent is purple/indigo — replace it with Kanvtech blue), full-bleed gradients, gradient-filled buttons, aurora/mesh backgrounds, clutter.
- The logo has already been updated by the developer.

## 6. HARD RULES for editing (this is why this file exists)

Claude Code previously drifted. Do **NOT** do the following unless explicitly asked:

1. **Do NOT change the existing design/layout/structure** of a section. We refine content now; UI polish is a separate, later phase.
2. **Preserve the highlighted/accent word** in headings. The template highlights one word (e.g. "Success") in the accent color. When changing heading text, **keep one word wrapped in the highlight span** (e.g. highlight "everything"). Never flatten the heading to a single color.
3. **Preserve buttons as buttons.** Never convert a button/CTA into a plain text link. Keep the `<a class="btn ...">` structure and styling; only change the label/href.
4. Keep all existing animations, classes, and component structure intact.
5. Only edit the text/content requested. Don't refactor, rename, or "improve" surrounding markup.
6. When unsure, ask before changing structure — don't assume.

## 7. Navbar (finalized)

- Left: Logo → Home.
- Nav: **Home · About Us · Solutions & Services (mega-menu: Software / Services / Solutions) · Career · Contact Us**
  - (Blog and the "Book a Free Demo" button were removed by the developer — do not re-add unless asked.)
- Solutions & Services heading in the mega-menu links to the overview page.
- Floating WhatsApp button (bottom-right), separate from navbar.
- Policies (Privacy, Terms, Disclaimer) live in the **footer only**.
- Enquiry is merged into Contact.

## 8. Home page — hero / landing (content pending final decision)

The hero is the priority ("landing is everything — the user should grasp what Kanvtech does at first glance").

- Headline wording is **still being decided** — leave the current headline unless asked, but always keep the one-word highlight span.
- **Supporting subtext should name the actual services** so the business is instantly clear, e.g.:
  > "From HR and payroll to Tally, cloud and custom software — Kanvtech is the one partner behind the systems your growing business runs on."
- Two buttons (keep as buttons): primary **Explore Solutions**, secondary **Contact Us**.
- Optional trust line: "★ Authorised Spine Partner · 18+ Years · Trusted Across Industries".
- Swap any startup-y rocket illustration for something on-brand (dashboard / HR / analytics), recolored to `#1466C7`.

## 9. Home page section order (target)

Hero → Trust strip → Positioning ("one partner…") → **Spine Spotlight** (Payroll + HR, emphasized) → Core Solutions (5 ⭐ cards) → All Offerings (Software/Services/Solutions) → Why Kanvtech → Stats (count-up) → How We Work (3 steps) → Industries → Testimonials → Final CTA → Footer.

(The developer has assembled unique Techwind sections for these — keep them; we're improving content section by section.)

## 10. Content style (copywriting) — STRICT

The site must read like a professional Indian IT company's brochure — not a startup landing page, not a chatty AI, not a person "explaining" something. This is the standing standard for every page, present and future.

### 1. Language
- Simple, professional, clear English. Every sentence must be understood by a non-technical reader on first pass.
- **No sentence may start with:** "So", "And", "But", "Or", "Because". Rewrite the sentence instead.
- No slang, no casual tone, no clever wordplay.
- No marketing jargon: "done right", "reimagined", "supercharged", "unleashed", "game-changer", "seamless", "robust", "leverage", "unlock", "elevate", "empower", "streamline", "cutting-edge", "harness", "in today's fast-paced world", "dive in".
- No vague abstractions: "serious depth of experience", "solving real problems for real businesses", "young and dynamic company". State the fact instead.
- Em-dashes ("—") are not a sentence habit. Max 1–2 per page, only where a comma or full stop genuinely can't do the job.

### 2. Headings
- Plain and descriptive. A visitor must understand what the section covers from the heading alone, with no need to read further.
- GOOD: "About Us", "Our Services", "Why Choose Us", "Our Products".
- BAD: "Meet Spine: HRMS Done Right", "We Don't Just Build, We Transform".
- No colons in headings. No questions as headings. No clever or cute phrasing.
- The one-word highlight `<span>` still applies (see §6.2) — pick a plain word to highlight, not a clever one.

### 3. Content depth
- Every section needs a minimum of 4–6 lines of meaningful content. No one-liner sections.
- "Who We Are" / "About" sections must cover: what the company does, its experience, who it serves, what makes it different, and its approach — 6–8 lines minimum.
- Service/product sections must cover: what it does, who it's for, key features, and benefits — 5–6 lines minimum.
- No filler. Every sentence must add a new piece of information — never restate the previous sentence in different words.

### 4. Tone
- Professional, confident, trustworthy — like an established Indian IT company speaking to enterprise clients.
- Formal but not stiff. Readable but not casual.

### 5. Format
- Proper paragraphs, not paragraphs made of bullet fragments. Content should flow naturally when read aloud.
- No ALL CAPS in body text. No exclamation marks.

### Test for every sentence
"Would a non-technical business owner understand this immediately, and does it read like a serious company wrote it — not a person explaining, not an AI, not a startup pitch?" If not, rewrite it.

- Features = what it does; Benefits = what the client gains. Keep them distinct.
- Bake in SEO naturally (Mumbai/India + service keywords) without stuffing.
- Solution sub-page template (for later): H1 (keyword-led) → intro → What it is → Who it's for → Key features → Benefits → FAQ → CTA.

## 11. Content source of truth

Final page copy has already been written and lives in the project's content `.txt` files (home, about, each solution, policies, contact, etc.). When filling a section, **use that written copy** — don't invent new copy or pull from the old kanvtech.com site.

## 12. Data / facts to reuse

- Phone: +91 70459 98877 · Email: connect@kanvtech.com
- Address: B-810, 8th Floor, Northern Supremus, Bharucha Road, Off S.V. Road, Dahisar (East), Mumbai – 400068
- "18+ years of combined experience" — **confirm the exact figure with the client** before treating as final.
- Stats counters (clients, projects): **use real numbers only** once the client provides them — never publish placeholder "0"s.
- Logo, brand colors, certificates, client logos, testimonials: some pending from client — use placeholders and flag.

## 13. Workflow phases

1. Content gathering ✅ (done)
2. UI selection ✅ (Techwind chosen; home assembled)
3. **Development — in progress** (refining home page content section by section; UI polish last)
4. SEO — later, quoted separately.

---

**Golden rule:** Don't change design or structure. Change only the content asked for. Keep highlight spans and buttons intact. When in doubt, ask.