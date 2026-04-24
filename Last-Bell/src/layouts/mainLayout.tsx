import { type ReactNode } from "react";
import { Header } from "../components/layout/header";
import { LeftSideBar } from "../components/layout/leftSideBar";
import styled from "styled-components";
import { Colors } from "../styles/color";

interface MainLayOutProps {
  children: ReactNode;
}

export const MainLayOut = ({ children }: MainLayOutProps) => {
  return (
    <>
      <Wrapper>
        <LeftSideBar />
        <Right>
          <Header title="대시보드" />
          {children}
        </Right>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const Right = styled.div`
  width: 100%;
  background-color: ${Colors.Blue100};
`;
