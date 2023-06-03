import React from "react";
import type { Preview } from "@storybook/react";
import { DragDropContext } from "react-beautiful-dnd";
import { MockDroppable } from "../src/lib/mock/Droppable";
import { Providers } from "../src/lib/providers";

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
      <Providers>
        <DragDropContext onDragEnd={() => {}}>
          <MockDroppable>
            <Story />
          </MockDroppable>
        </DragDropContext>
      </Providers>
    ),
  ],
};

export default preview;
