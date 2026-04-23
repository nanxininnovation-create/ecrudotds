import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./input";

const meta: Meta<typeof Input> = {
  title: "Core/Input",
  component: Input,
  args: { placeholder: "Type something…" }
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};
export const Email: Story = { args: { type: "email", placeholder: "you@example.com" } };
export const Password: Story = { args: { type: "password", placeholder: "Password" } };
export const Disabled: Story = { args: { disabled: true, placeholder: "Disabled" } };
export const WithValue: Story = { args: { defaultValue: "hello@ecru.design" } };
