# Neolumina website

This Next.js site exports static pages to `out/`.

## Publishing

Pushes to `main` run `.github/workflows/deploy.yml`: install the locked dependencies,
build the site, upload `out/`, then deploy the artifact to GitHub Pages. Repository
Settings > Pages must use **GitHub Actions**, not a branch-root Jekyll build.

The Pages preview is https://vasanthpartha1881.github.io/neolumina_in/.
The workflow obtains the base path from Pages metadata before the build.
`NEXT_PUBLIC_BASE_PATH` configures both Next.js routes and public assets. Leave it
unset for a root-domain build; use `/neolumina_in` for the current Pages preview.
Changing it requires rebuilding. `trailingSlash` exports directory indexes so
direct visits to nested pages work on static hosts.

Local checks (PowerShell):

```powershell
npm ci
$env:NEXT_PUBLIC_BASE_PATH = '/neolumina_in'
npm run build
```

The `CNAME` file at the repository root is a historical domain hint, not proof
that `neolumina.in` uses this deployment. Its Cloudflare origin/DNS configuration
must be checked separately before changing the live domain.

The contact page uses email and phone links. The retained `app/api/contact`
POST handler requires a server and is not available on static GitHub Pages;
the current page does not call it. Do not add a submission form relying on it
without arranging a backend and its credentials.

## Development

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
