# Vivace - A Italian Hair-salon Website

## Tech-Stack
**Next.js** – framework
**TypeScript** – language
**Tailwind** – CSS
**Prisma** – ORM
**NextAuth.js** – auth
**Shad-cn** – UI-Component
**Vercel** – deployments

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


## 🗄 Database

**ORM**: Prisma 7.8.0  
**Database**: PostgreSQL  
**Adapter**: @prisma/adapter-pg

Schema definitions in `prisma/schema.prisma`  
Migrations in `prisma/migrations/`

## 🔐 Authentication

**Provider**: NextAuth 4.24.14  
**Strategy**: OAuth (Google)  
**Configuration**: Environment variables

## 📦 Component Libraries

- **shadcn/ui** - Reusable component system
- **@base-ui/react** - Headless base components
- **Motion** - Animation library for React
- **Tabler Icons** - Icon set (1000+ icons)
- **Lucide React** - Icon library

## 🎨 Styling Approach

- **Utility-First CSS**: Tailwind CSS 4
- **PostCSS Processing**: Enhanced with postcss plugins
- **CSS-in-JS Utilities**: clsx, tailwind-merge for dynamic classes
- **Class Variance**: class-variance-authority for component variations
- **Animation Library**: Motion for complex animations + tw-animate-css

## 📋 Configuration Files

| File | Purpose |
|------|---------|
| `tsconfig.json` | TypeScript compilation settings |
| `next.config.ts` | Next.js build & runtime configuration |
| `tailwind.config.ts` | Tailwind CSS theme & plugin configuration |
| `postcss.config.mjs` | PostCSS plugin pipeline |
| `eslint.config.mjs` | Code linting rules & settings |
| `components.json` | Component library metadata |
| `prisma.config.ts` | Prisma client configuration |

## 🚀 Build Output

- **Next.js Build**: Optimized for Vercel deployment
- **Output Mode**: Standalone by default
- **Asset Optimization**: Automatic image & font optimization

---


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

