export type SchoolClassSetting = {
  grade: string;
  classNumber: string;
};

const SCHOOL_CLASS_STORAGE_KEY = "schoolClassSetting";

export const DEFAULT_SCHOOL_CLASS: SchoolClassSetting = {
  grade: "2",
  classNumber: "1",
};

export const getSchoolClassSetting = (): SchoolClassSetting => {
  const savedSetting = localStorage.getItem(SCHOOL_CLASS_STORAGE_KEY);

  if (!savedSetting) {
    return DEFAULT_SCHOOL_CLASS;
  }

  try {
    const parsedSetting = JSON.parse(savedSetting) as Partial<SchoolClassSetting>;

    return {
      grade: parsedSetting.grade || DEFAULT_SCHOOL_CLASS.grade,
      classNumber: parsedSetting.classNumber || DEFAULT_SCHOOL_CLASS.classNumber,
    };
  } catch {
    return DEFAULT_SCHOOL_CLASS;
  }
};

export const saveSchoolClassSetting = (setting: SchoolClassSetting) => {
  localStorage.setItem(SCHOOL_CLASS_STORAGE_KEY, JSON.stringify(setting));
};
