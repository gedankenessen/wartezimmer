import React from 'react';
import type { Preview } from "@storybook/react";
import { DragDropContext } from "react-beautiful-dnd";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <DragDropContext onDragEnd={() => { }}>
        <Story />
      </DragDropContext>
    )
  ]
};

export default preview;
