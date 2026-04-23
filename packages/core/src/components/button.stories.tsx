import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Core/Button",
  component: Button,
  args: { children: "Continue" },
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary", "outline", "ghost", "danger", "link"] },
    size: { control: "select", options: ["sm", "md", "lg", "icon"] }
  }
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { variant: "primary" } };
export const Secondary: Story = { args: { variant: "secondary" } };
export const Outline: Story = { args: { variant: "outline" } };
export const Ghost: Story = { args: { variant: "ghost" } };
export const Danger: Story = { args: { variant: "danger" } };
export const LinkLike: Story = { args: { variant: "link" } };

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="link">Link</Button>
    </div>
  )
};
