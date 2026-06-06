import { useEffect, useState } from "react";
import styled from "styled-components";
import { format } from "date-fns";
import { MainLayOut } from "../layouts/mainLayout";
import ScheduleApi from "../apis/calender/index";

import CalendarSection from "../components/schoolSchedule/Calendar";
import ScheduleListSection from "../components/schoolSchedule/SideSchudule";

const SchoolSchedule = () => {
  const [schedules, setSchedules] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

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
        console.error("학사일정 로드 에러:", error);
      }
    };

    load();
  }, [year, month]);

  const handleActiveStartDateChange = ({
    activeStartDate,
  }: {
    activeStartDate: Date | null;
  }) => {
    if (activeStartDate) {
      setCurrentDate(activeStartDate);
    }
  };

  const selectedDateStr = format(selectedDate, "yyyyMMdd");
  const selectedSchedules = schedules.filter(
    (item: any) => item.AA_YMD === selectedDateStr,
  );

  const hasSchedule = (date: Date) => {
    const dateStr = format(date, "yyyyMMdd");
    return schedules.some((item: any) => item.AA_YMD === dateStr);
  };

  return (
    <MainLayOut title="학사 일정">
      <MainContainer>
        <CalendarSection
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          handleActiveStartDateChange={handleActiveStartDateChange}
          hasSchedule={hasSchedule}
        />
        <ScheduleListSection
          selectedDate={selectedDate}
          selectedSchedules={selectedSchedules}
        />
      </MainContainer>
    </MainLayOut>
  );
};

export default SchoolSchedule;

const MainContainer = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 20px;
`;
