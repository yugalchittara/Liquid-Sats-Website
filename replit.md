# Project Overview

This is a full-stack JavaScript application migrated from Figma to Replit.

## Project Architecture

- **Frontend**: React with Vite, Tailwind CSS, shadcn/ui components
- **Backend**: Express.js with TypeScript
- **Database**: PostgreSQL (will be set up if needed)
- **Package Manager**: npm
- **Development**: Hot reload with Vite dev server

## Tech Stack

- **Frontend**: React, TypeScript, Vite, Tailwind CSS, Wouter (routing), TanStack Query
- **Backend**: Express.js, TypeScript
- **UI Components**: shadcn/ui with Radix UI primitives
- **State Management**: TanStack Query for server state
- **Database**: Drizzle ORM with PostgreSQL
- **Authentication**: Passport.js (if needed)

## Project Structure

```
/
├── client/               # Frontend React application
│   ├── src/
│   └── index.html
├── server/               # Backend Express server
│   ├── index.ts         # Server entry point
│   ├── routes.ts        # API routes
│   ├── storage.ts       # Storage interface
│   └── vite.ts          # Vite integration
├── shared/               # Shared types and schemas
│   └── schema.ts        # Data models with Drizzle and Zod
└── package.json         # Dependencies and scripts
```

## Development Commands

- `npm run dev` - Start development server (both frontend and backend)

## Recent Changes

- Initial project migration from Figma to Replit environment (in progress)
- Set up progress tracking for migration process

## User Preferences

- None specified yet

## Migration Status

Currently migrating project from Figma to Replit environment with focus on:
- Security best practices
- Client/server separation
- Replit compatibility
- Clean code architecture