// Registry build — walks packages/core and packages/blocks for *.meta.json,
// bundles each item with its source files, and emits a shadcn-compatible
// registry under apps/docs/public/r/ so the docs site serves them.
//
// Shape:
//   apps/docs/public/r/registry.json        — index
//   apps/docs/public/r/[name].json          — one file per component/block
//
// Consumers install via:
//   npx shadcn add https://docs.ecru.example.com/r/button.json

import fg from "fast-glob";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve, relative } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, "../../..");
const outDir = resolve(repoRoot, "apps/docs/public/r");
mkdirSync(outDir, { recursive: true });

const metas = await fg(["packages/core/src/**/*.meta.json", "packages/blocks/src/**/meta.json"], {
  cwd: repoRoot,
  absolute: true
});

const index = [];

for (const metaPath of metas) {
  const meta = JSON.parse(readFileSync(metaPath, "utf8"));
  const metaDir = dirname(metaPath);
  const pkgRoot = metaPath.includes("/packages/core/") ? resolve(repoRoot, "packages/core") : resolve(repoRoot, "packages/blocks");

  const files = (meta.files ?? []).map((f) => {
    const absPath = resolve(pkgRoot, f.path);
    return {
      path: f.path,
      type: f.type,
      content: readFileSync(absPath, "utf8"),
      target: f.target ?? ""
    };
  });

  const item = {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name: meta.name,
    type: meta.files?.[0]?.type === "registry:block" ? "registry:block" : "registry:ui",
    title: meta.title,
    description: meta.description,
    categories: meta.category ? [meta.category] : [],
    dependencies: meta.dependencies ?? [],
    registryDependencies: meta.registryDependencies ?? [],
    files,
    meta: {
      tags: meta.tags ?? [],
      status: meta.status,
      a11y: meta.a11y,
      usage: meta.usage,
      examples: meta.examples
    }
  };

  writeFileSync(resolve(outDir, `${meta.name}.json`), JSON.stringify(item, null, 2));
  index.push({
    name: meta.name,
    type: item.type,
    title: meta.title,
    description: meta.description,
    category: meta.category
  });
}

writeFileSync(
  resolve(outDir, "registry.json"),
  JSON.stringify(
    {
      $schema: "https://ui.shadcn.com/schema/registry.json",
      name: "ecru",
      homepage: "https://docs.ecru.example.com",
      items: index
    },
    null,
    2
  )
);

console.log(`✓ registry: ${index.length} items → ${relative(repoRoot, outDir)}`);
