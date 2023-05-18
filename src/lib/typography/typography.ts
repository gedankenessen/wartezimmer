import { css } from "styled-components";

type TextType = "text" | "headline";

type TextWeight = "light" | "regular" | "semibold" | "bold" | "xbold";

export const text = (
  type: TextType = "text",
  weight: TextWeight = "regular"
) => css`
  font-size: 1.2rem;
  font-family: Sans-Serif;
  color: white;
`;
