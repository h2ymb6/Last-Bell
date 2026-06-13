import type { Club } from "./mokData";
import * as S from "../styles";

type Props = {
  club: Club;
  onClose: () => void;
};

const ClubModal = ({ club, onClose }: Props) => {
  return (
    <S.ModalOverlay onClick={onClose}>
      <S.ModalCard onClick={(e) => e.stopPropagation()}>
        <S.ModalCloseBtn onClick={onClose}>✕</S.ModalCloseBtn>
        <S.CardTitle>{club.name}</S.CardTitle>
        <S.CardDescription>분야: {club.description}</S.CardDescription>
        <S.CardDescription>{club.floor}층 {club.room}</S.CardDescription>
      </S.ModalCard>
    </S.ModalOverlay>
  );
};

export default ClubModal;
