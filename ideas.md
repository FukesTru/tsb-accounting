# TSB Accounting Solutions — Design Brief

## Three Stylistic Approaches

### 1. Old Money Finance (Probability: 0.07)
Deep navy + gold serif typography. Feels like a white-shoe law firm or private bank. Elegant, authoritative, trust-first.

### 2. Modern Fintech Clarity (Probability: 0.04)
Clean white backgrounds, teal accents, data-forward layouts. Feels like a SaaS accounting tool. Approachable and tech-forward.

### 3. Warm Regional Professional (Probability: 0.06)
Warm cream + slate, hand-crafted feel. Feels like a trusted local CPA who knows your name. Personable and community-rooted.

---

## ✅ Chosen Approach: Old Money Finance

**Design Movement:** American Heritage Finance — think Merrill Lynch circa 2010 meets modern digital clarity. Authoritative serif headlines, gold accents, deep navy fields.

**Core Principles:**
1. Trust through restraint — no clutter, every element earns its place
2. Gold as signal — accent color reserved for CTAs, underlines, and badges only
3. Dark-to-light hierarchy — dark hero sections anchor pages, lighter content sections breathe
4. Precision typography — serif headlines command authority, sans-serif body ensures readability

**Color Philosophy:**
- Deep Navy `#0B1E33` — authority, stability, depth (hero backgrounds, dark sections)
- Near-Black `#0a0f14` — maximum contrast areas
- Gold `#C9A84C` — trust signal, action color, accent underlines
- Muted Teal `#2E7D74` — secondary links and hover states
- Off-White `#F8F5EF` — warm light sections, not harsh white
- Slate `#4A5568` — body text on light backgrounds

**Layout Paradigm:** Asymmetric sections with alternating image/text blocks. Full-bleed dark hero sections contrast with warm off-white content sections. Grid cards with generous padding. Never centered-only layouts — always directional flow.

**Signature Elements:**
1. Gold underline accent on H1 keywords (matching reference site pattern)
2. Floating stat badges (gold border, navy bg) on image sections
3. Numbered step indicators (01–04) in gold serif numerals

**Interaction Philosophy:** Deliberate, unhurried. Scroll-triggered fade-up reveals. No flashy transitions — subtle, confident motion that says "we've been here before."

**Animation:** Framer Motion scroll-triggered fade-up (y: 30 → 0, opacity: 0 → 1, duration 0.6s, ease-out). Stagger children by 0.1s. Nav transitions: opacity + backdrop-blur on scroll. No bounce, no spring — linear professionalism.

**Typography System:**
- Headlines: Playfair Display (serif, 700) — authority and elegance
- Body: Inter (sans-serif, 400/500) — clarity and readability
- Accent numerals: Playfair Display Italic — for step numbers and stat badges

**Brand Essence:** Precision financial partnership for NWA's growing businesses — local roots, national reach, CFO-level thinking.
- Personality: Authoritative, Approachable, Precise

**Brand Voice:** Direct, confident, never jargon-heavy. Speaks to business owners, not accountants.
- Example headline: "Your finances, handled with the precision they deserve."
- Example CTA: "Let's talk about your numbers."

**Wordmark & Logo:** TSB monogram in gold — geometric letterforms with serif-inspired terminals. Used in header and as favicon.

**Signature Brand Color:** Gold `#C9A84C` — unmistakably TSB.

## Style Decisions
- Hero sections always use deep navy background with the hero image as an overlay at 30–40% opacity
- CTA buttons: gold fill (#C9A84C), dark navy text (#0B1E33), no rounded corners (sharp or 2px radius only)
- Section dividers: subtle gold rule (1px) or wave SVG in navy-to-off-white transitions
- All inner pages have breadcrumb nav below the sticky header
- Mobile floating "Call Now" button: gold background, bottom-right fixed position
