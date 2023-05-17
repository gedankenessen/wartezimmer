import React, { PropsWithChildren } from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const DroppableChildWrapper = styled.div``;

export const MockDroppable: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => (
  <Droppable droppableId="test">
    {() => <DroppableChildWrapper>{children}</DroppableChildWrapper>}
  </Droppable>
);
