import DashBoard from "./pages/dashboard";
import ExamAnd from "./pages/ExamAnd";
import SchoolSchedule from "./pages/schoolSchedule";
import { FloorMap } from "./pages/FloorMap";
import TimeTableAndMeal from "./pages/TimeTableAndMeal";
import Setting from "./pages/setting";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodaySchoolMeal from "./components/meal/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoard />}></Route>
          <Route path="/ExamAnd" element={<ExamAnd />}></Route>
          <Route path="/SchoolSchedule" element={<SchoolSchedule />}></Route>
          <Route path="/FloorMap" element={<FloorMap />}></Route>
          <Route
            path="/TimeTableAndMeal"
            element={<TimeTableAndMeal />}
          ></Route>
          <Route path="/Setting" element={<Setting />}></Route>
          <Route path="/meal" element={<TodaySchoolMeal />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
