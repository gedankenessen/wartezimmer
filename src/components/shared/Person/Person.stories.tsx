import { MockDroppable } from '../../../lib/mock/Droppable';
import { StoryObj } from '@storybook/react';
import { Person } from './Person';

const meta = {
  title: "Shared/Person",
  component: Person,
  parameters: {
    decorators: [
      (Story: any) => <MockDroppable><Story /></MockDroppable>
    ]
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    text: "CS"
  }
}
