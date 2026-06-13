import type { Teacher } from "./mokData";
import * as S from "../styles";

type Props = {
  teacher: Teacher;
  onClose: () => void;
};

const TeacherModal = ({ teacher, onClose }: Props) => {
  return (
    <S.ModalOverlay onClick={onClose}>
      <S.ModalCard onClick={(e) => e.stopPropagation()}>
        <S.ModalCloseBtn onClick={onClose}>✕</S.ModalCloseBtn>
        <S.CardTitle>{teacher.name} 선생님</S.CardTitle>
        <S.CardDescription>담당 과목: {teacher.subject}</S.CardDescription>
        <S.CardDescription>
          {teacher.floor}층 {teacher.office}
        </S.CardDescription>{" "}
      </S.ModalCard>
    </S.ModalOverlay>
  );
};

export default TeacherModal;
