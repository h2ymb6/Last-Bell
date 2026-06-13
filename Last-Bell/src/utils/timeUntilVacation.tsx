export type VacationTheme =
  | "normal"
  | "warning"
  | "danger"
  | "vacation"
  | "done";

const TimeUntilVacation = () => {
  const startDate = "2026-07-16"; // 방학 시작일 
  const endDate = "2026-08-18"; // 방학 종료일 

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

  const daysUntilVacation = Math.ceil(
    (start.getTime() - today.getTime()) / (1000 * 60 * 60 * 24),
  );

  if (today >= start && today <= end) {
    return { label: "방학 중!", theme: "vacation" as const };
  }

  if (today > end) {
    return { label: "개학!", theme: "done" as const };
  }

  if (daysUntilVacation <= 3) {
    return { label: `D-${daysUntilVacation}`, theme: "danger" as const };
  }

  if (daysUntilVacation <= 7) {
    return { label: `D-${daysUntilVacation}`, theme: "warning" as const };
  }

  return { label: `D-${daysUntilVacation}`, theme: "normal" as const };
};

export default TimeUntilVacation;
