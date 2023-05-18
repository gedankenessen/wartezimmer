import React from "react";
import {
  Dragzone,
  DragzoneProps,
} from "src/components/shared/Dragzone/Dragzone";
import styled from "styled-components";

const TimelineWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(8, 3.75rem);
  grid-template-columns: 1fr;
  grid-template-areas:
    "slot"
    "spacer"
    "slot"
    "spacer"
    "slot"
    "spacer"
    "slot"
    "spacer";

  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 30rem;
  background-color: #e1ece6;

  overflow: hidden;
`;

const TimeSlot = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
  margin: 0 1.2rem;
`;

const TimelineSpacer = styled.div`
  border: 1px dashed #cbd4cf;
`;

export interface TimelineProps {
  slots?: DragzoneProps[][];
}

export const Timeline: React.FC<TimelineProps> = ({ slots }) => (
  <TimelineWrapper>
    {slots &&
      slots.map((slot, key) => (
        <React.Fragment key={key}>
          <TimeSlot key={`slot-${key}`}>
            {slot &&
              slot.map((zone, key) => (
                <Dragzone key={key} {...zone}></Dragzone>
              ))}
          </TimeSlot>
          <TimelineSpacer key={`spacer-${key}`} />
        </React.Fragment>
      ))}
  </TimelineWrapper>
);
