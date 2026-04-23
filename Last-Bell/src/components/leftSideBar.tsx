import styled from "styled-components";
import { Colors } from "../styles/color";
import { BellImg } from "../assets/Bell";

export const LeftSideBar = () => {
  return (
    <Wrapper>
      <Title>
        <BellImg />
        Last-Bell
      </Title>

      <ListWrapper>
        <List_Main>대시보드</List_Main>
        <List>시험&수행평가</List>
        <List>학사 일정</List>
        <List>층별 지도</List>
        <List>시간표&급식</List>
        <List>설정</List>
      </ListWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${Colors.Blue300};
  width: 300px;
  padding: 30px;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;
  font-weight: 800;
  color: ${Colors.Blue900};
  align-items: center;
  margin-right: 20px;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  font-size: 20px;
  gap: 20px;
  margin-top: 30px;
`;

const List = styled.div`
  border-radius: 10px;
  padding: 18px 20px;
  font-size: 20px;
  cursor: pointer;
`;

const List_Main = styled.div`
  border-radius: 10px;
  padding: 18px 20px;
  font-size: 20px;
  cursor: pointer;
  background-color: ${Colors.Blue500};
  color: ${Colors.White};
`;
