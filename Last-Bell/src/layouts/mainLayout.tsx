import { type ReactNode } from "react";
import { Header } from "../components/header";
import { LeftSideBar } from "../components/leftSideBar";
import styled from "styled-components";

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
`;
