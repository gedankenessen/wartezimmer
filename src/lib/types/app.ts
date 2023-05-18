export type PersonType = "online" | "offline";

export type Id = string;

export type PersonId = string;
export type RoomId = string;
export type AppointmentId = string;

export type SpaceId = RoomId | AppointmentId;

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

export interface Appointment {
  id: AppointmentId;
  index?: number;
}
