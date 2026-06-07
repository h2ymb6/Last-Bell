import type { CardProps } from "./types";
import * as S from "./styles";

const Floor = ({
  title,
  description,
}: CardProps) => {
  return (
    <S.CardContainer>
      <S.IconBox>icon</S.IconBox>
      <S.CardTitle>{title}</S.CardTitle>
      <S.CardDescription>{description}</S.CardDescription>
    </S.CardContainer>
  );
};

export default Floor;
