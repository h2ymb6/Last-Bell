import { useEffect, useState } from "react";
import styled from "styled-components";
import { format } from "date-fns";
import { MainLayOut } from "../layouts/mainLayout";
import ScheduleApi from "../apis/calender/index";

import ExamNotice from "../components/dashBoard/ExamNotice";
import TodaySchoolMeal from "../components/meal/index";
import ScheduleListSection from "../components/schoolSchedule/SideSchudule";

const DashBoard = () => {
  const [schedules, setSchedules] = useState([]);
  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth();

  useEffect(() => {
    const fromDate = `${year}${String(month + 1).padStart(2, "0")}01`;
    const lastDay = new Date(year, month + 1, 0).getDate();
    const toDate = `${year}${String(month + 1).padStart(2, "0")}${String(lastDay).padStart(2, "0")}`;

    const load = async () => {
      try {
        const res = await ScheduleApi(fromDate, toDate);
        const rowData = res.data.SchoolSchedule?.[1]?.row || [];
        const validSchedules = rowData.filter((item: any) => item.EVENT_NM);
        setSchedules(validSchedules);
      } catch (error) {
        console.error("대시보드 학사일정 로드 에러:", error);
      }
    };

    load();
  }, [year, month]);

  const todayStr = format(today, "yyyyMMdd");
  const todaySchedules = schedules.filter(
    (item: any) => item.AA_YMD === todayStr,
  );

  return (
    <MainLayOut title="대시보드">
      <MainContainer>
        <LeftSection>
          <ExamNotice />
          <TodaySchoolMeal />
        </LeftSection>

        <RightSection>
          <ScheduleListSection
            selectedDate={today}
            selectedSchedules={todaySchedules}
          />
        </RightSection>
      </MainContainer>
    </MainLayOut>
  );
};

export default DashBoard;

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 420px;
  gap: 32px;
  width: 100%;
  box-sizing: border-box;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const RightSection = styled.div`
  margin: 0;
`;
