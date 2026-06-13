import styled from "styled-components";
import { Colors } from "../../styles/color";
import TimeUntilVacation from "../../utils/timeUntilVacation";

const VacationCountdown = () => {
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
  padding: 20px;
  width: 400px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  height: 124px;
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
