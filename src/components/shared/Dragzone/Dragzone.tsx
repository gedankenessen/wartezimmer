import React from "react";
import styled from "styled-components";
import { Droppable } from "../Droppable/Droppable";
import { Person, PersonProps } from "../Person/Person";

const DragzoneWrapperInner = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  outline: 2px dashed ${(p) => p.theme.colors.grey400};

  transition: outline-color 0.3s;

  &:hover,
  &:active,
  &:focus-visible {
    outline-color: ${(p) => p.theme.colors.green700};
  }
`;

const DragzoneWrapperOutter = styled(Droppable)``;

export interface DragzoneProps {
  id: string;
  person?: PersonProps;
}

export const Dragzone: React.FC<DragzoneProps> = ({ id, person }) => (
  <DragzoneWrapperOutter id={id} direction="horizontal">
    <DragzoneWrapperInner>
      {person && <Person {...person} />}
    </DragzoneWrapperInner>
  </DragzoneWrapperOutter>
);
