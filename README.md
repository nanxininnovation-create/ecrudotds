# Ecru Design System

An AI-ready, multi-brand design system built on Tailwind CSS v4.

## Stack

- **Monorepo:** pnpm workspaces + Turborepo + Changesets
- **Styling:** Tailwind CSS v4 (CSS-first `@theme`) + CVA + `tailwind-merge` + `clsx`
- **Primitives:** Radix UI (Base UI where Radix gaps)
- **Tokens:** DTCG JSON → Style Dictionary v4 → CSS custom properties
- **Components:** Copy-paste friendly, seeded from shadcn/ui (MIT)
- **Registry:** shadcn-compatible (`/r/[name].json`) — installable via `npx shadcn add`
- **Storybook 9** + Chromatic (visual regression)
- **Docs:** Fumadocs on Next.js App Router — hosted on Webflow Cloud
- **AI surface:** registry + shadcn MCP + `llms.txt` + per-component `meta.json`

## Layout

```
packages/
  tokens/     DTCG sources + build pipeline (multi-brand)
  utils/      cn() helper, shared hooks
  core/       atomic components (Button, Input, Dialog…)
  blocks/     composed blocks (hero, pricing, dashboard shell…)
  registry/   emits shadcn-compatible registry JSON
apps/
  storybook/  component dev environment
  docs/       Fumadocs documentation site + registry host
tooling/
  tsconfig/   shared TS config
  tailwind-preset/ shared theme CSS
```

## Getting started

```bash
pnpm install
pnpm tokens:build     # generate theme.css from DTCG sources
pnpm storybook        # component dev
pnpm docs             # docs site
```

## Multi-brand

Tokens are structured in three tiers:

1. **Primitive** — raw palettes, scales (`color.blue.500`, `space.4`)
2. **Semantic per-brand** — `color.bg.surface`, `color.fg.default` — swappable per brand
3. **Component** — thin, only where components need their own knob

Runtime theme swap via:

```html
<html data-brand="ecru" data-theme="dark">
```

No rebuild required — all semantic tokens are CSS custom properties.

## License

MIT. Includes code seeded from [shadcn/ui](https://ui.shadcn.com) (MIT) — see `NOTICE`.
