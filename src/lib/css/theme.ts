import { breakpoints } from "./breakpoints";

export const theme = {
  colors: {
    white: "white",
    black: "#141414",

    green100: "#F4F7F5",
    green200: "#e1ece6",
    green300: "#CCE0D5",
    green400: "#cbd4cf",
    green600: "#6A7B72",
    green700: "#2a3730",

    grey100: "#F4F4F4",
    grey200: "#DDDDDD",
    grey400: "#c2c2c2",
    grey500: "#AAAAAA",
  },

  radius: {
    s: "0.5rem",
    m: "1rem",
  },

  width: {
    contentWidth: `calc(100% - 12rem)`,
    boardWidth: `calc(100% - 18rem)`,
  },

  breakpoints: breakpoints,
};
