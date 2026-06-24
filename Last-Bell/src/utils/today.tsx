export const KST_OFFSET = 9 * 60 * 60 * 1000;

export const getKSTDate = (offsetDays = 0): Date => {
  const now = new Date();

  const kstTime = now.getTime() + KST_OFFSET;

  const kstDate = new Date(kstTime);
  kstDate.setUTCHours(0, 0, 0, 0);
  kstDate.setUTCDate(kstDate.getUTCDate() + offsetDays);

  return kstDate;
};

export const getTodayKST = (): Date => getKSTDate(0);

export const formatAsYYYYMMDD = (date: Date): string => {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");

  return `${year}${month}${day}`;
};

export const getKSTYYYYMMDD = (offsetDays = 0): string =>
  formatAsYYYYMMDD(getKSTDate(offsetDays));

export const getTodayKSTYYYYMMDD = (): string => getKSTYYYYMMDD(0);
export const getOffsetKST = getKSTDate;
export const getOffsetKSTYYYYMMDD = getKSTYYYYMMDD;
