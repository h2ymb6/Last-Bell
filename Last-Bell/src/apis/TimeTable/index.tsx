import axios from "axios";
const key = import.meta.env.VITE_NEIS_KEY;

const API = axios.create({
  baseURL: "https://open.neis.go.kr/hub",
  headers: {
    "Content-Type": "application/json",
  },
});

const TimetableApi = async (date) => {
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
        GRADE: "2", //우선 2학년 고정
        CLASS_NM: "1", //우선 1반 고정
      },
    });
    console.log("나이스 응답 전체 데이터:", response.data);
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default TimetableApi;
