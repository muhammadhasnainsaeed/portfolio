# Project Guide for Coding Agents

## Project at a glance

This is a personal portfolio site built with the Next.js App Router, React, and
TypeScript. Most pages are statically composed from reusable blocks and
content in `src/data`; the contact form is the main server-backed flow. There
is no application database or authentication layer.

## Repository map

| Path | Purpose |
| --- | --- |
| `src/app/` | App Router pages, root layout, not-found page, metadata, sitemap, and robots policy |
| `src/components/blocks/` | Page sections such as hero, projects, services, about, FAQ, contact, navigation, and footer |
| `src/components/ui/` | Shared shadcn-style UI primitives |
| `src/components/animate-ui/` | Motion-enhanced buttons, accordions, theme control, and particle effects |
| `src/components/` | Shared background, theme/style providers, route announcement, and decorative elements |
| `src/data/` | Content for projects, services, skills/experience, and credentials |
| `src/actions/` | Safe-action client and server actions |
| `src/lib/` | Form validation, class-name helper, and strict React context helper |
| `src/hooks/` | Shared controlled-state and viewport-visibility hooks |
| `src/emails/` | React Email templates used by the contact flow |
| `src/styles/globals.css` | Tailwind CSS 4 entry point, design tokens, typography, and global styles |
| `public/` | Static images, project thumbnails, logos, icons, and illustrations |
| `fonts/dm-sans/` | Local DM Sans font files loaded by the root layout |

`@/*` resolves to `src/*`. Next.js MDX support is configured, although no
tracked MDX pages are currently part of the site.

## Routes and page composition

| Route | Main content |
| --- | --- |
| `/` | Hero, technology logos, featured projects, working principles, build process, and FAQ |
| `/about` | Profile/experience introduction, skills, and work history |
| `/projects` | Project cards driven by `src/data/projects.ts` |
| `/services` | Service offerings, delivery process, engagement models, and contact CTA |
| `/contact` | Contact details/social links and the inquiry form |
| `/credentials` | Education and certification cards driven by `src/data/credentials.ts` |
| `/faq` | Full FAQ page using the shared accordion section |
| not found | Shared branded not-found page with links home and to contact |

The testimonial block exists but is not currently rendered by the home page.
The home and FAQ routes share the same FAQ component; the page route switches
its heading level for page semantics.

## Shared layout and styling

`src/app/layout.tsx` owns the document metadata and JSON-LD website/person
schemas, loads local DM Sans and Google Inter, and wraps every route with the
theme provider, fixed navigation, skip link, main landmark, footer, route
announcement, and toast host. `next-themes` supports light/dark/system themes;
the visible theme toggle is configured for light and dark.

Tailwind CSS 4 and the site color/font tokens are defined in
`src/styles/globals.css`. Use `cn` from `src/lib/utils.ts` when combining
conditional Tailwind classes. Shared page decoration comes from
`src/components/background.tsx` and `src/components/dashed-line.tsx`.

Prefer the existing shared UI and animation components over introducing a
parallel primitive set. Keep client-only state and event handlers within
components marked `"use client"`; App Router pages and the root layout are
server components by default.

## Content and behavior flows

- Project lists and featured projects are separate exports in
  `src/data/projects.ts`, rendered through `ProjectCard`.
- Skills and work history live in `src/data/about.ts`; service cards live in
  `src/data/services.ts`; certification records and an education data export
  live in `src/data/credentials.ts`. The credentials page currently renders
  its degree card inline and maps the certification records.
- The FAQ data is local to `src/components/blocks/faq.tsx`. Each category uses
  a single-item, collapsible Radix accordion with motion-based content
  transitions.
- The mobile navigation is controlled locally in `navbar.tsx`; route links
  close the menu. The desktop navigation highlights the current exact route.
- Contact form input is managed by React Hook Form and validated in the
  browser with the Zod schema in `src/lib/form-schema.ts`. It submits through
  `src/actions/server-action.ts` using `next-safe-action`, validates again on
  the server, and sends a React Email template through Resend. The action
  reads `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, and `CONTACT_RECEIVER_EMAIL`.
  Success resets the form, displays a toast, and shows an accessible success
  state; failures are surfaced through error toasts.
- `src/app/sitemap.ts` lists the public routes, and `src/app/robots.ts`
  permits crawling and references that sitemap.

## Working agreements

- Follow the existing TypeScript, import ordering, formatting, and component
  conventions. Keep content changes in the relevant data module where
  possible.
- Respect `.gitignore`: do not inspect ignored files, generated output, or
  dependency directories. Do not read environment files or expose credentials.
- `package.json` has both npm and pnpm lockfiles tracked; do not update either
  lockfile unless dependencies are intentionally changed using the matching
  package manager.
- Existing scripts are `npm run dev`, `npm run build`, `npm run start`,
  `npm run lint`, and `npm run format`. Note that the lint script includes
  `--fix` and the format script writes files; use them only when those
  repository-wide modifications are intended. There is no test script in
  `package.json`.
