import { MainLayOut } from "../layouts/mainLayout";
import TodaySchoolMeal from "../components/meal";
import TodaySchoolTimetable from "../components/TimeTable";

const TimeTableAndMeal = () => {
  return (
    <MainLayOut title="시간표&급식">
      <div style={{ display: "flex", flex: "1", width: "100%" }}>
        <TodaySchoolMeal />
        <TodaySchoolTimetable />
      </div>
    </MainLayOut>
  );
};

export default TimeTableAndMeal;
