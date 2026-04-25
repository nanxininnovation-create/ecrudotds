import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../../../packages/core/src/**/*.stories.@(ts|tsx)",
    "../../../packages/core/src/**/*.mdx",
    "../../../packages/blocks/src/**/*.stories.@(ts|tsx)",
    "../../../packages/blocks/src/**/*.mdx"
  ],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-themes",
    "@chromatic-com/storybook"
  ],
  framework: { name: "@storybook/react-vite", options: {} },
  typescript: { reactDocgen: "react-docgen-typescript" }
};

export default config;
