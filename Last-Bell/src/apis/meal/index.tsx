import axios from "axios";

export const getSchoolMeal = async (mealDate: string) => {
  const API_KEY = import.meta.env.SCHOOL_MEAL_KEY;
  const URL = "https://open.neis.go.kr/hub/mealServiceDietInfo";

  try {
    const response = await axios.get(URL, {
      params: {
        KEY: API_KEY,
        Type: "json",
        pIndex: 1,
        pSize: 10,
        ATPT_OFCDC_SC_CODE: "G10",
        SD_SCHUL_CODE: 7430310,
        MLSV_YMD: mealDate,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
