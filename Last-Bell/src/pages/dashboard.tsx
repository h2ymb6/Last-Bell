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
          <HiText>안녕, 태연!</HiText>
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

const HiText = styled.p`
  font-size: 50px;
  margin-top: 10px;
  margin-bottom: -10px;
  font-weight: 600;
`;

const MainContainer = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 30px;
`;

const LeftSection = styled.div`
  flex: 1.2;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const RightSection = styled.div`
  flex: 0.8;
  margin-top: 100px;
`;
