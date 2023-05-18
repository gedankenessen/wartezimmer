import { Person, PersonId, RoomId } from "../types/app";
import { Distribution, PeopleProps, RoomsProps } from "./board";

export type BoardActionType =
  | "ADD_PERSON"
  | "REMOVE_PERSON"
  | "ADD_ROOM"
  | "REMOVE_ROOM"
  | "MOVE_PERSON";

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
  people: PeopleProps;
  rooms: RoomsProps;
  distribution: Distribution;
}

export const reducer = (state: BoardReducerState, action: BoardAction) => {
  let { distribution, people, rooms } = state;
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
      return { distribution, people, rooms };
    case "MOVE_PERSON":
      distribution = {
        ...distribution,
        // Add to new room
        [action.payload.destinationId]: [
          action.payload.personId,
          ...distribution[action.payload.destinationId],
        ],
        // Remove from old room
        [action.payload.sourceId]: distribution[action.payload.sourceId].filter(
          (id) => id !== action.payload.personId
        ),
      };
      return { distribution, people, rooms };
    default:
      return state;
  }
};
