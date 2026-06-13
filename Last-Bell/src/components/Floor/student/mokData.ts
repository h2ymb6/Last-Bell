export type Club = {
  name: string;
  floor: number;
  room: string;
  description: string;
};

export const CLUBS: Club[] = [
  {
    name: "소프트웨어개발부",
    floor: 3,
    room: "301호",
    description: "앱/웹 개발",
  },
  {
    name: "로보틱스부",
    floor: 4,
    room: "402호",
    description: "로봇 제작 및 대회",
  },
  {
    name: "영상편집부",
    floor: 2,
    room: "202호",
    description: "영상 촬영 및 편집",
  },
  { name: "음악부", floor: 1, room: "102호", description: "밴드 및 합창" },
  { name: "미술부", floor: 2, room: "205호", description: "회화 및 디자인" },
  {
    name: "독서토론부",
    floor: 3,
    room: "305호",
    description: "독서 및 토론 활동",
  },
  {
    name: "체육부",
    floor: 1,
    room: "체육관",
    description: "구기 종목 및 체력단련",
  },
  {
    name: "과학탐구부",
    floor: 4,
    room: "401호",
    description: "과학 실험 및 탐구",
  },
];
