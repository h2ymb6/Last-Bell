import { API } from "./index";
const key = import.meta.env.VITE_NEIS_KEY;

const MealApi = async (date: string) => {
  try {
    const response = await API.get("/mealServiceDietInfo", {
      params: {
        KEY: key,
        Type: "json",
        pIndex: 1,
        pSize: 5,
        ATPT_OFCDC_SC_CODE: "G10",
        SD_SCHUL_CODE: 7430310,
        MLSV_YMD: date,
      },
    });
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default MealApi;
