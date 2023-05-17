import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { Room } from "src/components/shared/Room/Room";
import styled from "styled-components";

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 3rem;
`;

const AppContent = styled.div`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 1.2rem;
`;

export const RoomPlayground: React.FC = () => {
  const people: Record<string, { text: string }> = {
    AB1: { text: "AB" },
    CD1: { text: "CD" },
    EF1: { text: "EF" },
    GH1: { text: "GH" },
    IJ1: { text: "IJ" },
  };

  const [rooms, setRooms] = useState<Record<string, string[]>>({
    Z1: ["AB1", "IJ1"],
    Z2: [],
    Z3: ["CD1", "GH1", "EF1"],
    Z4: [],
  });

  const handleOnDragEnd = (e: any) => {
    const { source, destination, draggableId } = e;

    if (!source || !destination) return;

    setRooms({
      ...rooms,
      [destination.droppableId]: [
        ...rooms[destination.droppableId],
        draggableId,
      ],
      [source.droppableId]: rooms[source.droppableId].filter(
        (id: string) => id !== draggableId
      ),
    });
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <AppWrapper>
        <AppContent>
          {Object.entries(rooms).map(([id, names]) => (
            <Room
              key={id}
              id={id}
              title={id}
              people={names.map((id) => ({ ...people[id], id }))}
            />
          ))}
        </AppContent>
      </AppWrapper>
    </DragDropContext>
  );
};
