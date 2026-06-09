import styled from "styled-components";
import { useEffect, useState } from "react";
import MealApi from "../../apis/meal/index";
import { Colors } from "../../styles/color";

function TodaySchoolMeal() {
  const [meal, setMeal] = useState([]);
  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10).replace(/-/g, "");

    const load = async () => {
      const res = await MealApi(today);

      const Meal = res.data.mealServiceDietInfo?.[1]?.row;
      setMeal(Meal || []);
    };

    load();
  }, []);

  const cleanMealData = (text) => {
    if (!text) return [];
    return text.split("<br/>").map((food) => food.split("(")[0].trim());
  };

  const breakfast = cleanMealData(meal[0]?.DDISH_NM);
  const lunch = cleanMealData(meal[1]?.DDISH_NM);
  const dinner = cleanMealData(meal[2]?.DDISH_NM);

  return (
    <>
      <Wrapper>
        <Title>오늘의 급식 메뉴</Title>
        <Meals>
          <MealCon>
            <EachTitle>아침</EachTitle>
            <Meal>
              {breakfast.map((item, i) => {
                return <Each key={i}>{item}</Each>;
              })}
            </Meal>
            <div></div>
          </MealCon>

          <MealCon>
            <EachTitle>점심</EachTitle>
            <Meal>
              {lunch.map((item, i) => {
                return <Each key={i}>{item}</Each>;
              })}
            </Meal>
            <div></div>
          </MealCon>

          <MealCon>
            <EachTitle>저녁</EachTitle>
            <Meal>
              {dinner.map((item, i) => {
                return <Each key={i}>{item}</Each>;
              })}
            </Meal>

            <div></div>
          </MealCon>
        </Meals>
      </Wrapper>
    </>
  );
}

export default TodaySchoolMeal;

const Wrapper = styled.div`
  background-color: white;
  padding: 30px;
  width: 700px;
  height: 340px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 15px;
`;

const Meals = styled.div`
  display: flex;
`;

const Meal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const EachTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 25px;
`;

const Each = styled.div`
  font-size: 18px;
`;

const Title = styled.h1`
  font-size: 21px;
  font-weight: 600;
`;

const MealCon = styled.div`
  margin: 10px;
  margin-top: 20px;
  padding: 20px;
  box-sizing: border-box;
  background-color: ${Colors.Blue100};
  width: 210px;
  height: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
`;
