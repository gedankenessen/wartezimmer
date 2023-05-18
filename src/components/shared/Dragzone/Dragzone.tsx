import React from "react";
import styled from "styled-components";
import { Droppable } from "../Droppable/Droppable";
import { Person, PersonProps } from "../Person/Person";

const DragzoneWrapperInner = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  border: 2px dashed #b1b1b1;
`;

const DragzoneWrapperOutter = styled(Droppable)``;

export interface DragzoneProps {
  id: string;
  person?: PersonProps;
}

export const Dragzone: React.FC<DragzoneProps> = ({ id, person }) => (
  <DragzoneWrapperOutter id={id}>
    <DragzoneWrapperInner>
      {person && <Person {...person} />}
    </DragzoneWrapperInner>
  </DragzoneWrapperOutter>
);
