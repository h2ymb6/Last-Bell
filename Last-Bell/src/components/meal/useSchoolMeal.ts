import { useEffect, useState } from "react";
import MealApi from "@/apis/MealApil";
import { getTodayKSTYYYYMMDD } from "@/utils/today";
import type { MealItem } from "./types";

export default function useSchoolMeal() {
  const [meal, setMeal] = useState<MealItem[]>([]);
  const [favoriteMeals, setFavoriteMeals] = useState<string[]>(() => {
    const saved = localStorage.getItem("favoriteMeals");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    const load = async () => {
      try {
        const today = getTodayKSTYYYYMMDD();
        const res = await MealApi(today);

        const mealData = res.data.mealServiceDietInfo?.[1]?.row || [];

        setMeal(mealData);
      } catch (error) {
        console.error("급식 조회 실패", error);
      }
    };

    load();
  }, []);

  useEffect(() => {
    localStorage.setItem("favoriteMeals", JSON.stringify(favoriteMeals));
  }, [favoriteMeals]);

  const toggleFavorite = (food: string) => {
    setFavoriteMeals((prev) =>
      prev.includes(food)
        ? prev.filter((item) => item !== food)
        : [...prev, food],
    );
  };

  const cleanMealData = (text?: string) => {
    if (!text) return [];

    return text
      .split("<br/>")
      .map((food) => food.split("(")[0].trim())
      .filter(Boolean);
  };

  const breakfast = cleanMealData(meal[0]?.DDISH_NM);
  const lunch = cleanMealData(meal[1]?.DDISH_NM);
  const dinner = cleanMealData(meal[2]?.DDISH_NM);

  return {
    favoriteMeals,
    toggleFavorite,
    breakfast,
    lunch,
    dinner,
  };
}
