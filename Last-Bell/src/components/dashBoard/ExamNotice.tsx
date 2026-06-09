import { Colors } from "../../styles/color";
import TimeUntilExam from "../../utils/timeUntilExamCal";
import styled from "styled-components";
import img from "../../assets/cat.png";

const ExamNotice = () => {
  const examInfo = TimeUntilExam();

  const timeColor =
    examInfo.theme === "danger"
      ? "#ef4444"
      : examInfo.theme === "warning"
        ? "#f59e0b"
        : Colors.Blue500;

  return (
    <Wrapper>
      <Top>
        시험까지 남은 시간: <Time $timeColor={timeColor}>{examInfo.label}</Time>
      </Top>

      <Main>
        끝까지 포기하지마! <br /> 오늘도 힘내자!
        <Img src={img} alt="" />
      </Main>
    </Wrapper>
  );
};

export default ExamNotice;

const Img = styled.img`
  width: 300px;
  right: 50px;
  margin-top: -50px;
  position: absolute;
`;

const Wrapper = styled.div`
  background: white;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  width: 900px;
  height: 280px;
  border-radius: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  padding-left: 4cqh;
  padding-bottom: 40px;
  box-sizing: border-box;
`;

const Top = styled.div`
  display: flex;
  font-size: 22px;
  font-weight: 700;
  align-items: center;
`;

const Time = styled.div<{ $timeColor: string }>`
  border-bottom: 4px solid ${({ $timeColor }) => $timeColor};
  margin-left: 5px;
  font-size: 26px;
`;

const Main = styled.div`
  font-size: 33px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
