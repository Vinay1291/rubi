# Rubi Technologies - Smart IT Solutions

## Overview

Rubi Technologies is a corporate B2B marketing website showcasing enterprise IT solutions and services. The application is a single-page React application with a Node.js/Express backend, featuring an enterprise-focused design inspired by modern IT consulting firms. The site presents products, services, industry verticals, and company information through various interactive sections including hero sliders, product carousels, and service grids.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Tooling**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server
- **Wouter** for lightweight client-side routing
- **TanStack Query** for server state management and API interactions

**UI Component Strategy**
- **Shadcn/ui** component library built on Radix UI primitives
- Component-based architecture with reusable, accessible components
- Tailwind CSS for utility-first styling with custom design tokens
- Custom theme system supporting light/dark modes via CSS variables

**Design System**
- Enterprise IT aesthetic with professional blue-dominant color palette
- Typography: Inter/DM Sans for headings, system fonts for body text
- Spacing follows Tailwind's 4px grid system (units: 4, 6, 8, 12, 16, 20, 24)
- Design guidelines reference modern enterprise IT sites (nipun-it.com inspired)

**Page Structure**
- Single-page application with scroll-based sections
- Modular components: Navbar, HeroSection, ProductCarousel, ServicesGrid, IndustriesSection, AboutSection, ClientsSection, Footer
- Auto-scrolling carousels with manual controls for products and clients
- Sticky navigation with transparent-to-solid scroll effect

### Backend Architecture

**Server Framework**
- **Express.js** running on Node.js
- ESM module system (type: "module")
- Middleware for JSON parsing, request logging, and performance tracking

**API Design**
- RESTful endpoint structure under `/api` prefix
- Single contact form submission endpoint (`POST /api/contact`)
- Form validation using Zod schemas
- In-memory storage implementation with interface for future database migration

**Development Setup**
- Vite middleware integration for HMR in development
- Separate build process for client (Vite) and server (esbuild)
- Runtime error overlay and development tooling via Replit plugins

### Data Storage Solutions

**Current Implementation**
- In-memory storage using `MemStorage` class
- Implements `IStorage` interface for easy backend swapping
- Stores contact form submissions and user data (currently unused)

**Database Configuration**
- **Drizzle ORM** configured for PostgreSQL via `@neondatabase/serverless`
- Schema defined in `shared/schema.ts` with users table structure
- Migration support via drizzle-kit
- Ready for Neon/Postgres integration (configuration present, not yet implemented)

**Schema Design**
- User table: id (UUID), username (unique), password
- Contact submissions: name, email, company, phone, service, message
- Zod validation schemas co-located with Drizzle table definitions

### External Dependencies

**UI Component Libraries**
- **Radix UI** primitives (accordion, dialog, dropdown, navigation, popover, select, tabs, toast, etc.)
- **Embla Carousel** for product/client carousels
- **Lucide React** for iconography
- **React Icons** for brand logos (Si* icons from simple-icons)

**Form Management**
- **React Hook Form** with **@hookform/resolvers** for form state
- **Zod** for runtime validation and type inference

**Styling & Utilities**
- **Tailwind CSS** with custom configuration
- **class-variance-authority** for component variant management
- **clsx** and **tailwind-merge** for className composition

**Database & Backend**
- **Drizzle ORM** with PostgreSQL dialect
- **@neondatabase/serverless** for serverless Postgres connections
- **drizzle-zod** for schema-to-validation integration

**Development Tools**
- **TypeScript** for type checking across client, server, and shared code
- **Vite plugins** for Replit-specific development features (cartographer, dev banner, runtime error modal)
- **tsx** for TypeScript execution in development

**Assets & Resources**
- Generated images stored in `attached_assets/generated_images/` directory
- Google Fonts integration (Architects Daughter, DM Sans, Fira Code, Geist Mono, Inter)
- Favicon support