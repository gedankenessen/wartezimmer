import type { Preview } from "@storybook/react";
import { Providers } from '@lib/providers';

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
        { Story }
      </Providers>
    )
  ]
};

export default preview;
