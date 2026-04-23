// llms.txt — curated map of docs URLs for LLMs / coding agents.
// Hosted at /llms.txt. See https://llmstxt.org

export const dynamic = "force-static";

export function GET() {
  const body = [
    "# Ecru Design System",
    "",
    "> An AI-ready, multi-brand design system built on Tailwind v4.",
    "",
    "## Docs",
    "- [Introduction](/docs): overview of the system",
    "- [Tokens](/docs/tokens): design token architecture",
    "- [Theming](/docs/theming): runtime brand + mode switching",
    "- [Components](/docs/components): atomic components reference",
    "- [Blocks](/docs/blocks): composed blocks for rapid assembly",
    "",
    "## Registry (installable via shadcn CLI)",
    "- [Index](/r/registry.json)",
    "- [Button](/r/button.json)",
    "- [Hero Centered](/r/hero-centered.json)",
    "",
    "## Full content",
    "- [llms-full.txt](/llms-full.txt): concatenated markdown of every docs page",
    ""
  ].join("\n");

  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
