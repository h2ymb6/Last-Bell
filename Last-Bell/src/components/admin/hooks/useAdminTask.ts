import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  getTaskAssessments,
  addTaskAssessment,
  updateTaskAssessment,
  deleteTaskAssessment,
  type TaskAssessment,
} from "@utils/AssessmentStorage";

const FORM = { subject: "", title: "", dueDate: "" };

export const useAdminTask = () => {
  const { grade, classNumber } = useParams<{
    grade: string;
    classNumber: string;
  }>();

  const [tasks, setTasks] = useState<TaskAssessment[]>(getTaskAssessments());
  const [form, setForm] = useState(FORM);
  const [editId, setEditId] = useState<string | null>(null);

  const myTasks = tasks.filter(
    (t) => t.grade === grade && t.classNumber === classNumber,
  );

  const refresh = () => setTasks(getTaskAssessments());

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!form.subject || !form.title || !form.dueDate) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const selectedDate = new Date(form.dueDate);
    selectedDate.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      alert("마감일이 이미 지난 날짜입니다.");
      return;
    }

    if (editId) {
      updateTaskAssessment({
        ...form,
        id: editId,
        grade: grade!,
        classNumber: classNumber!,
      });
      setEditId('');
    } else {
      addTaskAssessment({ ...form, grade: grade!, classNumber: classNumber! });
    }

    setForm(FORM);
    refresh();
  };

  const handleEdit = (task: TaskAssessment) => {
    setEditId(task.id);
    setForm({
      subject: task.subject,
      title: task.title,
      dueDate: task.dueDate,
    });
  };

  const handleDelete = (id: string) => {
    if (!confirm("삭제하시겠습니까?")) return;

    deleteTaskAssessment(id);
    refresh();
  };

  const handleCancel = () => {
    setEditId('');
    setForm(FORM);
  };

  return {
    grade,
    classNumber,
    myTasks,
    form,
    editId,
    handleInputChange,
    handleSubmit,
    handleEdit,
    handleDelete,
    handleCancel,
  };
};
