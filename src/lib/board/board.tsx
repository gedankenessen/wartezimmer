import React, { useContext, useReducer } from "react";
import { Person, PersonId, Room, RoomId } from "../types/app";
import { BoardAction, reducer } from "./reducer";

export type PeopleProps = Record<string, Person>;
export type RoomsProps = Record<string, Room>;

export type Distribution = Record<RoomId, PersonId[]>;

export interface BoardProviderProps {
  initialPeople?: PeopleProps;
  initialRooms?: RoomsProps;
  initialDistribution?: Distribution;
}

export interface BoardProviderData {
  people: PeopleProps;
  rooms: RoomsProps;
  distribution: Distribution;
  dispatch: React.Dispatch<BoardAction>;
}

const BoardContext = React.createContext<BoardProviderData>(
  {} as BoardProviderData
);

export const BoardProvider: React.FC<
  React.PropsWithChildren<BoardProviderProps>
> = ({
  initialPeople = {},
  initialRooms = {},
  initialDistribution = {},
  children,
}) => {
  const [{ people, rooms, distribution }, dispatch] = useReducer(reducer, {
    people: initialPeople,
    rooms: initialRooms,
    distribution: initialDistribution,
  });

  return (
    <BoardContext.Provider value={{ people, rooms, distribution, dispatch }}>
      {children}
    </BoardContext.Provider>
  );
};

export const useBoard = () => useContext(BoardContext);
