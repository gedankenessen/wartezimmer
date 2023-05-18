import React, { useContext, useReducer } from "react";
import { Appointment, Person, PersonId, Room, SpaceId } from "../types/app";
import { BoardAction, reducer } from "./reducer";

export type PeopleProps = Record<string, Person>;
export type RoomsProps = Record<string, Room>;
export type AppointmentProps = Record<string, Appointment>;

export type Distribution = Record<SpaceId, PersonId[]>;

export interface BoardProviderProps {
  initialAppointments?: AppointmentProps;
  initialPeople?: PeopleProps;
  initialRooms?: RoomsProps;
  initialDistribution?: Distribution;
}

export interface BoardProviderData {
  appointments: AppointmentProps;
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
  initialAppointments = {},
  initialPeople = {},
  initialRooms = {},
  initialDistribution = {},
  children,
}) => {
  const [{ appointments, people, rooms, distribution }, dispatch] = useReducer(
    reducer,
    {
      appointments: initialAppointments,
      people: initialPeople,
      rooms: initialRooms,
      distribution: initialDistribution,
    }
  );

  return (
    <BoardContext.Provider
      value={{ appointments, people, rooms, distribution, dispatch }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export const useBoard = () => useContext(BoardContext);
