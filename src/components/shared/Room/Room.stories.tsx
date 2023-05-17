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
    title: "Lobby",
    people: [],
  },
};

export const WithPeople: Story = {
  args: {
    id: "lobby",
    title: "Lobby",
    people: [
      { id: "AB", text: "AB" },
      { id: "CD", text: "CD" },
      { id: "EF", text: "EF" },
    ],
  },
};
