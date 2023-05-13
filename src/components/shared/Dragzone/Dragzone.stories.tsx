import { StoryObj } from '@storybook/react';
import { Dragzone } from './Dragzone';

const meta = {
  title: "Shared/Dragzone",
  component: Dragzone,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    id: "Z1",
  }
}

export const WithPerson: Story = {
  args: {
    id: "Z1",
    person: {
      id: "CS1",
      text: "CS"
    }
  }
}
