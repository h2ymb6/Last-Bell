export type TaskAssessment = {
  id: string;
  subject: string;
  title: string;
  dueDate: string;
  grade: string;
  classNumber: string;
};

export type TaskStatusResult = {
  status: "urgent" | "ongoing" | "ready";
  formattedDate: string;
};

export const getTaskStatus = (dueDate: string): TaskStatusResult => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const due = new Date(dueDate);
  due.setHours(0, 0, 0, 0);
  const diff = Math.ceil(
    (due.getTime() - today.getTime()) / (1000 * 60 * 60 * 24),
  );

  const formattedDate = dueDate.includes("-")
    ? dueDate.split("-").slice(1).join("-")
    : dueDate;

  if (diff <= 3) return { status: "urgent", formattedDate };
  if (diff <= 7) return { status: "ongoing", formattedDate };
  return { status: "ready", formattedDate };
};

const KEY = "taskAssessments";

export const getTaskAssessments = (): TaskAssessment[] => {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
};

export const saveTaskAssessments = (data: TaskAssessment[]) => {
  localStorage.setItem(KEY, JSON.stringify(data));
};

export const addTaskAssessment = (item: Omit<TaskAssessment, "id">) => {
  const all = getTaskAssessments();
  const newItem = { ...item, id: crypto.randomUUID() };
  saveTaskAssessments([...all, newItem]);
};

export const updateTaskAssessment = (updated: TaskAssessment) => {
  const all = getTaskAssessments();
  saveTaskAssessments(all.map((i) => (i.id === updated.id ? updated : i)));
};

export const deleteTaskAssessment = (id: string) => {
  const all = getTaskAssessments();
  saveTaskAssessments(all.filter((i) => i.id !== id));
};
