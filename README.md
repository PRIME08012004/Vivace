# Vivace - Technical Documentation

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js 16.2.4
- **UI Library**: React 19.2.4 with React DOM 19.2.4
- **Language**: TypeScript 5
- **Styling**: 
  - Tailwind CSS 4 with PostCSS
  - @tailwindcss/postcss ^4
  - tailwind-merge ^3.6.0
  - class-variance-authority ^0.7.1
- **Component System**: shadcn/ui ^4.8.0
- **Icons**: 
  - Lucide React ^1.16.0
  - @tabler/icons-react ^3.44.0
- **Animations**: Motion ^12.40.0
- **Base Components**: @base-ui/react ^1.5.0
- **Utilities**: 
  - clsx ^2.1.1
  - date-fns ^4.3.0

### Backend & Database
- **Runtime**: Node.js
- **ORM**: Prisma 7.8.0
- **Database**: PostgreSQL via @prisma/adapter-pg ^7.8.0
- **Database Client**: pg ^8.20.0
- **Authentication**: next-auth ^4.24.14

### API & HTTP
- **HTTP Client**: axios ^1.16.0
- **Maps Integration**: @react-google-maps/api ^2.20.8

### Dev Tools
- **Linting**: ESLint 9
- **Formatting**: Prettier ^3.8.3
- **Build Tool**: Next.js 16.2.4
- **Type Checking**: TypeScript 5

### Key Dependencies
- **dotenv**: ^17.4.2 - Environment variable management
- **react-day-picker**: ^10.0.1 - Date picker component
- **tw-animate-css**: ^1.4.0 - Tailwind CSS animations

## 📁 Project Structure

```
first-app/
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

**Vivace - Service Booking Platform**
