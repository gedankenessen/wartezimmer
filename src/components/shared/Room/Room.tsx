import React from 'react';
import styled from 'styled-components';
import { Person, PersonProps } from '../Person/Person';

const RoomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.8rem;
  gap: 0.8rem;

  min-width: 20rem;

  background: #E1ECE6;
  border-radius: 8px;
`

const RoomTitle = styled.h3`
  font-family: Sans-Serif;
  font-size: 2.4rem;
  color: #2A3730;
  margin: 0;
  padding: 0;
`

const RoomPeopleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-height:  3.2rem;
  gap: 0.8rem;
`

export interface RoomProps {
  title: string;
  people: PersonProps[]
}

export const Room: React.FC<RoomProps> = ({ title, people }) => (
  <RoomWrapper>
    <RoomTitle>{title}</RoomTitle>
    <RoomPeopleWrapper>
      {
        people.map((person, key) =>
          <Person key={key} {...person} />
        )
      }
    </RoomPeopleWrapper>
  </RoomWrapper>
)