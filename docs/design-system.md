# Bandra Smile Studio — Design System

**Project:** Bandra Smile Studio  
**Stack:** HTML + Tailwind CSS (static)  
**Config:** `config/tailwind.config.js`  
**CSS:** `src/css/main.css`

---

## Brand Identity

**Vibe:** Premium wellness clinic. Clean, calm, warm, trustworthy. Never "hospital sterile."  
**Audience:** Urban professionals + families, 25–55, Bandra West Mumbai.

---

## Color System

### Brand Colors

| Token | Hex | Tailwind Class | Usage |
|-------|-----|----------------|-------|
| Primary Teal | `#0F9B8E` | `bg-teal-500` / `text-teal-500` | CTAs, links, icons, highlights |
| Deep Navy | `#1A2B4A` | `bg-navy-500` / `text-navy-500` | Headings, footers, strong text |
| Soft Cream | `#FAF8F3` | `bg-cream-100` | Page background |
| Warm Gold | `#D4A853` | `bg-gold-400` / `text-gold-400` | Accent, awards, premium elements |
| White Surface | `#FFFFFF` | `bg-white` | Cards, inputs, modals |

### Teal Scale
```
teal-50:  #E8F7F6   ← Tint backgrounds, chip fills
teal-100: #C4ECEB   ← Hover tints
teal-200: #8ED9D6
teal-300: #58C6C1
teal-400: #2EB3AC
teal-500: #0F9B8E   ← PRIMARY
teal-600: #0C7C72   ← Hover state
teal-700: #095E56   ← Active state
```

### Navy Scale
```
navy-50:  #E8EBF1
navy-100: #C4CCDA
navy-200: #8A9AB8
navy-300: #506896
navy-400: #2D4878
navy-500: #1A2B4A   ← SECONDARY / Headings
navy-600: #15223C   ← Footer bg
navy-700: #101A2E
```

### Semantic Text Colors
```css
--color-text-primary:   #1A2B4A   /* Headings, strong labels */
--color-text-secondary: #4A5E7A   /* Body copy */
--color-text-muted:     #8899B0   /* Captions, helper text */
--color-border:         #E5E0D5   /* Default borders */
```

---

## Typography

### Fonts
| Role | Font | Import |
|------|------|--------|
| Headings | DM Serif Display | Google Fonts |
| Body / UI | Inter | Google Fonts |

**Google Fonts URL:**
```html
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Type Scale

| Name | Size | Weight | Usage |
|------|------|--------|-------|
| `text-display-2xl` | 72px | 400 (serif) | Hero super-headline |
| `text-display-xl`  | 60px | 400 (serif) | Hero headline |
| `text-display-lg`  | 48px | 400 (serif) | Section hero title |
| `text-display-md`  | 40px | 400 (serif) | Page titles |
| `text-display-sm`  | 32px | 400 (serif) | Sub-page hero |
| `text-heading-xl`  | 28px | 400 (serif) | Card titles |
| `text-heading-lg`  | 24px | 500 (sans)  | Sub-section heads |
| `text-heading-md`  | 20px | 500 (sans)  | Card sub-heads |
| `text-body-xl`     | 18px | 400 (sans)  | Lead / intro copy |
| `text-body-lg`     | 16px | 400 (sans)  | Default body |
| `text-body-sm`     | 14px | 400 (sans)  | Captions, meta |
| `text-label`       | 11px | 600 (sans)  | Tags, eyebrow labels |

### Component Classes
```html
<span class="text-subheading">Our Services</span>          <!-- eyebrow label -->
<h1 class="text-display">Beautiful Smiles...</h1>          <!-- hero heading -->
<h2 class="text-heading-section">Why Choose Us</h2>        <!-- section heading -->
<h3 class="text-heading-card">Teeth Whitening</h3>         <!-- card title -->
<p class="text-body-base">Natural, comfortable care...</p>  <!-- body paragraph -->
<p class="text-muted">*Consultation required</p>            <!-- helper/muted -->
```

---

## Spacing System

Base unit: **4px (0.25rem)**

| Token | Value | Usage |
|-------|-------|-------|
| `section-padding-y` | `clamp(4rem, 8vw, 8rem)` | Section vertical padding |
| `container-max` | `1152px` | Max content width |
| `section-sm` | `4rem` | Tighter sections |
| `section-lg` | `8rem+` | Hero / feature sections |

---

## Border Radius

| Class | Value | Usage |
|-------|-------|-------|
| `rounded-sm` | 4px | Small chips, tiny inputs |
| `rounded-md` | 8px | Inputs, small badges |
| `rounded-lg` | 12px | Standard cards |
| `rounded-xl` | 16px | Large cards |
| `rounded-2xl` | 24px | Featured cards |
| `rounded-3xl` | 32px | Image frames |
| `rounded-full` | 999px | Buttons, avatars |

---

## Shadows

```css
shadow-card:     0 4px 16px rgba(26,43,74,0.08)    /* default card */
shadow-card-lg:  0 8px 32px rgba(26,43,74,0.10)    /* hover state */
shadow-card-xl:  0 16px 48px rgba(26,43,74,0.12)   /* modal / popups */
shadow-teal-glow: 0 4px 20px rgba(15,155,142,0.25) /* CTA button glow */
```

---

## Components

### Buttons
```html
<!-- Primary CTA -->
<button class="btn-primary">Book Appointment</button>
<button class="btn-primary btn-lg">Book Free Consultation</button>

