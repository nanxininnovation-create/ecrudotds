import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Dialog, DialogTrigger, DialogContent,
  DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose
} from "./dialog";
import { Button } from "./button";

const meta: Meta = {
  title: "Core/Dialog",
  parameters: { layout: "centered" }
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm deletion</DialogTitle>
          <DialogDescription>
            This will permanently delete the project and all its data. This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button variant="danger">Delete project</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
};

export const Informational: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Learn more</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>About this feature</DialogTitle>
          <DialogDescription>
            This feature is currently in beta. We appreciate your feedback.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button>Got it</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
};
