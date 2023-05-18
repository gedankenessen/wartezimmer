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
  };

  const rooms = {
    Z1: { id: "Z1", name: "Lobby" },
    Z2: { id: "Z2", name: "Behandlung" },
    Z3: { id: "Z3", name: "Wartezimmer" },
    Z4: { id: "Z4", name: "Inspektion" },
  };

  const distribution = {
    Z1: ["AB", "IJ"],
    Z2: [],
    Z3: ["CD", "GH", "EF"],
    Z4: [],
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
