import type { Meta, StoryObj } from "@storybook/react-vite";
import { HeroCentered } from "./index";

const meta: Meta<typeof HeroCentered> = {
  title: "Blocks/Marketing/HeroCentered",
  component: HeroCentered,
  parameters: { layout: "fullscreen" }
};
export default meta;
type Story = StoryObj<typeof HeroCentered>;

export const Default: Story = {
  args: {
    eyebrow: "New · v1.0",
    title: "Design systems that move at the speed of AI.",
    description: "Composable, themeable, multi-brand. Built on Tailwind v4, shipped as a shadcn-compatible registry.",
    primaryAction: { label: "Get started", href: "#" },
    secondaryAction: { label: "View on GitHub", href: "#" }
  }
};