<!-- Secondary -->
<button class="btn-secondary">Learn More</button>

<!-- Outline -->
<button class="btn-outline">View Services</button>

<!-- Ghost -->
<button class="btn-ghost">← Back</button>
```

### Cards
```html
<!-- Service card -->
<div class="card-service">...</div>

<!-- Testimonial -->
<div class="card-testimonial">...</div>

<!-- Team member (no padding, image at top) -->
<div class="card-team">
  <img src="..." class="w-full h-72 object-cover">
  <div class="p-6">...</div>
</div>

<!-- Soft cream card -->
<div class="card-soft">...</div>
```

### Section Header
```html
<div class="section-header">
  <span class="label">Why Choose Us</span>
  <h2 class="title">Dental Care You Can Trust</h2>
  <p class="subtitle">We combine clinical expertise with a warm, welcoming environment...</p>
</div>
```

### Form Inputs
```html
<div>
  <label class="form-label">Full Name</label>
  <input type="text" class="form-input" placeholder="Priya Sharma">
</div>
<div>
  <label class="form-label">Message</label>
  <textarea class="form-textarea" rows="4"></textarea>
</div>
<div>
  <label class="form-label">Service</label>
  <select class="form-select">...</select>
</div>
```

### Badges
```html
<span class="badge-teal">Most Popular</span>
<span class="badge-gold">Award Winning</span>
<span class="badge-navy">New</span>
```

### Icon Containers
```html
<div class="icon-wrap"><!-- 16×16 SVG --></div>
<div class="icon-wrap-lg"><!-- 20×20 SVG --></div>
<div class="icon-wrap-circle"><!-- white SVG --></div>
```

---

## Backgrounds & Gradients

| Class | Description |
|-------|-------------|
| `bg-cream` | Site background `#FAF8F3` |
| `bg-gradient-hero` | Light cream → teal tint (hero) |
| `bg-gradient-brand` | Teal gradient (CTA sections) |
| `bg-gradient-navy` | Dark navy (footer) |
| `bg-gradient-card` | Subtle cream card gradient |

---

## Page Layout Pattern

```html
<body class="bg-cream font-sans">

  <!-- Nav: sticky top, glass bg -->
  <nav class="sticky top-0 z-50 glass border-b border-cream-200">
    <div class="container-site flex justify-between items-center py-4">...</div>
  </nav>

  <!-- Hero -->
  <section class="bg-gradient-hero section-lg">
    <div class="container-site">...</div>
  </section>

  <!-- Standard section -->
  <section class="section bg-white">
    <div class="container-site">
      <div class="section-header">...</div>
      <!-- content grid -->
    </div>
  </section>

  <!-- CTA band -->
  <section class="section-sm bg-gradient-brand text-white">
    <div class="container-site text-center">...</div>
  </section>

  <!-- Footer -->
  <footer class="bg-gradient-navy text-white pt-16 pb-8">
    <div class="container-site">...</div>
  </footer>

</body>
```

---

## Planned Pages

| File | Purpose |
|------|---------|
| `index.html` | Homepage (hero, services, about, testimonials, CTA, contact) |
| `src/services.html` | Services detail page |
| `src/about.html` | Team & clinic story |
| `src/contact.html` | Booking form + map |

---

## Build Commands

```bash
# Dev watch (live rebuild)
npx tailwindcss -c config/tailwind.config.js -i src/css/main.css -o src/css/output.css --watch

# Production build (minified)
npx tailwindcss -c config/tailwind.config.js -i src/css/main.css -o src/css/output.css --minify
```

**Include in every HTML page:**
```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="src/css/output.css">   <!-- or main.css via CDN mode -->
</head>
```
