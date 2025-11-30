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
