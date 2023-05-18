import { Person, PersonId, RoomId } from "../types/app";
import {
  AppointmentProps,
  Distribution,
  PeopleProps,
  RoomsProps,
} from "./board";

export type BoardActionType = "ADD_PERSON" | "MOVE_PERSON";

export interface BoardActionAddPerson {
  type: "ADD_PERSON";
  payload: {
    person: Person;
    roomId: RoomId;
  };
}

export interface BoardActionMovePerson {
  type: "MOVE_PERSON";
  payload: {
    personId: PersonId;
    sourceId: RoomId;
    destinationId: RoomId;
  };
}

export type BoardAction = BoardActionAddPerson | BoardActionMovePerson;

export interface BoardReducerState {
  appointments: AppointmentProps;
  people: PeopleProps;
  rooms: RoomsProps;
  distribution: Distribution;
}

export const reducer = (state: BoardReducerState, action: BoardAction) => {
  let { appointments, distribution, people, rooms } = state;
  switch (action.type) {
    case "ADD_PERSON":
      // Set person
      people = {
        ...people,
        [action.payload.person.id]: action.payload.person,
      };

      // Check room
      if (action.payload.roomId && rooms[action.payload.roomId]) {
        distribution = {
          ...distribution,
          [action.payload.roomId]: [
            ...distribution[action.payload.roomId],
            action.payload.person.id,
          ],
        };
      }
      return { appointments, distribution, people, rooms };
    case "MOVE_PERSON":
      distribution = {
        ...distribution,
        // Add to room
        [action.payload.destinationId]: [
          action.payload.personId,
          ...distribution[action.payload.destinationId],
        ],
        // Remove from appointment
        [action.payload.sourceId]: distribution[action.payload.sourceId].filter(
          (id) => action.payload.personId !== id
        ),
      };
      return { appointments, distribution, people, rooms };
    default:
      return state;
  }
};
