# Portfolio Application - Replit Configuration

## Overview

This is a full-stack portfolio web application built with React, TypeScript, Express, and PostgreSQL. It showcases a personal portfolio for Peddinti Mohammad, featuring a modern dark-themed design with sections for skills, projects, education, and contact information. The application uses a monorepo structure with separate client and server directories, shared schema definitions, and modern tooling for development and deployment.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom dark theme
- **UI Components**: Radix UI primitives with shadcn/ui components
- **State Management**: TanStack React Query for server state
- **Build Tool**: Vite with custom configuration for development and production

### Backend Architecture
- **Runtime**: Node.js with Express framework
- **Language**: TypeScript with ES modules
- **API Structure**: RESTful API with `/api` prefix
- **Middleware**: Custom logging, JSON parsing, and error handling
- **Development**: Hot reload with Vite integration in development mode

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: PostgreSQL (configured for Neon serverless)
- **Migrations**: Drizzle Kit for schema management
- **Connection**: Neon serverless driver for serverless compatibility

## Key Components

### Client-Side Components
1. **Navigation**: Fixed header with smooth scroll navigation
2. **Hero Section**: Personal introduction with profile image and contact info
3. **Skills Section**: Categorized technical skills with icons
4. **Projects Section**: Featured projects with descriptions and technologies
5. **Education Section**: Academic background and certifications
6. **Contact Section**: Contact methods and call-to-action

### Server-Side Structure
1. **Route Registration**: Centralized route handling in `server/routes.ts`
2. **Storage Interface**: Abstracted data layer with in-memory implementation
3. **Vite Integration**: Development server with HMR support
4. **Static Serving**: Production build serving capability

### Shared Resources
1. **Schema Definitions**: Drizzle schema with Zod validation
2. **Type Safety**: Consistent TypeScript types across client and server
3. **Database Models**: User model with authentication fields

## Data Flow

### Development Flow
1. Vite dev server serves client files with HMR
2. Express server handles API routes under `/api`
3. Client queries use TanStack React Query for caching
4. Database operations through Drizzle ORM interface

### Production Flow
1. Client builds to static files served by Express
2. API routes handle server-side logic
3. Database connections through Neon serverless
4. Environment-based configuration for deployment

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **@tanstack/react-query**: Server state management
- **drizzle-orm**: Type-safe database operations
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework

### Development Tools
- **@replit/vite-plugin-***: Replit-specific development enhancements
- **tsx**: TypeScript execution for server development
- **esbuild**: Fast JavaScript bundler for production builds

### UI and Styling
- **class-variance-authority**: Component variant management
- **clsx**: Conditional class name utility
- **lucide-react**: Modern icon library
- **embla-carousel-react**: Carousel component functionality

## Deployment Strategy

### Build Process
1. **Client Build**: Vite builds React app to `dist/public`
2. **Server Build**: esbuild bundles server code to `dist/index.js`
3. **Database Setup**: Drizzle migrations apply schema changes
4. **Environment**: Production NODE_ENV with optimizations

### Development Setup
1. **Hot Reload**: Vite middleware integration for instant updates
2. **TypeScript**: Real-time type checking across the monorepo
3. **Database**: Local development with environment variables
4. **Debugging**: Source maps and error overlays enabled

### Production Considerations
1. **Static Assets**: Efficient serving of built client files
2. **API Routes**: Express handles all `/api` endpoints
3. **Database**: Neon serverless for scalable PostgreSQL
4. **Error Handling**: Comprehensive error boundaries and logging

The application is designed as a showcase portfolio with potential for user authentication and dynamic content management, though currently features static portfolio content with a prepared user schema for future enhancements.