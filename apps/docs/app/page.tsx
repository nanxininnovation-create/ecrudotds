import { HeroCentered } from "@ecru/blocks";

export default function HomePage() {
  return (
    <main>
      <HeroCentered
        eyebrow="Ecru Design System"
        title="AI-ready, multi-brand design system."
        description="Tailwind v4, DTCG tokens, shadcn-compatible registry, Storybook, and docs — all owned."
        primaryAction={{ label: "Read the docs", href: "/docs" }}
        secondaryAction={{ label: "View registry", href: "/r/registry.json" }}
      />
    </main>
  );
}
