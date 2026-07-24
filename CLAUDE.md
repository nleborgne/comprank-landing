# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Workflow requirements

Update CLAUDE.md before every git commit.

## Project Overview

This is CompRank Landing - a Next.js 16 landing page for a French competition management platform. The site showcases features for organizing sporting competitions, managing athlete registrations, live leaderboards, and event planning.

## Development Commands

- **Development server**: `bun run dev`
- **Production build**: `bun run build`
- **Start production server**: `bun run start`
- **Linting**: `bun run lint`

## Architecture

### Framework Stack

- **Next.js 16** with React 19 and React Compiler enabled
- **TypeScript** with strict configuration
- **Tailwind CSS** with custom design system and animations
- **Framer Motion** for page animations
- **Radix UI** components for accessible UI elements

### Design System

The project uses a comprehensive design system built on Tailwind CSS with:

- Custom color palette with primary orange (#FFAD4A) and accent blue colors
- Dark theme with custom color scales (dark-50 to dark-900)
- Animation utilities via tailwindcss-animate, tailwindcss-motion, and tailwindcss-intersect
- Glass morphism effects and custom shadows

### Component Structure

- **Layout**: `app/layout.tsx` provides root layout with Header and Footer
- **Pages**: App Router structure with main page at `app/page.tsx`
- **Components**: Organized in `/components` with UI components in `/components/ui`
- **Utilities**: Shared utilities in `/lib/utils.ts` (primarily for className merging)

### Key Features

The landing page showcases:

- Modern hero section with animated gradients and call-to-action
- Interactive live leaderboard demonstration with real-time updates
- Advanced competition planning and scheduling features
- Registration management with intelligent waitlist functionality
- Real-time scoring system with progress tracking
- Comprehensive athlete feedback collection and analytics
- Professional FAQ section with modern accordion design

### Recent Design Updates (2024)

The homepage has been fully redesigned with:

- **Modern Visual Design**: Clean, professional layout with gradient backgrounds and glassmorphism effects
- **Component Architecture**: Modular sections using Radix UI components (Card, Badge, Accordion)
- **Enhanced UX**: Improved typography hierarchy, better spacing, and smooth animations
- **Interactive Elements**: Hover effects, animated badges, and dynamic leaderboard showcase
- **Responsive Design**: Mobile-first approach with optimized layouts across all breakpoints
- **Performance Optimizations**: Efficient component structure with proper React patterns

### Styling Approach

- Uses CSS custom properties for consistent theming
- Extensive use of Tailwind utilities with custom classes like `.btn-primary`, `.card`, `.glass`
- Responsive design with mobile-first approach
- Custom animations and transitions throughout

### Analytics

- **Meta Pixel** (`components/meta-pixel.tsx`), rendered from the root layout. Loads via `next/script` with `afterInteractive`.
- Only fires when `NODE_ENV === "production"`, so local dev traffic never reaches Meta.
- Tracks `PageView` on hard page loads only — client-side route changes are not tracked (only `/` and `/terms` exist, and `/terms` has no campaign value).
- Tracks `Lead` (defensive `window.fbq` call, production only) when the lead dialog form is submitted successfully.
- **No consent gate yet.** The pixel drops cookies unconditionally, which is not GDPR/CNIL-compliant. A cookie banner is planned as separate work; the pixel is isolated in its own component so the gate can wrap it without touching the layout.

### Lead Capture (CTA form)

- All 6 "Démarrer / Démarrer gratuitement" CTAs (header desktop + mobile menu, hero, homepage bottom CTA, both competition landings) open a lead-capture modal instead of linking to `app.comprank.fr`. The only remaining outbound link to the app is a discreet one on the modal's success screen.
- **`components/lead-dialog.tsx`** — client component. Two usage modes: wrap the trigger as children (`DialogTrigger asChild`), or controlled via `open`/`onOpenChange` (used by the header so the dialog survives the mobile menu unmounting). Fields: first/last name, email, optional phone, two required segmented-pill radio groups (profile: coach/box-owner/other; timeline: 3-months/6-12-months/considering/no) with no default selection, plus an off-screen honeypot (`website`). Form state resets on reopen.
- **`lib/lead-schema.ts`** — shared zod schema (client + server), French error messages, pill option lists, and label helpers for the email body.
- **`app/actions/lead.ts`** — `next-safe-action` server action (client in `lib/safe-action.ts`). Honeypot filled → fake success, no email. Otherwise sends a plain-text email via the Resend SDK: from `CompRank <contact@transactional.comprank.fr>`, to `contact@comprank.fr`, `replyTo` = lead's email, subject `Nouveau lead : {First} {Last} ({Profile})`. Missing `RESEND_API_KEY` or send failure → throws; the client shows a generic French error with a mailto fallback (never fakes success).
- **`RESEND_API_KEY`** is required in production (Vercel env) — see `.env.example`. No rate limiting yet; the honeypot is the only spam protection (known limitation, acceptable for current traffic).

### Content and Localization

- All content is in French, targeting French-speaking competition organizers
- Focuses on CrossFit, functional fitness, weightlifting, and similar sports
- The external application lives at `https://app.comprank.fr` (`APP_URL` in `lib/site.ts`); CTAs no longer link to it directly (see Lead Capture)

## File Organization

```
app/                 # Next.js App Router pages
├── layout.tsx       # Root layout with fonts and providers
├── page.tsx         # Main landing page with all sections
└── terms/page.tsx   # Terms of service page

components/          # React components
├── ui/             # Reusable UI components (Radix + custom)
├── hero.tsx        # Hero section component
├── header.tsx      # Site header/navigation
├── footer.tsx      # Site footer
└── ...             # Other page sections

lib/
└── utils.ts        # Utility functions (className merging)

public/             # Static assets
├── hero.webp       # Hero background image
└── box/            # Box logo images
```

## Development Notes

- The site uses React Compiler (feature enabled in Next.js config)
- Uses Bun as package manager (bun.lockb present)
- No custom CSS files beyond globals.css - everything styled with Tailwind
- TypeScript paths configured with `@/*` alias pointing to root directory
