import axios from "axios";
const key = import.meta.env.VITE_NEIS_KEY;

const API = axios.create({
  baseURL: "https://open.neis.go.kr/hub",
  headers: {
    "Content-Type": "application/json",
  },
});

const ScheduleApi = async (fromData, toData) => {
  try {
    const response = await API.get("/SchoolSchedule", {
      params: {
        KEY: key,
        Type: "json",
        pIndex: 1,
        pSize: 100,
        ATPT_OFCDC_SC_CODE: "G10",
        SD_SCHUL_CODE: 7430310,
        AA_FROM_YMD: fromData, // 조회 시작일
        AA_TO_YMD: toData, // 조회 종료일
      },
    });
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default ScheduleApi;
