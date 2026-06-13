import {
  TaskForm,
  TaskTable,
  useAdminTask,
} from "../../components/admin/index";
import * as S from "../../components/admin/task/AdminTask.styles";

const AdminTask = () => {
  const {
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
  } = useAdminTask();

  return (
    <S.Wrapper>
      <S.Header>
        <h1>
          {grade}학년 {classNumber}반 수행평가 관리
        </h1>
      </S.Header>

      <TaskForm
        editId={editId}
        form={form}
        onChange={handleInputChange}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />

      <TaskTable tasks={myTasks} onEdit={handleEdit} onDelete={handleDelete} />
    </S.Wrapper>
  );
};

export default AdminTask;
