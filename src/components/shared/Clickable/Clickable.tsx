import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const ClickableWrapper = styled.button`
  cursor: pointer;
  background: none;
  border: none;
`;
const LinkWrapper = styled.a``;

export interface ButtonProps {
  as?: "button";
}

export interface LinkProps {
  as: "a";
}

export type ClickableProps = ButtonProps | LinkProps;

export const Clickable: React.FC<PropsWithChildren<ClickableProps>> = ({
  as = "button",
  children,
  ...props
}) => {
  switch (as) {
    case "a":
      return <LinkWrapper {...props}>{children}</LinkWrapper>;
    default:
      return <ClickableWrapper {...props}>{children}</ClickableWrapper>;
  }
};
