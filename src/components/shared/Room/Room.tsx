import React from "react";
import styled from "styled-components";
import { Droppable } from "../Droppable/Droppable";
import { Person, PersonProps } from "../Person/Person";

const RoomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.8rem;
  gap: 0.8rem;

  min-width: 20rem;

  background-color: ${(p) => p.theme.colors.green200};
  border-radius: 8px;

  transition: background-color 0.3s;

  &:hover,
  &:active,
  &:focus-visible {
    background-color: ${(p) => p.theme.colors.green400};
  }
`;

const RoomTitle = styled.h3`
  font-family: Sans-Serif;
  font-size: 2.2rem;
  font-weight: 400;
  color: ${(p) => p.theme.colors.green700};
  margin: 0;
  padding: 0;
`;

const RoomPeopleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 3.2rem;
  gap: 0.8rem;
`;

export interface RoomProps {
  id: string;
  name: string;
  people: PersonProps[];
}

export const Room: React.FC<RoomProps> = ({ id, name, people }) => (
  <Droppable id={id}>
    <RoomWrapper>
      <RoomTitle>{name}</RoomTitle>
      <RoomPeopleWrapper>
        {people.map((person, key) => (
          <Person key={key} index={key} {...person} />
        ))}
      </RoomPeopleWrapper>
    </RoomWrapper>
  </Droppable>
);
