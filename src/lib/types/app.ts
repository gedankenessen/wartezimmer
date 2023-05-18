export type PersonType = "online" | "offline";

export type Id = string;

export type PersonId = string;
export type RoomId = string;

export interface Person {
  id: PersonId;
  short: string;
  color?: string;
  type?: PersonType;
}

export interface Room {
  id: RoomId;
  name: string;
}
