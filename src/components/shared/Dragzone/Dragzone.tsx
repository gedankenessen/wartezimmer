import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { Person, PersonProps } from '../Person/Person';

const DragzoneWrapper = styled.div`
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px dashed #B1B1B1;
`

export interface Dragzone {
  id: string;
  person?: PersonProps | null;
}

export const Dragzone: React.FC<Dragzone> = ({ id, person }) => (
  <Droppable droppableId={id}>
    {
      provided => (
        <DragzoneWrapper {...provided.droppableProps} ref={provided.innerRef} >
          {person &&
            <Person {...person} />
          }
          {provided.placeholder}
        </DragzoneWrapper>
      )
    }
  </Droppable>
)
