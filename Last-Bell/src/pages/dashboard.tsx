import styled from "styled-components";
import { MainLayOut } from "../layouts/mainLayout";
import {
  FridayCountDown,
  TodaySchoolMeal,
  VacationCountdown,
  SideSchudule,
  TodaySchoolTimetable,
  ExamNotice,
} from "../components/dashBoard/index";
import { useTodaySchedules } from "../hooks/useTodaySchedules";

export default function DashBoard() {
  const { today, todaySchedules } = useTodaySchedules();

  return (
    <MainLayOut title="대시보드">
      <MainContainer>
        <LeftSection>
          <ExamNotice />
          <TodaySchoolMeal />
        </LeftSection>

        <RightSection>
          <VacationCountdown />
          <TodaySchoolTimetable />

          <SideWidgets>
            <FridayCountDown selectedTime="cb_1420" />
          </SideWidgets>

          <SideSchudule
            selectedDate={today}
            selectedSchedules={todaySchedules}
          />
        </RightSection>
      </MainContainer>
    </MainLayOut>
  );
}

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 24px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: 0;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
`;

const SideWidgets = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
