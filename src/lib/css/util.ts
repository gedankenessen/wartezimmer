import { css } from "styled-components";
import { Breakpoint } from "./breakpoints";

export const content = (bp: Breakpoint = "s") => css`
  margin: 0 auto;
  width: ${(p) => p.theme.width.contentWidth};
`;
