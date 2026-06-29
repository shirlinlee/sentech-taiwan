# SENTECH Korea 台灣

Corporate website for the Taiwan distributor of SENTECH Korea.

## Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- ESLint + Prettier

## Scripts

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format with Prettier
npm run format:check # Check formatting
```

## Project Structure

```
src/
  app/           # App Router pages and layouts
  components/    # UI components by section
  data/          # Static content (TS/JSON)
  constants/     # App-wide constants (routes, etc.)
  types/         # Shared TypeScript types
  styles/        # Global styles
  hooks/         # Custom React hooks
  lib/           # Shared libraries
  utils/         # Pure utility functions
  assets/        # Internal static assets
public/
  images/        # Public images
  icons/         # Public icons
  pdf/           # Downloadable PDFs
docs/            # Project documentation
```
