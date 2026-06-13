import { MainLayOut } from "../layouts/mainLayout";
import ExamNotice from "../components/dashBoard/ExamNotice";
import ExamTimeLine from "../components/exam/examTimeLine/index";
import TaskAssessment from "../components/exam/TaskAssessment/taskAssessment";
import styled from "styled-components";

const ExamAnd = () => {
  return (
    <MainLayOut title="시험&수행평가">
      <MainContainer>
        <LeftSection>
          <ExamNotice />
          <TaskAssessment />
        </LeftSection>

        <RightSection>
          <ExamTimeLine />
        </RightSection>
      </MainContainer>
    </MainLayOut>
  );
};

const MainContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 420px;
  gap: 32px;
  align-items: start;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const RightSection = styled.div`
  position: sticky;
  top: 24px;
`;

export default ExamAnd;
