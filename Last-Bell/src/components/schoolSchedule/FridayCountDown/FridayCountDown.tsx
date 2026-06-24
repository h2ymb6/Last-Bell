import styled from "styled-components";
import { Colors } from "../../../styles/color";
import useFridayCountDown from "./useFridayCountDown";

type SelectedTime = "cb_2030" | "cb_1420";

interface FridayCountDownProps {
  selectedTime?: SelectedTime;
}

export default function FridayCountDown({
  selectedTime = "cb_1420",
}: FridayCountDownProps) {
  const { timerText, percent } = useFridayCountDown(selectedTime);

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
}

const Wrapper = styled.div`
  margin-top: 20px;
  background-color: white;
  padding: 24px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  align-self: flex-start;
  height: 230px;
  width: 100%;
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
