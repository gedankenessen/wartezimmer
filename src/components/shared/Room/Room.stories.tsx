import { StoryObj } from '@storybook/react';
import { Room } from './Room';

const meta = {
  title: "Shared/Room",
  component: Room,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    title: "Lobby",
    people: []
  }
}

export const WithPeople: Story = {
  args: {
    title: "Lobby",
    people: [
      {text: "AB"},
      {text: "CD"},
      {text: "EF"}
    ]
  }
}
