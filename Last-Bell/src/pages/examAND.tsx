import { MainLayOut } from "../layouts/mainLayout";
import ExamNotice from "../components/dashBoard/ExamNotice";
import ExamTimeLine from "../components/examAnd/examTimeLine/index";
import TaskAssessment from "../components/examAnd/TaskAssessment/taskAssessment";
import styled from "styled-components";

const ExamAnd = () => {
  return (
    <MainLayOut title="시험&수행평가">
      <div style={{ display: "flex", flex: "1", width: "100%" }}>
        <div style={{ marginLeft: "30px" }}>
          <ExamNotice />
        </div>
        <div style={{ display: "flex", marginLeft: "50px" }}>
          <ExamTimeLine />
        </div>
      </div>

      <TaskAssessment />
    </MainLayOut>
  );
};

export default ExamAnd;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 30px;
`;
