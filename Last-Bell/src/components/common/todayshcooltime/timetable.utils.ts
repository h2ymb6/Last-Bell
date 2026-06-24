import { PERIOD_TIMES } from "./timetable.constants";

export const getMinutes = (time: string) => {
  const [hour, minute] = time.split(":").map(Number);

  return hour * 60 + minute;
};

export const getCurrentPeriod = () => {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const currentPeriod = PERIOD_TIMES.find(({ start, end }) => {
    const startMinutes = getMinutes(start);
    const endMinutes = getMinutes(end);

    return currentMinutes >= startMinutes && currentMinutes <= endMinutes;
  });

  return currentPeriod?.period;
};
