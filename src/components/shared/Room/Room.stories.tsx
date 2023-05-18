import { StoryObj } from "@storybook/react";
import { Room } from "./Room";

const meta = {
  title: "Shared/Room",
  component: Room,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    id: "lobby",
    name: "Lobby",
    people: [],
  },
};

export const WithPeople: Story = {
  args: {
    id: "lobby",
    name: "Lobby",
    people: [
      { id: "AB", short: "AB" },
      { id: "CD", short: "CD" },
      { id: "EF", short: "EF" },
    ],
  },
};
