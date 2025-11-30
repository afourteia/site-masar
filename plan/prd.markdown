PRODUCT REQUIREMENTS DOCUMENT (PRD)
Toyota Dealership Static Website  
Version 1.0

---

## 1. Overview

### 1.1 Purpose

This PRD describes the requirements for a simple, multilingual (English + Arabic), mobile-friendly static website for a Toyota dealership. It outlines visual theme, pages, functionality, component structure, and content organization.

### 1.2 Goals

- Provide a clean, fast, and reliable static website.
- Support English and Arabic with mirrored layouts (RTL for Arabic).
- Reuse components (navbar, footer, contact cards, etc.) across pages.
- Maintain a single source of truth for shared structured data (e.g., contact info).
- Use a visual theme derived from the reference `toyota.png`:
  - **Primary accent:** Toyota Red (`#EB0A1E` or extracted from image)
  - **Background:** White or Off-white (`#F7F7F7`)
  - **Text:** Dark gray/black (`#1A1A1A`)
  - **Style:** Minimalistic, modern, clean spacing, bold red call-to-action elements.

### 1.3 Target Users

- Local customers looking for Toyota sales, parts, and after-sales services.
- Visitors searching for contact information and dealership locations.
- Mobile-first users.

---

## 2. Scope of Work

### 2.1 Included

- Static multilingual website (4 pages × 2 languages)
- Responsive design
- Reusable UI components
- Simple image carousel
- Contact cards with external Google Maps links

### 2.2 Excluded

- Backend systems
- Appointment booking
- CMS
- User authentication
- Dynamic content loading

---

## 3. Platform Requirements

### 3.1 Technology Stack

- Static HTML/CSS/JS
- Optional: Astro, Next.js SSG, or Nuxt SSG
- Shared JSON/JS objects for structured data (services, contacts, navigation)

### 3.2 Internationalization

**Languages:**

- English (LTR)
- Arabic (RTL)

**Shared data across languages:**

- Contact information
- Services list
- Navbar links

Locale-specific text is stored in translation files.

### 3.3 Performance

- Load under 2 seconds on 3G
- Optimized images
- No heavy frontend frameworks unless statically compiled

---

## 4. Branding & Visual Theme

### 4.1 Colors (based on `toyota.png`)

| Purpose        | Color      |       Hex |
| -------------- | ---------- | --------: |
| Primary Red    | Toyota Red | `#EB0A1E` |
| Dark Red       | Hover      | `#C20819` |
| Background     | White      | `#FFFFFF` |
| Section BG     | Off-white  | `#F6F6F6` |
| Text Color     | Dark Gray  | `#1A1A1A` |
| Secondary Text | Gray       | `#707070` |

### 4.2 Typography

- **English:** Roboto or similar Toyota-style sans serif
- **Arabic:** Cairo or Noto Kufi Arabic

### 4.3 Component Style Guidelines

- Clean horizontal spacing
- Thin separators
- Rounded button corners (4–6px)
- Bold red CTAs
- Light card shadows

---

## 5. Pages & Content Requirements

### 5.1 Navbar (Reusable Component)

- Logo (left in EN, right in AR)
- Menu:
  - Home
  - Services
  - About Us
  - Contact
- Language Switcher (EN | AR)
- Optional: Sticky on scroll

### 5.2 Footer (Reusable Component)

- Dealership name
- Quick links (same as navbar)
- Copyright
- Small logo (optional)

### 5.3 Page 1: Landing Page

**Purpose**

Introduce dealership and showcase visuals.

**Content Requirements**

- **Hero Carousel**
  - 3–5 images
  - Auto-play + manual arrows
  - Optional text overlay per slide
- Tagline (localized)
- Highlight section (optional):
  - Sales / After-Sales / Parts icons or text
- CTA: **Visit Our Services**

### 5.4 Page 2: Services Page

**Purpose**

Showcase main dealership services.

**Shared Data Source**

