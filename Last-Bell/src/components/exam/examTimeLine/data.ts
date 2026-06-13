import { getSchoolClassSetting } from "../../../utils/schoolClassStorage";

export type ExamSchedule = {
  date: string;
  period: number;
  subject: string;
};

const GRADE1_SCHEDULE: ExamSchedule[] = [
  { date: "6월 29일 (월)", period: 1, subject: "공통영어1" },
  { date: "6월 29일 (월)", period: 2, subject: "공통수학1" },
  { date: "6월 29일 (월)", period: 3, subject: "프로그래밍" },
  { date: "6월 30일 (화)", period: 1, subject: "공통국어1" },
  { date: "6월 30일 (화)", period: 2, subject: "자기주도학습" },
  { date: "6월 30일 (화)", period: 3, subject: "통합과학1" },
  { date: "7월 1일 (수)", period: 1, subject: "컴퓨터구조" },
  { date: "7월 1일 (수)", period: 2, subject: "자기주도학습" },
  { date: "7월 1일 (수)", period: 3, subject: "통합사회1" },
];

const EXAM_DATA: Record<string, ExamSchedule[]> = {
  "1-1": GRADE1_SCHEDULE,
  "1-2": GRADE1_SCHEDULE,
  "1-3": GRADE1_SCHEDULE,
  "1-4": GRADE1_SCHEDULE,

  "2-1": [
    { date: "6월 29일 (월)", period: 1, subject: "영어 I" },
    { date: "6월 29일 (월)", period: 2, subject: "운영체제1" },
    { date: "6월 29일 (월)", period: 3, subject: "자기주도학습" },
    { date: "6월 30일 (화)", period: 1, subject: "대수" },
    { date: "6월 30일 (화)", period: 2, subject: "자기주도학습" },
    { date: "6월 30일 (화)", period: 3, subject: "데이터베이스프로그래밍" },
    { date: "7월 1일 (수)", period: 1, subject: "한국사1" },
    { date: "7월 1일 (수)", period: 2, subject: "자기주도학습" },
    { date: "7월 1일 (수)", period: 3, subject: "프론트엔드프로그래밍" },
  ],
  "2-2": [
    { date: "6월 29일 (월)", period: 1, subject: "영어 I" },
    { date: "6월 29일 (월)", period: 2, subject: "운영체제1" },
    { date: "6월 29일 (월)", period: 3, subject: "자기주도학습" },
    { date: "6월 30일 (화)", period: 1, subject: "대수" },
    { date: "6월 30일 (화)", period: 2, subject: "자기주도학습" },
    { date: "6월 30일 (화)", period: 3, subject: "데이터베이스프로그래밍" },
    { date: "7월 1일 (수)", period: 1, subject: "한국사1" },
    { date: "7월 1일 (수)", period: 2, subject: "자기주도학습" },
    { date: "7월 1일 (수)", period: 3, subject: "서버프로그래밍" },
  ],
  "2-3": [
    { date: "6월 29일 (월)", period: 1, subject: "영어 I" },
    { date: "6월 29일 (월)", period: 2, subject: "자기주도학습" },
    { date: "6월 29일 (월)", period: 3, subject: "임베디드 시스템" },
    { date: "6월 30일 (화)", period: 1, subject: "대수" },
    { date: "6월 30일 (화)", period: 2, subject: "자기주도학습" },
    { date: "6월 30일 (화)", period: 3, subject: "전기·전자 측정" },
    { date: "7월 1일 (수)", period: 1, subject: "한국사1" },
    { date: "7월 1일 (수)", period: 2, subject: "자기주도학습" },
    { date: "7월 1일 (수)", period: 3, subject: "자기주도학습" },
  ],
  "2-4": [
    { date: "6월 29일 (월)", period: 1, subject: "영어 I" },
    { date: "6월 29일 (월)", period: 2, subject: "운영체제1" },
    { date: "6월 29일 (월)", period: 3, subject: "인공지능론1" },
    { date: "6월 30일 (화)", period: 1, subject: "대수" },
    { date: "6월 30일 (화)", period: 2, subject: "자기주도학습" },
    { date: "6월 30일 (화)", period: 3, subject: "데이터베이스프로그래밍" },
    { date: "7월 1일 (수)", period: 1, subject: "한국사1" },
    { date: "7월 1일 (수)", period: 2, subject: "빅데이터 분석" },
    { date: "7월 1일 (수)", period: 3, subject: "인공지능 활용" },
  ],

  "3-1": [
    { date: "6월 29일 (월)", period: 1, subject: "수업" },
    { date: "6월 29일 (월)", period: 2, subject: "수업" },
    { date: "6월 29일 (월)", period: 3, subject: "수업" },
    { date: "6월 30일 (화)", period: 1, subject: "수업" },
    { date: "6월 30일 (화)", period: 2, subject: "수업" },
    { date: "6월 30일 (화)", period: 3, subject: "수업" },
    { date: "7월 1일 (수)", period: 1, subject: "알고리즘 실무" },
    { date: "7월 1일 (수)", period: 2, subject: "소프트웨어공학실무" },
    { date: "7월 1일 (수)", period: 3, subject: "자기주도학습" },
  ],
  "3-2": [
    { date: "6월 29일 (월)", period: 1, subject: "수업" },
    { date: "6월 29일 (월)", period: 2, subject: "수업" },
    { date: "6월 29일 (월)", period: 3, subject: "수업" },
    { date: "6월 30일 (화)", period: 1, subject: "수업" },
    { date: "6월 30일 (화)", period: 2, subject: "수업" },
    { date: "6월 30일 (화)", period: 3, subject: "수업" },
    { date: "7월 1일 (수)", period: 1, subject: "자기주도학습" },
    { date: "7월 1일 (수)", period: 2, subject: "자기주도학습" },
    { date: "7월 1일 (수)", period: 3, subject: "자기주도학습" },
  ],
  "3-3": [
    { date: "6월 29일 (월)", period: 1, subject: "수업" },
    { date: "6월 29일 (월)", period: 2, subject: "수업" },
    { date: "6월 29일 (월)", period: 3, subject: "수업" },
    { date: "6월 30일 (화)", period: 1, subject: "수업" },
    { date: "6월 30일 (화)", period: 2, subject: "수업" },
    { date: "6월 30일 (화)", period: 3, subject: "수업" },
    { date: "7월 1일 (수)", period: 1, subject: "자기주도학습" },
    { date: "7월 1일 (수)", period: 2, subject: "자기주도학습" },
    { date: "7월 1일 (수)", period: 3, subject: "자기주도학습" },
  ],
  "3-4": [
    { date: "6월 29일 (월)", period: 1, subject: "수업" },
    { date: "6월 29일 (월)", period: 2, subject: "수업" },
    { date: "6월 29일 (월)", period: 3, subject: "수업" },
    { date: "6월 30일 (화)", period: 1, subject: "수업" },
    { date: "6월 30일 (화)", period: 2, subject: "수업" },
    { date: "6월 30일 (화)", period: 3, subject: "수업" },
    { date: "7월 1일 (수)", period: 1, subject: "알고리즘 실무" },
    { date: "7월 1일 (수)", period: 2, subject: "소프트웨어공학실무" },
    { date: "7월 1일 (수)", period: 3, subject: "머신러닝 딥러닝" },
  ],
};

export const getExamSchedule = (): ExamSchedule[] => {
  const { grade, classNumber } = getSchoolClassSetting();
  const key = `${grade}-${classNumber}`;
  return EXAM_DATA[key] ?? [];
};
