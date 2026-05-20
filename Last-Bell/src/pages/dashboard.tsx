import { MainLayOut } from "../layouts/mainLayout";
import ExamNotice from "../components/dashBoard/ExamNotice";

const DashBoard = () => {
  return (
    <MainLayOut>
      <div style={{ marginLeft: "30px" }}>
        <ExamNotice />
      </div>
    </MainLayOut>
  );
};

export default DashBoard;