```json
[
  {
    "id": "sales",
    "img": "...",
    "title_en": "...",
    "title_ar": "...",
    "desc_en": "...",
    "desc_ar": "..."
  },
  {
    "id": "after_sales",
    "img": "...",
    "title_en": "...",
    "title_ar": "...",
    "desc_en": "...",
    "desc_ar": "..."
  },
  {
    "id": "parts",
    "img": "...",
    "title_en": "...",
    "title_ar": "...",
    "desc_en": "...",
    "desc_ar": "..."
  }
]
```

**Layout**

- Alternating image + text blocks
- Mirrored for Arabic (RTL)

Each section includes:

- Title
- Description
- Image

### 5.5 Page 3: About Us Page

**Purpose**

Describe the dealership.

**Layout**

- One image beside text (mirrored for Arabic)
- CTA button at bottom: **Contact Us**

**Content**

- Dealership overview
- Optional mission/vision

### 5.6 Page 4: Contact Page

**Purpose**

Display dealership contact details.

**Shared Data Model**

```json
{
  "locations": [
    {
      "id": "branch1",
      "name_en": "",
      "name_ar": "",
      "address_en": "",
      "address_ar": "",
      "map_link": "",
      "phone": ["+966...", "+966..."],
      "email": "example@dealership.com"
    },
    {
      "id": "branch2",
      "name_en": "",
      "name_ar": "",
      "address_en": "",
      "address_ar": "",
      "map_link": "",
      "phone": ["+966..."],
      "email": "example@dealership.com"
    }
  ]
}
```

**Layout**

- Title: **Contact Us**
- Two Contact Card components, each containing:
  - Branch name
  - Address (localized)
  - Google Maps link
  - Phone numbers
  - Email

**Style**

- White cards with subtle shadow
- Red accent header or underline

---

## 6. Component Architecture

### 6.1 Reusable Components

- Navbar
- Footer
- Language Switcher
- Carousel
- Image + Text Section Layout
- Service Item
- Contact Card
- Button component
- Theme colors / variables
- Shared data store (services, contacts, nav links)

### 6.2 Design Principles

- Keep components simple, reusable, and not over-engineered.
- Use one source of truth for all structured data.
- Language-specific text must not duplicate shared data.

---

## 7. Mobile Responsiveness Requirements

### 7.1 Mobile Layout

- Hamburger menu
- Swipe-enabled carousel
- Stacked vertical service sections
- Vertical contact cards
- Touch-friendly buttons

### 7.2 Breakpoints

- Mobile: `< 768px`
- Tablet: `768–1024px`
- Desktop: `> 1024px`

---

## 8. Accessibility

- Sufficient red/white contrast
- Alt text for images
- Semantic HTML elements
- Clickable phone/email links

---

## 9. Deployment

- Static hosting (GitHub Pages, Vercel, Netlify, etc.)
- Optimized static assets
- No backend dependencies

---

## 10. Future Extensions (Not Required Now)

- Online car inventory
- Appointment booking
- Blog/news section
- WhatsApp chat integration

---

## 11. SEO & Discoverability

### 11.1 Goals

- Ensure pages are indexable, understandable, and shareable by search engines and social platforms.
- Keep SEO configuration lightweight and data-driven to add/adjust keywords later without code changes.

### 11.2 Technical Requirements

- **Meta Tags (per page):** `title`, `meta description`, `meta keywords` (optional), `viewport`.
- **Open Graph & Twitter Cards:** Set `og:title`, `og:description`, `og:image`, `og:url`, and Twitter equivalents for share previews.
- **Canonical URLs:** Add a canonical link tag to avoid duplicate content.
- **hreflang:** Provide `hreflang` pairs for EN/AR pages (e.g., `en` and `ar-SA`) to signal language/region variants.
- **Robots & Sitemap:**
  - Generate `sitemap.xml` with both language variants.
  - Provide `robots.txt` allowing crawl of public pages.
