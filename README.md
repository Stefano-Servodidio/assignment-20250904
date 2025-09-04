# React 18 TypeScript Application

A modern React 18 application built with TypeScript, Vite, and a comprehensive development toolchain.

## Features

- ⚡ **Vite** - Lightning fast build tool
- ⚛️ **React 18** - Latest React with concurrent features
- 🔷 **TypeScript** - Full type safety
- 🧪 **Vitest** - Fast unit testing framework
- 🧭 **React Router DOM** - Client-side routing
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📏 **ESLint** - Code linting
- 💅 **Prettier** - Code formatting
- 🎯 **Lucide React** - Beautiful icons

## Project Structure

```
src/
├── components/          # Reusable UI components
│   └── Layout/         # Layout components
├── pages/              # Page components
│   ├── Home/          # Home page
│   └── NotFound/      # 404 page
├── router/            # Routing configuration
├── types/             # TypeScript type definitions
├── utils/             # Utility functions and constants
└── test/              # Testing setup and utilities
```

## Getting Started

### Development
```bash
npm run dev
```

### Testing
```bash
npm run test        # Run tests in watch mode
npm run test:run    # Run tests once
npm run test:ui     # Run tests with UI
```

### Code Quality
```bash
npm run lint        # Check for linting issues
npm run lint:fix    # Fix linting issues
npm run prettier    # Format code
```

### Building
```bash
npm run build
npm run preview
```

## Available Routes

- `/` - Home page
- `*` - 404 Not Found page

## Contributing

1. Follow the existing file organization structure
2. Run `npm run prettier` before committing
3. Ensure all tests pass with `npm run test:run`
4. Follow TypeScript best practices