# Vivace - A Italian Hair-salon Website

## Tech-Stack

- **Next.js** - Framework
- **TypeScript** - Language
- **Tailwind CSS** - Styling
- **Prisma** - ORM
- **NextAuth.js** - Authentication
- **Shadcn/ui** - UI Components
- **Vercel** - Deployment

## 📝 NPM Scripts

```bash
npm run dev              # Start development server with hot reload
npm run build            # Build for production
npm run start            # Start production server

npm run lint             # Run ESLint
npm run lint:check       # Run ESLint with strict warnings (max-warnings: 0)
npm run lint:fix         # Fix ESLint issues automatically

npm run format:check     # Check code formatting with Prettier
npm run format:fix       # Fix code formatting automatically

npm run db:generate      # Generate Prisma client types
```



## 📁 Project Structure

```
vivace/
├── app/
│   ├── api/                      # API routes & endpoints
│   │   ├── booking/route.ts      # Booking API endpoint
│   │   └── [auth]/route.ts       # NextAuth routes
│   ├── careers/                  # Careers page route
│   ├── store/                    # State management layer
│   ├── layout.tsx                # Root layout component
│   ├── page.tsx                  # Homepage with all sections
│   ├── globals.css               # Global styles & Tailwind directives
│   └── favicon.ico               # App icon
├── components/
│   └── ui/
│       └── sections/             # Page sections
│           ├── heroSection.tsx
│           ├── our-services-section.tsx
│           ├── booking-section.tsx
│           ├── product-section.tsx
│           ├── why-choose-us.tsx
│           └── our-team-section.tsx
├── hooks/                        # Custom React hooks
├── lib/
│   └── utils.ts                  # Utility functions
├── prisma/
│   ├── schema.prisma             # Database schema
│   ├── prisma.config.ts          # Prisma configuration
│   └── migrations/               # Database migrations
├── public/                       # Static assets
├── eslint.config.mjs             # ESLint configuration
├── next.config.ts                # Next.js configuration
├── tsconfig.json                 # TypeScript configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── postcss.config.mjs            # PostCSS configuration
└── components.json               # Component metadata
```

