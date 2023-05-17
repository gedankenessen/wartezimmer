import React from 'react';
import { Droppable as _Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const DroppableWrapper = styled.div``

export interface DroppableProps {
  id: string;
}

export const Droppable: React.FC<React.PropsWithChildren<DroppableProps>> = ({ id, children }) => (
  <_Droppable droppableId={id}>
    {
      provided => (
        <DroppableWrapper {...provided.droppableProps} ref={provided.innerRef} >
          {children}
          {provided.placeholder}
        </DroppableWrapper>
      )
    }
  </_Droppable>
)
