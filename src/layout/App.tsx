import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Draggable } from 'src/components/shared/Draggable/Draggable';
import { Droppable } from 'src/components/shared/Droppable/Droppable';
import { Person } from 'src/components/shared/Person/Person';
import styled from 'styled-components';
import { Dragzone } from '../components/shared/Dragzone/Dragzone';

const AppWrapper = styled.div`
  max-width: 1024px;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`

const AppContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
`

export const App: React.FC = () => {

  const people: Record<string, { text: string }> =
  {
    "AB1": { text: "AB" },
    "CD1": { text: "CD" },
    "EF1": { text: "EF" },
    "GH1": { text: "GH" },
    "IJ1": { text: "IJ" }
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
  }
  );

  const handleOnDragEnd = (e: any) => {
    const { source, destination, draggableId } = e;

    if (!source || !destination) return;

    setZones({
      ...zones,
      [destination.droppableId]: draggableId,
      [source.droppableId]: null,
    })
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <AppWrapper>
        <AppContent>
          {
            Object.entries(zones).map(([id, person], key) =>
              <Dragzone key={key} id={id}>
                <Droppable id={id}>
                  {person &&
                    <Draggable id={person}>
                      <Person {...people[person]} />
                    </Draggable>
                  }
                </Droppable>
              </Dragzone>
            )
          }
        </AppContent>
      </AppWrapper>
    </DragDropContext>
  )
}