- **Structured Data (JSON-LD):**
  - `Organization` or `LocalBusiness` with dealership name, logo, phone, email, and branches as `PostalAddress`.
  - `BreadcrumbList` for multi-level pages (if applicable).
- **URL Strategy:** Clean, human-readable paths; language in path or subdirectory, e.g., `/en/...` and `/ar/...`.
- **Performance Signals:**
  - Optimize images (responsive sizes, modern formats where feasible).
  - Defer non-critical JS; inline critical CSS; target Core Web Vitals (LCP < 2.5s, CLS < 0.1, INP < 200ms).
- **Accessibility Alignment:** Semantic headings (`h1` per page), alt text for images, accessible nav—supports SEO and usability.

### 11.3 Content & Keywords Management

- **Central SEO Config:** Maintain a small JSON/JS config (e.g., `/assets/js/seo-config.js` or `seo.json`) with per-page entries:

```json
{
  "en": {
    "home": {
      "title": "Toyota Dealership — CityName",
      "description": "Official Toyota sales, parts, and service in CityName.",
      "keywords": ["Toyota", "dealership", "service", "parts", "CityName"],
      "ogImage": "/assets/images/og/home.jpg"
    },
    "services": {
      "title": "Toyota Services — Sales, After-Sales, Parts",
      "description": "Explore sales, maintenance, and genuine Toyota parts.",
      "keywords": ["Toyota services", "maintenance", "genuine parts"],
      "ogImage": "/assets/images/og/services.jpg"
    }
  },
  "ar": {
    "home": {
      "title": "وكالة تويوتا — اسم المدينة",
      "description": "مبيعات وقطع غيار وخدمات تويوتا الرسمية في اسم المدينة.",
      "keywords": ["تويوتا", "وكالة", "خدمات", "قطع غيار", "اسم المدينة"],
      "ogImage": "/assets/images/og/home-ar.jpg"
    }
  }
}
```

- **Runtime Injection:** On each page, read the config based on locale + route and inject `title`, `meta description`, optional `meta keywords`, OG/Twitter tags.
- **Keyword Flexibility:** Ability to add/remove keywords later by updating the config only—no template code changes.
- **Editorial Guidelines:** Use clear, local terms customers search for (city, services, phone availability). Keep descriptions 140–160 characters, unique per page.

### 11.4 Deliverables

- `robots.txt`, `sitemap.xml` (static generation or build step).
- JSON-LD snippets embedded in `index.html`, `services.html`, `about.html`, `contact.html` (both EN/AR variations with correct `@language`).
- `seo-config.js` or `seo.json` and simple loader in `assets/js/main.js` to set page head tags.
- Documented URL scheme and hreflang mapping in the PRD.

---

## 12. Analytics & Monitoring

- **Privacy-friendly Analytics:** Include a toggleable analytics snippet (e.g., Plausible or Google Analytics) loaded after consent if needed.
- **Basic Events:** Page views, language switch clicks, contact link clicks (phone/email/map).
- **Error Monitoring (Optional):** Lightweight console error logging to help catch broken links or assets.

---

## 13. Legal & Privacy

- **Contact Links:** Use `tel:` and `mailto:` correctly; avoid auto-submitting any personal data.
- **Cookie Policy (If Analytics):** Link to a simple cookie/privacy notice if analytics or external embeds are used.

---

## 14. Internationalization Enhancements

- **Locales:** `en` and `ar-SA`.
- **Mirroring:** Ensure RTL styles properly flip layout, carousel arrows, and alignments.
- **Hreflang Matrix:** Document pairs for each page (e.g., `/en/contact` ↔ `/ar/contact`).

---

## 15. Performance Budgets

- **Images:** Hero images ≤ 300KB (desktop), service images ≤ 200KB.
- **JS:** Keep inline + vendor JS under ~100KB uncompressed for static build.
- **CSS:** Critical CSS in head; total CSS ≤ 100KB.
- **Targets:** LCP < 2.5s on 3G, CLS < 0.1, INP < 200ms.
