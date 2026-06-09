import { MainLayOut } from "../layouts/mainLayout";
import TodaySchoolMeal from "../components/meal";
import styled from "styled-components";
import TodaySchoolTimetable from "../components/TimeTable";

const TimeTableAndMeal = () => {
  return (
    <MainLayOut title="시간표&급식">
      <MainContainer>
        <TodaySchoolTimetable />
        <TodaySchoolMeal />
      </MainContainer>
    </MainLayOut>
  );
};

export default TimeTableAndMeal;

const MainContainer = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 30px;
`;
