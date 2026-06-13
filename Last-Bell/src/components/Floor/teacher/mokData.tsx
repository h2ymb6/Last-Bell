export type Teacher = {
  name: string;
  subject: string;
  floor: number;
  office: string;
};

export const TEACHERS: Teacher[] = [
  { name: "김철수", subject: "수학", floor: 2, office: "수학교무실" },
  { name: "이영희", subject: "영어", floor: 3, office: "영어교무실" },
  { name: "박민준", subject: "국어", floor: 2, office: "국어교무실" },
  { name: "최지원", subject: "과학", floor: 4, office: "과학교무실" },
  { name: "정수현", subject: "역사", floor: 3, office: "사회교무실" },
  { name: "한소희", subject: "체육", floor: 1, office: "체육교무실" },
  { name: "오세진", subject: "음악", floor: 2, office: "예체능교무실" },
  { name: "강태양", subject: "미술", floor: 2, office: "예체능교무실" },
];
