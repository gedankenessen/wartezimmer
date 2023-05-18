import React, { useContext, useState } from "react";
import { DropResult, OnDragEndResponder } from "react-beautiful-dnd";
import { Person, PersonId, Room, RoomId } from "../types/app";

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
  //setPeople: React.Dispatch<React.SetStateAction<PeopleProps>>;
  //setRooms: React.Dispatch<React.SetStateAction<RoomsProps>>;
  onDragEnd: OnDragEndResponder;
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
  // TODO: Swap setPeople, setRooms for state reducer
  const [people, setPeople] = useState(initialPeople);
  const [rooms, setRooms] = useState(initialRooms);
  const [distribution, setDistritbution] = useState(initialDistribution);

  const onDragEnd = (result: DropResult) => {
    const { destination, draggableId, source } = result;

    if (!source || !destination) return;
    if (source.droppableId === destination.droppableId) return;

    setDistritbution({
      ...distribution,
      [destination.droppableId]: [
        ...distribution[destination.droppableId],
        draggableId,
      ],
      [source.droppableId]: distribution[source.droppableId].filter(
        (id) => id !== draggableId
      ),
    });
  };

  return (
    <BoardContext.Provider value={{ people, rooms, distribution, onDragEnd }}>
      {children}
    </BoardContext.Provider>
  );
};

export const useBoard = () => useContext(BoardContext);
