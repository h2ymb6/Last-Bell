import * as S from "./AdminTask.styles";

interface TaskFormProps {
  editId: string | null;
  form: { subject: string; title: string; dueDate: string };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  onCancel: () => void;
}

const TaskForm = ({
  editId,
  form,
  onChange,
  onSubmit,
  onCancel,
}: TaskFormProps) => {
  return (
    <S.FormBox>
      <h2>{editId ? "수정" : "추가"}</h2>

      <S.InputGroup>
        <label>과목</label>
        <input
          name="subject"
          value={form.subject}
          onChange={onChange}
          placeholder="예: 수학"
        />
      </S.InputGroup>

      <S.InputGroup>
        <label>수행평가명</label>
        <input
          name="title"
          value={form.title}
          onChange={onChange}
          placeholder="예: 미적분 포트폴리오"
        />
      </S.InputGroup>

      <S.InputGroup>
        <label>마감일</label>
        <input
          type="date"
          name="dueDate"
          value={form.dueDate}
          onChange={onChange}
        />
      </S.InputGroup>

      <S.BtnRow>
        <S.SubmitBtn onClick={onSubmit}>
          {editId ? "수정 완료" : "추가"}
        </S.SubmitBtn>
        {editId && <S.CancelBtn onClick={onCancel}>취소</S.CancelBtn>}
      </S.BtnRow>
    </S.FormBox>
  );
};

export default TaskForm;
