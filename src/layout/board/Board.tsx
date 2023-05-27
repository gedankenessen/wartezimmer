import React from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { Timeline } from "src/components/board/Timeline/Timeline";
import { Timescale } from "src/components/board/Timescale/Timescale";
import { DragzoneProps } from "src/components/shared/Dragzone/Dragzone";
import { Room } from "src/components/shared/Room/Room";
import { useBoard } from "src/lib/board/board";
import { content } from "src/lib/css/util";
import styled from "styled-components";

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 3rem;
  background-color: ${(p) => p.theme.colors.green100};

  ${content()}
`;

const AppContent = styled.div`
  margin: auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 1.2rem;
`;

const TimelineWrapper = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  flex-direction: row;
  gap: 1.2rem;
`;

const RoomWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: end;
  gap: 1.2rem;
  align-self: end;
`;

export const Board: React.FC = () => {
  const { appointments, distribution, people, rooms, dispatch } = useBoard();

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

  const slots = Object.values(appointments).reduce<DragzoneProps[][]>(
    (total, next, index) => {
      // TODO: Find better solution for this
      // Timeslots in general are very messy; needs rethink!
      const personId = distribution[next.id]?.[0];
      const prop = { ...next, person: personId ? people[personId] : undefined };

      if (index % 4 === 0) {
        total.push([prop]);
      } else {
        total[total.length - 1].push(prop);
      }
      return total;
    },
    []
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <AppWrapper>
        <AppContent>
          <TimelineWrapper>
            <Timescale hour={13} />
            <Timeline slots={slots} />
          </TimelineWrapper>
          <RoomWrapper>
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
          </RoomWrapper>
        </AppContent>
      </AppWrapper>
    </DragDropContext>
  );
};
