import { useEffect, useState } from "react";

type SelectedTime = "cb_2030" | "cb_1420";

export default function useFridayCountDown(selectedTime: SelectedTime) {
  const [timerText, setTimerText] = useState("");
  const [percent, setPercent] = useState(0);

  const getTargetTime = (hour: number, minute: number) => {
    const now = new Date();
    const target = new Date();

    target.setHours(hour, minute, 0, 0);
    target.setDate(target.getDate() + ((5 - target.getDay() + 7) % 7));

    if (now.getDay() === 5) {
      const todayTarget = new Date();
      todayTarget.setHours(hour, minute, 0, 0);

      if (now > todayTarget) {
        target.setDate(target.getDate() + 7);
      }
    }

    return target;
  };

  const getSundayReset = () => {
    const now = new Date();
    const sunday = new Date(now);

    sunday.setDate(now.getDate() + ((0 - now.getDay() + 7) % 7));
    sunday.setHours(18, 0, 0, 0);

    return sunday;
  };

  const getWeekStart = () => {
    const now = new Date();
    const monday = new Date(now);

    const day = now.getDay();
    const diffToMon = (day + 6) % 7;

    monday.setDate(now.getDate() - diffToMon);
    monday.setHours(0, 0, 0, 0);

    if (day === 0 && now.getHours() >= 18) {
      monday.setDate(monday.getDate() + 7);
    }

    return monday;
  };

  useEffect(() => {
    const updateTimer = () => {
      const [hour, minute] = selectedTime === "cb_2030" ? [20, 30] : [14, 20];

      const target = getTargetTime(hour, minute);
      const now = new Date();

      const todayFridayTarget = new Date();
      todayFridayTarget.setHours(hour, minute, 0, 0);
      todayFridayTarget.setDate(
        todayFridayTarget.getDate() +
          ((5 - todayFridayTarget.getDay() + 7) % 7),
      );

      const sundayReset = getSundayReset();

      const afterTargetOnFriday = now > todayFridayTarget;

      const inWeekendRange =
        now.getTime() > todayFridayTarget.getTime() &&
        now.getTime() < sundayReset.getTime();

      if (afterTargetOnFriday || inWeekendRange) {
        setTimerText("집 갈 시간!");
        setPercent(100);
        return;
      }

      const diff = target.getTime() - now.getTime();

      const totalSeconds = Math.floor(diff / 1000);

      const hoursLeft = Math.floor(totalSeconds / 3600);

      const minutesLeft = Math.floor((totalSeconds % 3600) / 60);

      const seconds = totalSeconds % 60;

      setTimerText(`${hoursLeft}시간 ${minutesLeft}분 ${seconds}초 남음`);

      const start = getWeekStart();

      const total = target.getTime() - start.getTime();

      const passed = now.getTime() - start.getTime();

      const progress = Math.min(Math.max((passed / total) * 100, 0), 100);

      setPercent(progress);
    };

    updateTimer();

    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [selectedTime]);

  return {
    timerText,
    percent,
  };
}
