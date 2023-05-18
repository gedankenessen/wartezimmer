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
  height: 32rem;
  background-color: ${(p) => p.theme.colors.green200};
  padding: 1rem;
  overflow: hidden;
  border-radius: 1rem;
`;

const TimeSlot = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
  height: 3.2rem;
`;

const TimelineSpacer = styled.div`
  height: 2px;
  border-radius: 1rem;
  width: 100%;
  background-color: ${(p) => p.theme.colors.grey200};
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
              slot.map((zone, index) => (
                <Dragzone
                  key={index}
                  person={zone.person && { ...zone.person, index }}
                  {...zone}
                ></Dragzone>
              ))}
          </TimeSlot>
          <TimelineSpacer key={`spacer-${key}`} />
        </React.Fragment>
      ))}
  </TimelineWrapper>
);
