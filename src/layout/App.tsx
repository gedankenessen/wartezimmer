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
    Z1: { id: "Z1", name: "Lobby" },
    Z2: { id: "Z2", name: "Behandlung" },
    Z3: { id: "Z3", name: "Wartezimmer" },
    Z4: { id: "Z4", name: "Inspektion" },
  };

  const distribution = {
    Z1: ["AB", "IJ"],
    Z2: ["CD", "GH", "EF", "KM", "NO", "PQ"],
    Z3: [],
    Z4: ["RS", "TV", "WU"],
  };

  return (
    <BoardProvider
      initialPeople={people}
      initialRooms={rooms}
      initialDistribution={distribution}
    >
      <RoomPlayground />
    </BoardProvider>
  );
};
