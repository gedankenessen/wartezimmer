import React from 'react';
import styled from 'styled-components';
import { Droppable } from '../Droppable/Droppable';

const DragzoneWrapper = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  border: 2px dashed #B1B1B1;
`

const DragzoneContent = styled(Droppable)`
`

export interface DragzoneProps {
  id: string;
}

export const Dragzone: React.FC<React.PropsWithChildren<DragzoneProps>> = ({ id, children }) => (
    <DragzoneContent id={id}>
      <DragzoneWrapper>
          {children}
      </DragzoneWrapper>
    </DragzoneContent>
)
