import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {
  getTaskAssessments,
  addTaskAssessment,
  updateTaskAssessment,
  deleteTaskAssessment,
  getTaskStatus,
  type TaskAssessment,
} from "../../utils/taskAssessmentStorage";

const STATUS_LABEL = {
  urgent: "🔴 긴급",
  ongoing: "🟠 진행 중",
  ready: "🟢 준비 중",
};

const EMPTY_FORM = { subject: "", title: "", dueDate: "" };

const AdminTask = () => {
  const { grade, classNumber } = useParams<{
    grade: string;
    classNumber: string;
  }>();
  const [tasks, setTasks] = useState<TaskAssessment[]>(getTaskAssessments());
  const [form, setForm] = useState(EMPTY_FORM);
  const [editId, setEditId] = useState<string | null>(null);

  const myTasks = tasks.filter(
    (t) => t.grade === grade && t.classNumber === classNumber,
  );

  const refresh = () => setTasks(getTaskAssessments());

  const handleSubmit = () => {
    if (!form.subject || !form.title || !form.dueDate) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    if (editId) {
      updateTaskAssessment({
        ...form,
        id: editId,
        grade: grade!,
        classNumber: classNumber!,
      });
      setEditId(null);
    } else {
      addTaskAssessment({ ...form, grade: grade!, classNumber: classNumber! });
    }

    setForm(EMPTY_FORM);
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

  return (
    <Wrapper>
      <Header>
        <h1>
          {grade}학년 {classNumber}반 수행평가 관리
        </h1>
      </Header>

      <FormBox>
        <h2>{editId ? "수정" : "추가"}</h2>

        <Row>
          <label>과목</label>
          <input
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            placeholder="예) 국어"
          />
        </Row>

        <Row>
          <label>수행평가명</label>
          <input
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="예) 수필 제출"
          />
        </Row>

        <Row>
          <label>마감일</label>
          <input
            type="date"
            value={form.dueDate}
            onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
          />
        </Row>

        <BtnRow>
          <SubmitBtn onClick={handleSubmit}>
            {editId ? "수정 완료" : "추가"}
          </SubmitBtn>
          {editId && (
            <CancelBtn
              onClick={() => {
                setEditId(null);
                setForm(EMPTY_FORM);
              }}
            >
              취소
            </CancelBtn>
          )}
        </BtnRow>
      </FormBox>

      <TableBox>
        <h2>전체 목록</h2>
        <Table>
          <thead>
            <tr>
              <th>과목</th>
              <th>수행평가명</th>
              <th>마감일</th>
              <th>상태</th>
              <th>관리</th>
            </tr>
          </thead>
          <tbody>
            {myTasks.length === 0 ? (
              <tr>
                <td colSpan={5} style={{ textAlign: "center", color: "#aaa" }}>
                  등록된 수행평가가 없습니다.
                </td>
              </tr>
            ) : (
              myTasks.map((task) => (
                <tr key={task.id}>
                  <td>{task.subject}</td>
                  <td>{task.title}</td>
                  <td>{task.dueDate}</td>
                  <td>{STATUS_LABEL[getTaskStatus(task.dueDate).status]}</td>
                  <td>
                    <EditBtn onClick={() => handleEdit(task)}>수정</EditBtn>
                    <DeleteBtn onClick={() => handleDelete(task.id)}>
                      삭제
                    </DeleteBtn>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </TableBox>
    </Wrapper>
  );
};

export default AdminTask;

const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 24px;
`;

const Header = styled.div`
  margin-bottom: 32px;
  h1 {
    font-size: 28px;
    font-weight: 700;
  }
`;

const FormBox = styled.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  label {
    width: 100px;
    font-weight: 600;
    font-size: 14px;
  }

  input,
  select {
    flex: 1;
    height: 36px;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 0 12px;
    font-size: 14px;
    outline: none;
    font-family: inherit;
  }
`;

const BtnRow = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

const SubmitBtn = styled.button`
  flex: 1;
  height: 40px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
`;

const CancelBtn = styled.button`
  flex: 1;
  height: 40px;
  background: #eef2f7;
  color: #555;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
`;

const TableBox = styled.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  th,
  td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #f0f0f0;
  }

  th {
    font-weight: 700;
    color: #555;
  }
`;

const EditBtn = styled.button`
  background: #e0f0ff;
  color: #3b82f6;
  border: none;
  border-radius: 6px;
  padding: 4px 10px;
  cursor: pointer;
  margin-right: 6px;
  font-size: 13px;
`;

const DeleteBtn = styled.button`
  background: #fee2e2;
  color: #ef4444;
  border: none;
  border-radius: 6px;
  padding: 4px 10px;
  cursor: pointer;
  font-size: 13px;
`;
