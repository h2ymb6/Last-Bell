//클로드 코드
const TimeUntilExam = () => {
  const startDate = "2026-04-21";
  const endDate = "2026-04-22";

  const parseLocalDate = (dateStr: string): Date => {
    const [year, month, day] = dateStr.split("-").map(Number);
    return new Date(year, month - 1, day);
  };

  const toKSTMidnight = (): Date => {
    const now = new Date();
    const kstOffset = 9 * 60 * 60 * 1000;
    const kstNow = new Date(now.getTime() + kstOffset);

    const year = kstNow.getUTCFullYear();
    const month = kstNow.getUTCMonth();
    const day = kstNow.getUTCDate();

    return new Date(year, month, day);
  };

  const today = toKSTMidnight();
  const start = parseLocalDate(startDate);
  const end = parseLocalDate(endDate);

  const daysUntilExam = Math.ceil(
    (start.getTime() - today.getTime()) / (1000 * 60 * 60 * 24),
  );

  //시험 중
  if (today >= start && today <= end) {
    return <p>시험 화이팅!</p>;
  }

  //시험 전
  if (today < start) {
    return <p>D-{daysUntilExam}</p>;
  }

  //시험 끝
  if (today > end) {
    return <p>시험 끝!</p>;
  }
};

export default TimeUntilExam;
