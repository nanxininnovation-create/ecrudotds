import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./card";
import { Button } from "./button";

const meta: Meta<typeof Card> = {
  title: "Core/Card",
  component: Card,
  parameters: { layout: "centered" }
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Card title</CardTitle>
        <CardDescription>A brief description of what this card contains.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-fg-muted">Card body content goes here.</p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button size="sm">Confirm</Button>
        <Button size="sm" variant="outline">Cancel</Button>
      </CardFooter>
    </Card>
  )
};

export const Simple: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm">You have 3 unread messages.</p>
      </CardContent>
    </Card>
  )
};
