import { StoryObj } from "@storybook/react";
import { Timescale } from "./Timescale";

const meta = {
  title: "Board/Timescale",
  component: Timescale,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    hour: 13,
  },
};
