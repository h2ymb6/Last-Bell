import { useEffect, useState } from "react";
import { format } from "date-fns";
import ScheduleApi from "@/apis/ScheduleApi";
import { getKSTDate } from "@/utils/today";

export default function useSchoolSchedule() {
  const [schedules, setSchedules] = useState<any[]>([]); //학사일정 전체 데이터 중 스케쥴
  const [currentDate, setCurrentDate] = useState(getKSTDate()); //달력의 현재 위치. 예) 6월 1일, 7월 1일 등
  const [selectedDate, setSelectedDate] = useState(getKSTDate()); //사용자가 선택한 날짜. 예) 6월 5일, 6월 10일 등

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  useEffect(() => {
    const fromDate = `${year}${String(month + 1).padStart(2, "0")}01`;

    const lastDay = new Date(year, month + 1, 0).getDate();

    const toDate =
      `${year}${String(month + 1).padStart(2, "0")}` +
      `${String(lastDay).padStart(2, "0")}`;

    const load = async () => {
      try {
        const res = await ScheduleApi(fromDate, toDate);

        const rowData = res.data.SchoolSchedule?.[1]?.row || [];

        const validSchedules = rowData.filter((item: any) => item.EVENT_NM); //스케쥴 있는 것만

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

  return {
    currentDate,
    selectedDate,
    selectedSchedules,
    hasSchedule,

    setSelectedDate,
    handleActiveStartDateChange,
  };
}
