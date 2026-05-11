# ACELIE Project Memory

## Project Overview
**Name:** African Centre for Ethical Leadership, Innovation & Entrepreneurship (ACELIE)
**Mission:** Raising Ethical Leaders. Inspiring Innovation. Empowering Entrepreneurs.
**Stack:** Vite, React 19, TypeScript, Tailwind CSS v4, Framer Motion, Lucide Icons.

## Current Design System (STRICT ADHERENCE REQUIRED)
All new components MUST follow these tokens defined in `src/index.css`.

### Colors
- **Navy:** `#1A2A5E` (Primary brand color)
- **Gold:** `#C9952A` (Action/Highlight color)
- **Forest:** `#2D6A3F` (Secondary/Success)
- **Wisdom (Purple):** `#4A235A`
- **Charcoal:** `#1C1C1C` (Text/Dark UI)
- **Off-white:** `#F8F5EE` (Backgrounds)

### Typography
- **Font:** `Inter Tight`
- **Headings:** Uppercase, Bold, Tracking-tight, Leading-[0.95]. Use `.display-xl`, `.display-lg`, etc.
- **Body:** Antialiased, Charcoal color.

### Components
- **Buttons:**
  - `.btn-primary`: Gold background, Navy text.
  - `.btn-secondary`: Charcoal background, White text.
  - `.btn-outline`: Bordered charcoal.
- **Layout:**
  - `Navbar`: Sticky, transparent-to-white transition (check component for logic).
  - `Footer`: Navy background with white text.
  - `Card`: `.card-reno` (White, hairline border, no radius).

## Implementation Status
- [x] Project scaffolding (Vite + TS)
- [x] Design System / Tailwind v4 Configuration
- [x] Integrate `logo.webp` into `Navbar`, `Footer`, and `About` pages.
- [x] Replace generic template images with curated African-context imagery across all pages.
- [x] Fix broken image URLs and migrate to local assets in `src/imgs`.
- [x] Standardize image treatments (grayscale to color hover).
- [x] Ensure 100% Lucide icon consistency across all components.
- [x] Complete visual rebranding of Home, About, Programs, Impact, Get Involved, News, and Contact pages.

## Key Rules
1. **No Design Drift:** Do not introduce new colors or fonts. Use the `--color-*` and `--font-*` variables.
2. **Premium Aesthetic:** Maintain the high-end, clean, "Reno" aesthetic. Use hairline borders and subtle motion.
3. **Component Re-use:** Check `src/components/ui` before building new UI elements.
4. **Mobile First:** Ensure all sections are responsive using Tailwind's breakpoint prefixes.
5. **African Context Only:** All website imagery MUST exclusively feature African people, settings, and contexts. DO NOT use generic Western/European stock photos or imagery featuring non-African people.

## Last Updated
May 8, 2026
