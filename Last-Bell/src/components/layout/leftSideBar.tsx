import styled from "styled-components";
import { Colors } from "../../styles/color";
import { BellImg } from "../../assets/Bell";
import { useNavigate, useLocation } from "react-router-dom";

export const LeftSideBar = () => {
  const navigate = useNavigate();

  const moveToDashBoard = () => {
    navigate("/");
  };

  const moveToExamAnd = () => {
    navigate("/ExamAnd");
  };

  const moveToFloorMap = () => {
    navigate("/FloorMap");
  };

  const moveToSchoolSchedule = () => {
    navigate("/SchoolSchedule");
  };
  const moveToSetting = () => {
    navigate("/Setting");
  };

  const moveToTimeTableAndMeal = () => {
    navigate("/TimeTableAndMeal");
  };

  return (
    <Wrapper>
      <Title>
        <BellImg />
        Last-Bell
      </Title>
      <WrapperS>
        <ListWrapper>
          <List onClick={moveToDashBoard}>대시보드</List>
          <List onClick={moveToExamAnd}>시험&수행평가</List>
          <List onClick={moveToSchoolSchedule}>학사일정</List>
          <List onClick={moveToFloorMap}>층별지도</List>
          <List onClick={moveToTimeTableAndMeal}>시간표&급식</List>
          <List onClick={moveToSetting}>설정</List>
        </ListWrapper>
      </WrapperS>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${Colors.Blue50};
  width: 300px;
  padding: 30px;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
`;

const WrapperS = styled.div`
  background-color: ${Colors.Blue200};
  height: 85vh;
  width: 200px;
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;
  font-weight: 800;
  color: ${Colors.Blue900};
  align-items: center;
  margin-right: 20px;
  margin-bottom: 20px;
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

  &:hover {
    background-color: ${Colors.Blue100};
  }
`;
