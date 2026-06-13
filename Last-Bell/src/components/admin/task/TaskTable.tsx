import {
  getTaskStatus,
  type TaskAssessment,
} from "../../../utils/AssessmentStorage";
import * as S from "./AdminTask.styles";

const STATUS_LABEL = {
  urgent: "🔴 긴급",
  ongoing: "🟠 진행 중",
  ready: "🟢 준비 중",
};

interface TaskTableProps {
  tasks: TaskAssessment[];
  onEdit: (task: TaskAssessment) => void;
  onDelete: (id: string) => void;
}

const TaskTable = ({ tasks, onEdit, onDelete }: TaskTableProps) => {
  return (
    <S.TableBox>
      <h2>전체 목록</h2>
      <S.Table>
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
          {tasks.length === 0 ? (
            <tr>
              <td colSpan={5} style={{ textAlign: "center", color: "#aaa" }}>
                등록된 수행평가가 없습니다.
              </td>
            </tr>
          ) : (
            tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.subject}</td>
                <td>{task.title}</td>
                <td>{task.dueDate}</td>
                <td>{STATUS_LABEL[getTaskStatus(task.dueDate).status]}</td>
                <td>
                  <S.EditBtn onClick={() => onEdit(task)}>수정</S.EditBtn>
                  <S.DeleteBtn onClick={() => onDelete(task.id)}>
                    삭제
                  </S.DeleteBtn>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </S.Table>
    </S.TableBox>
  );
};

export default TaskTable;
