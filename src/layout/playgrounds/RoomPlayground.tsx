import React from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { Room } from "src/components/shared/Room/Room";
import { useBoard } from "src/lib/board/board";
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
  const { distribution, people, rooms, dispatch } = useBoard();

  const onDragEnd = (result: DropResult) => {
    const { destination, draggableId, source } = result;

    if (!source || !destination) return;
    if (source.droppableId === destination.droppableId) return;

    dispatch({
      type: "MOVE_PERSON",
      payload: {
        personId: draggableId,
        sourceId: source.droppableId,
        destinationId: destination.droppableId,
      },
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <AppWrapper>
        <AppContent>
          {Object.entries(rooms).map(([_, room], key) => (
            <Room
              key={key}
              {...room}
              people={distribution[room.id].map((id, index) => ({
                ...people[id],
                index,
              }))}
            />
          ))}
        </AppContent>
      </AppWrapper>
    </DragDropContext>
  );
};
