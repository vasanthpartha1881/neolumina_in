# Neolumina Tech Solutions Website

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This site is deployed to GitHub Pages. The deployment process is automated using GitHub Actions.

### Manual Deployment

To deploy manually:

1. Build the site:
```bash
npm run build
```

2. The built files will be in the `out` directory, which can be deployed to GitHub Pages.

### Automatic Deployment

The site is automatically deployed when changes are pushed to the `main` branch. The deployment process:

1. Builds the Next.js site
2. Creates a static export
3. Deploys to GitHub Pages

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Project Structure

- `app/` - Contains all the pages and components
- `public/` - Static assets
- `.github/workflows/` - GitHub Actions workflow for deployment
