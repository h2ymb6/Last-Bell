import { useEffect, useState } from "react";
import { format } from "date-fns";
import ScheduleApi from "../apis/ScheduleApi";

export const useTodaySchedules = () => {
  const [schedules, setSchedules] = useState([]);

  const today = new Date();

  useEffect(() => {
    const year = today.getFullYear();
    const month = today.getMonth();

    const fromDate = `${year}${String(month + 1).padStart(2, "0")}01`; //달 시작일

    const lastDay = new Date(year, month + 1, 0).getDate(); //마지막날 뽑아내기

    const toDate = `${year}${String(month + 1).padStart(2, "0")}${String(
      lastDay,
    ).padStart(2, "0")}`;

    const load = async () => {
      try {
        const res = await ScheduleApi(fromDate, toDate);

        const rowData = res.data.SchoolSchedule?.[1]?.row || [];

        const validSchedules = rowData.filter((item: any) => item.EVENT_NM); //행사 있는 것만

        setSchedules(validSchedules);
      } catch (error) {
        console.error(error);
      }
    };

    load();
  }, []);

  const todayStr = format(today, "yyyyMMdd");

  const todaySchedules = schedules.filter(
    (item: any) => item.AA_YMD === todayStr,
  );

  return {
    today,
    todaySchedules,
  };
};
