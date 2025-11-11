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

### Content and Localization

- All content is in French, targeting French-speaking competition organizers
- Focuses on CrossFit, functional fitness, weightlifting, and similar sports
- Links to external application at `https://app.comprank.fr`

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
