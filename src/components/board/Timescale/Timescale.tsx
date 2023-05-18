import React from "react";
import { text } from "src/lib/typography/typography";
import styled from "styled-components";

const TimescaleWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(8, 3.7rem);
  grid-template-columns: 6.8rem;
  grid-template-areas:
    "time"
    "spacer"
    "time"
    "spacer"
    "time"
    "spacer"
    "time"
    "spacer";

  justify-content: center;
  align-items: center;
  height: 32rem;
  background-color: ${(p) => p.theme.colors.green700};
  padding: 1rem 0;

  border-radius: 1rem;
`;

const TimescaleTime = styled.h3<{ $headline?: boolean }>`
  ${text("text")}
  font-size: ${(p) => (p.$headline ? "1.8rem" : "1.2rem")};
  text-align: center;
`;

const TimescaleSpacer = styled.div`
  width: 2px;
  height: 100%;
  border-radius: 1rem;
  background-color: ${(p) => p.theme.colors.green400};
  margin: auto;
  opacity: 0.4;
`;

export interface TimescaleProps {
  hour: number | string;
}

export const Timescale: React.FC<TimescaleProps> = ({ hour }) => (
  <TimescaleWrapper>
    <TimescaleTime $headline={true}>{hour}:00</TimescaleTime>
    <TimescaleSpacer />
    <TimescaleTime>{hour}:15</TimescaleTime>
    <TimescaleSpacer />
    <TimescaleTime>{hour}:30</TimescaleTime>
    <TimescaleSpacer />
    <TimescaleTime>{hour}:45</TimescaleTime>
    <TimescaleSpacer />
  </TimescaleWrapper>
);
