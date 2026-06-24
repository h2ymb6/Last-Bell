import styled from "styled-components";
import { MainLayOut } from "../layouts/mainLayout";
import CalendarSection from "../components/schoolSchedule/Calendar";
import SideSchudule from "../components/schoolSchedule/SideSchudule";
import useSchoolSchedule from "../hooks/useSchoolSchedule";

export default function SchoolSchedule() {
  const {
    selectedDate,
    selectedSchedules,
    hasSchedule,
    setSelectedDate,
    handleActiveStartDateChange,
  } = useSchoolSchedule();
  
  return (
    <MainLayOut title="학사일정">
      <MainContainer>
        <CalendarSection
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          hasSchedule={hasSchedule}
          handleActiveStartDateChange={handleActiveStartDateChange}
        />

        <SideSchudule
          selectedDate={selectedDate}
          selectedSchedules={selectedSchedules}
        />
      </MainContainer>
    </MainLayOut>
  );
}

const MainContainer = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 20px;
`;
