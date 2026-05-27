import { MainLayOut } from "../layouts/mainLayout";
import ExamNotice from "../components/dashBoard/ExamNotice";
import ExamTimeLine from "../components/examAnd/examTimeLine/index";
import TaskAssessment from "../components/examAnd/TaskAssessment/taskAssessment";

const FloorMap = () => {
  return (
    <MainLayOut title="층별 지도">
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

export default FloorMap;
