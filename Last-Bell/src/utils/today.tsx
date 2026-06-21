export const KST_OFFSET = 9 * 60 * 60 * 1000;

export const getKSTDate = (offsetDays = 1): Date => {
  const now = new Date();
  const kstNow = new Date(now.getTime() + KST_OFFSET);
  const today = new Date(
    kstNow.getUTCFullYear(),
    kstNow.getUTCMonth(),
    kstNow.getUTCDate(),
  );

  today.setDate(today.getDate() + offsetDays);

  return today;
};

export const getTodayKST = (): Date => getKSTDate();

export const formatAsYYYYMMDD = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}${month}${day}`;
};

export const getKSTYYYYMMDD = (offsetDays = 1): string =>
  formatAsYYYYMMDD(getKSTDate(offsetDays));

export const getTodayKSTYYYYMMDD = (): string => getKSTYYYYMMDD();

export const getOffsetKST = getKSTDate;
export const getOffsetKSTYYYYMMDD = getKSTYYYYMMDD;
