import { StoryObj } from "@storybook/react";
import { Timeline } from "./Timeline";

const meta = {
  title: "Board/Timeline",
  component: Timeline,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {},
};

export const WithPeople: Story = {
  args: {
    slots: [[], [], [], []],
  },
};
