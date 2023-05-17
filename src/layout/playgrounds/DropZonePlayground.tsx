import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { Draggable } from "src/components/shared/Draggable/Draggable";
import { Dragzone } from "src/components/shared/Dragzone/Dragzone";
import { Person } from "src/components/shared/Person/Person";
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

export const DropZonePlayground: React.FC = () => {
  const people: Record<string, { text: string }> = {
    AB1: { text: "AB" },
    CD1: { text: "CD" },
    EF1: { text: "EF" },
    GH1: { text: "GH" },
    IJ1: { text: "IJ" },
  };

  const [zones, setZones] = useState({
    Z1: "AB1",
    Z2: null,
    Z3: "CD1",
    Z4: null,
    Z5: null,
    Z6: null,
    Z7: "EF1",
    Z8: "GH1",
    Z9: "IJ1",
    Z10: null,
  });

  const handleOnDragEnd = (e: any) => {
    const { source, destination, draggableId } = e;

    if (!source || !destination) return;

    setZones({
      ...zones,
      [destination.droppableId]: draggableId,
      [source.droppableId]: null,
    });
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <AppWrapper>
        <AppContent>
          {Object.entries(zones).map(([id, name], key) => (
            <Dragzone key={key} id={id}>
              {name && (
                <Draggable id={name}>
                  <Person id={name} {...people[name]} />
                </Draggable>
              )}
            </Dragzone>
          ))}
        </AppContent>
      </AppWrapper>
    </DragDropContext>
  );
};
