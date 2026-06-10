import { useEffect, useState } from "react";
import styled from "styled-components";
import { Colors } from "../../styles/color";

type SelectedTime = "cb_2030" | "cb_1420";

interface DismissalProgressProps {
  selectedTime?: SelectedTime;
}

const DismissalProgress = ({
  selectedTime = "cb_1420",
}: DismissalProgressProps) => {
  const [timerText, setTimerText] = useState("시간 선택해");
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

  return (
    <Wrapper>
      <SideHeader>
        <SideTitle>하교까지 남은 시간</SideTitle>
      </SideHeader>

      <TimerText>{timerText}</TimerText>

      <ProgressContainer>
        <ProgressBar $percent={percent} />
      </ProgressContainer>

      <BottomRow>
        <Percent>{Math.floor(percent)}%</Percent>
        <TargetText>
          금요일 {selectedTime === "cb_2030" ? "20:30" : "14:20"}
        </TargetText>
      </BottomRow>
    </Wrapper>
  );
};

export default DismissalProgress;

const Wrapper = styled.div`
  margin-top: 20px;
  background-color: white;
  padding: 24px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  align-self: flex-start;
  height: 230px;
  width: 300px;
  box-sizing: border-box;
`;

const SideHeader = styled.div`
  border-bottom: 2px solid ${Colors.Blue200};
  padding-bottom: 12px;
  margin-bottom: 22px;
`;

const SideTitle = styled.h2`
  font-size: 21px;
  font-weight: 600;
  margin: 0;
`;

const TimerText = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 22px;
  line-height: 1.4;
`;

const ProgressContainer = styled.div`
  width: 100%;
  height: 16px;
  background-color: ${Colors.Blue200};
  border-radius: 999px;
  overflow: hidden;
`;

const ProgressBar = styled.div<{ $percent: number }>`
  width: ${({ $percent }) => `${$percent}%`};
  height: 100%;
  background-color: ${Colors.Blue500};
  border-radius: 999px;
  transition: width 0.3s ease;
`;

const BottomRow = styled.div`
  margin-top: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Percent = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: ${Colors.Blue800};
`;

const TargetText = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #777;
`;
