import { MainLayOut } from "../layouts/mainLayout";
import ExamNotice from "../components/dashBoard/ExamNotice";
import ExamTimeLine from "../components/exam/examTimeLine/index";
import TaskAssessment from "../components/exam/TaskAssessment/taskAssessment";
import styled from "styled-components";

const ExamAnd = () => {
  return (
    <MainLayOut title="시험&수행평가">
      <MainContainer>
        <TopSection>
          <ExamNotice />
          <ExamTimeLine />
        </TopSection>

        <TaskAssessment />
      </MainContainer>
    </MainLayOut>
  );
};

export default ExamAnd;

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const TopSection = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 420px;
  gap: 32px;
  width: 100%;
  align-items: stretch;
`;
