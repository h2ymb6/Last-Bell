import { useState } from "react";
import * as S from "./styles";

const SearchSection = () => {
  const [keyword, setKeyword] = useState<string>("");

  return (
    <S.SearchSectionCard>
      <S.Title>선생님 교무실 위치 찾기</S.Title>

      <S.SearchBarWrap>
        <i className="fa-solid fa-magnifying-glass search-icon" />
        <S.SearchInput
          type="text"
          placeholder="선생님 이름 입력..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </S.SearchBarWrap>

      <S.SearchPlaceholder>
        <i
          className="fa-solid fa-magnifying-glass"
          style={{ fontSize: "48px" }}
        />
      </S.SearchPlaceholder>
    </S.SearchSectionCard>
  );
};

export default SearchSection;
