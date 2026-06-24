import { Colors } from "@/styles/color";
import TimeUntilExam from "@/utils/timeUntilExamCal";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getMotivationImage } from "@/utils/motivationImageStorage";
import defaultImg from "@/assets/DefaultMainImg.png";

const ExamNotice = () => {
  const [, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((prev) => prev + 1);
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const examInfo = TimeUntilExam();
  const isWarning = examInfo.theme === "warning";
  const isDanger = examInfo.theme === "danger";
  const isUrgent = isWarning || isDanger;

  const themeColor = isDanger
    ? "#ef4444"
    : isWarning
      ? "#f59e0b"
      : Colors.Blue500;

  const themeBg = isDanger ? "#fff1f2" : isWarning ? "#fffbeb" : "white";

  const shadowColor = isDanger
    ? "rgba(239, 68, 68, 0.22)"
    : isWarning
      ? "rgba(245, 158, 11, 0.22)"
      : "rgba(0, 0, 0, 0.08)";

  const savedImage = getMotivationImage();
  const imgSrc = savedImage ?? defaultImg;

  return (
    <Wrapper
      $isUrgent={isUrgent}
      $themeColor={themeColor}
      $themeBg={themeBg}
      $shadowColor={shadowColor}
    >
      <Top $isUrgent={isUrgent} $themeColor={themeColor}>
        시험까지 남은 시간:{" "}
        <Time $isUrgent={isUrgent} $themeColor={themeColor}>
          {examInfo.label}
        </Time>
      </Top>

      <Main $isUrgent={isUrgent} $themeColor={themeColor}>
        끝까지 포기하지마! <br /> 오늘도 힘내자!
        <Img src={imgSrc} alt="" />
      </Main>
    </Wrapper>
  );
};

export default ExamNotice;

const Img = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  right: 50px;
  margin-top: -20px;
  position: absolute;
`;

const Wrapper = styled.div<{
  $isUrgent: boolean;
  $themeColor: string;
  $themeBg: string;
  $shadowColor: string;
}>`
  background: ${({ $themeBg }) => $themeBg};
  box-shadow: 0 10px 30px ${({ $shadowColor }) => $shadowColor};
  width: 100%;
  height: 280px;
  border-radius: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  padding-left: 40px;
  padding-bottom: 40px;
  box-sizing: border-box;
  border: ${({ $isUrgent, $themeColor }) =>
    $isUrgent ? `2px solid ${$themeColor}` : "none"};
`;

const Top = styled.div<{ $isUrgent: boolean; $themeColor: string }>`
  display: flex;
  font-size: ${({ $isUrgent }) => ($isUrgent ? "26px" : "22px")};
  font-weight: 700;
  align-items: center;
  color: ${({ $isUrgent, $themeColor }) =>
    $isUrgent ? $themeColor : "inherit"};
`;

const Time = styled.div<{ $themeColor: string; $isUrgent: boolean }>`
  border-bottom: 4px solid ${({ $themeColor }) => $themeColor};
  margin-left: 5px;
  font-size: ${({ $isUrgent }) => ($isUrgent ? "34px" : "26px")};
  font-weight: 800;
  color: ${({ $themeColor }) => $themeColor};
`;

const Main = styled.div<{ $isUrgent: boolean; $themeColor: string }>`
  font-size: ${({ $isUrgent }) => ($isUrgent ? "38px" : "33px")};
  font-weight: 700;
  color: ${({ $isUrgent, $themeColor }) =>
    $isUrgent ? $themeColor : "inherit"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
