# Project-KB

This is an experimental version of upcoming KB site.

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `website`: a [Next.js](https://nextjs.org/) app
- `dashboard`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `website` and `dashboard` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Commands

```
pnpm build
pnpm dev
pnpm lint
pnpm format
```

## Prerequisites

- Use latest [pnpm](https://pnpm.io/installation) to manage workspace
- Running latest [Node.js](https://nodejs.org/en)
- Install latest [Turbo](https://turbo.build/repo/docs/getting-started/installation) globally
