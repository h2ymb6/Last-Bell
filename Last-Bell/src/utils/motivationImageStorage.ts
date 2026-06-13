const MOTIVATION_IMAGE_KEY = "motivationImage";

export const saveMotivationImage = (dataUrl: string) => {
  localStorage.setItem(MOTIVATION_IMAGE_KEY, dataUrl);
};

export const getMotivationImage = (): string | null => {
  return localStorage.getItem(MOTIVATION_IMAGE_KEY);
};

export const removeMotivationImage = () => {
  localStorage.removeItem(MOTIVATION_IMAGE_KEY);
};