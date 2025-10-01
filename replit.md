# Fleet Management System

## Overview

An enterprise-grade fleet management system for comprehensive vehicle tracking, maintenance scheduling, expense control, and multi-tenant operations. Built with a modern full-stack architecture using React, Express, and PostgreSQL, the system provides role-based access control, complete audit trails, and data visualization for fleet operations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & UI**: React with TypeScript using Vite as the build tool. The UI is built on shadcn/ui components (Radix UI primitives) with Tailwind CSS for styling, following a Material Design 3 inspired enterprise design system.

**State Management**: TanStack Query (React Query) handles all server state management with optimistic updates and cache invalidation. No global client state management library is used - server state is the source of truth.

**Routing**: Wouter provides lightweight client-side routing with route protection based on authentication status (authenticated vs unauthenticated routes).

**Forms & Validation**: React Hook Form with Zod schema validation for type-safe form handling. Form schemas are derived from database schemas using drizzle-zod for consistency.

**Data Visualization**: Recharts library for rendering expense analytics and fleet metrics with customized theming to match the design system.

### Backend Architecture

**Server Framework**: Express.js with TypeScript running on Node.js. The server follows a simple MVC-like pattern with route handlers, storage layer, and middleware.

**Database ORM**: Drizzle ORM with Neon serverless PostgreSQL driver for database operations. Schema definitions are shared between client and server for type safety.

**Multi-Tenancy**: Organization-based data isolation where every query includes organizationId filtering. Users belong to organizations, and all vehicle, maintenance, and expense data is scoped to the user's organization.

**Storage Layer**: Abstract storage interface (`IStorage`) in `server/storage.ts` provides all data access methods with built-in organization scoping for security.

### Authentication & Authorization

**Authentication Provider**: Replit Auth (OpenID Connect) with session-based authentication using connect-pg-simple for PostgreSQL session storage. Sessions persist for 1 week with secure, httpOnly cookies.

**Authorization Model**: Role-based access control (RBAC) with four roles:
- **Admin**: Full system access including user management
- **Manager**: Read/write access to all fleet data
- **Editor**: Can create and update vehicles, maintenance, expenses
- **Viewer**: Read-only access to fleet information

**Permissions Middleware**: `checkPermission` middleware validates user roles against resource actions (read/create/update/delete) before allowing access to protected routes.

### Security Features

**Audit Logging**: Complete audit trail in `auditLogs` table captures all create/update/delete operations with user ID, IP address, user agent, and change details for compliance and troubleshooting.

**Data Isolation**: Multi-tenant architecture ensures complete data separation between organizations through mandatory organizationId filtering in all database queries.

**Session Security**: Secure session management with httpOnly cookies, CSRF protection through session secrets, and automatic session expiration.

### Data Model

**Core Entities**:
- **Organizations**: Top-level tenant entities
- **Users**: Linked to organizations with assigned roles
- **Vehicles**: Fleet assets with status tracking (active/maintenance/inactive/sold)
- **Maintenance Records**: Service history with type classification (preventive/corrective)
- **Expenses**: Financial tracking by category (fuel/maintenance/insurance/fines/tolls)
- **Audit Logs**: Compliance and security audit trail

**Schema Design**: PostgreSQL with Drizzle ORM using snake_case column names. Shared schema definitions in `shared/schema.ts` provide type safety across the full stack with automatic Zod validation schema generation.

## External Dependencies

**Database**: Neon serverless PostgreSQL accessed via `@neondatabase/serverless` driver with WebSocket support for connection pooling.

**Authentication Service**: Replit Auth OIDC provider for user authentication and identity management.

**UI Component Library**: shadcn/ui built on Radix UI primitives for accessible, customizable components.

**Session Store**: PostgreSQL-backed session storage using connect-pg-simple for persistent, scalable session management.

**Build & Development**: Vite for fast development with HMR and optimized production builds. Replit-specific plugins provide runtime error overlays and development banners in the Replit environment.

**Fonts**: Google Fonts (Inter for UI, JetBrains Mono for monospace) loaded via CDN for consistent typography.