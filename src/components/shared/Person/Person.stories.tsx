import { StoryObj } from '@storybook/react';
import { Person } from './Person';

const meta = {
  title: "Shared/Person",
  component: Person,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    id: "CS1",
    text: "CS"
  }
}
