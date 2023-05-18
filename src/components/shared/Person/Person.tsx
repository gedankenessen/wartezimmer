import React from "react";
import styled from "styled-components";
import { Draggable } from "../Draggable/Draggable";

const PersonWrapper = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  color: white;
  background-color: #2a3730;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  font-family: Sans-Serif;
  font-size: 1.6rem;
  line-height: 1.6rem;
  text-align: center;
`;

type PersonVariants = "full" | "border";

export interface PersonProps {
  id: string;
  index?: number;
  short: string;
  variant?: PersonVariants;
}

export const Person: React.FC<PersonProps> = ({
  id,
  index = 0,
  short,
  variant = "full",
}) => (
  <Draggable id={id} index={index}>
    <PersonWrapper>{short}</PersonWrapper>
  </Draggable>
);
