# 🤖 AI Agent Implementation Guide: Studio Confetti (Phase 1 MVP)

> **Role for Agent:** Full-Stack Frontend Developer  
> **Project:** Studio Confetti – Modern One-Page Website (Phase 1)  
> **Source Reference:** [WEBSITE_CONCEPT_PLAN.md](file:///c:/Users/sybre/Documents/Projects/confetti-studio/WEBSITE_CONCEPT_PLAN.md)  
> **Design Assets:** `Homestyle.txt`, `Mockup-site.png`, and `Onboarding visuals/`

---

## 🎯 1. Scope & Objective

You are tasked with building the **Phase 1 MVP** of the Studio Confetti modern one-page website.  
Focus on creating a visually stunning, responsive, fluidly animated web application.

### 📌 Included Sections for Phase 1:
1. **Section 1:** Sticky Floating Navigation Bar
2. **Section 2:** Hero Section (with SEO CTA, handwritten slogan, and trust badges)
3. **Section 3:** Over Ons (Founders story, photo frame, and value badges)
4. **Section 8:** Evenementen (Sip & Paint event pills / cards with interactive badges)
5. **Section 10:** Contact & Footer (Contact cards, pickup address placeholder, playful clay shapes)

### ⏸️ Excluded / Ignored for Phase 1:
Do **NOT** implement the following sections in this sprint (you may leave clean commented placeholder anchor sections or skip them):
* ❌ **Section 4:** *Your Pottery Moment (Hoe gaat het in zijn werk?)*
* ❌ **Section 5:** *Wat zit er in de box?*
* ❌ **Section 6:** *Interactive DIY Booking Wizard*
* ❌ **Section 7:** *Tips & Praktische Afspraken Accordion*
* ❌ **Section 9:** *Reviews & Social Community Wall*

---

## 🏷️ 2. Strict Dummy Data & Commenting Rule

Whenever you use placeholder images, mock event dates, mock contact info, or assumed logistics (such as exact pickup hours/address), **you MUST flag it in the code** using a standardized comment format:

```typescript
// ============================================================================
// ⚠️ DUMMY DATA / CLIENT INPUT REQUIRED:
// Field: [Field Name]
// Reason: [Why this is placeholder data]
// Replace with: [Exact instruction for what the client needs to provide]
// ============================================================================
```

### Examples of Required Comment Flags:
* **Pickup Instructions & Studio Address:**
  ```typescript
  // ⚠️ DUMMY DATA: Studio pickup address & hours in Duffel.
  // Replace with client's exact atelier street address and open hours.
  const STUDIO_LOCATION = {
    address: "Kerkstraat 12, 2570 Duffel",
    pickupTimes: "Woensdag & Zaterdag: 10:00 - 16:00",
  };
  ```
* **Event Dates & Ticket Prices:**
  ```typescript
  // ⚠️ DUMMY DATA: Sip & Paint workshop dates and seat limits.
  // Replace with confirmed 2026 workshop schedule.
  ```
* **Contact Phone / WhatsApp:**
  ```typescript
  // ⚠️ DUMMY DATA: WhatsApp & Phone number placeholder.
  // Replace with client's official business phone number.
  ```

---

## 🚫 3. Strict Iconography Rule: No Emojis on the Live Site

> **IMPORTANT:** Do **NOT** use standard Unicode emojis (such as 📦, 🎨, 🖌️, ⭐, 📍, ✉️, etc.) in the rendered website UI, buttons, cards, or badges.
> 
> * Emojis render with jarring, inconsistent visual styles across Windows, iOS, Android, and macOS.
> * Instead, use **Lucide React SVG vector icons** (e.g. `<Package />`, `<Sparkles />`, `<Calendar />`, `<MapPin />`, `<Mail />`, `<Phone />`, `<Star />`, `<Heart />`, `<Check />`).
> * Style all icons with matching theme colors (e.g. `text-coral`, `text-cobalt`, `text-sunshine`) to maintain a clean, high-end boutique aesthetic.

---

## 🎨 4. Design System & Theme Setup

### Google Fonts Setup
Import and configure these three fonts:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Fredoka:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
```

* **Headings:** `'Fredoka', cursive, sans-serif`
* **Handwritten Accent:** `'Caveat', cursive`
* **Body / UI:** `'Plus Jakarta Sans', sans-serif`

### Tailwind Theme Color Tokens
Configure Tailwind colors as follows:
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        canvas: '#FAF6F0',       // Main Warm Bisque Cream background
        surface: '#FFFFFF',      // Clean Porcelain Card surface
        coral: {
          DEFAULT: '#E85D4E',    // Primary Brand Terracotta Coral
          hover: '#D44A3B',
        },
        cobalt: {
          DEFAULT: '#3B5BDB',    // Secondary Accent Glaze Blue
          hover: '#2F49B0',
        },
        sunshine: '#FCD34D',     // Pastel Yellow accent
        blossom: '#F9A8D4',      // Pastel Pink accent
        lavender: '#D8B4E8',     // Pastel Lilac accent
        celadon: '#A7D7C5',      // Soft Glaze Sage Green
        clayDark: '#2B2D42',     // High-contrast primary text
        graphite: '#5C6170',     // Accessible secondary body text
      },
      fontFamily: {
        fredoka: ['Fredoka', 'cursive', 'sans-serif'],
        caveat: ['Caveat', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      }
    }
  }
}
```

---

## 🖼️ 5. Image & Asset Strategy

1. **Available Project Assets to Use:**
   * **Founders Photo (Over Ons):** Use `Onboarding visuals/3.png` (Copy to your `public/images/founders.png` or import directly).
   * **Pottery Collage (Hero/Events):** Use `Onboarding visuals/10.png` or `11.png` for sample painted items.
2. **Missing Assets (Use High Quality Dummy Fallbacks):**
   * **Event Cards / Hero Background:** Use clean Unsplash pottery placeholders with clear `// ⚠️ DUMMY IMAGE` comments:
     * `https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80` (Clay / Pottery workshop)
     * `https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=800&q=80` (Ceramics & painting)

---

## 🚀 6. Component Implementation Details

### Component 1: `Navbar.tsx` (Sticky Floating Nav)
* Pill-shaped floating bar centered at the top (`sticky top-4 z-50 backdrop-blur-md bg-white/80`).
* Studio Confetti logo on the left with a subtle bounce on hover.
* Navigation links: `#over-ons`, `#evenementen`, `#contact`.
* Action button: `[Huur een Box]` linking to `#contact` (or smooth scrolling down) in Cobalt Blue.

### Component 2: `Hero.tsx` (SEO & Conversion Anchor)
* **Semantic H1:** `<h1 className="font-fredoka text-coral text-5xl md:text-6xl text-center">Welkom bij Studio Confetti</h1>`
* **H2 / SEO Subtitle:** `<h2 className="font-sans text-graphite text-lg md:text-xl text-center mt-2">DIY Keramiek & Pottery Box Huren in Duffel</h2>`
* **Handwritten Slogan:** `<p className="font-caveat text-cobalt text-2xl md:text-3xl text-center mt-3">Waar creativiteit en gezelligheid belangrijker zijn dan perfectie!</p>`
* **Call to Action Buttons (No Emojis - use Lucide icons if desired):**
  * Primary Button: `<Package className="w-5 h-5 mr-2" /> Huur Jouw Pottery Box` (Elevated Coral/Cobalt button with magnetic hover effect).
  * Secondary Button: `Ontdek Evenementen` (Ghost/outlined pill button linking to `#evenementen`).
* **Above-The-Fold Trust Micro-Badges (Vector Icons):**
  * `<Star className="w-4 h-4 text-sunshine" /> 5/5 Beoordelingen`
  * `<Package className="w-4 h-4 text-coral" /> Alles-in-1 Box`
  * `<MapPin className="w-4 h-4 text-cobalt" /> Ophalen in Duffel`
  * `<Sparkles className="w-4 h-4 text-blossom" /> Inclusief Afbakken`
* **Hero Visual:** Decorative floating pottery imagery surrounded by CSS floating confetti particles.

### Component 3: `AboutUs.tsx` (Over Ons)
* Story of Studio Confetti: Two friends bringing the relaxation of pottery to people's homes.
* Layout: 2-column grid.
  * Left: Narrative with 3 bullet feature cards with Lucide icons (e.g. `<Heart /> Geen ervaring nodig`, `<Sparkles /> 100% Ontspannen`, `<PackageCheck /> Alles in 1 doos`).
  * Right: Founders photo (`Onboarding visuals/3.png`) with an organic rounded border (`rounded-[3rem]`) and decorative pastel badge.

### Component 4: `Events.tsx` (Evenementen – Sip & Paint)
* Title: *"Evenementen & Workshops"* (H2 in Fredoka).
* Subtitle in Caveat: *"Schuif gezellig aan bij een van onze Sip & Paint avonden!"*
* Event Card List:
  * Card 1: `Sip & Paint - 20 September 2026` · Duffel · Badge: `[VOLZET]` (Grayed/muted style).
  * Card 2: `Sip & Paint - 20 Oktober 2026` · Duffel · Badge: `[SCHRIJF NU IN]` (Vibrant animated Blossom Pink pill).
  * Card 3: `Keramiek & Afternoon Tea - November 2026` · Duffel · Badge: `[BINNENKORT]` (Lavender pill).
* Add a modal or simple registration form trigger on click.

### Component 5: `ContactFooter.tsx` (Contact & Afhalen)
* Title: *"Neem Contact Op"* (H2).
* 3 Interactive Contact Cards with Lucide SVG Icons:
  * `<Mail className="w-6 h-6 text-coral" />` **E-mail:** `info@studioconfetti.be` (with `// ⚠️ DUMMY DATA` tag)
  * `<Phone className="w-6 h-6 text-cobalt" />` **WhatsApp / Telefoon:** `+32 470 00 00 00` (with `// ⚠️ DUMMY DATA` tag)
  * `<MapPin className="w-6 h-6 text-sunshine" />` **Atelier / Ophaalpunt:** `Duffel (exact adres volgt na boeking)` (with `// ⚠️ DUMMY DATA` tag)
* Playful geometric pastel shapes in the background.
* Clean footer copyright: `© 2026 Studio Confetti. Alle rechten voorbehouden.`

---

## ✨ 6. Motion & Animation Specs (Framer Motion)

1. **Fade-Up Stagger on Scroll:**
   ```typescript
   const fadeInUp = {
     hidden: { opacity: 0, y: 30 },
     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
   };
   ```
2. **Confetti Float (Ambient CSS):**
   * Create 8–12 small decorative SVG/div confetti shapes (`rounded-full` and `rotate-45`) with a gentle floating keyframe animation (`translateY(-10px) to translateY(10px)` infinite alternate).
3. **Button Hover Bounce:**
   * `whileHover={{ scale: 1.05 }}`
   * `whileTap={{ scale: 0.96 }}`

---

## ✅ 7. Verification & Deliverables Checklist for Agent

- [ ] Project runs cleanly without TypeScript or linting errors.
- [ ] Responsive on all viewports (Mobile: 375px, Tablet: 768px, Desktop: 1280px+).
- [ ] Only Phase 1 sections (1, 2, 3, 8, 10) are rendered.
- [ ] **NO Unicode emojis in UI/markup** (used clean Lucide SVG icons instead).
- [ ] All missing data and placeholder images have explicit `// ⚠️ DUMMY DATA` comments.
- [ ] All original project files (`Homestyle.txt`, `Mockup-site.png`, `Onboarding visuals/`) remain completely untouched.
