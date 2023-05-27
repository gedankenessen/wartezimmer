import React from "react";
import { Clickable } from "src/components/shared/Clickable/Clickable";
import { Plus } from "src/icon/Plus";
import { content } from "src/lib/css/util";
import styled from "styled-components";

const HeaderWrapperOutter = styled.div`
  height: 3.4rem;
  ${content()}
  background-color: ${(p) => p.theme.colors.green200};
  border-radius: ${(p) => p.theme.radius.m};
  margin-top: 1rem;
`;

const HeaderWrapperInner = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;
  padding: 0 2.4rem;
`;

const HeaderAddUser = styled(Plus)`
  color: ${(p) => p.theme.colors.green700};
  width: 1.2rem;
  height: 1.2rem;
`;

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => (
  <HeaderWrapperOutter>
    <HeaderWrapperInner>
      <Clickable>
        <HeaderAddUser />
      </Clickable>
    </HeaderWrapperInner>
  </HeaderWrapperOutter>
);
