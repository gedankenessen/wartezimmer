import { StoryObj } from "@storybook/react";
import { Clickable } from "./Clickable";

const meta = {
  title: "Shared/Clickable",
  component: Clickable,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};
