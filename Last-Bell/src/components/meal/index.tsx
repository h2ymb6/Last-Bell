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
        <TodayDate>{new Date().toLocaleDateString()}</TodayDate>

        <Title>오늘의 급식 메뉴</Title>
        <Meals>
          <MealCon>
            <EachTitle>아침</EachTitle>
            <div>
              {breakfast.map((item, i) => {
                return <Each key={i}>{item}</Each>;
              })}
            </div>
            <div></div>
          </MealCon>

          <MealCon>
            <EachTitle>점심</EachTitle>
            <div>
              {lunch.map((item, i) => {
                return <Each key={i}>{item}</Each>;
              })}
            </div>
            <div></div>
          </MealCon>

          <MealCon>
            <EachTitle>저녁</EachTitle>
            <div>
              {dinner.map((item, i) => {
                return <Each key={i}>{item}</Each>;
              })}
            </div>
            <div></div>
          </MealCon>
        </Meals>
      </Wrapper>
    </>
  );
}

export default TodaySchoolMeal;

const TodayDate = styled.div`
  font-size: 20px;
`;

const Wrapper = styled.div`
  background-color: white;
  padding: 20px;
  border: 1px solid ${Colors.Blue300};
  box-shadow: 0px 0px 10px 2px ${Colors.Blue300};
  border-radius: 20px;
`;

const Meals = styled.div`
  display: flex;
`;

const EachTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
`;

const Each = styled.div`
  font-size: 20px;
  margin: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
`;

const MealCon = styled.div`
  margin: 20px;
  padding: 20px;
  box-sizing: border-box;
  background-color: ${Colors.Blue200};
  width: 250px;
  height: 300px;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
`;
