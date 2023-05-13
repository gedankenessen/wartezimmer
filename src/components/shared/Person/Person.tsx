import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const PersonWrapper = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  background-color: #2A3730;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
`
const PersonText = styled.p`
  color: white;
  font-size: 1.6rem;
  line-height: 1.6rem;
  font-family: Sans-Serif;
`

type PersonVariants = 'full' | 'border';

export interface PersonProps {
  id: string;
  text: string;
  variant?: PersonVariants;
}

export const Person: React.FC<PersonProps> = ({ text, id, variant = "full" }) => (
  <Draggable draggableId={id} index={-1}>
    {
      (provided) => (
        <PersonWrapper key={id} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <PersonText>{text}</PersonText>
        </PersonWrapper>
      )
    }
  </Draggable>
)
