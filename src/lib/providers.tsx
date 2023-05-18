import React, { PropsWithChildren } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { ThemeProvider } from "styled-components";
import { theme } from "./css/theme";

export const Providers: React.FC<PropsWithChildren<{}>> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <DragDropContext onDragEnd={() => {}}>{children}</DragDropContext>
  </ThemeProvider>
);
