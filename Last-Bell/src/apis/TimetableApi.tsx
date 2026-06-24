import { getSchoolClassSetting } from "../utils/schoolClassStorage";
import { API } from "./index";
const key = import.meta.env.VITE_NEIS_KEY;

const TimetableApi = async (date: string) => {
  const { grade, classNumber } = getSchoolClassSetting();

  try {
    const response = await API.get("/hisTimetable", {
      params: {
        KEY: key,
        Type: "json",
        pIndex: 1,
        pSize: 10,
        ATPT_OFCDC_SC_CODE: "G10",
        SD_SCHUL_CODE: 7430310,
        ALL_TI_YMD: date,
        GRADE: grade,
        CLASS_NM: classNumber,
      },
    });

    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default TimetableApi;
