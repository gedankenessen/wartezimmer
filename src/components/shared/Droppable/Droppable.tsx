import React from "react";
import { Direction, Droppable as _Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const DroppableWrapperOutter = styled(_Droppable)``;

const DroppableWrapperInner = styled.div``;

export interface DroppableProps {
  id: string;
  direction?: Direction;
}

export const Droppable: React.FC<React.PropsWithChildren<DroppableProps>> = ({
  id,
  direction = "horizontal",
  children,
}) => (
  <DroppableWrapperOutter droppableId={id} direction={direction}>
    {(provided) => (
      <DroppableWrapperInner
        {...provided.droppableProps}
        ref={provided.innerRef}
      >
        {children}
        {provided.placeholder}
      </DroppableWrapperInner>
    )}
  </DroppableWrapperOutter>
);
