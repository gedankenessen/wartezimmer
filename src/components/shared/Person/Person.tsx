import React from 'react';
import styled from 'styled-components';

const PersonWrapper = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  background-color: #2A3730;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
`
const PersonText = styled.p`
  color: white;
  font-size: 1.6rem;
  line-height: 1.6rem;
  font-family: Sans-Serif;
`

type PersonVariants = 'full' | 'border';

export interface PersonProps {
  text: string;
  variant?: PersonVariants;
}

export const Person: React.FC<PersonProps> = ({ text, variant = "full" }) => (
  <PersonWrapper>
    <PersonText>{text}</PersonText>
  </PersonWrapper>
)
