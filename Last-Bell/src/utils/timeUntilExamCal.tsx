export type ExamTheme = "normal" | "warning" | "danger" | "exam" | "done";

const TimeUntilExam = () => {
  const startDate = "2026-06-29";
  const endDate = "2026-07-01";

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

  if (today >= start && today <= end) {
    return {
      label: "시험 화이팅!",
      theme: "exam" as const,
    };
  }

  if (today > end) {
    return {
      label: "시험 끝!",
      theme: "done" as const,
    };
  }

  if (daysUntilExam <= 3) {
    return {
      label: `D-${daysUntilExam}`,
      theme: "danger" as const,
    };
  }

  if (daysUntilExam <= 7) {
    return {
      label: `D-${daysUntilExam}`,
      theme: "warning" as const,
    };
  }

  return {
    label: `D-${daysUntilExam}`,
    theme: "normal" as const,
  };
};

export default TimeUntilExam;
