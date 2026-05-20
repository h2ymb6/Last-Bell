import { Colors } from "../../styles/color";
import TimeUntilExam from "../../utils/timeUntilExamCal";
import styled from "styled-components";

const ExamNotice = () => {
  return (
    <Wrapper>
      <Top>
        시험까지 남은 시간: <Time>{TimeUntilExam()}</Time>
      </Top>
      <Main>
        끝까지 포기하지마! <br /> 오늘도 힘내자!
      </Main>
    </Wrapper>
  );
};

export default ExamNotice;

const Wrapper = styled.div`
  background: linear-gradient(
    to right,
    ${Colors.Blue300} 40%,
    ${Colors.Yellow200} 100%
  );
  box-shadow: 0px 0px 10px 2px ${Colors.Blue300};
  width: 800px;
  height: 230px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  padding-left: 20px;
  box-sizing: border-box;
`;

const Top = styled.div`
  display: flex;
  font-size: 22px;
  font-weight: 700;
  align-items: center;
`;

const Time = styled.div`
  background-color: ${Colors.Yellow200};
  padding: 5px;
  border-radius: 10px;
`;

const Main = styled.div`
  font-size: 40px;
  font-weight: 800;
`;
