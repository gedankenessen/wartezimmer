import React from "react";
import { BoardProvider } from "src/lib/board/board";
import { RoomPlayground } from "./playgrounds/RoomPlayground";

export const App: React.FC = () => {
  const people = {
    AB: { id: "AB", short: "AB" },
    CD: { id: "CD", short: "CD" },
    EF: { id: "EF", short: "EF" },
    GH: { id: "GH", short: "GH" },
    IJ: { id: "IJ", short: "IJ" },
    KM: { id: "KM", short: "KM" },
    NO: { id: "NO", short: "NO" },
    PQ: { id: "PQ", short: "PQ" },
    RS: { id: "RS", short: "RS" },
    TV: { id: "TV", short: "TV" },
    WU: { id: "WU", short: "WU" },
  };

  const rooms = {
    R1: { id: "R1", name: "Lobby" },
    R2: { id: "R2", name: "Behandlung" },
    R3: { id: "R3", name: "Wartezimmer" },
    R4: { id: "R4", name: "Inspektion" },
  };

  const distribution = {
    // Rooms
    R1: ["AB", "IJ"],
    R2: ["CD", "GH", "EF", "KM", "NO", "PQ"],
    R3: [],
    R4: ["RS", "TV", "WU"],
    // Appointments
    A1: [],
    A2: [],
    A3: [],
    A4: [],
    B1: [],
    B2: [],
    B3: [],
    B4: [],
    C1: [],
    C2: [],
    C3: [],
    C4: [],
    D1: [],
    D2: [],
    D3: [],
    D4: [],
  };

  const appoinments = {
    A1: { id: "A1" },
    A2: { id: "A2" },
    A3: { id: "A3" },
    A4: { id: "A4" },
    B1: { id: "B1" },
    B2: { id: "B2" },
    B3: { id: "B3" },
    B4: { id: "B4" },
    C1: { id: "C1" },
    C2: { id: "C2" },
    C3: { id: "C3" },
    C4: { id: "C4" },
    D1: { id: "D1" },
    D2: { id: "D2" },
    D3: { id: "D3" },
    D4: { id: "D4" },
  };
  return (
    <BoardProvider
      initialAppointments={appoinments}
      initialPeople={people}
      initialRooms={rooms}
      initialDistribution={distribution}
    >
      <RoomPlayground />
    </BoardProvider>
  );
};
