import styled from "styled-components";
import { Colors } from "../styles/color";

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <>
      <Wrapper>
        <Title>{title}</Title>
        <Right></Right>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  height: 50px;
  margin-top: 10px;
`;

const Right = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
`;
