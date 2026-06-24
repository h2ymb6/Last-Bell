import { type ReactNode } from "react";
import { Header } from "./header";
import { LeftSideBar } from "./leftSideBar";
import styled from "styled-components";
import { Colors } from "../styles/color";

interface MainLayOutProps {
  children: ReactNode;
  title: string;
}

export const MainLayOut = ({ children, title }: MainLayOutProps) => {
  return (
    <Wrapper>
      <LeftSideBar />
      <Right>
        <Header title={title} />
        <Content>{children}</Content>
      </Right>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background-color: ${Colors.Blue50};
`;

const Right = styled.main`
  flex: 1;
  min-width: 0;
  min-height: 100vh;
  background-color: ${Colors.Blue50};
`;

const Content = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 24px clamp(16px, 3vw, 48px) 48px 0;
  display: flex;
  flex-direction: column;
  gap: 32px;

  > * {
    margin: 0;
  }
`;
