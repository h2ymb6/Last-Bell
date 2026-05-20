import { MainLayOut } from "../layouts/mainLayout";
import ExamNotice from "../components/dashBoard/ExamNotice";
import ExamTimeLine from "../components/examAnd/ExamTimeline";

const ExamAnd = () => {
  return (
    <MainLayOut>
      <div style={{ marginLeft: "30px" }}>
        <ExamNotice />
        <ExamTimeLine />
      </div>
    </MainLayOut>
  );
};

export default ExamAnd;
