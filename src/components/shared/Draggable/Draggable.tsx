import React, { PropsWithChildren } from "react";
import { Draggable as _Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const DraggableInnerWrapper = styled.div``;

export interface DraggableProps {
  id: string;
  index?: number;
}

export const Draggable: React.FC<PropsWithChildren<DraggableProps>> = ({
  id,
  index = -1,
  children,
}) => (
  <_Draggable draggableId={id} index={index}>
    {(provided) => (
      <DraggableInnerWrapper
        key={id}
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        {children}
      </DraggableInnerWrapper>
    )}
  </_Draggable>
);
