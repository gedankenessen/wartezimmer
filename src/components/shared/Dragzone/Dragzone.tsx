import React from 'react';
import styled from 'styled-components';

const DragzoneWrapper = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px dashed #B1B1B1;
`

export interface DragzoneProps {
  id: string;
}

export const Dragzone: React.FC<React.PropsWithChildren<DragzoneProps>> = ({ id, children }) => (
  <DragzoneWrapper>
    {children}
  </DragzoneWrapper>
)
