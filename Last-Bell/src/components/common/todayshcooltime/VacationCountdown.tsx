import styled from "styled-components";
import { useEffect, useState } from "react";
import { Colors } from "@/styles/color";
import TimeUntilVacation from "@/utils/timeUntilVacation";

const VacationCountdown = () => {
  const [, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((prev) => prev + 1);
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const { label, theme } = TimeUntilVacation();

  return (
    <Wrapper>
      <Title>방학까지 남은 시간</Title>

      <CountBox>
        <CountLabel $theme={theme}>{label}</CountLabel>
      </CountBox>
    </Wrapper>
  );
};

export default VacationCountdown;

const Wrapper = styled.div`
  background-color: white;
  width: 100%;
  padding: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  box-sizing: border-box;
  height: 140px;
`;

const Title = styled.h1`
  font-size: 21px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const CountBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.Blue100};
  border-radius: 15px;
  padding: 20px;
`;

const themeColor = {
  normal: Colors.Blue900,
  warning: "#f59e0b",
  danger: "#ef4444",
  vacation: "#16a34a",
  done: "#6b7280",
};

const CountLabel = styled.div<{ $theme: keyof typeof themeColor }>`
  font-size: 25px;
  font-weight: 800;
  color: ${({ $theme }) => themeColor[$theme]};
`;
