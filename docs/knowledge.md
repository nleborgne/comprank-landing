# Knowledge Base

## Stripe Integration

- Stripe Checkout implementation in `app/actions.ts`
- Uses next-safe-action for type-safe server actions
- Handles one-time payments with success/cancel URL redirects
- Product ID stored in environment variables
- Base URL needs to be configured for different environments

### Stripe Webhook Email Integration

- Webhook handler in `app/api/stripe/webhook.ts` sends welcome emails on successful checkout
- Uses Resend API for email delivery with React components
- Email templates stored in `components/email/` directory
- Handles errors gracefully to ensure webhook completion

## Lazy Video Loading

- Implementation in `components/how-it-works.tsx` using Intersection Observer API
- Videos only load and play when in viewport
- Uses `useInView` hook from `framer-motion` for intersection detection
- Optimizes performance by preventing unnecessary video loading
- Videos are muted and autoplay for better UX
