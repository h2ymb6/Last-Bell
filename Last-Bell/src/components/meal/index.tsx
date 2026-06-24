import styled from "styled-components";
import { Colors } from "@/styles/color";
import useSchoolMeal from "./useSchoolMeal";

function TodaySchoolMeal() {
  const { favoriteMeals, toggleFavorite, breakfast, lunch, dinner } =
    useSchoolMeal();

  const renderMealList = (items: string[]) => {
    return items.map((item, i) => {
      const isFavorite = favoriteMeals.includes(item); //즐겨찾기

      return (
        <Each key={i}>
          <FoodName>{item}</FoodName>

          <StarButton
            type="button"
            onClick={() => toggleFavorite(item)}
            $active={isFavorite}
            aria-label={`${item} 즐겨찾기`}
          >
            ★
          </StarButton>
        </Each>
      );
    });
  };

  return (
    <Wrapper>
      <Title>오늘의 급식 메뉴</Title>

      <Meals>
        <MealCon>
          <EachTitle>아침</EachTitle>
          <Meal>{renderMealList(breakfast)}</Meal>
        </MealCon>

        <MealCon>
          <EachTitle>점심</EachTitle>
          <Meal>{renderMealList(lunch)}</Meal>
        </MealCon>

        <MealCon>
          <EachTitle>저녁</EachTitle>
          <Meal>{renderMealList(dinner)}</Meal>
        </MealCon>
      </Meals>
    </Wrapper>
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
`;

const Title = styled.h1`
  font-size: 21px;
  font-weight: 600;
`;

const Meals = styled.div`
  display: flex;
`;

const Meal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const EachTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 25px;
`;

const Each = styled.div`
  width: 100%;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

const FoodName = styled.span`
  flex: 1;
  text-align: center;
`;

const StarButton = styled.button<{ $active: boolean }>`
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 20px;
  line-height: 1;
  color: ${({ $active }) => ($active ? "#facc15" : "#cbd5e1")};
  padding: 0;

  &:hover {
    color: #facc15;
  }
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
